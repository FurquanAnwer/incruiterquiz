import React from 'react';
import { useNavigate } from 'react-router';

function Error() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4">
      <h1 className="text-4xl font-bold text-red-600">Access Denied</h1>
      <p className="text-lg text-gray-700 mt-2">You are not authenticated.</p>
      <p className="text-md text-gray-600 mt-1">Please log in to continue.</p>
      <button
        className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
        onClick={() => navigate('/login')}
      >
        Click Here to Login
      </button>
    </div>
  );
}

export default Error;
