import React from 'react';

import  './About.css';
import photo2 from '../photo2.png';

function about() {
  return (
    <>
    <div className='Container'>
        <div className='description'>
            <p>
                Hi! I am Ayusha, Welcome to my website. I'm Btech student from Computer Science Department. I was born and raised in Panchkula.
                Currently, I am doing B.E. in Computer Science from Chitkara University. I am a front-end developer. After graduation I want to pursue higher education by doing masters in USA.
                <br></br>
                <br></br>
                I also have an interest in fashion and clothing and ofcourse like others i also love shopping so hereby i created my own website which will not let to stay outfashioned on any special ocasion.
            </p>
        </div>
        <div className='aboutme'>
           <img src={photo2} />
        </div>
    </div>
    </>
  )
}

export default about