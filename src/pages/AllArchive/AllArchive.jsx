import { useEffect, useState } from "react";
import { getAllSongs } from "../../api/api";
import { SearchInput, SongItem, SongList } from "./AllArchive.styled";
import Loader from "../../components/Loader/Loader";

const AllArchive = () => {
  const [songs, setSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSongs = async () => {
      setLoading(true);
      try {
        const allSongs = await getAllSongs();
        setSongs(allSongs);
        setFilteredSongs(allSongs);
      } catch (error) {
        console.error("Error fetching songs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSongs();
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    if (term === "") {
      setFilteredSongs(songs);
    } else {
      const filtered = songs.filter(
        (song) =>
          (song.artist && song.artist.toLowerCase().includes(term)) ||
          (song.song && song.song.toLowerCase().includes(term))
      );
      setFilteredSongs(filtered);
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
      {loading ? (
        <Loader />
      ) : (
        <SongList>
          {filteredSongs.map((song) => (
            <SongItem key={song.id}>
              {song.artist} - {song.song}
            </SongItem>
          ))}
        </SongList>
      )}
    </div>
  );
};

export default AllArchive;
