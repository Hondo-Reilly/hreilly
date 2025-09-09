import styles from '../css/Projects.module.css';
import ImageGrid from './ImageGrid';

import standardCad from '../assets/standardCad.png';
import standardSuspension from '../assets/standardSuspension.png';
import standardReal from '../assets/standardReal.jpeg';

export default function Projects() {
    return (
        <div className={styles.projects}>
            <div id="projects" className={styles.autoScrollPoint}></div>
            <h1 className={styles.sectionTitle}>Projects</h1>

            <Project
                title="Standard Robot"
                description="Worked on a multidisciplinary student team to design, manufacture, and assemble a Standard-class competition robot for the RoboMaster program. Led the suspension system design and collaborated with electrical and software teammates. Delivered an operational robot that competed at RoboMaster events in the United States and China."
                images={[standardReal, standardCad, standardSuspension]}
            />
        </div>
    )
}

function Project({
    title,
    description,
    images,
    appliedSkills = [],
}: {
    title: string;
    description: string;
    images: string[];
    appliedSkills?: {
        skillName: string;
        color: string;
    }[];
}) {
    return (
        <div className={styles.project}>
            <h2>{title}</h2>
            <p>{description}</p>
            <ImageGrid images={images} />
        </div>
    )
}

function AppliedSkill({
    skillName,
    color
}: {
    skillName: string;
    color: string;
}) {
    return (
        <div className={styles.appliedSkill} style={{ backgroundColor: color }}>{skillName}</div>
    )
}