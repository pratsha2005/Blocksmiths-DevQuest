import React from 'react';

const NotificationTile = ({ doctor, onAccept, onReject }) => {
  return (
    <div className="max-w-sm w-full bg-white shadow-md rounded-lg p-4 mb-4">
      <div className="flex justify-between items-start">
        <div className="text-lg font-semibold text-gray-800">{`Request from ${doctor}`}</div>
        <div className="text-sm text-gray-500">Notification</div>
      </div>
      <div className="mt-4 flex justify-end gap-4">
        <button
          onClick={onAccept}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none"
        >
          Accept
        </button>
        <button
          onClick={onReject}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none"
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default NotificationTile;
