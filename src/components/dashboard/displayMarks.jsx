import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import Students from '../student';
import Tests from '../test';
import auth from '../auth';
import firebase from '../firebase';
import './dashstyle/displayMarksStyle.css';
function DisplayMarks() {
    const students = Students.getStudents()
    const test = Tests.getTest()
    const history=useHistory();
    function checkLog() {
        if(auth.isAuthenticated().id)
          return true;
        
        history.push('/');
    }
    function updateScore() {
        const db = firebase.firestore();
        students.forEach(student => {
            test.testDetails[student] = parseInt(document.getElementById(student).value);
        })
        test.total[test.name]=test.testDetails
        let update = test.total;
        db.collection("Tests").doc(test.subject).update(
            update
        ).then(() => {
            alert(" Successfully Updated!!")
            document.getElementById('masker').style.display= "none";
        })
    }
    function doUnmask(student) {
        document.getElementById('masker').style.display = "block";
        const elm = document.getElementById(student);
        if (parseInt(elm.value) > (test.testDetails.maxMarks)) {
            alert(student + "'s marks exceeding Maximum Marks of " + test.name+"\nFull Marks of "+test.name+": "+test.testDetails.maxMarks);
            elm.value = test.testDetails.maxMarks;
        }
    }
    return (
        <>
            {checkLog() && <div className="studentHolder">
                <div className="alltst" >
                    <h2 className='indc'>{test.name}</h2>
                    <div className="marksHolder">
                        <div className="HolderSth">
                            <table>
                                {students.map(student => (
                                    <tr key={student}>
                                        <td className="Column"><label className='indc' htmlFor={student}>{student}</label></td>
                                        <td className="Column"><input className='inpt expand' id={student} type="number" defaultValue={(test.testDetails[student]) ? test.testDetails[student] : 0} onChange={() => { doUnmask(student) }} ></input></td>
                                    </tr>
                                ))}
                            </table>
                        </div><br></br>
                        <div id="masker" className="buttonHolder" style={{ display: "none" }}>
                            <div  className='smbt modify' onClick={updateScore}>Update</div>
                        </div>
                    </div>
                    <br></br><br></br>
                    <div className="buttonHolder">
                        <NavLink exact to="/dashboard/admin/allTest">
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
export default DisplayMarks;