import React from "react";

const Header = () => {
  return (
    <div>
      <header className="custom-header">
        <div className="container">
          <div className="text-center py-5">
            <h1 className="fw-bolder header-title">
              Welcome to Northcoders News!
            </h1>
            <p className="lead header-subtitle">
              Discover the latest news and updates.
            </p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
