import SkillItem from "./SkillItem";
import { useState } from "react";
import styles from "./SkillsCarousel.module.css";
import PropTypes from "prop-types";

export default function SkillsCarousel({ skills = [] })
{
    const [active, setActive] = useState(0);
    const [activeColor, setActiveColor] = useState(skills[active].color);

    return (
        <>
            <div className={styles["skills-list"]}>
                <ul
                    style={{transform: `translateX(calc(${active - 1} * -105px))`}}
                    className={styles["skills-carousel"]}
                    >
                {
                    skills.map(skill => {
                        return <li key={skill.name}>
                            <button
                                aria-label={skill.name}
                                className={[styles["skill-button"], skills[active].name === skill.name? styles["active"] : ""].join(" ")}
                                style={{
                                    backgroundImage: `url(${skill.icon})`,
                                    "--off": `var(--filter-neon-${skill.color}-off)`,
                                    "--filter": `var(--filter-neon-${skill.color}) drop-shadow(var(--glow-single-${skill.color}))`
                                }}
                                onClick={() => {
                                    setActive(skills.findIndex(current => current.name === skill.name));
                                    setActiveColor(skill.color)
                                }}
                                ></button>
                        </li>
                    })
                }
                </ul>
            </div>
            <SkillItem color={activeColor} name={skills[active].name} tools={skills[active].tools} />
        </>
    )
}

SkillsCarousel.propTypes = {
    skills: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        color: PropTypes.string,
        tools: PropTypes.arrayOf(PropTypes.string),
        icon: PropTypes.string
    })).isRequired
}