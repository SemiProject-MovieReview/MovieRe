import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-social">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={24} /> {/* 아이콘 크기 조절 */}
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={24} />
          </a>
        </div>
        <div className="footer-links">
          <a href="/info">
            <span>이용약관</span>
            <span>|</span>
          </a>

          <a href="privacy">
            <span>개인정보처리방침</span>
            <span>|</span>
          </a>

          <a href="/call">
            <span>문의하기</span>
            <span></span>
          </a>
        </div>
        <div className="footer-copy">&copy; 2025 ReMovie. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
