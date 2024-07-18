import { Link } from "react-router-dom";

const numbers = Array.from({ length: 10 }, (_, i) => i.toString());

function NumbersCategory() {
  return (
    <div>
      <h1>Numbers (0-9)</h1>
      <ul>
        {numbers.map((number) => (
          <li key={number}>
            <Link to={`/songs/numbers/${number}`}>{number}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NumbersCategory;
