import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/songs/numbers">Numbers (0-9)</Link>
            </li>
            <li>
              <Link to="/songs/latin">Latin Letters (A-Z)</Link>
            </li>
            <li>
              <Link to="/songs/cyrillic">Cyrillic Letters (А-Я)</Link>
            </li>
            <li>
              <Link to="/add-song">Add Song</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>&copy; 2024 Music Archive</p>
      </footer>
    </div>
  );
}

export default Layout;
