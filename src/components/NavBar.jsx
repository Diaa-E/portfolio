import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import useUnmountDelay from "../hooks/useUnmountDelay";

export default function NavBar({ scrollAnchors = [{to: "#root", text: "root"}], activeAnchor })
{
    const [navMenuOpen, setNavMenuOpen] = useState(false);
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);
    const [navMounted, mountNav, unmountNav] = useUnmountDelay(
        () => {
            setNavMenuOpen(false);
            document.body.classList.remove(styles["lock-scroll"]);
        },
        () => {
            setNavMenuOpen(true);
            document.body.classList.add(styles["lock-scroll"]);
        },
        500);

    useEffect(() => {

        function handleResize()
        {
            setInnerWidth(window.innerWidth);
    
            if (window.innerWidth >= 800)
            {
                document.body.classList.remove(styles["lock-scroll"]);
                unmountNav();
            }
        }

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);

    }, []);

    return (
        <nav className={styles["nav-bar"]}>
            {
                (innerWidth > 800) &&
                <>
                    <ul className={styles["link-list"]}>
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>
                    </ul>
                    <ul className={styles["link-list"]}>
                    {
                        scrollAnchors.map(anchor => (
                            <li key={anchor.to} >
                                <a
                                    className={"#" + activeAnchor === anchor.to ? styles["active-section"] : ""}
                                    href={anchor.to}
                                >{anchor.text}</a>
                            </li>
                        ))
                    }
                    </ul>
                </>
            }
            {
                (innerWidth < 800) &&
                <>
                    <a
                        aria-label="home"
                        href="/"
                        className={`${styles["nav-button"]} ${styles["home-button"]}`}
                    ></a>
                    <button
                        aria-label="open section menu"
                        className={`${styles["nav-button"]} ${styles["ham-menu-button"]}`}
                        onClick={() => mountNav()}
                    ></button>
                    {
                        navMenuOpen &&
                        <div
                            role="dialog"
                            className={`${styles["nav-menu"]} ${navMounted ? styles["nav-menu-open"] : styles["nav-menu-close"]}`}
                        >
                            <div className={styles["nav-menu-title"]}>
                                <h2>Go to</h2>
                                <button
                                    className={styles["close-button"]}
                                    aria-label="Close menu"
                                    onClick={() => unmountNav()}
                                ></button>
                            </div>
                            <ul className={styles["nav-menu-list"]}>
                            {
                                scrollAnchors.map(anchor => (
                                    <li key={anchor.to} >
                                        <a
                                            className={"#" + activeAnchor === anchor.to ? styles["active-menu-section"] : ""}
                                            href={anchor.to}
                                            onClick={() => unmountNav()}
                                        >{anchor.text}</a>
                                    </li>
                                ))
                            }
                            </ul>
                        </div>
                    }
                </>
            }
        </nav>
    )
}

NavBar.propTypes = {
    scrollAnchors: PropTypes.arrayOf(PropTypes.object),
    activeAnchor: PropTypes.string,
}