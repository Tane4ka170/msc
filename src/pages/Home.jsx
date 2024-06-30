import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to the Archive of Millenium</h1>
      <nav>
        <ul>
          <li>
            <Link to="/songs">View Songs</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
