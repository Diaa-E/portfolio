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
        "blue",
        "red",
        "purple",
        "cyan"
    ];

    const [color] = useState(colors[Math.floor(Math.random() * colors.length)]);

    return (
        <li
            key={name}
            className={styles["web-project-item"]}
        >
            <img src={image} alt={name} />
            <div className={styles["web-project-details"]}>
                <span>
                    <h3
                        className={styles["web-project-title"]}
                        style={{
                            color: `var(--neon-${color})`,
                            filter: `drop-shadow(var(--glow-single-${color}))`
                        }}
                    >{name}</h3>
                    <p className={styles["web-project-description"]}>{description}</p>
                </span>
                <div className={styles["web-project-links"]}>
                {
                    source &&
                    <IconLink to={source} name={"Source"} icon={codeIcon} textOnRight={true} color={color} />
                }
                {
                    livePreview &&
                    <IconLink to={livePreview} name={"Live"} icon={previewIcon} textOnRight={false} color={color}/>
                }
                </div>
            </div>
            <div
                className={styles["web-project-neon-strip"]}
                style={{
                    backgroundColor: `var(--neon-${color})`,
                    filter: `drop-shadow(var(--glow-single-${color}))`,
                    
                }}
            ></div>
        </li>
    )
}