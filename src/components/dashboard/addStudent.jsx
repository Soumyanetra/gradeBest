import React, { useEffect, useState }  from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import Subjects from '../subject';
import './dashstyle/addStudent.css';
import auth from '../auth';
import firebase from '../firebase';
function AddStudent() {
    const subjects = Subjects.getSubjects();
    const history = useHistory();
    const [members, getMembers] = useState([]);
    useEffect(()=>{
            const fetchData = async () => {
            const db = firebase.firestore();
            const data = await db.collection("members").get()
            getMembers(data.docs.map(doc => doc.data()));
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
        const elm = document.getElementById("stdName");
        const sub = document.getElementsByClassName("subject");
        const std = document.getElementById("standard").value;
        members.forEach(member => {
            if (member.Username.substring(0, (member.Username.length - 3)) === elm.value) {
                if (member.Class !== std) {
                    elm.value += "_" + std;
                    alert("Student of same name but of different class already Present!!\nChanged Username to " + elm.value);
                }
            }
        })
        if (elm.value && sub.length && std) {
            db.collection('members').doc(elm.value).set({
                Username: elm.value + '@NE',
                Password: 'student_' + std,
                Class: std
            }).then(() => {
                let flag = 0;
                for (let i = 0; i < sub.length; ++i) {
                    if (sub[i].checked)
                    {
                        if (sub[i].value.split('_')[1] === std) {
                            db.collection('Students').doc(sub[i].value).update({
                                [elm.value]: true
                            }).then(() => {
                                alert(elm.value + " Successfully Added to " + sub[i].value + "!!")
                                sub[i].checked = false
                                elm.value = ''
                            })
                            flag = 1
                        }
                        else {
                            flag = 2
                            elm.value = ''
                            sub[i].checked = false
                            alert("Subject and Student Standard does not Match!!\nAdd Unsuccessful!!")
                        }
                            
                    }
                }
                if (flag === 0)
                alert("Please Choose ATLEAST one Subject!!")
            })
        }
        else {
            if (elm.value === '')
                alert("Please Enter Student Name!!")
        }
    }
    return (
        <>
            {checkLog() && (<div className="studentHolder">
                <div className="stdAdd">
                    <label htmlFor="stdName" className='indc'>Enter Student Name</label><br></br>
                    <input id="stdName" className='inpt contract' type="text" placeholder="Eg. Abc" required onChange={() => { action('stdName') }}></input><br></br><br></br>
                    <label htmlFor="standard" className='indc'>Select Class</label><br></br>
                    <select id="standard" className='dropdown'>
                        <option value="IX">Class IX</option>
                        <option value="X">Class X</option>
                    </select><br></br><br></br><br></br><br></br>
                    <label className='indc'>Choose Subject(s)</label><br></br>
                    <div className="subjectHolder">
                        {Object.keys(subjects).map(subject => (
                            <>
                                <input key={subject} id={subject} className="subject checkInpt" type="checkbox" value={subject}></input>
                                <label htmlFor={subject} className='indc chkLbl'>{subject}</label><br></br>
                            </>
                        ))}
                    </div>
                    <br></br>
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
export default AddStudent;