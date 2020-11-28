import React, { useState , useEffect } from 'react';
import './Navbar.css';

import logo from '../../Images/favicon_144.png';

// Icons 
import { BiMenu} from 'react-icons/bi';
import {MdVideoCall} from 'react-icons/md';
import {BsBell, BsGrid3X3Gap} from 'react-icons/bs';
import {AiOutlineSearch} from 'react-icons/ai';
import {CgProfile} from 'react-icons/cg';


// Bootstrap Components
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import FormControl from 'react-bootstrap/FormControl';
import Navbar  from 'react-bootstrap/Navbar';
// import Nav  from 'react-bootstrap/Nav';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';



const HeaderNav = ({setUserSearch}) => {

    const [data,setData] = useState('');

    const changeHandler = (e) => {
        setData(e.target.value);
    }


    useEffect(()=>{console.log(data)},[data]);


    return(
        <Navbar bg="light" expand="lg" variant="light" fixed="top">
            <Navbar.Brand href="/">
                 <BiMenu className="logo" />
                     <img src={logo}
                        width="30" height="30" className="d-inline-block align-top logo" alt="" />
                            <b>YouTube</b>
                            <sup style={{fontSize: "12px"}}>IN</sup>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" >

            <form className="m-auto" onSubmit={(e) => {e.preventDefault(); setUserSearch(data)}}>
                <input type="text" placeholder="Search" className="search" name="searchText" onChange={changeHandler} />
                <Button type="submit" size="sm" variant="outline-secondary" className="bt" > <AiOutlineSearch /> </Button>
            </form>

            <Form inline className="justify-content-center m-auto icon">

                <MdVideoCall className="icons" />
                <BsGrid3X3Gap className="icons"  />
                <BsBell  className="icons" />
                <CgProfile className="icons"  />

            </Form> 

            </Navbar.Collapse>  
        </Navbar>
        
    );

}

export default HeaderNav;