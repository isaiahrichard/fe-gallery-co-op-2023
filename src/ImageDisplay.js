import React, {useState} from 'react'


const ImageDisplay = ({image, mode}) => {

  return (

    <div>
        <img src={`../public/${image.filename}`} className="displayImg"/>
    { gridMode &&
            <div className='Info'>
                <h1 className='Title'>{image.title["en-US"]}</h1>
                <p className='Description'>{image.description["en-US"]}</p>
            </div> 
    }
    </div>
  )
}

export default ImageDisplay