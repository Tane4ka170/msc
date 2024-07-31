import { useEffect, useState } from "react";
import { getAllSongs } from "../../api/api";
import {
  NoResults,
  PaginationWrapper,
  SearchInput,
  SongItem,
  SongList,
} from "./AllArchive.styled";
import Loader from "../../components/Loader/Loader";
import { Pagination } from "@mui/material";

const AllArchive = () => {
  const [songs, setSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [songsPerPage] = useState(10);

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
          (song.title && song.title.toLowerCase().includes(term))
      );
      setFilteredSongs(filtered);
    }
    setCurrentPage(1);
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const indexOfLastSong = currentPage * songsPerPage;
  const indexOfFirstSong = indexOfLastSong - songsPerPage;
  const currentSongs = filteredSongs.slice(indexOfFirstSong, indexOfLastSong);

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
        <>
          {currentSongs.length > 0 ? (
            <>
              <SongList>
                {currentSongs.map((song) => (
                  <SongItem key={song._id}>
                    {song.artist} - {song.song}
                  </SongItem>
                ))}
              </SongList>
              <PaginationWrapper>
                <Pagination
                  count={Math.ceil(filteredSongs.length / songsPerPage)}
                  page={currentPage}
                  onChange={handlePageChange}
                  color="primary"
                />
              </PaginationWrapper>
            </>
          ) : (
            <NoResults>No songs found for your search.</NoResults>
          )}
        </>
      )}
    </div>
  );
};

export default AllArchive;
