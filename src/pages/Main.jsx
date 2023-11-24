import React from 'react';
import "../SCSS/pages/_main.scss";
import Nav from "../components/Nav";
import RightBox from "../components/RightBox";
import LeftBox from "../components/LeftBox";

const Main = () => {
    return (
        <>
            <Nav />
            <LeftBox />
            <div className="wrap_container">
                <div className='bg_Line'>
                    <div className='bg_Box'></div>
                    <div className='bg_Box'></div>
                    <div className='bg_Box'></div>
                </div>
                <div className='wrap_grid'>
                    <div className='main_container'>


                    </div>
                </div>
            </div>
            <RightBox />
        </>
    )
}

export default Main