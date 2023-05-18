import React from 'react';
import { AiOutlineDownload } from 'react-icons/ai';
import { motion } from 'framer-motion';
import myImage from './images/moi.jpg';
import myCV from './images/monCV.pdf';

function Accueil() {
  const containerStyle = {
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    minHeight: '100vh',
    background: 'linear-gradient(45deg, #FFC593, #BC7198)',
    overflow: 'hidden',
  };

  const imageStyle = {
    width: '300px',
    borderRadius: '50%',
    border: '5px solid #fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    margin: '20px auto',
  };

  const titleStyle = {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#333',
    margin: '0 auto',
    marginTop: '40px',
  };

  const textStyle = {
    fontSize: '18px',
    lineHeight: '1.5',
    color: '#333',
    margin: '0 auto',
    maxWidth: '600px',
  };

  const downloadLinkStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: '5px',
    padding: '10px 20px',
    margin: '20px',
    transition: 'background-color 0.3s',
  };

  const iconStyle = {
    marginRight: '5px',
  };

  const handleDownloadCV = () => {
    window.open(myCV, '_blank');
  };

  return (
    <motion.div
      style={containerStyle}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <motion.img
          src={myImage}
          alt="Votre image"
          style={imageStyle}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <div style={{ marginLeft: '20px' }}>
          <motion.h2
            style={titleStyle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hello, I'm Wiam Merjane
          </motion.h2>
          <motion.p
            style={textStyle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Je suis Wiam Merjane, une étudiante en première année du cycle ingénieur à l'ENSAJ, spécialisée en génie informatique.
          </motion.p>
          <motion.p
            style={textStyle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Je suis passionnée et créative dans le domaine du développement.
          </motion.p>
          <motion.p
            style={textStyle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Sur ce site, vous pourrez découvrir mes formations, mes expériences professionnelles, les projets que j'ai réalisés, et vous pouvez me contacter pour toute demande ou opportunité.
          </motion.p>
          <motion.a
            href={myCV}
            download="MonCV.pdf"
            style={downloadLinkStyle}
            onClick={handleDownloadCV}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <AiOutlineDownload style={iconStyle} />
            Télécharger mon CV
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export default Accueil;
