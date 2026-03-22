import type { Animal } from "../../data/animals";
import styles from "./styles.module.css"

export const Card: React.FC<Animal> = ({name, species, age}) => {
    return (
        <div className={styles.card}>
            <p>{name}</p>
            <p>{species}, {age.toString()}</p>
        </div>
    );
}