import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFilteredSongs } from "../../api/api";
import {
  NoResults,
  PaginationWrapper,
  SearchInput,
  SongItem,
  SongList,
} from "../AllArchive/AllArchive.styled";
import Loader from "../../components/Loader/Loader";
import { Pagination } from "@mui/material";

function Category() {
  const { digit, letter } = useParams();
  const [songs, setSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [songsPerPage] = useState(10);

  useEffect(() => {
    setLoading(true);
    const queryParam = digit || letter;

    getFilteredSongs(queryParam)
      .then((sortedSongs) => {
        sortedSongs.sort((a, b) => a.artist.localeCompare(b.artist));
        setSongs(sortedSongs);
        setFilteredSongs(sortedSongs);
      })
      .catch((error) => {
        console.error("There was an error fetching the songs!", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [digit, letter]);

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
      <h1>Songs starting with {digit || letter}</h1>
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
            <NoResults>No songs found for your search</NoResults>
          )}
        </>
      )}
    </div>
  );
}

export default Category;
