import React from 'react';

const About = () => {
  return (
    <div className="p-4">
      <header className="bg-blue-500 text-white p-4 text-center">
        <h1 className="text-3xl">About Us</h1>
      </header>
      <main className="p-4">
        <section>
          <h2 className="text-2xl">Our History</h2>
          <p>Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.</p>
        </section>
        <section>
          <h2 className="text-2xl">Vision</h2>
          <p>To create a learning environment that fosters academic excellence, critical thinking, and ethical values.</p>
        </section>
        <section>
          <h2 className="text-2xl">Mission</h2>
          <p>To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.</p>
        </section>
        <section>
          <h2 className="text-2xl">Principal's Message</h2>
          <p>At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.</p>
        </section>
        <section>
          <h2 className="text-2xl">Infrastructure & Facilities</h2>
          <p>State-of-the-art science and computer labs, spacious and well-equipped classrooms, library with a vast collection of books and digital resources, sports facilities including a playground, gymnasium, and swimming pool.</p>
        </section>
      </main>
    </div>
  );
};

export default About;
