import { webSkills } from "../data/webSkills";
import styles from "./WebSkills.module.css";
import SkillsCarousel from "./SkillsCarousel";
import { generateNeonTextActivator, generateNeonTextInlineStyle } from "../utils/neonTextUtils";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { useRef } from "react";

export default function WebSkills()
{
    const neon1Ref = useRef(null);

    useIntersectionObserver(
        [
            neon1Ref
        ],
        generateNeonTextActivator(styles["active"]),
        () => {
            neon1Ref.current.classList.add(styles["active"]);
        }
    );

    return (
        <>
            <div className={styles["skills-header"]}>
                <h2 className={styles["skills-title"]}>
                    <span>My</span>
                    <span
                        className={styles["neon-one"]}
                        style={generateNeonTextInlineStyle("green", 0.7, 3)}
                        ref={neon1Ref}
                    >Skills</span>
                </h2>
            </div>
            <SkillsCarousel skills={webSkills} />
        </>
    )
}