import React from 'react';

const Faculty = () => {
  return (
    <div className="p-4">
      <header className="bg-blue-500 text-white p-4 text-center">
        <h1 className="text-3xl">Faculty</h1>
      </header>
      <main className="p-4">
        <section>
          <h2 className="text-2xl">Our Faculty</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl">John Doe</h3>
              <p>Principal, M.Ed, 20 years of experience in educational administration.</p>
            </div>
            <div>
              <h3 className="text-xl">Jane Smith</h3>
              <p>Vice Principal, M.Sc. in Physics, 15 years of teaching experience.</p>
            </div>
            <div>
              <h3 className="text-xl">Emily Johnson</h3>
              <p>English Teacher, M.A. in English, 10 years of teaching experience.</p>
            </div>
            <div>
              <h3 className="text-xl">Michael Brown</h3>
              <p>Mathematics Teacher, M.Sc. in Mathematics, 8 years of teaching experience.</p>
            </div>
            <div>
              <h3 className="text-xl">Sophia Davis</h3>
              <p>Science Teacher, M.Sc. in Chemistry, 12 years of teaching experience.</p>
            </div>
            <div>
              <h3 className="text-xl">David Wilson</h3>
              <p>Computer Science Teacher, B.Tech in Computer Science, 5 years of teaching experience.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Faculty;
