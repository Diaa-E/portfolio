import styles from "./SocialLinks.module.css";

export default function SocialLinks({ socialLinks = [] })
{
    return (
        <ul className={styles["social-links-wrapper"]}>
        {
            socialLinks.map(link => (
                <li key={link.to}>
                    <a href={link.to} aria-label={link.name}>
                        <img
                            className={styles["social-link-icon"]}
                            src={link.icon}
                            alt={link.name}
                            aria-hidden
                        />
                    </a>
                </li>
            ))
        }
        </ul>
    )
}