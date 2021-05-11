import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import Subjects from '../subject';
import './dashstyle/addStudent.css';
import auth from '../auth';
import firebase from '../firebase';
function AddTest() {
    const subjects = Subjects.getSubjects();
    const history = useHistory();
    const [tests, getTests] = useState([]);

    useEffect(()=>{
        const fetchData = async () => {
        const db = firebase.firestore();
        const data = await db.collection("Tests").get()
        getTests(data.docs.map(doc => doc.data()));
        }
        fetchData();
    }, []);
    
    function checkLog(){
        if(auth.isAuthenticated().id)
          return true;
        
        history.push('/');
    }
    function action(id){
        const elm = document.getElementById(id);
        if(elm.value === '')
          elm.className = 'inpt contract';
        else
          elm.className = 'inpt expand';
    }
    function onRegister() {
        const db = firebase.firestore();
        const elm = document.getElementById("tstName");
        const sub = document.getElementById("subject").value;
        const marks = document.getElementById("tstMarks");
        let flag = 0;
        if (sub){
            Object.keys(tests[subjects[sub]]).forEach(test => {
                if (elm.value === test) {
                    flag = 1;
                    alert("Two Tests with same name is not allowed!!\nPlease SET a diferent Test Name...");
                }
            })
            if(!flag)
            {
                if (elm.value && marks.value) {
                db.collection("Tests").doc(sub).update({
                    [elm.value]: {
                        maxMarks: marks.value
                    }
                }).then(() => {
                    alert(elm.value + " Successfully Added!!")
                    elm.value = '';
                    marks.value = 0;
                })
                }
                else {
                    if (elm.value === '')
                        alert("Please Give a Test Title!!")
                    else
                        alert("Please Provide the Maximum Marks!!")
                }
            }
        }
        else
            alert("Please Choose a Subject!!")
    }
    return (
            <>
            {checkLog() && (<div className="studentHolder">
                <div className="stdAdd">
                    <label htmlFor="tstName" className='indc'>Enter Test Name</label><br></br>
                    <input id="tstName" className='inpt contract' type="text" placeholder="Eg. Prep Check Test - 1" required onChange={() => { action('tstName') }}></input><br></br><br></br>
                    <label htmlFor="tstMarks" className='indc'>Enter Full Marks</label><br></br>
                    <input id="tstMarks" className='inpt contract' type="number" placeholder="Eg. 100" required onChange={() => { action('tstMarks') }}></input><br></br><br></br>
                    <label htmlFor="subject" className='indc'>Choose Subject</label><br></br>
                    <select id="subject" className='dropdown'>
                        <option value="">Choose</option>
                        {Object.keys(subjects).map(subject => (
                            <option key={subject} value={subject}>{subject}</option>
                        ))}
                    </select>
                    <br></br><br></br><br></br><br></br><br></br><br></br>
                    <div className="buttonHolder">
                        <button className='smbt' onClick={onRegister}>Register</button>
                        <br></br><br></br>
                        <NavLink exact to="/dashboard">
                            <button className='smbt'>Dashboard</button>
                        </NavLink>
                    </div>
                </div>
            </div>)}
            </>    
    );
}
export default AddTest;