import styles from './css/App.module.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';

export default function App() {
  return (
    <div className={styles.app}>
      <Nav />
      <Hero />
      <Experience />
      <Projects />
    </div>
  )
}