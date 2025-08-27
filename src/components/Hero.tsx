import styles from '../css/Hero.module.css';
import headshot from '../assets/headshot.jpeg';

export default function Hero() {
    return (
        <div id="about" className={styles.hero}>
            <img src={headshot} alt="Hondo Reilly" className={styles.headshot} />
            <div className={styles.heroContent}>
                <h3>Hello, I'm</h3>
                <h1>Hondo Reilly</h1>
                <p>I am a mechanical and manufacturing engineer studying at Texas A&M University.</p>
                <a href="" className={styles.resumeButton}>Get my resume</a>
            </div>
        </div>
    )
}