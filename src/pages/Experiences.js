import React from 'react';
import { motion } from 'framer-motion';
import myImage from './images/ensaj.png';

function Experiences() {
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

  const experienceContainerStyle = {
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

  const logoStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '10px',
  };

  const experienceContentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  };

  const experienceTitleStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#333',
  };

  const experienceSubtitleStyle = {
    fontSize: '16px',
    marginBottom: '10px',
    color: '#666',
  };

  const experienceDescriptionStyle = {
    fontSize: '14px',
    lineHeight: '1.5',
    color: '#333',
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
        Expériences
      </motion.h1>
      <motion.div
        style={experienceContainerStyle}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <motion.img
          src={myImage}
          alt="Logo entreprise"
          style={logoStyle}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        />
        <motion.div
          style={experienceContentStyle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.h2
            style={experienceTitleStyle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            PFA
          </motion.h2>
          <motion.h3
            style={experienceSubtitleStyle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            ENSAJ
          </motion.h3>
          <motion.h3
            style={experienceSubtitleStyle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            La sécurisation de la voix sur IP
          </motion.h3>
          <motion.p
            style={experienceDescriptionStyle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.6 }}
          >
            Nous avons développé une application de bureau en utilisant Java pour sécuriser les communications vocales sur IP. Cette application implique deux participants : un émetteur et un récepteur. L'émetteur enregistre un message vocal destiné au récepteur. Ce message est chiffré à l'aide d'un algorithme de chiffrement (AES, DES, TDES, RC4) et d'une clé choisie, puis il est envoyé au récepteur en utilisant les sockets de Java. Le récepteur reçoit l'audio chiffré, le déchiffre en utilisant l'algorithme et la clé de déchiffrement sélectionnés, afin de pouvoir l'écouter.
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Experiences;