import styles from "./AboutWeb.module.css";
import { socialLinks } from "../data/socialLinks";
import IconLink from "./IconLink";

export default function AboutWeb({ })
{
    return (
        <>
            <div className={styles["hero"]}>
                <h1 className={styles["title"]}>
                    <span className={styles["graffiti-one"]}>Hi, I'm</span>
                    <span className={styles["neon-one"]}>Diaa</span>
                    <span className={styles["graffiti-two"]}>A</span>
                    <span className={styles["neon-two"]}>Front End <br /> Web Developer</span>
                </h1>
            </div>
            <ul className={styles["social-links-wrapper"]}>
            {
                socialLinks.web.map(link => {
                    return <li key={link.to}>
                        <IconLink icon={link.icon} name={link.name} to={link.to} textOnRight={true} color={link.color} />
                    </li>
                })
            }
            </ul>
            <p className={styles["bio"]}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Labore molestiae blanditiis saepe impedit, ut soluta doloremque
                ipsam excepturi voluptas, autem obcaecati veniam consectetur.
                Natus nobis libero debitis commodi voluptatum temporibus.
            </p>
        </>
    )
}