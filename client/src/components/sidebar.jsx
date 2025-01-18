// Sidebar component
const Sidebar = ({ onSelect }) => {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white flex flex-col">
      <div className="p-4 text-2xl font-bold border-b border-gray-700">
        Dashboard
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-4">
          <li
            className="hover:bg-gray-700 p-2 rounded cursor-pointer"
            onClick={() => onSelect('patients')}
          >
            Patients
          </li>
          <li
            className="hover:bg-gray-700 p-2 rounded cursor-pointer"
            onClick={() => onSelect('requestAccess')}
          >
            Request Access
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;