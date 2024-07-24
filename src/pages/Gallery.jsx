import React from 'react';
// import sportsDay from '../assets/sports_day.jpeg';
// import scienceExhibition from '../assets/science_exhibition.jpeg';
// import culturalFest from '../assets/cultural_fest.jpeg';
// import classroom from '../assets/classroom.jpeg';
// import library from '../assets/library.jpeg';

const Gallery = () => {
  return (
    <div className="p-4">
      <header className="bg-blue-500 text-white p-4 text-center">
        <h1 className="text-3xl">Gallery</h1>
      </header>
      <main className="p-4">
        <section>
          <h2 className="text-2xl">Photo Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <img src="/assets/sports_day.jpeg" alt="Sports Day" className="w-full h-64 object-cover" />
              <p className="text-center">Students participating in various sports events.</p>
            </div>
            <div>
              <img src="/assets/science_exhibition.jpeg" alt="Science Exhibition" className="w-full h-64 object-cover" />
              <p className="text-center">Students presenting their science projects.</p>
            </div>
            <div>
              <img src="/assets/cultural_fest.jpeg" alt="Cultural Fest" className="w-full h-64 object-cover" />
              <p className="text-center">Students performing in the cultural fest.</p>
            </div>
            <div>
              <img src="/assets/classroom.jpeg" alt="Classroom" className="w-full h-64 object-cover" />
              <p className="text-center">A glimpse of our interactive classrooms.</p>
            </div>
            <div>
              <img src="/assets/library.jpeg" alt="Library" className="w-full h-64 object-cover" />
              <p className="text-center">Students reading and studying in the school library.</p>
            </div>
          </div>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl">Video Gallery</h2>
          <div className="space-y-4">
            <div>
              <video src="/path/to/school_tour.mp4" controls className="w-full h-64 object-cover"></video>
              <p className="text-center">Virtual tour of Springdale Public School.</p>
            </div>
            <div>
              <video src="/path/to/annual_function.mp4" controls className="w-full h-64 object-cover"></video>
              <p className="text-center">Highlights from the Annual Function 2023.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Gallery;
