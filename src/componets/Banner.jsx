import React from 'react'

const Banner = () => {
  return (
    <div className='h-[20vh] md:h-[70vh] bg-cover bg-center flex items-end' style={{backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPeEzOFkXAY78oe2jKZp1kdtw3YaVNJmd0Tg&usqp=CAU)`}}>
      <div className='text-white text-xl w-full text-center bg-black/80 py-2'>
        Avengers
      </div>
    </div>
  )
}

export default Banner
