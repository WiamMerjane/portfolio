import React from 'react';

function Header() {
  const headerStyle = {
    backgroundColor: '#d3cada',
    padding: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const navStyle = {
    display: 'flex',
    justifyContent: 'center',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#333',
    padding: '8px 16px',
    borderRadius: '4px',
    transition: 'background-color 0.3s ease',
    margin: '0 5px', // Ajout d'une marge horizontale entre les liens
    fontWeight: 'bold',
  };

  const activeLinkStyle = {
    ...linkStyle,
    backgroundColor: 'lightblue',
  };

  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex' }}>
          <li>
            <a href="/" style={linkStyle}>Accueil</a>
          </li>
          <li>
            <a href="/formations" style={linkStyle}>Formations</a>
          </li>
          <li>
            <a href="/experiences" style={linkStyle}>Expériences</a>
          </li>
          <li>
            <a href="/projets" style={linkStyle}>Projets</a>
          </li>
          <li>
            <a href="/certificats" style={linkStyle}>Certificats</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
