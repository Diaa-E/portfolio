import styles from './App.module.css';

import { Link } from 'react-router-dom';

function App() {

  return (
    <div className={styles["topic-background"]}>
      <h1 className={styles["title"]}>
        <span className={styles["graffiti-one"]}>Select a </span>
        <br />
        <span className={styles["graffiti-two"]}>portfolio</span>
      </h1>
      <ul className={styles["links-wrapper"]}>
        <li>
          <Link className={styles["web-link"]} to={"web"}>Web <br /> Development</Link>
        </li>
        <li>
          <Link className={styles["art-link"]} to={"art"}>3D Art</Link>
        </li>
      </ul>
    </div>
  )
}

export default App
