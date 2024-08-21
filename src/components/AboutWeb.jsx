import styles from "./AboutWeb.module.css";
import { socialLinks } from "../data/socialLinks";
import IconLink from "./IconLink";
import { useRef } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { generateNeonTextActivator, generateNeonTextInlineStyle } from "../utils/neonTextUtils";

export default function AboutWeb()
{
    const neon1Ref = useRef(null);
    const neon2Ref = useRef(null);
    const bioRef = useRef(null);

    useIntersectionObserver(
        [
            neon1Ref,
            neon2Ref
        ],
        generateNeonTextActivator(styles["active"]),
        () => {
            neon1Ref.current.classList.add(styles["active"]);
            neon2Ref.current.classList.add(styles["active"]);
        }
    );

    useIntersectionObserver(
        [
            bioRef
        ],
        (entries) => {
            entries.forEach(entry => {
                
                if (entry.isIntersecting)
                {
                    entry.target.classList.add(styles["show-bio"]);
                }
                else
                {
                    entry.target.classList.remove(styles["show-bio"]);
                }
            });
        },
        () => {
            bioRef.current.classList.add(styles["show-bio"]);
        } 
    )

    return (
        <>
            <div className={styles["hero"]}>
                <h1 className={styles["title"]}>
                    <span className={styles["graffiti-one"]}>Hi, I&apos;m</span>
                    <span
                        ref={neon1Ref}
                        className={styles["neon-one"]}
                        style={generateNeonTextInlineStyle("blue", 1, 2)}
                    >Diaa</span>
                    <span className={styles["graffiti-two"]}>A</span>
                    <span
                        ref={neon2Ref}
                        className={styles["neon-two"]}
                        style={generateNeonTextInlineStyle("gold", 0.7, 3)}
                    >Front End <br /> Web Developer</span>
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
            <p ref={bioRef} className={styles["bio"]}>
                It was fall 2016, my first year in college pursuing a degree in Electrical Engineering. On that year,
                we had many courses over a wide spectrum of topics, one of which was a programming course,
                That's when I discovered my passion for programming.
                I found myself scoring high in any programming course with a fraction of the effort I put into
                anything else, that is when I knew this path is for me...
            </p>
        </>
    )
}