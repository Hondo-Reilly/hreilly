import styles from '../css/Nav.module.css';

export default function Nav() {
  return (
    <nav className={styles.nav}>
        <div className={styles.navContainer}>
            <h1 className={styles.navTitle}>Hondo Reilly</h1>
            <div className={styles.navLinks}>
                <a href="#">About</a>
                <a href="#">Experience</a>
                <a href="#">Projects</a>
                <a href="#">Contact</a>
            </div>
        </div>
    </nav>
  )
}