import React, { useEffect, useState }  from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import Subjects from '../subject';
import Students from '../student';
import './dashstyle/addStudent.css';
import auth from '../auth';
import firebase from '../firebase';
function RmvStudent() {
    const [students, getStud] = useState([]);

    const subjects = Subjects.getSubjects();
    
    const history = useHistory();
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
    function removeStudent(name, subject) {
        const db = firebase.firestore();
        let removedSet={}
        Object.keys(students[subjects[subject]]).forEach((student) => {
            if (student !== name)
                removedSet ={...removedSet, [student]:true}
        })
        db.collection("Students").doc(subject).set(removedSet).then(() => {
            alert(name + " Successfully Removed from " + subject + "!!")
            Students.setStudents(removedSet)
            arrangeHtmlElements(Object.keys(removedSet), subject)
        }).catch(() => {
            alert(name + " Remove Unsuccessful!!")
        })
    }
    function arrangeHtmlElements(shisya, subject) {
        let accumulate = ``
        shisya.map((block) => (
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
        shisya.forEach((doIt) => {
            document.getElementById(doIt).addEventListener("click", function () {
                removeStudent(doIt, subject);
            })
            setHolderStyle(document.getElementById(doIt))
        })
    }
    function getAllTests() {
        const elm = document.getElementById("subject");
        if (elm.value) {
            Students.setStudents(students[subjects[elm.value]])
            let sishya=Students.getStudents()
            if (sishya.length)
                arrangeHtmlElements(sishya, elm.value);
            else {
                document.getElementById("lets").innerHTML = `<div id="errMessage" className='holder' style="width: 200px;">
                                                                <div   className='legend'
                                                                        style="cursor: pointer; padding-top: 30px;">
                                                                    Hey <b>${auth.isAuthenticated().id.substring(0, (auth.isAuthenticated().id.length - 3))}</b>,<br></br>
                                                                    Unfortunately, NO Tests found in <b>${elm.value}</b><br></br>
                                                                    Please ADD a Test from 'Add New Test',
                                                                </div>
                                                            </div>`
                setErrMessageStyle(document.getElementById("errMessage"))
            }
        }
        else
            document.getElementById("lets").innerHTML = '';
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
export default RmvStudent;