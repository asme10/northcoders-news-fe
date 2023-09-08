import React from "react";
import User from "./User"; 

const UsersList = ({ users }) => {
  return (
    <div className="users-list">
      <h2>List of Users</h2>
      {users.map((user, index) => (
        <User key={index} username={user.username} />
      ))}
    </div>
  );
};

export default UsersList;
    