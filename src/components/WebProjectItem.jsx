import { useState } from "react";
import styles from "./WebProjectItem.module.css";

export default function WebWorkItem({name, livePreview, source})
{
    const colors = [
        "pink",
        "green",
        "yellow",
        "gold",
        "blue"
    ];

    const [color] = useState(colors[Math.floor(Math.random() * colors.length)]);

    return (
        <li
            key={name}
            className={styles["web-project-item"]}
            style={{
                borderBottom: `5px solid var(--neon-${color})`,
            }}
        >
            <h3
                className={styles["web-project-title"]}
            >{name}</h3>
        <div className={styles["web-project-links"]}>
        </div>
        </li>
    )
}