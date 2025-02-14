import "./footer.css";
import { FiTwitter, FiYoutube, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">CINDY NOLLA</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>
            </ul>
            <div className="footer__social">
                <a href="#" className="home__social-icon" target="_blank" rel="noreferrer">
                    <FiTwitter />
                </a>
                <a href="#" className="home__social-icon" target="_blank" rel="noreferrer">
                    <FiYoutube />
                </a>
                <a href="#" className="home__social-icon" target="_blank" rel="noreferrer" >
                    <FiInstagram />
                </a>    
            </div>
            <span className="footer__copy"></span>
        </div>
    </footer>
  );
}

export default Footer;