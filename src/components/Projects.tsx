import styles from '../css/Projects.module.css';
import ImageGrid from './ImageGrid';

export default function Projects() {
    return (
        <div className={styles.projects}>
            <div id="projects" className={styles.autoScrollPoint}></div>
            <h1 className={styles.sectionTitle}>Projects</h1>

            <Project
                title="Standard Robot"
                description="Description 1"
                images={['/src/assets/ModTechLabs.png', '/src/assets/ModTechLabs.png', '/src/assets/ModTechLabs.png']}
            />
            
            <Project
                title="Smart Vending Machine"
                description="Description 1"
                images={['/src/assets/ModTechLabs.png', '/src/assets/ModTechLabs.png', '/src/assets/ModTechLabs.png']}
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

            {appliedSkills.length > 0 && (
                <div className={styles.appliedSkills}>
                    {appliedSkills.map((skill) => (
                        <AppliedSkill key={skill.skillName} skillName={skill.skillName} color={skill.color} />
                    ))}
                </div>
            )}
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