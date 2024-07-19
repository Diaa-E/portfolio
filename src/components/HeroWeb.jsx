import styles from "./HeroWeb.module.css";

export default function HeroWeb({ })
{
    return (
        <div id="#about" className={styles["hero"]}>
            <h1 className={styles["title"]}>
                <span className={styles["graffiti-one"]}>Hi, I'm</span>
                <br />
                <span className={styles["neon-one"]}>Diaa</span>
                <br />
                <span className={styles["graffiti-two"]}>A</span>
                <br />
                <span className={styles["neon-two"]}>Front End <br /> Web Developer</span>
            </h1>
        </div>
    )
}