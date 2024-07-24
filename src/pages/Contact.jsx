import React from 'react';

const Contact = () => {
  return (
    <div className="p-4">
      <header className="bg-blue-500 text-white p-4 text-center">
        <h1 className="text-3xl">Contact Us</h1>
      </header>
      <main className="p-4">
        <section>
          <h2 className="text-2xl">Get in Touch</h2>
          <p>Address: Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Email: info@springdale.edu</p>
        </section>
        <section className="mt-4">
          <h2 className="text-2xl">Contact Form</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-lg">Name</label>
              <input type="text" id="name" name="name" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg">Email</label>
              <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg">Message</label>
              <textarea id="message" name="message" className="w-full p-2 border border-gray-300 rounded" rows="4"></textarea>
            </div>
            <div>
              <button type="submit" className="bg-blue-500 text-white p-2 rounded">Send Message</button>
            </div>
          </form>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl">Our Location</h2>
          <div className="w-full h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8437312279796!2d144.9537353155516!3d-37.816688742451926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1d7f36d%3A0xf17b6f3f327ad8a6!2sEducation%20Lane%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sus!4v1623316108394!5m2!1sen!2sus"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              title="School Location"
            ></iframe>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
