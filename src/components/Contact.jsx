import styles from "./Contact.module.css";
import emailIcon from "../assets/icons/email.svg";
import { generateNeonTextActivator, generateNeonTextInlineStyle, generateRandomNeonColor } from "../utils/neonTextUtils";
import { useRef, useState } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

export default function Contact()
{
    const neon1Ref = useRef(null);
    const emailRef = useRef(null);

    const [color] = useState(generateRandomNeonColor());

    useIntersectionObserver(
        [
            neon1Ref,
            emailRef,
        ],
        generateNeonTextActivator(styles["active"]),
        () => {
            neon1Ref.current.classList.add(styles["active"])
        }
    )

    return (
        <>
            <div className={styles["skills-header"]}>
                <h2 className={styles["contact-title"]}>
                    <span
                        className={styles["neon-one"]}
                        style={generateNeonTextInlineStyle("blue", 0.5, 3)}
                        ref={neon1Ref}
                    >Contact</span>
                    <span> Me</span>
                </h2>
            </div>
            <ul className={styles["contact-list"]}>
                <li
                    aria-label="email"
                    style={{
                        "--color": `var(--neon-${color})`,
                        "--glow": `var(--glow-single-${color})`,
                        "--filter": `var(--filter-neon-${color})`,
                    }}
                    className={styles["contact-item"]}
                    ref={emailRef}
                >
                    <div
                        style={{backgroundImage: `url("${emailIcon}")`}}
                        className={styles["contact-icon"]}
                    ></div>
                    <span>diaa_e@protonmail.com</span>
                </li>
            </ul>
        </>
    )
}