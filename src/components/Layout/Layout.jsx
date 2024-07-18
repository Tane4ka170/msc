import { Link, Outlet } from "react-router-dom";

const numbers = Array.from({ length: 10 }, (_, i) => i.toString());
const latinLetters = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(65 + i)
); // A-Z
const cyrillicLetters = [
  "А",
  "Б",
  "В",
  "Г",
  "Д",
  "Е",
  "Ё",
  "Ж",
  "З",
  "И",
  "Й",
  "К",
  "Л",
  "М",
  "Н",
  "О",
  "П",
  "Р",
  "С",
  "Т",
  "У",
  "Ф",
  "Х",
  "Ц",
  "Ч",
  "Ш",
  "Щ",
  "Ъ",
  "Ы",
  "Ь",
  "Э",
  "Ю",
  "Я",
];

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
              Numbers (0-9)
              <ul>
                {numbers.map((number) => (
                  <li key={number}>
                    <Link to={`/songs/numbers/${number}`}>{number}</Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              Latin Letters (A-Z)
              <ul>
                {latinLetters.map((letter) => (
                  <li key={letter}>
                    <Link to={`/songs/latin/${letter}`}>{letter}</Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              Cyrillic Letters (А-Я)
              <ul>
                {cyrillicLetters.map((letter) => (
                  <li key={letter}>
                    <Link to={`/songs/cyrillic/${letter}`}>{letter}</Link>
                  </li>
                ))}
              </ul>
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
