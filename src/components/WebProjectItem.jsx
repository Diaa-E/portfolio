import { useState } from "react";
import styles from "./WebProjectItem.module.css";
import codeIcon from "../assets/icons/code.svg";
import previewIcon from "../assets/icons/preview.svg";
import IconLink from "./IconLink";

export default function WebWorkItem({name, livePreview, source, image, description})
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
                borderBottom: `10px solid var(--neon-${color})`,
            }}
        >
            <img src={image} alt="" />
            <div className={styles["web-project-details"]}>
                <h3
                    className={styles["web-project-title"]}
                >{name}</h3>
                <p className={styles["web-project-description"]}>{description}</p>
                <div className={styles["web-project-links"]}>
                {
                    source &&
                    <IconLink to={source} name={"Source"} icon={codeIcon} />
                }
                {
                    livePreview &&
                    <IconLink to={livePreview} name={"Live"} icon={previewIcon} />
                }
                </div>
            </div>
        </li>
    )
}