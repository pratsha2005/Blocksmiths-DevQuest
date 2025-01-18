// DashboardContent component
import PageHeading from "./pageHeading";
import Patients from "./patients";
import RequestAccess from './RequestAccess'
const DashboardContent = ({ selectedOption }) => {
  let heading;
  if (selectedOption === 'patients') {
    heading = "Patients";
  } else if (selectedOption === 'requestAccess') {
    heading = "Request Access";
  }
  return (
    <div className="p-6">
      <PageHeading heading={heading} />
      <div className="mt-4">
        {selectedOption === 'patients' && <Patients />}
        {selectedOption === 'requestAccess' && <RequestAccess />}
      </div>
    </div>
  );
};

export default DashboardContent;
