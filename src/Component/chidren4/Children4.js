import React from 'react'
import './children4.css'
const Children4 = (props) => {
  return (
    <>
    <div className='children4'>Children4</div>
    {
        props.children
    }
    </>
  )
}

export default Children4