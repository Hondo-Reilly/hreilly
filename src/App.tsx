import styles from './css/App.module.css';
import Nav from './components/Nav';
import Hero from './components/Hero';

export default function App() {
  return (
    <div className={styles.app}>
      <Nav />
      <Hero />
    </div>
  )
}