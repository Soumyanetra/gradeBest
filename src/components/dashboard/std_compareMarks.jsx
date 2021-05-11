import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import './dashstyle/allTest.css';
import Subjects from '../subject';
import Students from '../student';
import Tests from '../test';
import auth from '../auth';
import firebase from '../firebase';
function Std_compareMarks() {
    const [tests, getTests] = useState([]);
    const [students, getStud] = useState([]);

    const subjects = Subjects.getSubjects();
    
    const history = useHistory();
    useEffect(()=>{
            const fetchData = async () => {
            const db = firebase.firestore();
            const data = await db.collection("Tests").get()
            getTests(data.docs.map(doc => doc.data()));
            }
            fetchData();
    }, []);
    useEffect(()=>{
            const fetchData = async () => {
            const db = firebase.firestore();
            const data = await db.collection("Students").get()
            getStud(data.docs.map(doc => doc.data()));
            }
            fetchData();
    }, []);
    function checkLog() {
        if(auth.isAuthenticated().id)
          return true;
        history.push('/');
    }
    function setHolderStyle(elm) {
        const holder = elm.style
        holder.width = "50%"
        holder.height = "100px"
        holder.border = "outset"
        holder.margin = "10px"
        holder.padding = "10px"
        holder.borderRadius = "10px"
        holder.boxShadow = "5px 5px 2px grey"
        holder.overflow = "hidden"
        holder.textAlign = "center"
        holder.fontSize = "25px"
    }
    function setErrMessageStyle(elm) {
        const holder = elm.style
        holder.width = "50%"
        holder.height = "300px"
        holder.border = "outset"
        holder.margin = "10px"
        holder.padding = "10px"
        holder.borderRadius = "10px"
        holder.boxShadow = "5px 5px 2px grey"
        holder.overflow = "hidden"
        holder.textAlign = "center"
        holder.fontSize = "25px"
    }
    function arrangeHtmlElements(exam, subject) {
        let accumulate = ``
        let examination = Object.keys(exam)
        examination.map((block) => (
            `<div id="${block}" className='holder' key="${block}" style="width: 200px;">
                    <div    className='legend'
                            style="cursor: pointer; padding-top: 30px;">
                        ${block}
                    </div>
            </div>
            `
        )).forEach(getHtml => {
            accumulate += getHtml;
        })
        document.getElementById("lets").innerHTML = accumulate;
        examination.forEach((doIt) => {
            document.getElementById(doIt).addEventListener("click", function () {
                Tests.setTest(doIt,exam[doIt],subject,exam);
                history.push('/dashboard/student/compareMarks');
            })
            setHolderStyle(document.getElementById(doIt))
        })
    }
    function getAllTests() {
        const elm = document.getElementById("subject");
        let exams = tests.map(test => (
            test
        ))
        Students.setStudents(students[subjects[elm.value]])
        const stud = Students.getStudents()
        let flag = 0;
        stud.forEach(st => {
            if (st === auth.isAuthenticated().id.substring(0, (auth.isAuthenticated().id.length - 3)))
                flag = 1;
        })
        if(flag===1)
            arrangeHtmlElements(exams[subjects[elm.value]], elm.value);
        else{
            document.getElementById("lets").innerHTML =`<div id="errMessage" className='holder' style="width: 200px;">
                                                            <div   className='legend'
                                                                    style="cursor: pointer; padding-top: 30px;">
                                                                Hey <b>${auth.isAuthenticated().id.substring(0,(auth.isAuthenticated().id.length-3))}</b>,<br></br>
                                                                Unfortunately, you are NOT registered to <b>${elm.value}</b><br></br>
                                                                Get yourself in, NOW!! <br></br>
                                                                <i>Contact our ADMINS</i>
                                                            </div>
                                                        </div>`
            setErrMessageStyle(document.getElementById("errMessage"))
        }
        
    }
    return (
        <>
            {checkLog() && (<div className="testHolder">
                <div className="alltst">
                    <label htmlFor="subject" className='indc'>Choose Subject</label><br></br>
                    <select id="subject" className='dropdown' onChange={getAllTests}>
                        <option value="">Choose</option>
                        {Object.keys(subjects).map(subject => (
                            <option key={subject} value={subject}>{subject}</option>
                        ))}
                    </select><br></br><br></br>
                    <div id="lets" className='displayHolder'></div>
                    <br></br>
                    <div className="buttonHolder">
                        <NavLink exact to="/dashboard">
                            <button className='smbt'>Dashboard</button>
                        </NavLink>
                    </div>
                </div>
                    
            </div>)}
        </>    
    );
}
export default Std_compareMarks;