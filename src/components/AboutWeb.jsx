import styles from "./AboutWeb.module.css";
import { socialLinks } from "../data/socialLinks";
import IconLink from "./IconLink";
import { useRef } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

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
    (entries) => {
        entries.forEach(entry => {
                
            if (entry.isIntersecting)
            {
                entry.target.classList.add(styles["active"]);
            }
            else
            {
                entry.target.classList.remove(styles["active"]);
            }
        });
    },
    () => {
        neon1Ref.current.classList.add(styles["active"]);
        neon2Ref.current.classList.add(styles["active"]);
    });

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
                        className={[styles["neon-one"]].join(" ")}
                        style={{
                            "--off": "var(--neon-blue-off)",
                            "--on": `var(--neon-blue)`,
                            "--glow": "var(--glow-blue)",
                            "--backlight": "var(--backlight-blue)",
                            "--delay": "1s",
                            "--count": "2"
                        }}
                    >Diaa</span>
                    <span className={styles["graffiti-two"]}>A</span>
                    <span
                        ref={neon2Ref}
                        className={[styles["neon-two"]].join(" ")}
                        style={{
                            "--off": "var(--neon-gold-off)",
                            "--on": `var(--neon-gold)`,
                            "--glow": "var(--glow-gold)",
                            "--backlight": "var(--backlight-gold)",
                            "--delay": ".7s",
                            "--count": "3"
                        }}
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Labore molestiae blanditiis saepe impedit, ut soluta doloremque
                ipsam excepturi voluptas, autem obcaecati veniam consectetur.
                Natus nobis libero debitis commodi voluptatum temporibus.
            </p>
        </>
    )
}