import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/comingSoonStyle.css';
function ComingSoon() {
    return (
        <>
            <div className="studentHolder">
                <div className="soon">
                    <h1>Comming Soon!!</h1>
                </div>
                <div className="buttonHolder">
                    <NavLink exact to="/dashboard">
                        <button className='smbt'>Dashboard</button>
                    </NavLink>
                </div> 
            </div>
        </>    
    );
}
export default ComingSoon;