import React from 'react';
import icon from './music-icon.png';
import "./Header.css";

const Header = () => {
    return (
        <div >
            <div className='header'>
                <div>
                    <img className='icon-img' src={icon} alt="" />
                </div>
                <div className='title'>
                    <h1>My Music Activities</h1>
                </div>
            </div>
            <h1 className='select-music'>Select Today's Music Activities</h1>
        </div>

    );
};

export default Header;