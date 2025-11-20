import styles from '../css/Hero.module.css';
import headshot from '../assets/headshot.png';
import resumePdf from '../assets/Hondo - Clean Modern Resume.pdf';

export default function Hero() {
    return (
        <div id="about" className={styles.hero}>
            <img src={headshot} alt="Hondo Reilly" className={styles.headshot} />
            <div className={styles.heroContent}>
                <h3>Hello, I'm</h3>
                <h1>Hondo Reilly</h1>
                <ul>
                    <li>Texas A&M Junior studying Manufacturing and Mechanical Engineering Technology (MMET) </li>
                    <li>Broad experience working in software startups and manufacturing.</li>
                    <li>Energetic, fast learner with strong communication skills.</li>
                </ul>
                <div className={styles.buttonContainer}>
                    <a href="#experience" className={styles.experienceButton}>See My Experience</a>
                    <p> |</p>
                    <a href={resumePdf} download="Hondo-Reilly-Resume.pdf" className={styles.resumeButton}>Get My Resume</a>
                </div>
            </div>
        </div>
    )
}