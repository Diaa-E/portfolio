import './App.css';

import { Link } from 'react-router-dom';

function App() {

  return (
    <ul>
      <li>
        <Link to={"web"}>Web Portfolio</Link>
      </li>
      <li>
        <Link to={"art"}>Art Portfolio</Link>
      </li>
    </ul>
  )
}

export default App
