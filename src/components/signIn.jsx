import React,{ useEffect, useState } from 'react';
import auth from './auth';
import firebase from './firebase';
import './styles/signInStyle.css';
function Signin(props) {
    const[members, setMembers]=useState([]);
  
    useEffect(()=>{
        const fetchData = async () => {
        const db = firebase.firestore();
        const data = await db.collection("members").get()
        setMembers(data.docs.map(doc => doc.data()));
        }
        fetchData();
    },[]);
 function action(id){
    const elm = document.getElementById(id);
    if(elm.value === '')
      elm.className = 'inpt contract';
    else
      elm.className = 'inpt expand';
  }
  function checkWord(password, key) {
        let i;
        for (i = 0; i < key.length; i++)
        {
            if (password[i] !== key[i])
                return false;
        }
        return key;
    }
  function verify(){
    const user = document.getElementById('User').value;
    const password = document.getElementById('Pass').value;
    let member, found = 0;;
    if(user && password)
    {
        member=members.map(member => (
            member
        ));
        member.forEach(member => {
            if (member.Username === user) {
                found = 1;
                if (member.Password === password) {
                    let type;
                    type = checkWord(password, 'admin')
                    if (type)
                        auth.login(() => { props.history.push('/dashboard') }, user, type);
                    else {
                        type = checkWord(password, 'student')
                        if (type)
                            auth.login(() => { props.history.push('/dashboard') }, user, type);
                    }
                    return;
                }
                else
                    alert("Password Mismatch!!");
            }
            
        })
        if(!found)
                alert("No such User!!");
    }
  }
    return (
      <>
        <div className='Signin'><br></br>
            <div className='Signin_form'>
                <h1>Sign In</h1><br></br><br></br><br></br>
                <form>
                    <label htmlFor='User' className='indc'>Username</label><br></br>
                    <input id='User' className='inpt contract' type='text' required  onChange={()=>{action('User')}}></input><br></br><br></br><br></br><br></br><br></br>
                    
                    <label htmlFor='Pass'className='indc'>Password</label><br></br>
                    <input id='Pass' className='inpt contract' type='password' required onChange={()=>{action('Pass')}}></input><br></br><br></br><br></br><br></br><br></br>
                    
                    <div className='hold'>
                      <button className='smbt' type='submit' onClick={verify}>Verify</button>
                    </div>
                </form>
            </div>
          </div>
      </>
    );
}
export default Signin;
