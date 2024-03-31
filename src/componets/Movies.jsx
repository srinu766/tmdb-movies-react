import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";

const Movies = ({handleAddWatchList, handleDeleteFromWatchList, watchList}) => {

  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const handlePrev = () => {
    if (pageNo == 1) {
      setPageNo(1);
    } else {
      setPageNo(pageNo - 1);
    }
  };
  const handleNext = () => {
    if (pageNo < 500) {
      setPageNo(pageNo + 1);
    }
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=1c1d19e5ff4ce0ef3d7e50fabacb00e6&language=en-US&page=${pageNo}`
      )
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => console.log("error", err));
  },[pageNo]);

  return (
    <div>
      <div className="text-2xl font-bold text-center p-5">Trending Movies</div>
      <div className="flex flex-row flex-wrap justify-around col-span-8 gap-4">
        {movies.map((movie, index) => {
          return (
            <MovieCard key={index}
            movieObj={movie}
              poster_path={movie.poster_path}
              name={movie.original_title}
              handleAddWatchList={handleAddWatchList}
              handleDeleteFromWatchList={handleDeleteFromWatchList}
              watchList={watchList}
            />
          );
        })}
      </div>
      <Pagination
        handleNext={handleNext}
        handlePrev={handlePrev}
        pageNo={pageNo}
      />
    </div>
  );
};

export default Movies;
