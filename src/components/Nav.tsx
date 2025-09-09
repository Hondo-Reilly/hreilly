import styles from '../css/Nav.module.css';

export default function Nav() {
  return (
    <nav className={styles.nav}>
        <div className={styles.navContainer}>
            <h1 className={styles.navTitle}>Hondo Reilly</h1>
            <div className={styles.navLinks}>
                <a href="#about">About</a>
                <a href="#experience">Experience</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
    </nav>
  )
}