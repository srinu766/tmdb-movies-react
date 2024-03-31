import React from 'react'

const MovieCard = ({poster_path, name, handleAddWatchList, movieObj, handleDeleteFromWatchList,  watchList}) => {


      function doesContain(){
        for(let i=0; i<watchList.length; i++){
          if(watchList[i].id == movieObj.id){
            return true;
          }
        }
        return false;
      }

  return (
     <div className='h-[40vh] w-[200px] bg-center bg-cover rounded-xl md:h-[40vh] md:w-[30vh] hover:cursor-pointer hover:scale-110 duration-300 flex flex-col items-end' style={{backgroundImage: `url(https://media.themoviedb.org/t/p/w440_and_h660_face/${poster_path})`}}>
    
    {doesContain(movieObj) ? ( 
      <div onClick={()=>handleDeleteFromWatchList(movieObj)} className='m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60'>
      &#10060;
     </div> ):(
      <div onClick={()=>handleAddWatchList(movieObj)} className='m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60'>
      &#128525;
     </div>) }

   

    <div className='text-white  text-xl p-2  w-full text-center bg-gray-900/60'>
      {name}
    </div>
    </div>
  )
}

export default MovieCard
