import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import Instrument from '../Instrument/Instrument';
import './Activities.css';


const Activities = () => {
    const [instruments, setInstruments] = useState([]);
    const [acti, setActi] = useState([]);
    useEffect(() => {
        fetch('records.json')
            .then(res => res.json())
            .then(data => setInstruments(data))
    }, [])

    const handleClick = (instrument) => {
        console.log(instrument);
        const newActi = [...acti, instrument];
        setActi(newActi);
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
                <Exercise acti={acti}></Exercise>

            </div>
        </div>
    );
};

export default Activities;