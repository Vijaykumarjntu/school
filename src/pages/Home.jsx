import React from 'react';
import Carousel from '../components/Carousel';

const Home = () => {
  return (
    <div>
      <header className="bg-blue-500 text-white p-4 text-center">
        <h1 className="text-4xl">Welcome to Springdale Public School</h1>
        <p className="text-xl mt-2">Where we nurture young minds for a brighter future.</p>
      </header>
      <main className="p-4">
        <Carousel />
        <section className="quick-links mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-4 border text-center">About Us</div>
          <div className="bg-white p-4 border text-center">Academics</div>
          <div className="bg-white p-4 border text-center">Admissions</div>
          <div className="bg-white p-4 border text-center">Contact Us</div>
        </section>
      </main>
    </div>
  );
};

export default Home;
