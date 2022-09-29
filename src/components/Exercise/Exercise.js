import React, { useState } from 'react';
import './Exercise.css';
import { ToastContainer, toast } from 'react-toastify';

const Exercise = (props) => {
    const [off, setOff] = useState([]);
    const { acti } = props;

    const breakClick = (e) => {

        console.log(e.target.innerText);
        const newSetC = [e.target.innerText];
        setOff(newSetC);
    }


    let total = 0;
    for (const role of acti) {
        total = total + role.time;
    }
    const notify = () => toast("Woww Activity Completed!");
    return (
        <div className='exercise'>
            <div>
                <h4>Exercise addedr</h4>
                <p>Selected: {acti.length}</p>
            </div>

            <div className='perso-name'>
                <img src="https://scontent.fcgp3-2.fna.fbcdn.net/v/t39.30808-1/267638789_916685805638862_2171611497682861835_n.jpg?stp=c0.17.160.160a_dst-jpg_p160x160&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=m0bRCRp83Y8AX-UJj7Z&_nc_ht=scontent.fcgp3-2.fna&oh=00_AT_os65pN2MIdhI_n68SP-rNtCw1BZI5pW5i_eptegdEKw&oe=633A1C19" alt="" srcset="" />
                <div>
                    <h3>Mubtasimur Rahman Sadab</h3>
                    <p><small>Web Developer</small></p>
                </div>
            </div>

            <div className='perso-info'>
                <div className='perso-infor'>
                    <div>
                        <h2>78 <small>kg</small></h2>
                    </div>
                    <div>
                        <h2>5'8'' <small>inches</small></h2>
                    </div>
                    <div>
                        <h2>25 <small>yrs</small></h2>
                    </div>

                </div>
                <div className='info-name'>
                    <p>Weight</p>
                    <p>Height</p>
                    <p>Age</p>
                </div>

            </div>
            <h2>Add a break</h2>
            <div className='break-btn-container'>
                <button onClick={(e) => breakClick(e)} className='break-btn'><span>10</span>s</button>
                <button onClick={(e) => breakClick(e)} className='break-btn'><span>20</span>s</button>
                <button onClick={(e) => breakClick(e)} className='break-btn'><span>30</span>s</button>
                <button onClick={(e) => breakClick(e)} className='break-btn'><span>40</span>s</button>

            </div>
            <h2>Exercise Details</h2>
            <div className='time-show-exercise'>
                <h3>Exercise time</h3>
                <p>{total} Seconds</p>
            </div>
            <div className='time-show-break'>
                <h3>Break time</h3>
                <p>{off}</p>
            </div>
            <button onClick={notify} className='completed-btn'>Activity Completed</button>

            <ToastContainer />
        </div>
    );
};

export default Exercise;