import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFilteredSongs } from "../api/api";

function Category() {
  const { digit, letter } = useParams();
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    let queryParam = digit || letter;

    getFilteredSongs(queryParam)
      .then((sortedSongs) => {
        sortedSongs.sort((a, b) => a.artist.localeCompare(b.artist));
        setSongs(sortedSongs);
      })
      .catch((error) => {
        console.error("There was an error fetching the songs!", error);
      });
  }, [digit, letter]);

  return (
    <div>
      <h1>Songs starting with {digit || letter}</h1>
      <ul>
        {songs.map((song) => (
          <li key={song._id}>
            {song.artist} - {song.song}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
