import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="p-4">
      <header className="bg-blue-500 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <img src="path/to/logo.png" alt="School Logo" className="h-16" />
          <nav>
            <Link to="/" className="mr-4">Home</Link>
            <Link to="/about" className="mr-4">About Us</Link>
            <Link to="/academics" className="mr-4">Academics</Link>
            <Link to="/admissions" className="mr-4">Admissions</Link>
            <Link to="/faculty" className="mr-4">Faculty</Link>
            <Link to="/students" className="mr-4">Students</Link>
            <Link to="/gallery" className="mr-4">Gallery</Link>
            <Link to="/contact" className="mr-4">Contact Us</Link>
          </nav>
        </div>
      </header>
      <main>
        <section className="carousel bg-gray-200 p-4">
          {/* Carousel or Banner here */}
        </section>
        <section className="quick-links p-4">
          <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/about" className="bg-white p-4 text-center border">About Us</Link>
            <Link to="/academics" className="bg-white p-4 text-center border">Academics</Link>
            <Link to="/admissions" className="bg-white p-4 text-center border">Admissions</Link>
            <Link to="/contact" className="bg-white p-4 text-center border">Contact Us</Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
