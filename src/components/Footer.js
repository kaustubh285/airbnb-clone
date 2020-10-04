import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className='footer'>
      <p className='copyRights'>
        © Airbnb clone, No rights reserved - this is a demo!
      </p>
      <p className='links'>
        <a>Privacy</a>
        <a> · </a> <a>Terms</a>
        <a> · </a>
        <a>Sitemap</a>
        <a> · </a>
        <a href='https://github.com/kaustubh285'>
          <b>By Kaustubh Deshpande</b>
        </a>
      </p>
    </div>
  );
}

export default Footer;
