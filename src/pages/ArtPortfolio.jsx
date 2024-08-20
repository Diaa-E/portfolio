import NavBar from "../components/NavBar";
import styles from "./ArtPortfolio.module.css";

export default function ArtPortfolio()
{
    return (
        <>
            <NavBar scrollAnchors={[]} />
            <div className={styles["container"]}>
                <h1 className={styles["warning"]}>Dead End</h1>
                <h2 className={styles["details"]}>This section is still under construction.</h2>
            </div>
        </>
    )
}