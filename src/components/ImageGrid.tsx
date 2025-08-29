import styles from '../css/ImageGrid.module.css';

export default function ImageGrid({ images }: { images: string[] }) {
    const gridClass = `${styles.imageGrid} ${styles[`grid${images.length}`]}`;
    
    return (
        <div className={gridClass}>
            {images.map((image, index) => (
                <img key={index} src={image} alt={`Image ${index + 1}`} />
            ))}
        </div>
    );
}