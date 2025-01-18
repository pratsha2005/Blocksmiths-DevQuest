// DashboardContent component
import PageHeading from "./pageHeading";
import Patients from "./patients";
import RequestAccess from './RequestAccess'
const DashboardContent = ({ selectedOption }) => {
  return (
    <div className="p-6">
      <PageHeading />
      <div className="mt-4">
        {selectedOption === 'patients' && <Patients />}
        {selectedOption === 'requestAccess' && <RequestAccess />}
      </div>
    </div>
  );
};

export default DashboardContent;
