import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './dashstyle/frameStyle.css';
class Admin extends Component{
  menu=[{index: 1, name:'Add Student',         link:'/dashboard/admin/addstudent',      pic:'images/student.jpg'},
        {index: 2, name:'Add New Test',        link:'/dashboard/admin/newTest',         pic:'images/add_test.jpg' },
        { index: 3, name: 'See All Tests',     link: '/dashboard/admin/allTest',        pic: 'images/all_test.png' },
        { index: 4, name: 'Remove Student',    link: '/dashboard/admin/rmvStd',         pic: 'images/all_test.png' },
        {index: 5, name:'Remove Test',         link:'/dashboard/admin/rmvTest',         pic:'images/all_test.png'},
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
export default Admin;
