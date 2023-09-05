import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <div className="row">
          <div className="col">
            <p>&copy; {new Date().getFullYear()} Northcoders News Blog</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
