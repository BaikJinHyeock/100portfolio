import React, { useState, useEffect }  from 'react';
import "../SCSS/pages/_main.scss";
import Nav from "../components/Nav";
// import RightBox from "../components/RightBox";
import LeftBox from "../components/LeftBox";

const Main = () => {
    return (
        <>
            <Nav />
            <LeftBox />
            <div className="wrap_container">
                <div className='bg_Line'>
                    <div className='bg_Box'>  
                    Intro</div>
                    <div className='bg_Box'>Developer</div>
                    <div className='bg_Box'></div>
                    <div className='bg_Box'>Web FrontEnd</div>
                    <div className='bg_Box'></div>
                    <div className='bg_Box'></div>
                    <div className='bg_Box'>Project</div>
                    <div className='bg_Box'></div>
                </div>
                <div className='wrap_grid'>
                    <div className='main_container'>
                        <div className='main_box'>
                            <img src="https://i.ibb.co/hXV4Tx8/selfie.png" alt="main_img" />
                        </div>
                    </div>
                    <div className='main_container'>

                    </div>
                </div>
            </div>
            {/* <RightBox /> */}
        </>
    )
}

export default Main