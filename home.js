import React from 'react'
import './home.scss'
import {Link} from 'react-router-dom'
function Home() {
    return (
        <div className='home'>
           <h1>Buy your transportation machine by clicking the links in the any  of the images
           below thank you.
           </h1>
        <div className='main'>

      
            
     <div className='link' id='car' ><Link classname='links' to='cars.js'>Buy cars</Link></div>
     <div className='link' id="motor"><Link classname='links' to='motors.js'>Buy motors</Link></div>
       
    <div className='link' id="tri"><Link classname='links' to='tricycles.js'>Buy Tricycles</Link></div>
     <div className='link' id='bicy'><Link classname='links' to='bicycles.js'>Buy Bicycles</Link></div>
        </div>

        </div>
    )
}

export default Home;
