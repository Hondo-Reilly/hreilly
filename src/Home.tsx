import styles from './css/App.module.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function Home() {
    return (
      <div className={styles.app}>
        <Nav />
        <Hero />
        <Experience />
        <Projects />
        <Contact />
      </div>
    )
}