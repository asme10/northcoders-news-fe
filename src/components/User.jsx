import React from "react";

const User = ({ username }) => {
  return (
    <div className="user-card">
      <h3>Username: {username}</h3>
    </div>
  );
};

export default User;
