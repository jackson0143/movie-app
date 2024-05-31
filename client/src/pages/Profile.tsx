import React from 'react';
import { useAuthContext } from "../hooks/useAuthContext";

function Profile() {
  const { user } = useAuthContext();
  return (
    <div>
      {user && (
        <div className="flex flex-col max-w-5xl p-12 bg-white border border-gray-200 rounded-lg shadow-lg m-5 space-y-4">
          <div>First Name: {user.firstname}</div>
          <div>Last Name: {user.lastname}</div>
          <div>Email: {user.email}</div>
        </div>
      )}
    </div>
  );
}

export default Profile;
