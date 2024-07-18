import styles from "./SocialLinks.module.css";

export default function SocialLinks({ socialLinks = [] })
{
    return (
        <ul className={styles["social-links-wrapper"]}>
        {
            socialLinks.map(link => (
                <li>
                    <a href={link.to}><img className={styles["social-link-icon"]} src={link.icon} alt={link.name} /></a>
                </li>
            ))
        }
        </ul>
    )
}