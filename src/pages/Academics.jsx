import React from 'react';

const Academics = () => {
  return (
    <div className="p-4">
      <header className="bg-blue-500 text-white p-4 text-center">
        <h1 className="text-3xl">Academics</h1>
      </header>
      <main className="p-4">
        <section>
          <h2 className="text-2xl">Curriculum</h2>
          <h3 className="text-xl">Primary (Grades 1-5)</h3>
          <p>English, Mathematics, Science, Social Studies, Art, Physical Education</p>
          <h3 className="text-xl">Secondary (Grades 6-10)</h3>
          <p>English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art</p>
          <h3 className="text-xl">Senior Secondary (Grades 11-12)</h3>
          <p>Science Stream: Physics, Chemistry, Biology, Mathematics, Computer Science, English</p>
          <p>Commerce Stream: Accountancy, Business Studies, Economics, Mathematics, English</p>
        </section>
        <section>
          <h2 className="text-2xl">Teaching Methodologies</h2>
          <p>We use a blend of traditional and modern teaching techniques to cater to different learning styles.</p>
        </section>
        <section>
          <h2 className="text-2xl">Educational Resources</h2>
          <p>Digital classrooms, interactive learning modules, and access to online educational platforms.</p>
        </section>
      </main>
    </div>
  );
};

export default Academics;
