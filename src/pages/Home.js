import React from 'react'
import './Home.css'
import beauty1 from '../beauty1.png';
import beauty5 from '../beauty5.jpeg';
import beauty3 from '../beauty3.jpeg';
import beauty6 from '../beauty6.png';


function home() {
  return (
    <>
    <div className="container"> 
        <div className="imagecontent">
                <div className="img1">
                    <img src={beauty3} className="images"/>
                </div>
                <div className="img2">
                    <img src={beauty6} className="images"/>
                </div>
                <div className="img3">
                    <img src={beauty5} className="images"/>
                </div>
                <div className="img4">
                    <img src={beauty1} className="images"/>
                </div> 
       </div>
       <div className='content'>
        <p className='para'>
            <h1 >E X Q U I S I T E   C O L L E C T I O N</h1> 
            <h3 > BY- AYUSHA</h3>
        </p>
       </div>
    </div>
  
    </>
  )
}

export default home