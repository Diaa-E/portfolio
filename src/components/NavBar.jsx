import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

export default function NavBar({ scrollAnchors = [{to: "#root", text: "root"}], activeAnchor })
{
    const [navMenuOpen, setNavMenuOpen] = useState(true);
    const dialogRef = useRef(null);

    useEffect(() => {

        if (navMenuOpen)
        {
            dialogRef.current?.showModal();
        }
        else
        {
            dialogRef.current?.close();
        }

    }, [navMenuOpen])

    return (
        <nav className={styles["nav-bar"]}>
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

            <a
                aria-label="home"
                href="/"
                className={`${styles["nav-button"]} ${styles["home-button"]}`}
            ></a>
            <button
                aria-label="open section menu"
                className={`${styles["nav-button"]} ${styles["ham-menu-button"]}`}
                onClick={() => setNavMenuOpen(true)}
            ></button>
            {
                navMenuOpen &&
                <dialog className={styles["nav-menu"]} ref={dialogRef}>
                    <div className={styles["nav-menu-title"]}>
                        <h2>Go to</h2>
                        <button
                            className={styles["close-button"]}
                            aria-label="Close menu"
                            onClick={() => setNavMenuOpen(false)}
                        ></button>
                    </div>
                    <ul className={styles["nav-menu-list"]}>
                    {
                        scrollAnchors.map(anchor => (
                            <li key={anchor.to} >
                                <a
                                    className={"#" + activeAnchor === anchor.to ? styles["active-menu-section"] : ""}
                                    href={anchor.to}
                                    onClick={() => setNavMenuOpen(false)}
                                >{anchor.text}</a>
                            </li>
                        ))
                    }
                    </ul>
                </dialog>
            }
        </nav>
    )
}

NavBar.propTypes = {
    scrollAnchors: PropTypes.arrayOf(PropTypes.object),
    activeAnchor: PropTypes.string,
}