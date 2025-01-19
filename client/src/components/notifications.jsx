import React, { useState, useEffect } from 'react';
import NotificationTile from './notificationTile'; // Assuming NotificationTile is a reusable component
import { supabase } from '../supabaseClient'; // Ensure you have configured Supabase client correctly

function Notifications() {
  const [notifications, setNotifications] = useState([]); // State to hold fetched notifications with doctor names

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const storedId = localStorage.getItem('id'); // Retrieve the stored patient ID from localStorage
        console.log('Stored ID:', storedId);

        if (!storedId) {
          console.error('No stored ID found in localStorage');
          return;
        }

        // Fetch notifications for the patient
        const { data: notificationsData, error: notificationsError } = await supabase
          .from('notifications')
          .select('*') // Fetch all columns or replace with specific ones if needed
          .eq('patientId', storedId);

        if (notificationsError) {
          throw notificationsError;
        }

        // Fetch doctor details for each notification
        const notificationsWithDoctorNames = await Promise.all(
          notificationsData.map(async (notification) => {
            const { data: doctorData, error: doctorError } = await supabase
              .from('doctors')
              .select('firstName, lastName')
              .eq('id', notification.doctorId)
              .single(); // Ensure fetching only one doctor record

            if (doctorError) {
              console.error(`Error fetching doctor for ID ${notification.doctorId}:`, doctorError);
              return { ...notification, doctorName: 'Unknown Doctor' }; // Add fallback if doctor not found
            }

            return {
              ...notification,
              doctorName: `${doctorData.firstName} ${doctorData.lastName}`,
            };
          })
        );

        console.log('Notifications with Doctor Names:', notificationsWithDoctorNames);

        setNotifications(notificationsWithDoctorNames || []); // Handle cases where data might be null
      } catch (error) {
        console.error('Error fetching notifications:', error.message);
      }
    };

    fetchNotifications();
  }, []); // Empty dependency array ensures this runs only once on component mount

  const handleAccept = async (notification) => {
    try {
      // Insert request details into the "requestAccess" table
      const { error: insertError } = await supabase
        .from('requestAccess')
        .insert({
          doctorId: notification.doctorId,
          patientId: notification.patientId,
          granted: true,
        });

      if (insertError) {
        console.error('Error inserting into requestAccess table:', insertError);
        alert('Failed to accept the request.');
        return;
      }

      // Remove notification after acceptance
      const { error: deleteError } = await supabase
        .from('notifications')
        .delete()
        .eq('id', notification.id);

      if (deleteError) {
        console.error('Error deleting notification:', deleteError);
        alert('Request accepted but failed to remove notification.');
        return;
      }

      alert('Request Accepted.');
      setNotifications((prev) =>
        prev.filter((notif) => notif.id !== notification.id)
      );
    } catch (error) {
      console.error('Error handling acceptance:', error);
      alert('An unexpected error occurred.');
    }
  };

  const handleReject = async (notification) => {
    try {
      // Remove notification after rejection
      const { error } = await supabase
        .from('notifications')
        .delete()
        .eq('id', notification.id);

      if (error) {
        console.error('Error deleting notification:', error);
        alert('Failed to remove notification after rejection.');
        return;
      }

      alert('Request Rejected.');
      setNotifications((prev) =>
        prev.filter((notif) => notif.id !== notification.id)
      );
    } catch (error) {
      console.error('Error handling rejection:', error);
      alert('An unexpected error occurred.');
    }
  };

  return (
    <div className="notifications-container">
      {notifications.length > 0 ? (
        notifications.map((notification) => (
          <NotificationTile
            key={notification.id}
            doctor={notification.doctorName}
            onAccept={() => handleAccept(notification)}
            onReject={() => handleReject(notification)}
          />
        ))
      ) : (
        <p>No notifications found</p>
      )}
    </div>
  );
}

export default Notifications;
