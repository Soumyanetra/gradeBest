import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import Students from '../student';
import Tests from '../test';
import auth from '../auth';
import './dashstyle/compareMarksStyle.css';
function CompareMarks() {
    const students = Students.getStudents()
    const test = Tests.getTest()
    const history=useHistory();
    function checkLog() {
        if(auth.isAuthenticated().id)
          return true;
        
        history.push('/');
    }
    return (
        <>
            {checkLog() && <div className="studentHolder">
                <div className="alltst" >
                    <table>
                        <tr>
                            <td><h2 className='indc' >{test.name}</h2></td>
                            <td><span className='indc control'><b>({test.testDetails.maxMarks})</b></span></td>
                        </tr>
                    </table>
                    <div className="marksHolder">
                        <div className="nameHolder">
                            <table>
                                {students.map(student => (
                                    <tr key={student}>
                                        <td className="Column"><label className='indc' htmlFor={student}>{student}</label></td>
                                        <td className="Column marks"><span className='indc'>(Marks: {(test.testDetails[student]) ? test.testDetails[student] : 0})</span></td>
                                        <td className="Column grphHolder"><div className='mask'></div><input className='graph' id={student} type="range" min="0" max="100" Value={(test.testDetails[student]) ? (test.testDetails[student]/test.testDetails.maxMarks)*100 : 0} readOnly={true}></input></td>
                                    </tr>
                                ))}
                            </table>
                        </div><br></br>
                    </div>
                    <br></br><br></br>
                    <div className="buttonHolder">
                        <NavLink exact to="/dashboard/student/compare">
                            <button className='smbt'>Back</button>
                        </NavLink>
                    </div><br></br>
                    <div className="buttonHolder">
                        <NavLink exact to="/dashboard">
                            <button className='smbt'>Dashboard</button>
                        </NavLink>
                    </div>
                    
                </div>
                
            </div>
            }
        </>    
    );
}
export default CompareMarks;