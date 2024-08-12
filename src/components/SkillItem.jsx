import { useRef } from "react";
import { generateNeonTextActivator, generateNeonTextInlineStyle } from "../utils/neonTextUtils";
import styles from "./SkillItem.module.css";
import PropTypes from "prop-types";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

export default function SkillItem({ name, color, tools = [] })
{
    const itemRef = useRef(null);
    const titleRef = useRef(null);

    useIntersectionObserver(
        [
            itemRef,
            titleRef
        ],
        generateNeonTextActivator(styles["active"]),
        () => {
            titleRef.current.classList.add(styles["active"]);
            itemRef.current.classList.add(styles["active"]);
        }
    );

    return (
        <div
            className={styles["tools-wrapper"]}
            style={generateNeonTextInlineStyle(color, Math.random() * .7, Math.ceil(Math.random() * 2) + 1)}
        >
            <h3 ref={titleRef} className={styles["skill-name"]}>{name}</h3>
            <ul  ref={itemRef} className={styles["tools-list"]}>
            {
                tools.map(tool => {
                    return <li className={styles["tool-name"]} key={tool}>
                        <div className={styles["neon-strip"]}></div>
                        <span>{tool}</span>
                    </li>
                })
            }
            </ul>
        </div>
    )
}

SkillItem.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    tools: PropTypes.arrayOf(PropTypes.string).isRequired
}