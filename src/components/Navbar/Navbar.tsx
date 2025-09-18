import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/CV-Iñaki Tornos.pdf';
    link.download = 'CV-InakiTornos.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/Kr4k3n" className="logo">
          Kr4k3n
        </Link>
      </div>
      
      <div className="navbar-center">
        <ul className="nav-links">
          <li>
            <Link to="/Kr4k3n/about">~/about</Link>
          </li>
          <li>
            <Link to="/Kr4k3n/coaching">~/coaching</Link>
          </li>
          <li>
            <Link to="/Kr4k3n/blog">~/blog</Link>
          </li>
          <li>
            <Link to="/Kr4k3n/contact">~/contact</Link>
          </li>
        </ul>
      </div>
      
      <div className="navbar-right">
        <a 
            href="https://www.youtube.com/@Kr4k3nEU" 
            target="_blank" 
            rel="noopener noreferrer"
            className="youtube-icon"
            title="YouTube Channel"
            >
            <i className="fab fa-youtube"></i>
            </a>

        <a 
          href="https://github.com/KrakenEU" 
          target="_blank" 
          rel="noopener noreferrer"
          className="github-icon"
          title="GitHub Repositories"
        >
          <i className="fab fa-github"></i>
          <span className="repo-count">22</span>
        </a>
        
        <a 
          href="https://es.linkedin.com/in/i%C3%B1aki-tornos-572580177/en" 
          target="_blank" 
          rel="noopener noreferrer"
          className="linkedin-icon"
          title="LinkedIn Profile"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        
        <button 
          onClick={handleDownloadCV}
          className="download-cv-btn"
          title="Download CV"
        >
          <i className="fas fa-download"></i>
          <span>CV.pdf</span>
        </button>
        
        <div className="status-indicator">
          <span className="status-dot"></span>
          <span className="status-text">Cybersecurity Software Developer at Airbus SAU.</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;