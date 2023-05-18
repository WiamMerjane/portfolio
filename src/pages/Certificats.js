import React, { useState } from 'react';
import { motion } from 'framer-motion';
import certificateImage1 from './javafx.jpg';
import certificateImage2 from './images/word.png';

function Certificates() {
  const [enlargedImage, setEnlargedImage] = useState(null);

  const containerStyle = {
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    minHeight: '100vh', // Ajout d'une hauteur minimale pour occuper tout l'écran
    background: 'linear-gradient(45deg, #FFC593, #BC7198)', // Dégradé de couleurs en arrière-plan
    overflow: 'hidden', // Masquer le contenu qui dépasse de la zone visible
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333',
  };

  const certificateContainerStyle = {
    backgroundColor: '#F4F4F4',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '600px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'pointer',
  };

  const certificateImageStyle = {
    width: '150px',
    height: '150px',
    borderRadius: '8px',
    objectFit: 'cover',
    marginBottom: '20px',
  };

  const certificateContentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  };

  const certificateTitleStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#333',
  };

  const certificateIssuerStyle = {
    fontSize: '16px',
    marginBottom: '10px',
    color: '#666',
  };

  const certificateDateStyle = {
    fontSize: '14px',
    color: '#333',
  };

  const handleImageClick = (image) => {
    setEnlargedImage(image);
  };

  const handleModalClose = () => {
    setEnlargedImage(null);
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Certificats</h1>
      <motion.div
        style={certificateContainerStyle}
        onClick={() => handleImageClick(certificateImage1)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.img
          src={certificateImage1}
          alt="Certificat 1"
          style={certificateImageStyle}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        />
        <motion.div
          style={certificateContentStyle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.h2
            style={certificateTitleStyle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Certificat en Java Fx
          </motion.h2>
          <motion.h3
            style={certificateIssuerStyle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            mindluster
          </motion.h3>
          <motion.p
            style={certificateDateStyle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            Obtenu en avril 2023
          </motion.p>
        </motion.div>
      </motion.div>
      <motion.div
        style={certificateContainerStyle}
        onClick={() => handleImageClick(certificateImage2)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.4 }}
      >
        <motion.img
          src={certificateImage2}
          alt="Certificat 2"
          style={certificateImageStyle}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.6 }}
        />
        <motion.div
          style={certificateContentStyle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.8 }}
        >
          <motion.h2
            style={certificateTitleStyle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2 }}
          >
            Certificat en WordPress
          </motion.h2>
          <motion.h3
            style={certificateIssuerStyle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.2 }}
          >
            Openclassroom
          </motion.h3>
          <motion.p
            style={certificateDateStyle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.4 }}
          >
            Obtenu en mars 2023
          </motion.p>
        </motion.div>
      </motion.div>



      {enlargedImage && (
        <motion.div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onClick={handleModalClose}
        >
          <motion.img
            src={enlargedImage}
            alt="Certificat agrandi"
            style={{
              maxWidth: '90%',
              maxHeight: '90%',
              borderRadius: '8px',
              objectFit: 'contain',
            }}
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      )}
    </div>

  );
}

export default Certificates;