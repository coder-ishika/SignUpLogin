import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const Home = () => {
  const initialUsers = [
    { id: 1, name: 'ishika', email: 'curtis.weaver@example.com', roles: ['Design', 'Product', 'Marketing'], workspace: 'Workspace_01' },
    { id: 2, name: 'avinash', email: 'john.doe@example.com', roles: ['Design','Product','Marketing'], workspace: 'Workspace_02' },
    { id: 3, name: 'abhishek', email: 'jane.smith@example.com', roles: ['Design', 'Finance', 'Marketing'], workspace: 'Workspace_03' },
    { id: 4, name: 'priya', email: 'curtis.weaver@example.com', roles: ['Design', 'Product', 'Marketing'], workspace: 'Workspace_01' },
    { id: 5, name: 'mithi', email: 'curtis.weaver@example.com', roles: ['Design', 'Product', 'Marketing'], workspace: 'Workspace_01' },
    { id: 6, name: 'ishu', email: 'curtis.weaver@example.com', roles: ['Design', 'Product', 'Marketing'], workspace: 'Workspace_01' },
    { id: 7, name: 'ishi', email: 'curtis.weaver@example.com', roles: ['Design', 'Product', 'Marketing'], workspace: 'Workspace_01' },
  ];

  const [users, setUsers] = useState(initialUsers);

  const handleDelete = (userId) => {
    const updatedUsers = users.filter(user => user.id !== userId);
    setUsers(updatedUsers);
  };

  const handleEdit = (userId) => {
    alert(`Edit user with ID: ${userId}`);
  
  };

  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-white shadow-md">
        <div className="p-6">
          <div className="text-2xl font-bold text-gray-800">finkraft.</div>
        </div>
        <nav className="mt-6">
          <ul>
            <li className="px-6 py-2">
              <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                <span className="ml-2">Home</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      
      <div className="flex-1 p-6">
        <div className="overflow-x-auto bg-white rounded-lg shadow-md">
          <div className="p-4">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 border-b">
                    <input type="checkbox" className="form-checkbox" />
                  </th>
                  <th className="py-3 px-4 border-b text-left text-gray-700 font-medium">Name</th>
                  <th className="py-3 px-4 border-b text-left text-gray-700 font-medium">Email Id</th>
                  <th className="py-3 px-4 border-b text-left text-gray-700 font-medium">Roles</th>
                  <th className="py-3 px-4 border-b text-left text-gray-700 font-medium">Workspace</th>
                  <th className="py-3 px-4 border-b text-left text-gray-700 font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id}>
                    <td className="py-3 px-4 border-b">
                      <input type="checkbox" className="form-checkbox" />
                    </td>
                    <td className="py-3 px-4 border-b text-left text-gray-700">{user.name}</td>
                    <td className="py-3 px-4 border-b text-left text-gray-700">{user.email}</td>
                    <td className="py-3 px-4 border-b text-left">
                      {user.roles.map((role, index) => (
                        <span key={index} className={`bg-${index % 2 === 0 ? 'blue' : 'green'}-100 text-${index % 2 === 0 ? 'blue' : 'green'}-800 px-2 py-1 rounded-full text-sm mr-1`}>{role}</span>
                      ))}
                    </td>
                    <td className="py-3 px-4 border-b text-left text-gray-700">{user.workspace}</td>
                    <td className="py-3 px-4 border-b text-left">
                      <div className='flex space-x-3'>
                        <button
                          onClick={() => handleEdit(user.id)}
                          className="custom-edit-btn border text-green-800 pr-2 pl-2 rounded-md border-green-800 text-left flex items-center"
                        >
                          <FaEdit className="inline-block mr-1" /> Edit
                        </button>
                        <button
                          onClick={() => handleDelete(user.id)}
                          className="custom-delete-btn border bg-green-800 text-white pr-2 pl-2 rounded-md border-green-800 text-left flex items-center"
                        >
                          <FaTrash className="inline-block mr-1" /> Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
