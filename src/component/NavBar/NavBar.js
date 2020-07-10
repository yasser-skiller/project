import React, {Component}  from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../img/logo.png';
import {Navbar,Nav, Form, FormControl } from 'react-bootstrap';
import {Btncontainer} from '../Buttons/Buttons';
import './Nav.css';

class NavBar extends Component {
  

  render(){
    
    return (
      <div id="">
                <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
                           
              <Navbar.Collapse id="responsive-navbar-nav" >
               <Form inline>
                  <FormControl type="text" placeholder="بحث" className="mr-sm-2 " />
                  <Btncontainer top variant="outline-success">ابحث هنا</Btncontainer>

                </Form><br/>

                 <Nav className="mr-auto navbar-nav align-items-center">
                 <li className="nav-item  ml-5">
                   <NavLink activeClassName="act" to="/1" className="nav-link m-auto text-decoration-none text-dark"><h4>رحالات سياحية</h4></NavLink>
                 </li>

                 <li className="nav-item ml-5">
                    <NavLink activeClassName="act" to="/2" className="nav-link text-decoration-none text-dark"><h4>عروض سياحية</h4></NavLink>
                  </li>
                  <li className="nav-item ml-5">
                    <NavLink activeClassName="act" to="/3" className="nav-link text-decoration-none text-dark"><h4>مواصلات</h4></NavLink>
                  </li>

                 <li className="nav-item ml-5">
                    <NavLink activeClassName="act" to="/4" className="nav-link text-decoration-none text-dark"><h4>الفنادق</h4></NavLink>
                  </li>

                  <li className="nav-item ml-5">
                    <NavLink activeClassName="act" to="/5" className="nav-link text-decoration-none text-dark"><h4>الطيران</h4></NavLink>
                  </li>
                 </Nav>

                 <Nav ></Nav>
                  
               </Navbar.Collapse>

               <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                 <NavLink to="/shop" activeClassName="actc">
                     <img src={logo}  alt="logo" className="navbar-brand bg-white" style={{width:'50px', borderRadius:'25px'}}/>
                  </NavLink> 

            </Navbar>
            </div>
      
    );
  }
 
}


export default (NavBar);


