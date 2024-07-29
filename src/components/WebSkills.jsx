import { useState } from "react";
import { webSkills } from "../data/webSkills";
import WebSkillItem from "./WebSkillItem";
import styles from "./WebSkills.module.css";

export default function WebSkills({ })
{
    const [active, setActive] = useState(0);

    function getSkillIndex(skillsList, skillName)
    {
        return skillsList.findIndex(skill => skill.name === skillName);
    }
    
    return (
        <>
            <div className={styles["skills-header"]}>
                <h2 className={styles["skills-title"]}>
                    <span>My</span>
                    <span>Skills</span>
                </h2>
            </div>
            <div className={styles["skills-list"]}>
                <ul
                    style={{transform: `translateX(calc(${active - 1} * -105px))`}}
                    className={styles["skills-carousel"]}
                >
                {
                    webSkills.map(skill => {
                        return <li key={skill.name}>
                            <button
                                className={[styles["skill-button"], webSkills[active].name === skill.name? styles["active"] : ""].join(" ")}
                                style={{
                                    "--off": `var(--filter-neon-${skill.color}-off)`,
                                    "--filter": `var(--filter-neon-${skill.color}) drop-shadow(var(--glow-single-${skill.color}))`
                                }}
                                onClick={() => setActive(getSkillIndex(webSkills, skill.name))}
                            >
                                <img src={skill.icon} alt="" />
                            </button>
                        </li>
                    })
                }
                </ul>
            </div>
            <WebSkillItem name={webSkills[active].name} tools={webSkills[active].tools} />
        </>
    )
}