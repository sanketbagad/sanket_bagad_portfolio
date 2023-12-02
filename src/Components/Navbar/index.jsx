// Navbar.js
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import styles from './styles.module.css';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const onResumeDownload = () => {
    const link = document.createElement('a');
    link.href = './images/resume.pdf';
    link.setAttribute('download', 'Sanket_Bagad.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <nav className={styles.nav_container}>
      <div className={styles.nav_left}>
        <a href="#home">
          <h1 className={styles.nav_logo}>Sanket Bagad</h1>
        </a>
      </div>
      <div className={styles.nav_right}>
        <div className={`${styles.nav_links} ${showMenu ? styles.show : ''}`}>
          <a href="#about" className={styles.nav_link}>
            <span>01.</span>About
          </a>
          <a href="#experience" className={styles.nav_link}>
            <span>02.</span>Experience
          </a>
          <a href="#work" className={styles.nav_link}>
            <span>03.</span>Work
          </a>
          <a href="#contact" className={styles.nav_link}>
            <span>04.</span>Contact
          </a>
          <button className={styles.nav_resume_btn} onClick={onResumeDownload}>
            Resume
          </button>
        </div>
        <div
          className={`${styles.hamburger_icon}`}
          onClick={() => setShowMenu(!showMenu)}
        >
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
