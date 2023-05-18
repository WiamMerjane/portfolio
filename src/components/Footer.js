import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

function Footer() {
  const footerStyle = {
    backgroundColor: '#f2f2f2',
    padding: '20px',
    textAlign: 'center',
    marginTop: 'auto',
  };

  const iconStyle = {
    margin: '0 5px',
    fontSize: '24px',
  };

  return (
    <footer style={footerStyle}>
      <div>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FaInstagram style={iconStyle} />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FaFacebook style={iconStyle} />
        </a>
        <a href="https://www.linkedin.com/in/wiam-merjane-7792bb263/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin style={iconStyle} />
        </a>
      </div>
      <p>© {new Date().getFullYear()} WiamMerjane</p>
    </footer>
  );
}

export default Footer;
