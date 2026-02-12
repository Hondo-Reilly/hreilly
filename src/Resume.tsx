import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import styles from './css/Resume.module.css';

export default function Resume() {
  const printRef = useRef<HTMLDivElement | null>(null);

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: `Hondo Reilly Resume ${new Date().toLocaleDateString(undefined, {month: '2-digit', day: '2-digit', year: '2-digit'})}`,
  });

  function ExperienceItem({ title, date, company, description }: { title: string, date: string, company: string, description: string }) {
    return (
      <div className={styles.experienceItem}>
        <div className={styles.experienceItemHeader}>
          <h3>{title} | {company}</h3>
          <p className={styles.date}>{date}</p>
        </div>
        <p className={styles.description}>{description}</p>
      </div>
    )
  }

  return (
    <div className={styles.resumeContainer}>
      <button onClick={handlePrint}>Print</button>

      <div className={styles.resume} ref={printRef}>
        <div className={styles.header}>
          <div className={styles.titleBlock}>
            <h1 className={styles.name}>Hondo Reilly</h1>
            <h2 className={styles.title}>MMET Engineering Student</h2>
          </div>

          <div className={styles.contact}>
            <div className={styles.email}>hondoreilly@gmail.com</div>
            <div className={styles.phone}>(512) 968-3251</div>
            <div className={styles.website}>hondoreilly.com</div>
          </div>
        </div>

        <div className={styles.summary}>
          <h2>SUMMARY</h2>
          <ul>
            <li>Texas A&M Junior studying Manufacturing and Mechanical Engineering Technology (MMET)</li>
            <li>Broad experience working in software startups and manufacturing.</li>
            <li>Energetic, fast learner with strong communication skills</li>
          </ul>
        </div>

        <div className={styles.mainContent}>
          <div className={styles.leftColumn}>
            <h2>EDUCATION</h2>

            <div className={styles.school}>
              <h3>Texas A&M University</h3>
              <p>College of Engineering (MMET)</p>
              <p>Class of ‘27 | 4.0 GPA</p>
              <p>Dean’s List</p>
            </div>

            <div className={styles.school}>
              <h3>Waterloo School of Austin</h3>
              <p>Project Based High School</p>
              <p>Graduated ‘22 | Salutatorian</p>
            </div>

            <div className={styles.school}>
              <h3>Hello World Studio</h3>
              <p>4 year after school program; learned Unity, C#, HLSL, Python, HTML, and CSS</p>
            </div>

            <h2 style={{ marginTop: '1rem' }}>
              SKILLS
            </h2>

            <h3>Engineering</h3>
            <p>AutoDesk Inventor, AutoDesk Fusion 360, OnShape</p>

            <h3 style={{ marginTop: '0.5rem' }}>Manufacturing / Machining</h3>
            <p>CAM, Milling, Lathe, 3D Printing</p>

            <h3 style={{ marginTop: '0.5rem' }}>Front-End Development</h3>
            <p>HTML, CSS, JavaScript, React, ThreeJS, Electron, Tailwind CSS</p>

            <h3 style={{ marginTop: '0.5rem' }}>Back-End Development</h3>
            <p>Node.js, Express, MongoDB, C#, Python, OpenRouter</p>

            <h3 style={{ marginTop: '0.5rem' }}>Others</h3>
            <p>Unity Game Engine, Photoshop, Illustrator, InDesign</p>
          </div>

          <div className={styles.rightColumn}>
            <h2>EXPERIENCE</h2>

            <ExperienceItem 
              title="Research Assistant for MMET 380"
              date="Jan '26 - Present"
              company="Texas A&M"
              description="Designing and creating standardized laboratory procedures for Computer-Aided Manufacturing coursework under the direction of Dr. Wayne Hung."
            />

            <ExperienceItem 
              title="Engineering Intern"
              date="May '25 - Aug '25"
              company="US Conec"
              description="Designed and implemented DfM-focused machine guarding for injection molding presses to preserve safe operator access and enable fast changeovers through modular design."
            />

            <ExperienceItem 
              title="Full Stack Developer"
              date="Jan '23 - Aug '23"
              company="SnapOrder"
              description="Worked directly with founder as sole developer to determine requirements; designed and developed website, APIs, and databases from scratch."
            />

            <ExperienceItem 
              title="Front-End Developer"
              date="Jun '22 - Dec '22"
              company="Name Dibs"
              description="Designed and programmed start-up’s website. Daily interaction with CEO and Lead Programmer provided exposure to business strategy, design optimization, and marketing."
            />

            <ExperienceItem 
              title="QA & UI Design Intern"
              date="May '21 - Aug '21"
              company="Mod Tech Labs"
              description="Conducted quality assurance testing, designed user interfaces, and documented existing Python code for the artificial intelligence start-up’s mobile and web applications."
            />

            <h2 style={{ marginTop: '1rem' }}>ACTIVITIES</h2>

            <ExperienceItem
              title="Theta Chi"
              date="Feb '24 - Present"
              company="Vice President of Health & Safety"
              description="Developed and executed risk-management strategy and delivered safety training to all members."
            />

            <ExperienceItem
              title="Robomasters"
              date="Sept '24 - Present"
              company="Standard Robot Team"
              description="Researched, designed, and manufactured hardware for robot competition in the U.S. and China."
            />
          </div>
        </div>
      </div>
    </div>
  )
}
