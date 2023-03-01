import React, {useState} from 'react'

import ImageDisplay from './ImageDisplay';
import imageArray from './images.json'

const GalleryDisplay = () => {

const [gridMode, setGridMode] = useState(true);

let gridClass = "button selected";
let listClass = "button";

const buttonPress = (selectedButton) => {
    if(selectedButton == "grid"){
        gridClass = "button selected";
        listClass = "button";
        setGridMode(true);
    }
    else{
        gridClass = "button";
        listClass = "button selected";
        setGridMode(false);
    }
}

  return (
    <div>
        <div className='PageTitle'>Gallery</div>
        <div>
            <button className={gridClass} onClick={() => buttonPress("grid")}>Grid</button>
            <button className={listClass} onClick={() => buttonPress("list")}>List</button>
        </div>
        {imageArray.map((element, index) => {
            return <ImageDisplay image={element} key={index} mode={gridMode}/>
        })}
    </div>
  )
}

export default GalleryDisplay