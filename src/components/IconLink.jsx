import styles from "./IconLink.module.css";

export default function IconLink({ to, icon, name, color = "blue", textOnRight = true})
{
    return (
        <a
            href={to} className={styles["social-link"]}
            style={{
                "--glow": `var(--glow-single-${color})`,
                "--filter": `var(--filter-neon-${color})`,
            }}
        >
            {
                textOnRight &&
                <>
                    <img
                        className={styles["social-link-icon"]}
                        src={icon}
                        alt={name}
                        aria-hidden
                        />
                    <span className={styles["link-text"]}>
                    {
                        name
                    }
                    </span>
                </>
            }
            {
                !textOnRight &&
                <>
                <span className={styles["link-text"]}>
                {
                    name
                }
                </span>
                <img
                    className={styles["social-link-icon"]}
                    src={icon}
                    alt={name}
                    aria-hidden
                />
            </>
            }
        </a>
    )
}