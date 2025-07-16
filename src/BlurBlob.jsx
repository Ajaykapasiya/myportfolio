import React from 'react'
import PropTypes from 'prop-types'

const BlurBlob = ({postion , size}) => {
    // Destructure postion and size
    const {top , left} = postion
    const {width , height} = size
  return (
    <div className='absolute'
    style={{
    top:top,
    left:left,
    width:width,
    height:height,
    transform:'translate(-50%,-50%)',
    }}
    >
      <div className='w-full h-full bg-purple-500 rounded-full opacity-20 blur-3xl animate-blob'></div>
    </div>
  )
}
// Define props type
BlurBlob.propTypes = {
    postion: PropTypes.shape({
        top:PropTypes.string,
        left:PropTypes.string,
    }),
    size: PropTypes.shape = ({
        width:PropTypes.string,
        height:PropTypes.string,
    })
}

export default BlurBlob
 