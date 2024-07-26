import styles from "./WebSkills.module.css";

export default function WebSkills({ })
{
    return (
        <>
            <div className={styles["skills-header"]}>
                <h2 className={styles["skills-title"]}>
                    <span>My</span>
                    <span>Skills</span>
                </h2>
            </div>
        </>
    )
}