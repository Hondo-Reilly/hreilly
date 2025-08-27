import styles from '../css/Nav.module.css';

export default function Nav() {
  return (
    <nav className={styles.nav}>
        <div className={styles.title}>
            <h1>Hondo Reilly</h1>
        </div>
        <div className={styles.navLinks}>
            <a className={styles.navLink}>About</a>
            <a className={styles.navLink}>Projects</a>
            <a className={styles.navLink}>Contact</a>
        </div>
    </nav>
  );
}