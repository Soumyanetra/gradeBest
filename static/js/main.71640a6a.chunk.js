(this.webpackJsonpmark_logger=this.webpackJsonpmark_logger||[]).push([[0],{47:function(e,t,n){},48:function(e,t,n){},53:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},71:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var s=n(3),c=n.n(s),a=n(55),r=n.n(a),i=(n(63),n(12)),d=n(18),l=(n(64),n(24)),o=n(25),u=n(35),j=n(34),b=(n(65),n(0)),h=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"head",children:[Object(b.jsx)("img",{className:"logo",src:"logo.png",alt:"logo"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{className:"inst",children:"NAVASIKSHAN ERAS"}),Object(b.jsx)("h2",{className:"inst",children:"A New Verge Of Learning..."})]})]})}}]),n}(s.Component),m=n(15),x=n.n(m),O=n(20),p=n(21),f=new(function(){function e(){Object(l.a)(this,e),this.currentUser={id:"",type:""}}return Object(o.a)(e,[{key:"login",value:function(e,t,n){var s=this.currentUser;s.id=t,s.type=n,e()}},{key:"logout",value:function(){var e=this.currentUser;e.id="",e.type=""}},{key:"isAuthenticated",value:function(){return this.currentUser}}]),e}()),v=n(51);v.a.initializeApp({apiKey:"AIzaSyCJLwDGid-UH2ktssSjI_C6wfh1nGuUllg",authDomain:"navasikshan-eras-edc75.firebaseapp.com",projectId:"navasikshan-eras-edc75",storageBucket:"navasikshan-eras-edc75.appspot.com",messagingSenderId:"555698155722",appId:"1:555698155722:web:6b698d0e82f7d54f788433",measurementId:"G-TEWRTPZLKC"});var g=v.a;n(71);var y=function(e){var t=Object(s.useState)([]),n=Object(p.a)(t,2),c=n[0],a=n[1];function r(e){var t=document.getElementById(e);""===t.value?t.className="inpt contract":t.className="inpt expand"}function i(e,t){var n;for(n=0;n<t.length;n++)if(e[n]!==t[n])return!1;return t}return Object(s.useEffect)((function(){(function(){var e=Object(O.a)(x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=g.firestore(),e.next=3,t.collection("members").get();case 3:n=e.sent,a(n.docs.map((function(e){return e.data()})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"Signin",children:[Object(b.jsx)("br",{}),Object(b.jsxs)("div",{className:"Signin_form",children:[Object(b.jsx)("h1",{children:"Sign In"}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)("form",{children:[Object(b.jsx)("label",{htmlFor:"User",className:"indc",children:"Username"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{id:"User",className:"inpt contract",type:"text",required:!0,onChange:function(){r("User")}}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{htmlFor:"Pass",className:"indc",children:"Password"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{id:"Pass",className:"inpt contract",type:"password",required:!0,onChange:function(){r("Pass")}}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"hold",children:Object(b.jsx)("button",{className:"smbt",type:"submit",onClick:function(){var t=document.getElementById("User").value,n=document.getElementById("Pass").value,s=0;t&&n&&(c.map((function(e){return e})).forEach((function(c){if(c.Username===t){var a;if(s=1,c.Password===n)return void(((a=i(n,"admin"))||(a=i(n,"student")))&&f.login((function(){e.history.push("/dashboard")}),t,a));alert("Password Mismatch!!")}})),s||alert("No such User!!"))},children:"Verify"})})]})]})]})})},N=(n(53),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var s=arguments.length,c=new Array(s),a=0;a<s;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).menu=[{index:1,name:"Tests",link:"/dashboard/student/tests",pic:"images/test.png"},{index:2,name:"Compare Yourself",link:"/dashboard/student/compare",pic:"images/compare.jpg"},{index:3,name:"Assignments",link:"/dashboard/student/assignments",pic:"images/assgn.jpg"},{index:4,name:"Miscelleneous",link:"/dashboard/student/miscellaneous",pic:"images/misscl.png"},{index:5,name:"Contact",link:"/dashboard/student/contact",pic:"images/contact.jpg"}],e.elements=function(){return e.menu.map((function(e){return Object(b.jsx)("div",{className:"holder",children:Object(b.jsxs)(i.b,{exact:!0,to:e.link,children:[Object(b.jsx)("img",{src:e.pic,alt:"effect"}),Object(b.jsx)("div",{className:"legend",children:e.name})]})},e.index)}))},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)(c.a.Fragment,{children:Object(b.jsx)("div",{className:"frame",children:this.elements()})})}}]),n}(s.Component)),k=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var s=arguments.length,c=new Array(s),a=0;a<s;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).menu=[{index:1,name:"Add Student",link:"/dashboard/admin/addstudent",pic:"images/student.jpg"},{index:2,name:"Add New Test",link:"/dashboard/admin/newTest",pic:"images/add_test.jpg"},{index:3,name:"See All Tests",link:"/dashboard/admin/allTest",pic:"images/all_test.png"},{index:4,name:"Remove Student",link:"/dashboard/admin/rmvStd",pic:"images/rmvStd.jpg"},{index:5,name:"Remove Test",link:"/dashboard/admin/rmvTest",pic:"images/rmvTest.jpg"}],e.elements=function(){return e.menu.map((function(e){return Object(b.jsx)("div",{className:"holder",children:Object(b.jsxs)(i.b,{exact:!0,to:e.link,children:[Object(b.jsx)("img",{src:e.pic,alt:"effect"}),Object(b.jsx)("div",{className:"legend",children:e.name})]})},e.index)}))},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)(c.a.Fragment,{children:Object(b.jsx)("div",{className:"frame",children:this.elements()})})}}]),n}(s.Component);n(76);var S=function(){var e=Object(d.useHistory)();return Object(b.jsx)(b.Fragment,{children:function(){if(f.isAuthenticated().id)return!0;e.push("/")}()&&Object(b.jsxs)("div",{className:"dashboard",children:[Object(b.jsxs)("h1",{children:["Welcome ",f.isAuthenticated().id.substring(0,f.isAuthenticated().id.length-3)]}),"student"===f.isAuthenticated().type&&Object(b.jsx)(N,{}),"admin"===f.isAuthenticated().type&&Object(b.jsx)(k,{}),Object(b.jsx)(i.b,{exact:!0,to:"/",children:Object(b.jsx)("button",{className:"signOut",onClick:function(){f.logout()},children:"Sign Out"})})]})})},E=n(33),w=new(function(){function e(){Object(l.a)(this,e),this.currentUser={Biology_X:0,Chemistry_X:1,Computer_X:2,Mathematics_X:3,Physics_X:4}}return Object(o.a)(e,[{key:"getSubjects",value:function(){return this.currentUser}}]),e}());n(47);var A=function(){var e=w.getSubjects(),t=Object(d.useHistory)(),n=Object(s.useState)([]),c=Object(p.a)(n,2),a=c[0],r=c[1];return Object(s.useEffect)((function(){(function(){var e=Object(O.a)(x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=g.firestore(),e.next=3,t.collection("members").get();case 3:n=e.sent,r(n.docs.map((function(e){return e.data()})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(b.jsx)(b.Fragment,{children:function(){if(f.isAuthenticated().id)return!0;t.push("/")}()&&Object(b.jsx)("div",{className:"studentHolder",children:Object(b.jsxs)("div",{className:"stdAdd",children:[Object(b.jsx)("label",{htmlFor:"stdName",className:"indc",children:"Enter Student Name"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{id:"stdName",className:"inpt contract",type:"text",placeholder:"Eg. Abc",required:!0,onChange:function(){!function(e){var t=document.getElementById(e);""===t.value?t.className="inpt contract":t.className="inpt expand"}("stdName")}}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{htmlFor:"standard",className:"indc",children:"Select Class"}),Object(b.jsx)("br",{}),Object(b.jsxs)("select",{id:"standard",className:"dropdown",children:[Object(b.jsx)("option",{value:"IX",children:"Class IX"}),Object(b.jsx)("option",{value:"X",children:"Class X"})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{className:"indc",children:"Choose Subject(s)"}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"subjectHolder",children:Object.keys(e).map((function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("input",{id:e,className:"subject checkInpt",type:"checkbox",value:e},e),Object(b.jsx)("label",{htmlFor:e,className:"indc chkLbl",children:e}),Object(b.jsx)("br",{})]})}))}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{className:"buttonHolder",children:[Object(b.jsx)("button",{className:"smbt",onClick:function(){var e=g.firestore(),t=document.getElementById("stdName"),n=document.getElementsByClassName("subject"),s=document.getElementById("standard").value;a.forEach((function(e){e.Username.substring(0,e.Username.length-3)===t.value&&e.Class!==s&&(t.value+="_"+s,alert("Student of same name but of different class already Present!!\nChanged Username to "+t.value))})),t.value&&n.length&&s?e.collection("members").doc(t.value).set({Username:t.value+"@NE",Password:"student_"+s,Class:s}).then((function(){for(var c=0,a=function(a){n[a].checked&&(n[a].value.split("_")[1]===s?(e.collection("Students").doc(n[a].value).update(Object(E.a)({},t.value,!0)).then((function(){alert(t.value+" Successfully Added to "+n[a].value+"!!"),n[a].checked=!1,t.value=""})),c=1):(c=2,t.value="",n[a].checked=!1,alert("Subject and Student Standard does not Match!!\nAdd Unsuccessful!!")))},r=0;r<n.length;++r)a(r);0===c&&alert("Please Choose ATLEAST one Subject!!")})):""===t.value&&alert("Please Enter Student Name!!")},children:"Register"}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)(i.b,{exact:!0,to:"/dashboard",children:Object(b.jsx)("button",{className:"smbt",children:"Dashboard"})})]})]})})})};var T=function(){var e=w.getSubjects(),t=Object(d.useHistory)(),n=Object(s.useState)([]),c=Object(p.a)(n,2),a=c[0],r=c[1];function l(e){var t=document.getElementById(e);""===t.value?t.className="inpt contract":t.className="inpt expand"}return Object(s.useEffect)((function(){(function(){var e=Object(O.a)(x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=g.firestore(),e.next=3,t.collection("Tests").get();case 3:n=e.sent,r(n.docs.map((function(e){return e.data()})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(b.jsx)(b.Fragment,{children:function(){if(f.isAuthenticated().id)return!0;t.push("/")}()&&Object(b.jsx)("div",{className:"studentHolder",children:Object(b.jsxs)("div",{className:"stdAdd",children:[Object(b.jsx)("label",{htmlFor:"tstName",className:"indc",children:"Enter Test Name"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{id:"tstName",className:"inpt contract",type:"text",placeholder:"Eg. Prep Check Test - 1",required:!0,onChange:function(){l("tstName")}}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{htmlFor:"tstMarks",className:"indc",children:"Enter Full Marks"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{id:"tstMarks",className:"inpt contract",type:"number",placeholder:"Eg. 100",required:!0,onChange:function(){l("tstMarks")}}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{htmlFor:"date",className:"indc",children:"Enter Date"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{id:"date",className:"inpt expand",type:"date",required:!0}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{htmlFor:"time",className:"indc",children:"Enter Time"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{id:"time",className:"inpt expand",type:"time",required:!0}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{htmlFor:"subject",className:"indc",children:"Choose Subject"}),Object(b.jsx)("br",{}),Object(b.jsxs)("select",{id:"subject",className:"dropdown",children:[Object(b.jsx)("option",{value:"",children:"Choose"}),Object.keys(e).map((function(e){return Object(b.jsx)("option",{value:e,children:e},e)}))]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{className:"buttonHolder",children:[Object(b.jsx)("button",{className:"smbt",onClick:function(){var t=g.firestore(),n=document.getElementById("tstName"),s=document.getElementById("subject"),c=document.getElementById("date"),r=document.getElementById("time"),i=document.getElementById("tstMarks"),d=0;s?(Object.keys(a[e[s.value]]).forEach((function(e){n.value===e&&(d=1,alert("Two Tests with same name is not allowed!!\nPlease SET a diferent Test Name..."))})),d||(n.value&&i.value&&c.value&&r.value?t.collection("Tests").doc(s.value).update(Object(E.a)({},n.value,{maxMarks:i.value,date:c.value,time:r.value})).then((function(){alert(n.value+" Successfully Added!!"),n.value="",i.value="",c.value="",r.value="",s.value=""})):n.value?i.value?c.value?alert("Please Provide a valid Time!"):alert("Please Provide a valid Date"):alert("Please Provide the Maximum Marks!!"):alert("Please Give a Test Title!!"))):alert("Please Choose a Subject!!")},children:"Register"}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)(i.b,{exact:!0,to:"/dashboard",children:Object(b.jsx)("button",{className:"smbt",children:"Dashboard"})})]})]})})})},I=n(41),C=(n(48),new(function(){function e(){Object(l.a)(this,e),this.currentUser=[]}return Object(o.a)(e,[{key:"setStudents",value:function(e){this.currentUser=Object.keys(e).map((function(e){return e}))}},{key:"getStudents",value:function(){return this.currentUser}}]),e}())),H=new(function(){function e(){Object(l.a)(this,e),this.currentTest={name:"",subject:"",testDetails:"",total:""}}return Object(o.a)(e,[{key:"setTest",value:function(e,t,n,s){this.currentTest.name=e,this.currentTest.subject=n,this.currentTest.testDetails=t,this.currentTest.total=s}},{key:"getTest",value:function(){return this.currentTest}}]),e}());var B=function(){var e=Object(s.useState)([]),t=Object(p.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)([]),r=Object(p.a)(a,2),l=r[0],o=r[1],u=w.getSubjects(),j=Object(d.useHistory)();function h(e,t){var n="",s=function(e){var t,n=[],s=[],c=[],a={};Object.keys(e).forEach((function(t){n.push(e[t]),c.push(t)}));for(var r=1;r<n.length;++r)for(var i=1;i<n.length-r;++i)s[0]=n[i].date+n[i].time,s[1]=n[i+1].date+n[i+1].time,s[0].localeCompare(s[1])<0&&(t=n[i],n[i]=n[i+1],n[i+1]=t,t=c[i],c[i]=c[i+1],c[i+1]=t);return t=0,n.forEach((function(e){a=Object(I.a)(Object(I.a)({},a),{},Object(E.a)({},c[t++],e))})),a}(e),c=Object.keys(s);c.map((function(e){return'<div id="'.concat(e,"\" className='holder' key=\"").concat(e,'" style="width: 200px;">\n                    <div    className=\'legend\'\n                            style="cursor: pointer; padding-top: 30px;">\n                        ').concat(e,"\n                    </div>\n            </div>\n            ")})).forEach((function(e){n+=e})),document.getElementById("lets").innerHTML=n,c.forEach((function(n){document.getElementById(n).addEventListener("click",(function(){H.setTest(n,e[n],t,e),j.push("/dashboard/admin/displayMarks")})),function(e){var t=e.style;t.width="50%",t.height="100px",t.border="outset",t.margin="10px",t.padding="10px",t.borderRadius="10px",t.boxShadow="5px 5px 2px grey",t.overflow="hidden",t.textAlign="center",t.fontSize="25px"}(document.getElementById(n))}))}return Object(s.useEffect)((function(){(function(){var e=Object(O.a)(x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=g.firestore(),e.next=3,t.collection("Tests").get();case 3:n=e.sent,c(n.docs.map((function(e){return e.data()})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(s.useEffect)((function(){(function(){var e=Object(O.a)(x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=g.firestore(),e.next=3,t.collection("Students").get();case 3:n=e.sent,o(n.docs.map((function(e){return e.data()})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(b.jsx)(b.Fragment,{children:function(){if(f.isAuthenticated().id)return!0;j.push("/")}()&&Object(b.jsx)("div",{className:"testHolder",children:Object(b.jsxs)("div",{className:"alltst",children:[Object(b.jsx)("label",{htmlFor:"subject",className:"indc",children:"Choose Subject"}),Object(b.jsx)("br",{}),Object(b.jsxs)("select",{id:"subject",className:"dropdown",onChange:function(){var e=document.getElementById("subject");if(e.value){var t=n.map((function(e){return e}));C.setStudents(l[u[e.value]]),Object.keys(t[u[e.value]]).length?h(t[u[e.value]],e.value):(document.getElementById("lets").innerHTML='<div id="errMessage" className=\'holder\' style="width: 200px;">\n                                                                <div   className=\'legend\'\n                                                                        style="cursor: pointer; padding-top: 30px;">\n                                                                    Hey <b>'.concat(f.isAuthenticated().id.substring(0,f.isAuthenticated().id.length-3),"</b>,<br></br>\n                                                                    Unfortunately, NO Tests found in <b>").concat(e.value,"</b><br></br>\n                                                                    Please ADD a Test from 'Add New Test',\n                                                                </div>\n                                                            </div>"),function(e){var t=e.style;t.width="50%",t.height="300px",t.border="outset",t.margin="10px",t.padding="10px",t.borderRadius="10px",t.boxShadow="5px 5px 2px grey",t.overflow="hidden",t.textAlign="center",t.fontSize="25px"}(document.getElementById("errMessage")))}else document.getElementById("lets").innerHTML=""},children:[Object(b.jsx)("option",{value:"",children:"Choose"}),Object.keys(u).map((function(e){return Object(b.jsx)("option",{value:e,children:e},e)}))]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{id:"lets",className:"displayHolder"}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"buttonHolder",children:Object(b.jsx)(i.b,{exact:!0,to:"/dashboard",children:Object(b.jsx)("button",{className:"smbt",children:"Dashboard"})})})]})})})};n(77);var M=function(){var e=C.getStudents(),t=H.getTest(),n=Object(d.useHistory)();return Object(b.jsx)(b.Fragment,{children:function(){if(f.isAuthenticated().id)return!0;n.push("/")}()&&Object(b.jsx)("div",{className:"studentHolder",children:Object(b.jsxs)("div",{className:"alltst",children:[Object(b.jsx)("h2",{className:"indc",children:t.name}),Object(b.jsxs)("div",{className:"marksHolder",children:[Object(b.jsx)("div",{className:"HolderSth",children:Object(b.jsx)("table",{children:e.map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{className:"Column",children:Object(b.jsx)("label",{className:"indc",htmlFor:e,children:e})}),Object(b.jsx)("td",{className:"Column",children:Object(b.jsx)("input",{className:"inpt expand",id:e,type:"number",defaultValue:t.testDetails[e]?t.testDetails[e]:0,onChange:function(){!function(e){document.getElementById("masker").style.display="block";var n=document.getElementById(e);parseInt(n.value)>t.testDetails.maxMarks&&(alert(e+"'s marks exceeding Maximum Marks of "+t.name+"\nFull Marks of "+t.name+": "+t.testDetails.maxMarks),n.value=t.testDetails.maxMarks)}(e)}})})]},e)}))})}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{id:"masker",className:"buttonHolder",style:{display:"none"},children:Object(b.jsx)("div",{className:"smbt modify",onClick:function(){var n=g.firestore();e.forEach((function(e){t.testDetails[e]=parseInt(document.getElementById(e).value)})),t.total[t.name]=t.testDetails;var s=t.total;n.collection("Tests").doc(t.subject).update(s).then((function(){alert(" Successfully Updated!!"),document.getElementById("masker").style.display="none"}))},children:"Update"})})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"buttonHolder",children:Object(b.jsx)(i.b,{exact:!0,to:"/dashboard/admin/allTest",children:Object(b.jsx)("button",{className:"smbt",children:"Back"})})}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"buttonHolder",children:Object(b.jsx)(i.b,{exact:!0,to:"/dashboard",children:Object(b.jsx)("button",{className:"smbt",children:"Dashboard"})})})]})})})};var F=function(){var e=Object(s.useState)([]),t=Object(p.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)([]),r=Object(p.a)(a,2),l=r[0],o=r[1],u=w.getSubjects(),j=Object(d.useHistory)();function h(e,t){var n="",s=Object.keys(e);s.map((function(t){return'<div id="'.concat(t,"\" className='holder' key=\"").concat(t,'" style="width: 200px;">\n                    <div    className=\'legend\'\n                            style="cursor: pointer; padding-top: 30px; text-allign: center;">\n                        <table>\n                            <tr>\n                                <td style="padding-left: 30%;width:250px;">').concat(t,'</td>\n                                <td style="padding-left: 40%;">').concat(function(t){var n=0;return Object.keys(e[t]).forEach((function(s){s===f.isAuthenticated().id.substring(0,f.isAuthenticated().id.length-3)&&(n=e[t][s])})),n}(t),"</td>\n                            </tr>\n                        </table>\n                    </div>\n            </div>\n            ")})).forEach((function(e){n+=e})),document.getElementById("lets").innerHTML=n,s.forEach((function(e){!function(e){var t=e.style;t.width="50%",t.height="100px",t.border="outset",t.margin="10px",t.padding="10px",t.borderRadius="10px",t.boxShadow="5px 5px 2px grey",t.overflow="hidden",t.textAlign="center",t.fontSize="25px"}(document.getElementById(e))}))}return Object(s.useEffect)((function(){(function(){var e=Object(O.a)(x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=g.firestore(),e.next=3,t.collection("Tests").get();case 3:n=e.sent,c(n.docs.map((function(e){return e.data()})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(s.useEffect)((function(){(function(){var e=Object(O.a)(x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=g.firestore(),e.next=3,t.collection("Students").get();case 3:n=e.sent,o(n.docs.map((function(e){return e.data()})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(b.jsx)(b.Fragment,{children:function(){if(f.isAuthenticated().id)return!0;j.push("/")}()&&Object(b.jsx)("div",{className:"testHolder",children:Object(b.jsxs)("div",{className:"alltst",children:[Object(b.jsx)("label",{htmlFor:"subject",className:"indc",children:"Choose Subject"}),Object(b.jsx)("br",{}),Object(b.jsxs)("select",{id:"subject",className:"dropdown",onChange:function(){var e=document.getElementById("subject"),t=n.map((function(e){return e}));C.setStudents(l[u[e.value]]);var s=C.getStudents(),c=0;s.forEach((function(e){e===f.isAuthenticated().id.substring(0,f.isAuthenticated().id.length-3)&&(c=1)})),1===c?h(t[u[e.value]],e.value):(document.getElementById("lets").innerHTML='<div id="errMessage" className=\'holder\' style="width: 200px;">\n                                                            <div   className=\'legend\'\n                                                                    style="cursor: pointer; padding-top: 30px;">\n                                                                Hey <b>'.concat(f.isAuthenticated().id.substring(0,f.isAuthenticated().id.length-3),"</b>,<br></br>\n                                                                Unfortunately, you are NOT registered to <b>").concat(e.value,"</b><br></br>\n                                                                Get yourself in, NOW!! <br></br>\n                                                                <i>Contact our ADMINS</i>\n                                                            </div>\n                                                        </div>"),function(e){var t=e.style;t.width="50%",t.height="300px",t.border="outset",t.margin="10px",t.padding="10px",t.borderRadius="10px",t.boxShadow="5px 5px 2px grey",t.overflow="hidden",t.textAlign="center",t.fontSize="25px"}(document.getElementById("errMessage")))},children:[Object(b.jsx)("option",{value:"",children:"Choose"}),Object.keys(u).map((function(e){return Object(b.jsx)("option",{value:e,children:e},e)}))]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{id:"lets",className:"displayHolder"}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"buttonHolder",children:Object(b.jsx)(i.b,{exact:!0,to:"/dashboard",children:Object(b.jsx)("button",{className:"smbt",children:"Dashboard"})})})]})})})};var D=function(){var e=Object(s.useState)([]),t=Object(p.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)([]),r=Object(p.a)(a,2),l=r[0],o=r[1],u=w.getSubjects(),j=Object(d.useHistory)();function h(e){var t=e.style;t.width="50%",t.height="300px",t.border="outset",t.margin="10px",t.padding="10px",t.borderRadius="10px",t.boxShadow="5px 5px 2px grey",t.overflow="hidden",t.textAlign="center",t.fontSize="25px"}return Object(s.useEffect)((function(){(function(){var e=Object(O.a)(x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=g.firestore(),e.next=3,t.collection("Tests").get();case 3:n=e.sent,c(n.docs.map((function(e){return e.data()})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(s.useEffect)((function(){(function(){var e=Object(O.a)(x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=g.firestore(),e.next=3,t.collection("Students").get();case 3:n=e.sent,o(n.docs.map((function(e){return e.data()})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(b.jsx)(b.Fragment,{children:function(){if(f.isAuthenticated().id)return!0;j.push("/")}()&&Object(b.jsx)("div",{className:"testHolder",children:Object(b.jsxs)("div",{className:"alltst",children:[Object(b.jsx)("label",{htmlFor:"subject",className:"indc",children:"Choose Subject"}),Object(b.jsx)("br",{}),Object(b.jsxs)("select",{id:"subject",className:"dropdown",onChange:function(){var e=document.getElementById("subject");if(e.value){var t=n.map((function(e){return e}));C.setStudents(l[u[e.value]]);var s=C.getStudents(),c=0;s.forEach((function(e){e===f.isAuthenticated().id.substring(0,f.isAuthenticated().id.length-3)&&(c=1)})),1===c?function(e,t){var n="",s=Object.keys(e);s.length?(s.map((function(e){return'<div id="'.concat(e,"\" className='holder' key=\"").concat(e,'" style="width: 200px;">\n                        <div    className=\'legend\'\n                                style="cursor: pointer; padding-top: 30px;">\n                            ').concat(e,"\n                        </div>\n                </div>\n                ")})).forEach((function(e){n+=e})),document.getElementById("lets").innerHTML=n,s.forEach((function(n){document.getElementById(n).addEventListener("click",(function(){H.setTest(n,e[n],t,e),j.push("/dashboard/student/compareMarks")})),function(e){var t=e.style;t.width="50%",t.height="100px",t.border="outset",t.margin="10px",t.padding="10px",t.borderRadius="10px",t.boxShadow="5px 5px 2px grey",t.overflow="hidden",t.textAlign="center",t.fontSize="25px"}(document.getElementById(n))}))):(document.getElementById("lets").innerHTML='<div id="errMessage" className=\'holder\' style="width: 200px;">\n                                                                <div   className=\'legend\'\n                                                                        style="cursor: pointer; padding-top: 30px;">\n                                                                    No Tests Registered Yet!!<br></br>\n                                                                    You would be able to see the list of Tests only after it is added by your Faculty!<br></br>\n                                                                    Contact Your Faculty for any Discrepancy...\n                                                                </div>\n                                                            </div>',h(document.getElementById("errMessage")))}(t[u[e.value]],e.value):(document.getElementById("lets").innerHTML='<div id="errMessage" className=\'holder\' style="width: 200px;">\n                                                                <div   className=\'legend\'\n                                                                        style="cursor: pointer; padding-top: 30px;">\n                                                                    Hey <b>'.concat(f.isAuthenticated().id.substring(0,f.isAuthenticated().id.length-3),"</b>,<br></br>\n                                                                    Unfortunately, you are NOT registered to <b>").concat(e.value,"</b><br></br>\n                                                                    Get yourself in, NOW!! <br></br>\n                                                                    <i>Contact our ADMINS</i>\n                                                                </div>\n                                                            </div>"),h(document.getElementById("errMessage")))}else document.getElementById("lets").innerHTML=""},children:[Object(b.jsx)("option",{value:"",children:"Choose"}),Object.keys(u).map((function(e){return Object(b.jsx)("option",{value:e,children:e},e)}))]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{id:"lets",className:"displayHolder"}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"buttonHolder",children:Object(b.jsx)(i.b,{exact:!0,to:"/dashboard",children:Object(b.jsx)("button",{className:"smbt",children:"Dashboard"})})})]})})})};n(78);var R=function(){var e=C.getStudents(),t=H.getTest(),n=Object(d.useHistory)();return Object(b.jsx)(b.Fragment,{children:function(){if(f.isAuthenticated().id)return!0;n.push("/")}()&&Object(b.jsx)("div",{className:"studentHolder",children:Object(b.jsxs)("div",{className:"alltst",children:[Object(b.jsx)("table",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:Object(b.jsx)("h2",{className:"indc",children:t.name})}),Object(b.jsx)("td",{children:Object(b.jsx)("span",{className:"indc control",children:Object(b.jsxs)("b",{children:["(",t.testDetails.maxMarks,")"]})})})]})}),Object(b.jsxs)("div",{className:"marksHolder",children:[Object(b.jsx)("div",{className:"nameHolder",children:Object(b.jsx)("table",{children:e.map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{className:"Column",children:Object(b.jsx)("label",{className:"indc",htmlFor:e,children:e})}),Object(b.jsx)("td",{className:"Column marks",children:Object(b.jsxs)("span",{className:"indc",children:["(Marks: ",t.testDetails[e]?t.testDetails[e]:0,")"]})}),Object(b.jsxs)("td",{className:"Column grphHolder",children:[Object(b.jsx)("div",{className:"mask"}),Object(b.jsx)("input",{className:"graph",id:e,type:"range",min:"0",max:"100",Value:t.testDetails[e]?t.testDetails[e]/t.testDetails.maxMarks*100:0,readOnly:!0})]})]},e)}))})}),Object(b.jsx)("br",{})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"buttonHolder",children:Object(b.jsx)(i.b,{exact:!0,to:"/dashboard/student/compare",children:Object(b.jsx)("button",{className:"smbt",children:"Back"})})}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"buttonHolder",children:Object(b.jsx)(i.b,{exact:!0,to:"/dashboard",children:Object(b.jsx)("button",{className:"smbt",children:"Dashboard"})})})]})})})};n(79);var U=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"studentHolder",children:[Object(b.jsx)("div",{className:"soon",children:Object(b.jsx)("h1",{children:"Comming Soon!!"})}),Object(b.jsx)("div",{className:"buttonHolder",children:Object(b.jsx)(i.b,{exact:!0,to:"/dashboard",children:Object(b.jsx)("button",{className:"smbt",children:"Dashboard"})})})]})})};n(80);var P=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"testHolder",children:Object(b.jsxs)("div",{className:"alltst",children:[Object(b.jsx)("div",{className:"contact",children:Object(b.jsxs)("table",{children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:Object(b.jsx)("h2",{children:"BISWADIP SANFUI"})}),Object(b.jsxs)("div",{className:"details",children:[Object(b.jsx)("tr",{children:Object(b.jsx)("td",{children:Object(b.jsx)("h3",{children:"Contact: 9330403449"})})}),Object(b.jsx)("tr",{children:Object(b.jsx)("td",{children:Object(b.jsx)("h3",{children:"E-Mail: navasikshan20@gmail.com"})})})]})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:Object(b.jsx)("h2",{children:"SOUMYANETRA PAL"})}),Object(b.jsxs)("div",{className:"details",children:[Object(b.jsx)("tr",{children:Object(b.jsx)("td",{children:Object(b.jsx)("h3",{children:"Contact: 6290688584"})})}),Object(b.jsx)("tr",{children:Object(b.jsx)("td",{children:Object(b.jsx)("h3",{children:"E-Mail: navasikshan20@gmail.com"})})})]})]})]})}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"buttonHolder",children:Object(b.jsx)(i.b,{exact:!0,to:"/dashboard",children:Object(b.jsx)("button",{className:"smbt",children:"Dashboard"})})})]})})})};var L=function(){var e=Object(s.useState)([]),t=Object(p.a)(e,2),n=t[0],c=t[1],a=w.getSubjects(),r=Object(d.useHistory)();function l(e,t){var s="";e.map((function(e){return'<div id="'.concat(e,"\" className='holder' key=\"").concat(e,'" style="width: 200px;">\n                    <div    className=\'legend\'\n                            style="cursor: pointer; padding-top: 30px;">\n                        ').concat(e,"\n                    </div>\n            </div>\n            ")})).forEach((function(e){s+=e})),document.getElementById("lets").innerHTML=s,e.forEach((function(e){document.getElementById(e).addEventListener("click",(function(){!function(e,t){var s=g.firestore(),c={};Object.keys(n[a[t]]).forEach((function(t){t!==e&&(c=Object(I.a)(Object(I.a)({},c),{},Object(E.a)({},t,!0)))})),s.collection("Students").doc(t).set(c).then((function(){alert(e+" Successfully Removed from "+t+"!!"),C.setStudents(c),l(Object.keys(c),t)})).catch((function(){alert(e+" Remove Unsuccessful!!")}))}(e,t)})),function(e){var t=e.style;t.width="50%",t.height="100px",t.border="outset",t.margin="10px",t.padding="10px",t.borderRadius="10px",t.boxShadow="5px 5px 2px grey",t.overflow="hidden",t.textAlign="center",t.fontSize="25px"}(document.getElementById(e))}))}return Object(s.useEffect)((function(){(function(){var e=Object(O.a)(x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=g.firestore(),e.next=3,t.collection("Students").get();case 3:n=e.sent,c(n.docs.map((function(e){return e.data()})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(b.jsx)(b.Fragment,{children:function(){if(f.isAuthenticated().id)return!0;r.push("/")}()&&Object(b.jsx)("div",{className:"testHolder",children:Object(b.jsxs)("div",{className:"alltst",children:[Object(b.jsx)("label",{htmlFor:"subject",className:"indc",children:"Choose Subject"}),Object(b.jsx)("br",{}),Object(b.jsxs)("select",{id:"subject",className:"dropdown",onChange:function(){var e=document.getElementById("subject");if(e.value){C.setStudents(n[a[e.value]]);var t=C.getStudents();t.length?l(t,e.value):(document.getElementById("lets").innerHTML='<div id="errMessage" className=\'holder\' style="width: 200px;">\n                                                                <div   className=\'legend\'\n                                                                        style="cursor: pointer; padding-top: 30px;">\n                                                                    Hey <b>'.concat(f.isAuthenticated().id.substring(0,f.isAuthenticated().id.length-3),"</b>,<br></br>\n                                                                    Unfortunately, NO Tests found in <b>").concat(e.value,"</b><br></br>\n                                                                    Please ADD a Test from 'Add New Test',\n                                                                </div>\n                                                            </div>"),function(e){var t=e.style;t.width="50%",t.height="300px",t.border="outset",t.margin="10px",t.padding="10px",t.borderRadius="10px",t.boxShadow="5px 5px 2px grey",t.overflow="hidden",t.textAlign="center",t.fontSize="25px"}(document.getElementById("errMessage")))}else document.getElementById("lets").innerHTML=""},children:[Object(b.jsx)("option",{value:"",children:"Choose"}),Object.keys(a).map((function(e){return Object(b.jsx)("option",{value:e,children:e},e)}))]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{id:"lets",className:"displayHolder"}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"buttonHolder",children:Object(b.jsx)(i.b,{exact:!0,to:"/dashboard",children:Object(b.jsx)("button",{className:"smbt",children:"Dashboard"})})})]})})})};var _=function(){return Object(b.jsx)(i.a,{children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(h,{}),Object(b.jsxs)(d.Switch,{children:[Object(b.jsx)(d.Route,{exact:!0,path:"/",component:y}),Object(b.jsx)(d.Route,{path:"/dashboard",exact:!0,component:S}),Object(b.jsx)(d.Route,{path:"/dashboard/admin/addstudent",exact:!0,component:A}),Object(b.jsx)(d.Route,{path:"/dashboard/admin/newTest",exact:!0,component:T}),Object(b.jsx)(d.Route,{path:"/dashboard/admin/allTest",exact:!0,component:B}),Object(b.jsx)(d.Route,{path:"/dashboard/admin/displayMarks",exact:!0,component:M}),Object(b.jsx)(d.Route,{path:"/dashboard/admin/rmvStd",exact:!0,component:L}),Object(b.jsx)(d.Route,{path:"/dashboard/admin/rmvTest",exact:!0,component:U}),Object(b.jsx)(d.Route,{path:"/dashboard/student/tests",exact:!0,component:F}),Object(b.jsx)(d.Route,{path:"/dashboard/student/compare",exact:!0,component:D}),Object(b.jsx)(d.Route,{path:"/dashboard/student/compareMarks",exact:!0,component:R}),Object(b.jsx)(d.Route,{path:"/dashboard/student/contact",exact:!0,component:P}),Object(b.jsx)(d.Route,{path:"/dashboard/student/assignments",exact:!0,component:U}),Object(b.jsx)(d.Route,{path:"/dashboard/student/miscellaneous",exact:!0,component:U})]})]})})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,86)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),s(e),c(e),a(e),r(e)}))},X=n(58),q=n.n(X),G=(n(81),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"foot",children:Object(b.jsx)("h2",{children:"@Soumyanetra"})})}}]),n}(s.Component));r.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsxs)(q.a,{basename:"/gradeBest",children:[Object(b.jsx)(_,{}),Object(b.jsx)(G,{})]})}),document.getElementById("root")),z()}},[[85,1,2]]]);
//# sourceMappingURL=main.71640a6a.chunk.js.map