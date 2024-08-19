import styles from './App.module.css';

import { Link } from 'react-router-dom';

function App() {

  return (
    <div className={styles["topic-background"]}>
      <ul className={styles["links-wrapper"]}>
        <li>
          <Link className={styles["web-link"]} to={"web"}>Web Dev</Link>
        </li>
        <li>
          <Link className={styles["art-link"]} to={"art"}>3D Art</Link>
        </li>
      </ul>
    </div>
  )
}

export default App
