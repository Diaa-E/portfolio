import { generateRandomNeonColor } from '../utils/neonTextUtils';
import styles from './App.module.css';

import { Link } from 'react-router-dom';

function App() {

  const color1 = generateRandomNeonColor();
  const color2 = generateRandomNeonColor();
  return (
    <div className={styles["topic-background"]}>
      <ul className={styles["links-wrapper"]}>
        <li style={{
          "--off": `var(--neon-${color1}-off)`,
          "--on": `var(--neon-${color1})`,
          "--backlight": `var(--backlight-${color1})`,
          "--glow": `var(--glow-single-${color1})`,
          "--filter": `var(--filter-neon-${color1})`
        }}>
          <Link className={styles["web-link"]} to={"web"}>Web Dev</Link>
        </li>
        <li style={{
          "--off": `var(--neon-${color2}-off)`,
          "--on": `var(--neon-${color2})`,
          "--backlight": `var(--backlight-${color2})`,
          "--glow": `var(--glow-single-${color2})`,
          "--filter": `var(--filter-neon-${color2})`
        }}>
          <Link className={styles["art-link"]} to={"art"}>
            3D Art
          </Link>
          <div className={styles["arrow"]}></div>
        </li>
      </ul>
    </div>
  )
}

export default App
