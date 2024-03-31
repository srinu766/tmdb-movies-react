import React, { useEffect, useState } from "react";
import NavBar from "./componets/NavBar";
import Movies from "./componets/Movies";
import WatchList from "./componets/WatchList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./componets/Banner";

const App = () => {
  const [watchList, setWatchList] = useState([]);

 

  const handleAddWatchList = (movieObj) => {
    let newWatchList = [...watchList, movieObj];
    localStorage.setItem("movieApp", JSON.stringify(newWatchList));
    setWatchList(newWatchList);
  };

  const handleDeleteFromWatchList = (movieObj) => {
    const deleteFromWatchList = watchList.filter((movie) => {
      return movie.id !== movieObj.id;
    });
    localStorage.setItem("movieApp", JSON.stringify(deleteFromWatchList))
    setWatchList(deleteFromWatchList);
  };

  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem("movieApp");
    if (!moviesFromLocalStorage) {
      return;
    }
    setWatchList(JSON.parse(moviesFromLocalStorage));
  }, []);

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies
                  handleAddWatchList={handleAddWatchList}
                  handleDeleteFromWatchList={handleDeleteFromWatchList}
                  watchList={watchList}
                />
              </>
            }
          />
          <Route
            path="/watchlist"
            element={
              <WatchList
                handleDeleteFromWatchList={handleDeleteFromWatchList}
                watchList={watchList}
                setWatchList={setWatchList}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
