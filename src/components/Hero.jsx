import styles from '../css/Hero.module.css';
import headshot from '../assets/temp-headshot.jpeg';

export default function Hero() {
    return (
        <div className={styles.hero}>
            <div className={styles.content}>
                <div className={styles.headshot}>
                    <img src={headshot} alt="Hondo Reilly" />
                </div>
                <div className={styles.info}>
                    <h1>Hondo Reilly</h1>
                    <p>Mechanical and Manufacturing Engineering</p>
                </div>
            </div>
        </div>
    )
}