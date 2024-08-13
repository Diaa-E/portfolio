import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function NavBar({ scrollAnchors = [{to: "#root", text: "root"}], activeAnchor })
{
    return (
        <nav className={styles["nav-bar"]}>
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
            <ul className={styles["link-list"]}>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
            </ul>

            <button aria-label="open section menu" className={styles["ham-menu-button"]}></button>
        </nav>
    )
}

NavBar.propTypes = {
    scrollAnchors: PropTypes.arrayOf(PropTypes.object),
    activeAnchor: PropTypes.string,
}