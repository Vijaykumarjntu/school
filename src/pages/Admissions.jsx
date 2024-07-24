import React from 'react';

const Admissions = () => {
  return (
    <div className="p-4">
      <header className="bg-blue-500 text-white p-4 text-center">
        <h1 className="text-3xl">Admissions</h1>
      </header>
      <main className="p-4">
        <section>
          <h2 className="text-2xl">Admission Process</h2>
          <p>Admission forms are available for download. Submit the completed form along with required documents at the school office.</p>
        </section>
        <section>
          <h2 className="text-2xl">Criteria</h2>
          <p>Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.</p>
        </section>
        <section>
          <h2 className="text-2xl">Important Dates</h2>
          <ul>
            <li>Admission Form Availability: March 1st</li>
            <li>Last Date for Submission: March 31st</li>
            <li>Entrance Test: April 15th</li>
            <li>Announcement of Results: April 30th</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Admissions;
