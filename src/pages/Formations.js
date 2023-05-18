import React, { useState } from 'react';
import { motion } from 'framer-motion';
import schoolImage1 from './images/ensaj.png';

function Formations() {
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

  const formationContainerStyle = {
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

  const formationImageStyle = {
    width: '150px',
    height: '150px',
    borderRadius: '8px',
    objectFit: 'cover',
    marginBottom: '20px',
  };

  const formationContentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  };

  const formationTitleStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#333',
  };

  const formationSubtitleStyle = {
    fontSize: '16px',
    marginBottom: '10px',
    color: '#666',
  };

  const formationDescriptionStyle = {
    fontSize: '14px',
    lineHeight: '1.5',
    color: '#333',
  };

  const handleImageClick = (image) => {
    setEnlargedImage(image);
  };

  const handleModalClose = () => {
    setEnlargedImage(null);
  };

  return (

    
    <motion.div
      style={containerStyle}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        style={titleStyle}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Formations
      </motion.h1>
      <motion.div
        style={formationContainerStyle}
        onClick={() => handleImageClick(schoolImage1)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <motion.img
          src={schoolImage1}
          alt="École 1"
          style={formationImageStyle}
          whileHover={{ scale: 1.05 }}
        />
        <div style={formationContentStyle}>
          <motion.h2
            style={formationTitleStyle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Cycle Ingénieur
          </motion.h2>
          <motion.h3
            style={formationSubtitleStyle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            ENSAJ
          </motion.h3>
          <motion.p
            style={formationDescriptionStyle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            2022 - Présent
          </motion.p>
        </div>
      </motion.div>
      <motion.div
        style={formationContainerStyle}
        onClick={() => handleImageClick(schoolImage1)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <motion.img
          src={schoolImage1}
          alt="École 2"
          style={formationImageStyle}
          whileHover={{ scale: 1.05 }}
        />
        <div style={formationContentStyle}>
          <motion.h2
            style={formationTitleStyle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            Cycle Préparatoire
          </motion.h2>
          <motion.h3
            style={formationSubtitleStyle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.6 }}
          >
            ENSAJ
          </motion.h3>
          <motion.p
            style={formationDescriptionStyle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.8 }}
          >
            2020 - 2022
          </motion.p>
        </div>
      </motion.div>
      {/* Ajoutez plus de formations selon vos besoins */}
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
        >
          <motion.img
            src={enlargedImage}
            alt="Formation agrandie"
            style={{
              maxWidth: '90%',
              maxHeight: '90%',
              borderRadius: '8px',
              objectFit: 'contain',
            }}
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
          />
        </motion.div>
      )}
    </motion.div>
  );
}

export default Formations;