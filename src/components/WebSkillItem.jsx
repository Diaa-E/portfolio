import styles from "./WebSkillItem.module.css";

export default function WebSkillItem({ name, color, tools = [] })
{
    return (
        <div
            className={styles["tools-wrapper"]}
            style={{
                "--glow": `var(--glow-single-${color})`,
                "--color": `var(--neon-${color})`,
            }}
        >
            <h3 className={styles["skill-name"]}>{name}</h3>
            <ul className={styles["tools-list"]}>
            {
                tools.map(tool => {
                    return <li className={styles["tool-name"]} key={tool}>{tool}</li>
                })
            }
            </ul>
        </div>
    )
}