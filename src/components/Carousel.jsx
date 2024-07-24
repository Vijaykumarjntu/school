import React from 'react';

const Carousel = () => {
  return (
    <div className="carousel w-full">
      <div className="carousel-item">
        <img src="assets/sports_day.jpeg" alt="Annual Sports Day" className="w-full h-64 object-cover" />
        <p className="text-center">Annual Sports Day - Celebrating Excellence in Sports</p>
      </div>
      <div className="carousel-item">
        <img src="/assets/science_exhibition.jpeg" alt="Science Exhibition" className="w-full h-64 object-cover" />
        <p className="text-center">Science Exhibition - Showcasing Student Innovations</p>
      </div>
      <div className="carousel-item">
        <img src="/assets/cultural_fest.jpeg" alt="Cultural Fest" className="w-full h-64 object-cover" />
        <p className="text-center">Cultural Fest - Embracing Diversity and Creativity</p>
      </div>
    </div>
  );
};

export default Carousel;
