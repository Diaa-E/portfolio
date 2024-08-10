import styles from "./Contact.module.css";
import emailIcon from "../assets/icons/email.svg";
import { generateRandomNeonColor } from "../utils/neonTextUtils";
import { useState } from "react";

export default function Contact()
{
    const [color] = useState(generateRandomNeonColor());

    return (
        <>
            <div className={styles["skills-header"]}>
                <h2 className={styles["contact-title"]}>
                    <span>Contact</span>
                    <span> Me</span>
                </h2>
            </div>
            <ul className={styles["contact-list"]}>
                <li aria-label="email" style={{
                        "--color": `var(--neon-${color})`,
                        "--glow": `var(--glow-single-${color})`,
                        "--filter": `var(--filter-neon-${color})`,
                    }}
                    className={styles["contact-item"]}
                >
                    <div
                        style={{backgroundImage: `url(${emailIcon})`}}
                        className={styles["contact-icon"]}
                    ></div>
                    <span>diaa@loremipsum.com</span>
                </li>
            </ul>
        </>
    )
}