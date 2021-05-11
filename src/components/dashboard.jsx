import React from 'react';
import { useHistory } from 'react-router-dom';
import Student from './dashboard/student';
import Admin from './dashboard/admin';
import auth from './auth';
import {NavLink} from 'react-router-dom';
import './styles/dashboardStyle.css';

function Dashboard(){
  const history=useHistory();
  function checkLog(){
    if(auth.isAuthenticated().id)
      return true;
    
    history.push('/');
    }
    function signOut(){
        auth.logout();
    }
  return (
      <>
        {checkLog() && (<div className='dashboard'>
            <h1>Welcome {auth.isAuthenticated().id.substring(0,(auth.isAuthenticated().id.length-3))}</h1>
            {auth.isAuthenticated().type === 'student' && (<Student></Student>)} 
            {auth.isAuthenticated().type === 'admin' && (<Admin></Admin>)}
            <NavLink exact to='/' >
                <button className="signOut" onClick={() => { signOut() }}>Sign Out</button>
            </NavLink>
        </div>)}
      </>
  );
}
export default Dashboard;
