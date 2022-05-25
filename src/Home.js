import React, { useState } from 'react';
import {
    Switch,
    Route,
    Link
  } from "react-router-dom";
//assets
import arrow from '../src/assets/arrow.svg';
import Consulting from './consulting';
import Fade from 'react-reveal/Fade';

const Home = () => {
    const [openop, setOpenPop] = useState(true);
    // const openMenu = () => {
    //     setOpenPop(false);
    // }
    console.log(openop)
    return (
        <>
            <div className='home' >
                <Fade big>
                <div id="circle">

                
                {openop === true ? 
                <div className='row main-heading'>
                        <div className='col-md-6 text-center'>
                            <img src='https://static.wixstatic.com/media/0177ed_60dd590dfc2a457699db14746501fe54~mv2.png/v1/fill/w_106,h_133,al_c,usm_0.66_1.00_0.01,enc_auto/image_edited_edited.png' />
                            <h1 className='h1'>THE PARTHENON</h1>
                            <h2 className='h2'> CONSULTANCY & ANALYTICS</h2>
                            <div className='button' onClick={() => setOpenPop(false)}>
                                    <img src={arrow} />
                                    <h2 className='h2' >ENTER</h2>
                            </div>

                        </div>
                </div>
                :
                <div className='row main-heading navigation'>
                    <div className='col-md-6 text-center'>
                        <Link to="/" className='link' onClick={() => setOpenPop(true)}><h1 className='h1 small'>Home</h1></Link>
                        <br></br><br></br>
                        <Link to="/consulting" className='link'><h1 className='h1 small'>Consulting</h1></Link>
                        <br></br><br></br>
                        <Link to="/AnalyticsBeta" className='link'><h1 className='h1 small'>Analytics<sub>beta</sub></h1></Link>
                        <br></br><br></br>
                        <Link to="/consulting#contact-us" className='link'><h1 className='h1 small'>Contact Us</h1></Link>
                    </div> 
                </div>
                }
                </div>
                </Fade>
            </div>

        </>
    )
}

export default Home;