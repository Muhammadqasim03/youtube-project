import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import axios from 'axios';
function Player() {
  const [Images , setImages ]=useState([])
  const refreshImage = () => {
    axios.get("https://picsum.photos/v2/list?limit=10")
      .then(res => {
        console.log(res)
        setImages(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  useEffect(() => {
    refreshImage();
  }, [])
  return (
    <div className='main-container'>
         
        <div className='play-screen'>
             
             <button onClick={refreshImage} >update Images</button>
      </div>
        
      <div>
        {
          Images.map((imgObj) => (
            // <img width={300} src={imgObj.download_url}/>
            <img src={'https://picsum.photos/seed/'+Math.floor(Math.random() * imgObj.id)+'/300/300'}/>
          ))
        }
      </div>

         
    </div>
  )
}

export default Player;