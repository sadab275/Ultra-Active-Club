import React, { useEffect, useState } from 'react';
import Instrument from '../Instrument/Instrument';
import './Activities.css';


const Activities = () => {
    const [instruments, setInstruments] = useState([]);
    useEffect(() => {
        fetch('records.json')
            .then(res => res.json())
            .then(data => setInstruments(data))
    }, [])

    const handleClick = (instrument) => {
        console.log(instrument);
    }
    return (
        <div className='activities-container'>
            <div className='cart-container'>
                {
                    instruments.map(instrument => <Instrument
                        key={instrument.id}
                        instrument={instrument}
                        handleClick={handleClick}
                    ></Instrument>)
                }
            </div>
            <div className='exercise-container'>
                <h2>This is for exercise</h2>
            </div>
        </div>
    );
};

export default Activities;