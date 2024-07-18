import { Link } from "react-router-dom";

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

function CyrillicCategory() {
  return (
    <div>
      <h1>Cyrillic Letters (А-Я)</h1>
      <ul>
        {cyrillicLetters.map((letter) => (
          <li key={letter}>
            <Link to={`/songs/cyrillic/${letter}`}>{letter}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CyrillicCategory;
