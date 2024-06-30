import { Link } from "react-router-dom";

function AllArchive() {
  return (
    <div>
      <h1>Songs Archive</h1>
      <nav>
        <ul>
          <li>
            <Link to="/songs/numbers">Numbers (0-9)</Link>
          </li>
          <li>
            <Link to="/songs/latin">Latin Letters (A-Z)</Link>
          </li>
          <li>
            <Link to="/songs/cyrillic">Cyrillic Letters (А-Я)</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default AllArchive;
