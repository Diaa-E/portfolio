import styles from "./IconLink.module.css";

export default function IconLink({ to, icon, name })
{
    return (
        <a href={to} className={styles["social-link"]}>
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
        </a>
    )
}