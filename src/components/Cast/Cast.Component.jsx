import React from 'react'

const Cast = (props) => {
  return (
    <div>
      <div className='flex flex-col items-center'>
        <div className='w-32 h-32'>
          <img 
            src = {`https://image.tmdb.org/t/p/original${props.image}`}
            alt = "Crew&Cast"
            className='w-full h-full rounded-full object-center object-cover'
          />
        </div>
        <h1 className='text-lg text-gray-800 font-semibold'>{props.castName}</h1>
        <h5 className='text-sm text-gray-600'>as {props.role}</h5>
      </div>
    </div>
  )
}

export default Cast