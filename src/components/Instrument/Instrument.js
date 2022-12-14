import React from 'react';
import "./Instrument.css";

const Instrument = (props) => {
    const { handleClick, instrument } = props;
    const { id, title, time, age, icon, desc
    } = instrument;


    return (
        <div className='instrument'>
            <img src={icon} alt="" />
            <h2>{title}</h2>
            <p><small>{desc}</small></p>
            <p>Age:{age}</p>
            <p>Time-required:{time}s</p>
            <button onClick={() => handleClick(instrument)} className='btn-add'>Add to list</button>
        </div>
    );
};

export default Instrument;