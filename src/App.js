import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Accueil from './pages/Accueil';
import Formations from './pages/Formations';
import Experiences from './pages/Experiences';
import Projets from './pages/Projets';
import Contact from './pages/Contact';
import Certificats from './pages/Certificats';

function App() {
  const getPageContent = () => {
    const currentPath = window.location.pathname;

    switch (currentPath) {
      case '/':
        return <Accueil />;
      case '/formations':
        return <Formations />;
      case '/experiences':
        return <Experiences />;
      case '/projets':
        return <Projets />;
      case '/contact':
        return <Contact />;
      case '/certificats':
        return <Certificats />;
      default:
        return <Accueil />;
    }
  };

  return (
    <div>
      <Header />
      {getPageContent()}
      <Footer />
    </div>
  );
}

export default App;
