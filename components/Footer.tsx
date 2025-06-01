import React from "react";

const Footer = () => {
  return (
    <div className='text-white text-center pt-10'>
      <p>Made with ❤️ by Venu Kalyanam</p>
      <p className='py-2'>© {new Date().getFullYear()} CloudClipper.</p>
    </div>
  );
};

export default Footer;
