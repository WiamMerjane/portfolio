import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

function Projets() {
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
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '40px',
    color: '#333',
  };

  const projetContainerStyle = {
    backgroundColor: '#F4F4F4',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '40px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    width: '80%',
    maxWidth: '600px',
    display: 'flex',
    alignItems: 'center',
  };

  const projetTitleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333',
  };

  const lienStyle = {
    display: 'flex',
    alignItems: 'center',
    fontSize: '18px',
    color: '#007bff',
    textDecoration: 'none',
    marginBottom: '10px',
  };

  const iconStyle = {
    marginRight: '10px',
  };

  const descriptionStyle = {
    fontSize: '16px',
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
        Projets
      </motion.h1>
      <motion.div
        style={projetContainerStyle}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <motion.h2
          style={projetTitleStyle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Projet de gestion des salles et des machines
        </motion.h2>
        <motion.a
          href="https://github.com/Nouhaila25/projet.Laravel.git"
          style={lienStyle}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <FaGithub style={iconStyle} />
        </motion.a>
        <motion.p
          style={descriptionStyle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Création d'une application web avec Laravel qui consiste à gérer les salles et les machines.
        </motion.p>
      </motion.div>
      <motion.div
        style={projetContainerStyle}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <motion.h2
          style={projetTitleStyle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          Projet Pokemon
        </motion.h2>
        <motion.a
          href="https://github.com/WiamMerjane/Pokemon/tree/master"
          style={lienStyle}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.6 }}
        >
          <FaGithub style={iconStyle} />
        </motion.a>
        <motion.p
          style={descriptionStyle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.8 }}
        >
          Création d'une application mobile Pokemon avec React Native.
        </motion.p>
      </motion.div>
      {/* Ajoutez plus de projets selon vos besoins */}
    </motion.div>
  );
}

export default Projets;