import React from "react";
import {HashRouter as Router,Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Signin from './components/signIn';
import Dashboard from './components/dashboard';
import addStudent from './components/dashboard/addStudent';
import addTest from './components/dashboard/addTest';
import allTest from './components/dashboard/allTest';
import displayMarks from './components/dashboard/displayMarks';
import std_testMarks from './components/dashboard/std_testMarks';
import std_compareMarks from './components/dashboard/std_compareMarks';
import compareMarks from './components/dashboard/compareMarks';
import comingSoon from './components/comingSoon';
import contact from './components/dashboard/contact';
import removeStd from './components/dashboard/rmvStd';

function App() {
  
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Switch>
          <Route exact path='/' component={Signin}></Route>
          <Route path='/dashboard' exact component={Dashboard}></Route>

          <Route path='/dashboard/admin/addstudent' exact component={addStudent}></Route>
          <Route path='/dashboard/admin/newTest' exact component={addTest}></Route>
          <Route path='/dashboard/admin/allTest' exact component={allTest}></Route>
          <Route path='/dashboard/admin/displayMarks' exact component={displayMarks}></Route>
          <Route path='/dashboard/admin/rmvStd' exact component={removeStd}></Route>
          <Route path='/dashboard/admin/rmvTest' exact component={comingSoon}></Route>
          

          <Route path='/dashboard/student/tests' exact component={std_testMarks}></Route>
          <Route path='/dashboard/student/compare' exact component={std_compareMarks}></Route>
          <Route path='/dashboard/student/compareMarks' exact component={compareMarks}></Route>
          <Route path='/dashboard/student/contact' exact component={contact}></Route>

          <Route path='/dashboard/student/assignments' exact component={comingSoon}></Route>
          <Route path='/dashboard/student/miscellenious' exact component={comingSoon}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
