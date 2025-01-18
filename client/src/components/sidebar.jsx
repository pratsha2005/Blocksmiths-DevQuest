import React from 'react';

const Sidebar = ({ onOptionSelect }) => {
  const options = [
    { name: 'Profile', id: 'profile' },
    { name: 'Patients', id: 'patients' },
    { name: 'Request Access', id: 'request-access' },
  ];

  return (
    <div className="h-screen w-64 bg-gray-800 text-white flex flex-col">
      <div className="p-4 text-2xl font-bold border-b border-gray-700">
        Dashboard
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-4">
          {options.map((option) => (
            <li
              key={option.id}
              className="hover:bg-gray-700 p-2 rounded cursor-pointer"
              onClick={() => onOptionSelect(option.id)} // Call the callback with the selected option's ID
            >
              {option.name}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
