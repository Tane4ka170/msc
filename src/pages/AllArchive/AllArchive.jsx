import { useEffect, useState } from "react";
import { getAllSongs, getFilteredSongs } from "../../api/api";
import { SearchInput, SongItem, SongList } from "./AllArchive.styled";

const AllArchive = () => {
  const [songs, setSongs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const allSongs = await getAllSongs();
        setSongs(allSongs);
      } catch (error) {
        console.error("Error fetching songs:", error);
      }
    };
    fetchSongs();
  }, []);

  const handleSearch = async (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value === "") {
      const allSongs = await getAllSongs();
      setSongs(allSongs);
    } else {
      const filteredSongs = await getFilteredSongs(e.target.value);
      setSongs(filteredSongs);
    }
  };

  return (
    <div>
      <h1>Songs Archive</h1>
      <SearchInput
        type="text"
        placeholder="Search for a song..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <SongList>
        {songs.map((song) => (
          <SongItem key={song.id}>
            {song.title} - {song.artist}
          </SongItem>
        ))}
      </SongList>
    </div>
  );
};

export default AllArchive;
