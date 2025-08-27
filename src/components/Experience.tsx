import styles from '../css/Experience.module.css';
import headshot from '../assets/headshot.jpeg';
import modTechLab from '../assets/ModTechLabs.png';
import nameDibs from '../assets/NameDibs.png';
import snapOrder from '../assets/SnapOrder.png';
import usConec from '../assets/USConec.png';

export default function Experience() {
    return (
        <div className={styles.experience}>
            <div id="experience" className={styles.autoScrollPoint}></div>
            <h1>Experience</h1>

            <ExperienceItem 
                title="Engineering Intern"
                time="May 2025 - August 2025"
                company="US Conec"
                description="Designed and implemented DfM-focused machine guarding for injection molding presses to preserve safe operator access and enable fast changeovers through modular design."
                img={usConec}
            />

            <ExperienceItem 
                title="Full Stack Developer"
                time="January 2023 - August 2023"
                company="SnapOrder"
                description="Worked directly with founder as sole developer to determine requirements; designed and developed website, APIs, and databases from scratch."
                img={snapOrder}
            />

            <ExperienceItem 
                title="Front-End Developer"
                time="June 2022 - December 2022"
                company="Name Dibs"
                description="Designed and programmed start-up’s website. Daily interaction with CEO and Lead Programmer provided exposure to business strategy, design optimization, and marketing."
                img={nameDibs}
            />

            <ExperienceItem 
                title="QA & UI Design Intern"
                time="May 2021 - August 2021"
                company="Mod Tech Labs"
                description="Conducted quality assurance testing, designed user interfaces, and documented existing Python code for the artificial intelligence start-up’s mobile and web applications."
                img={modTechLab}
            />


        </div>
    )
}

function ExperienceItem({
    title,
    time,
    company,
    description,
    img,
}: {
    title: string;
    time: string;
    company: string;
    description: string;
    img: string;
}) {
    return (
        <div className={styles.experienceItem}>

            <div className={styles.experienceItemContent}>
                <h2>{title} | {company}</h2>
                <p className={styles.experienceItemTime}>{time}</p>
                <p>{description}</p>
            </div>

            <img className={styles.experienceItemImage} src={img} alt={title} />
        </div>
    )
}