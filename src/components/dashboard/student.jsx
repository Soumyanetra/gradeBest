import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './dashstyle/frameStyle.css';
class Student extends Component{
  menu = [{ index: 1, name: 'Tests',                link: '/dashboard/student/tests',     pic: 'images/test.png' },
          {index: 2,  name:'Compare Yourself',      link:'/dashboard/student/compare',      pic:'images/compare.jpg'},
          {index: 3,  name:'Assignments',           link:'/dashboard/student/assignments',         pic:'images/assgn.jpg' },
          {index: 4,  name: 'Miscellenious',        link: '/dashboard/student/miscellenious', pic: 'images/misscl.png' },
          {index: 5,  name:'Contact',               link:'/dashboard/student/contact',         pic:'images/contact.jpg'},
      ];

  elements=()=>{
    const elm=this.menu.map((block)=>
      <div className='holder' key={block.index}>
        <NavLink exact to={block.link}>
            <img src={block.pic} alt='effect'></img>
            <div className='legend'>{block.name}</div>
        </NavLink>
      </div>
    );
    return elm;
  }

  render() {
    return (
      <React.Fragment>
        <div className='frame'>
            {this.elements()}
        </div>
      </React.Fragment>
    );
  }
}
export default Student;
