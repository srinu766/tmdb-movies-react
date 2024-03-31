import React, { useEffect, useState } from "react";
import { genreIds } from "../Utility/genres";

const WatchList = ({ handleDeleteFromWatchList, watchList, setWatchList }) => {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genres"])
  const [currgenre, setCurrGenre] = useState("All Genres")

  const decreaseSort =(watchList)=>{
   const Dsort = watchList.sort((a,b)=>{
      return a?.vote_average - b?.vote_average
    })
    setWatchList([...Dsort])

  }

  const increaseSort =(watchList)=>{
   const Isort = watchList.sort((a,b)=>{
      return b?.vote_average - a?.vote_average
    })
    setWatchList([...Isort])
  }

  useEffect(()=>{
    let temp = watchList.map((movieObj)=>{
      return genreIds[movieObj?.genre_ids[0]]
    })
    temp = new Set(temp)
    setGenreList(["All Genres", ...temp])
  }, [watchList])

  const handlefilter = (genre)=>{
    setCurrGenre(genre)
  }


  return (
    <>
      <div className="flex justify-center flex-wrap m-4">
      {Array.isArray(genreList) && genreList.map((genre)=>{
       return <div onClick={()=>handlefilter(genre)} className={currgenre == genre ? "flex justify-center items-center h-[3rem] w-[9rem] bg-blue-400 rounded-lg text-white font-bold mx-4" : "flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400 rounded-lg text-white font-bold mx-4"}>
          {genre}
        </div>
      })}
      </div>

      <div className="flex justify-center my-4">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Movies..."
          className="px-3 h-[3rem] w-[18rem] bg-gray-200 shadow-sm rounded-lg"
        />
      </div>

      <div className="rounded-lg border border-gray-200 m-8">
        <table className="w-full text-gray-600 text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>

              <th className="flex  justify-center">
                <div className="p-2" >
                  <i onClick={()=>increaseSort(watchList)} className="fa-sharp fa-solid fa-arrow-up"></i>
                </div>
                <div className="p-2">
                  <th>Ratings</th>
                </div>

                <div className="p-2" onClick={()=>decreaseSort(watchList)}>
                  <i onClick={()=>decreaseSort(watchList)} className="fa-sharp fa-solid fa-arrow-down"></i>
                </div>
              </th>

              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchList.filter((movieObj)=>{
              if(currgenre == "All Genres"){
                return true
              }else{
                return genreIds[movieObj.genre_ids[0]] == currgenre
              }
            }).filter((movieObj) => {
                return movieObj?.title
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase());
              })
              .map((movieObj, index) => {
                return (
                  <tr key={index} className="border-b-2">
                    <td className="flex items-center px-6">
                      <img
                        className="h-[6rem] w-[10rem] p-1 rounded-2xl"
                        src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2/${movieObj?.poster_path}`}
                        alt=""
                      />
                      <div className="mx-4">{movieObj?.title}</div>
                    </td>
                    <td>{movieObj?.vote_average}</td>
                    <td>{movieObj?.popularity}</td>
                    <td>{genreIds[movieObj?.genre_ids[0]]}</td>
                    <td>
                      <button
                        className="bg-red-700 p-2 hover:bg-red-900  rounded-lg text-white text-sm"
                        onClick={() => handleDeleteFromWatchList(movieObj)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default WatchList;
