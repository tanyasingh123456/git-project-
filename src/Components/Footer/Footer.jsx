import logo from '../../assets/navgurukul.png';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#fcdfd9] text-black px-10 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo and Info */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src={logo}
              alt="navgurukul logo"
              className="w-30 h-30 object-contain"
            />
          </div>
          <p className="text-sm mb-2">
            Registration as NavGurukul Foundation for Social Welfare
          </p>
          <p className="text-sm mb-2">CIN: U85300HR2016NPL066468</p>
          <p className="text-sm">
            Let's talk at{" "}
            <a href="mailto:hi@navgurukul.org" className="underline">
              hi@navgurukul.org
            </a>
          </p>
        </div>

        {/* About Us */}
        <div>
          <h3 className="text-lg font-semibold mb-2">ABOUT US</h3>
          <ul className="space-y-1 text-sm">
            <li>Who we are</li>
            <li>Team</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Schools & Digital Initiatives */}
        <div>
          <h3 className="text-lg font-semibold mb-2">SCHOOLS</h3>
          <ul className="space-y-1 text-sm mb-4">
            <li>School of Programming</li>
            <li>School of Data Analytics</li>
            <li>School of Business</li>
          </ul>
          <h3 className="text-lg font-semibold mb-2">DIGITAL INITIATIVES</h3>
          <ul className="space-y-1 text-sm">
            <li>Zury</li>
            <li>Mariki</li>
            <li>Code India Fellowship</li>
          </ul>
        </div>

        {/* Get Involved & CSR */}
        <div>
          <h3 className="text-lg font-semibold mb-2">GET INVOLVED</h3>
          <ul className="space-y-1 text-sm mb-4">
            <li>Be a Partner</li>
            <li>Careers</li>
          </ul>
          <h3 className="text-lg font-semibold mb-2">CSR ENQUIRIES</h3>
          <ul className="space-y-1 text-sm mb-4">
            <li>Hire From Us</li>
            <li>Donate</li>
          </ul>
          <h3 className="text-sm text-gray-400 mt-4">Legal</h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
