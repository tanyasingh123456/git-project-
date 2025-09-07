import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className=" py-10 text-center text-black shadow-lg">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-2 text-lg opacity-90">
          We'd love to hear from you. Get in touch!
        </p>
      </div>

      {/* Map */}
      <div className="w-full h-96">
        <iframe
          title="Navgurukul Sarjapur Campus"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2340934381054!2d77.69613757451517!3d12.960613487355616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13d6c62cf0f5%3A0xbdfebf6f7d4a6d8a!2sNavgurukul%20Sarjapur%20Campus!5e0!3m2!1sen!2sin!4v1691577600000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Contact Form */}
      <div className="max-w-3xl mx-auto px-6 py-10">
        <form className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold mb-6 text-amber-600">Send us a message</h2>

          {/* Name */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Message */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              rows="5"
              placeholder="Your message"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>
          </div>

          {/* Send Button */}
          <button
            type="submit"
            className="bg-orange-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-orange-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
