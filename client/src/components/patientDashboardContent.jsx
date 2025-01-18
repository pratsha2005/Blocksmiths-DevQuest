// DashboardContent component
import Doctors from "./doctors";
import PageHeading from "./pageHeading";
import Notifications from './notifications'
const PatientDashboardContent = ({ selectedOption }) => {
  let heading;
  if(selectedOption == 'profile'){
    heading == "Profile";
  }
  if (selectedOption === 'doctors') {
    heading = "Doctors";
  } else if (selectedOption === 'notifications') {
    heading = "Notifications";
  }
  return (
    <div className="p-6">
      <PageHeading heading={heading} />
      <div className="mt-4">
        {selectedOption === 'doctors' && <Doctors />}
        {selectedOption === 'notifications' && <Notifications />}
      </div>
    </div>
  );
};

export default PatientDashboardContent;
