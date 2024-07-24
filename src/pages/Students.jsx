import React from 'react';

const Students = () => {
  return (
    <div className="p-4">
      <header className="bg-blue-500 text-white p-4 text-center">
        <h1 className="text-3xl">Students</h1>
      </header>
      <main className="p-4">
        <section>
          <h2 className="text-2xl">Life at Springdale</h2>
          <p>Music, Dance, Drama, Art, Sports, Robotics, Debate Club, Science Club</p>
        </section>
        <section>
          <h2 className="text-2xl">Clubs and Societies</h2>
          <p>Literary Society, Environmental Club, Astronomy Club, Coding Club</p>
        </section>
        <section>
          <h2 className="text-2xl">Achievements</h2>
          <ul>
            <li>John Smith - National Level Math Olympiad Winner</li>
            <li>Sarah Lee - Gold Medalist in State Swimming Championship</li>
            <li>Tech Innovators Club - Winners of Inter-School Robotics Competition</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl">Student Council</h2>
          <ul>
            <li>President: Amy Parker, Grade 12</li>
            <li>Vice President: Rajiv Mehta, Grade 11</li>
            <li>Secretary: Lisa Wong, Grade 10</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Students;
