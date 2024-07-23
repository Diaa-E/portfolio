import styles from "./IconLink.module.css";

export default function IconLink({ to, icon, name, textOnRight = true})
{
    return (
        <a href={to} className={styles["social-link"]}>
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