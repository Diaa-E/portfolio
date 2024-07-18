import styles from "./HeroWeb.module.css";

export default function HeroWeb({ })
{
    return (
        <div id="#about">
            <h1 className={styles["title"]}>
                <span>Hi, I'm</span>
                <span>Diaa</span>
                <span>A</span>
                <span>Front End Web Developer</span>
            </h1>
        </div>
    )
}