import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../assets/logo.jpeg';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src="/assets/logo.jpeg" alt="School Logo" height={"45px"} className="h-16" />
        </Link>
        <div className="space-x-4">
          <Link to="/" className="text-white">Home</Link>
          <Link to="/about" className="text-white">About Us</Link>
          <Link to="/academics" className="text-white">Academics</Link>
          <Link to="/admissions" className="text-white">Admissions</Link>
          <Link to="/faculty" className="text-white">Faculty</Link>
          <Link to="/students" className="text-white">Students</Link>
          <Link to="/gallery" className="text-white">Gallery</Link>
          <Link to="/contact" className="text-white">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
