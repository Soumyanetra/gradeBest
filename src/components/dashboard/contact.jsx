import React from 'react';
import { NavLink } from 'react-router-dom';
import './dashstyle/contact.css';
function Contact() {
    return (
        <>
            <div className="testHolder">
                <div className="alltst">
                    <div className="contact">
                        <table>
                            <tr>
                                <td><h2>BISWADIP SANFUI</h2></td>
                                <div className="details">
                                    <tr>
                                        <td><h3>Contact: 9330403449</h3></td>
                                    </tr>
                                    <tr>
                                        <td><h3>E-Mail: navasikshan20@gmail.com</h3></td>
                                    </tr>
                                </div>
                            </tr>
                            <tr>
                                <td><h2>SOUMYANETRA PAL</h2></td>
                                <div className="details">
                                    <tr>
                                        <td><h3>Contact: 6290688584</h3></td>
                                    </tr>
                                    <tr>
                                        <td><h3>E-Mail: navasikshan20@gmail.com</h3></td>
                                    </tr>
                                </div>
                            </tr>
                            
                        </table>
                    </div>
                    <br></br>
                    <div className="buttonHolder">
                        <NavLink exact to="/dashboard">
                            <button className='smbt'>Dashboard</button>
                        </NavLink>
                    </div>
                </div>
                    
            </div>
        </>    
    );
}
export default Contact;