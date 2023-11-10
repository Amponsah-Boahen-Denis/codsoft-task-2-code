import React from 'react'
import {Link} from 'react-router-dom'
import './bicycles.scss'
function Bicycles() {
    return (
        <div className='bicy'>
            <div>
            <div className='bside'>
    <ul>
                <b> Bicycles policies</b>
                    <li>We give you what you buy</li>
                    <li>No delay in shipping</li>
                    <li>One year warranty for all bikes</li>
                    <li>Bike price negociation is not allowed</li>
                    <li>Shipping fee wouldn't be paid by customer </li>
                </ul>
                <p>Believe in us because we won't let you down
                    and promise  to bring your Bike.
                </p>
    </div>
    <div className='body'>   
    <h1>Look at these beautiful bicycles buy one from here!</h1>
    <div className='bod'>
    <div className='sell'><img src={require('./sales/bike1.png')} alt=""  />
    <p>transport zone bicycles</p><b>$107</b><img className='img' src={require('./sales/star1.png')} alt="" />
    </div>
    <div className='sell'><img src={require('./sales/bike2.png')}  alt=""  />
    <p>transport zone bicycles</p><b>$90</b><img className='img' src={require('./sales/star1.png')} alt="" />
    </div>
    <div className='sell'><img src={require('./sales/bike3.png')}  alt=""  />
    <p>transport zone bicycles</p><b>$150</b><img className='img' src={require('./sales/star2.png')} alt="" />
    </div>
    <div className='sell'><img src={require('./sales/bike4.png')}  alt=""  />
    <p>transport zone bicycles</p><b>$170</b><img className='img' src={require('./sales/star1.png')} alt="" />
    </div>
    <div className='sell'><img src={require('./sales/bike5.png')}  alt=""  />
    <p>transport zone bicycles</p><b>$110</b><img className='img' src={require('./sales/star2.png')} alt="" />
    </div>
    <div className='sell'><img src={require('./sales/bike6.png')}  alt=""  />
    <p>transport zone bicycles</p><b>$180</b><img className='img' src={require('./sales/star1.png')} alt="" />
    </div>
    <div className='sell'><img src={require('./sales/bike7.png')}  alt=""  />
    <p>transport zone bicycles</p><b>$200</b><img className='img' src={require('./sales/star2.png')} alt="" />
    </div>
    <div className='sell'><img src={require('./sales/bike8.png')}  alt=""  />
    <p>transport zone bicycles</p><b>$134</b><img className='img' src={require('./sales/star1.png')} alt="" />
    </div>
    <div className='sell'><img src={require('./sales/bike9.png')}  alt=""  />
    <p>transport zone bicycles</p><b>$156</b><img className='img' src={require('./sales/star1.png')} alt="" />
    </div>
    <div className='sell'><img src={require('./sales/bike10.png')}  alt=""  />
    <p>transport zone bicycles</p><b>$230</b><img className='img' src={require('./sales/star1.png')} alt="" />
    </div>
    <div className='sell'><img src={require('./sales/bike11.png')}  alt=""  />
    <p>transport zone bicycles</p><b>$180</b><img className='img' src={require('./sales/star1.png')} alt="" />
    </div>
    <div className='sell'><img src={require('./sales/bike12.png')}  alt=""  />
    <p>transport zone bicycles</p><b>$108</b><img className='img' src={require('./sales/star1.png')} alt="" />
    </div>
    <div className='sell'><img src={require('./sales/bike13.png')}  alt=""  />
    <p>transport zone bicycles</p><b>$178</b><img className='img' src={require('./sales/star1.png')} alt="" />
    </div>
    <div className='sell'><img src={require('./sales/bike14.png')}  alt=""  />
    <p>transport zone bicycles</p><b>$210</b><img className='img' src={require('./sales/star1.png')} alt="" />
    </div>
    <div className='sell'><img src={require('./sales/bike15.png')}  alt=""  />
    <p>transport zone bicycles</p><b>$170</b><img className='img' src={require('./sales/star1.png')} alt="" />
    </div>
    <div className='sell'><img src={require('./sales/bike16.png')}  alt=""  />
    <p>transport zone bicycles</p><b>$300</b><img className='img' src={require('./sales/star1.png')} alt="" />
    </div>
    <div className='sell'><img src={require('./sales/bike17.png')} alt=""  />
    <p>transport zone bicycles</p><b>$165</b><img className='img' src={require('./sales/star1.png')} alt="" />
    </div>
    <div className='sell'><img src={require('./sales/bike18.png')}  alt=""  />
    <p>transport zone bicycles</p><b>$150</b><img className='img'src={require('./sales/star1.png')}  alt="" />
    </div>
    <div className='sell'><img src={require('./sales/bike19.png')}  alt=""  />
    <p>transport zone bicycles</p><b>$245</b><img className='img' src={require('./sales/star1.png')} alt="" />
    </div>
    </div>
    </div>
            </div>
            <div className='bottom'>
                <div className='div'>
                <Link to='/'>Home</Link>
                </div>
            </div>

        </div>
    )
}

export default Bicycles;
