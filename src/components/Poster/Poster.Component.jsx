import React from 'react'

const Poster = (props) => {
  return (
    <div><h4 className='font-bold'>{props.original_title}</h4> {props.overview} </div>
  )
}

export default Poster;