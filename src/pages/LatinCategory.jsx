import { Link } from "react-router-dom";

const latinLetters = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(65 + i)
); // A-Z

function LatinCategory() {
  return (
    <div>
      <h1>Latin Letters (A-Z)</h1>
      <ul>
        {latinLetters.map((letter) => (
          <li key={letter}>
            <Link to={`/songs/latin/${letter}`}>{letter}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LatinCategory;
