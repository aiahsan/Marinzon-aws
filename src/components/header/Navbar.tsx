import React from 'react';
import Image from 'next/image'
import router,{useRouter} from "next/router";
import { useSelector ,useDispatch} from "react-redux";
import { useIntl } from "react-intl";
import {LogOutAction} from '../../redux/actionMethodes/user/idnex'
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap'
import { IReduxStore } from '../../interfaces/data/reduxStore';
const LogoImage=require('../../images/logo.png')

const App =()=>{
  const intl = useIntl();
  const { language } = router.query;
  const Language=useSelector(x=>x.Language);
  const User=useSelector((x:IReduxStore)=>x.User);
  const dispatch=useDispatch();
    return <Navbar collapseOnSelect expand="lg"  bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/">
        <Image src={LogoImage} className="logo-img"/>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
     
      </Nav>
      <Nav>
        <Nav.Link href="/"> {intl.formatMessage({ id: "en1" })}</Nav.Link>
        <Nav.Link href="explore">{intl.formatMessage({ id: "en2" })}</Nav.Link>
        <Nav.Link href="#deets">{intl.formatMessage({ id: "en3" })}</Nav.Link>
        <Nav.Link href="#deets">{intl.formatMessage({ id: "en4" })}</Nav.Link>
        <Nav.Link href="#deets">{intl.formatMessage({ id: "en5" })}</Nav.Link>
        <Nav.Link href="#deets">{intl.formatMessage({ id: "en6" })}</Nav.Link>
        <Nav.Link href="#deets">{intl.formatMessage({ id: "en7" })}</Nav.Link>
        <Nav.Link onClick={()=>{
                                if(User!=null)
                                {
                                  dispatch(LogOutAction())
                                }
                                else
                                {
                                  language!=undefined? router.push("/"+Language+'/login'):router.push('/en-AE/login')

                                }
                }} className='lgn-btn'>{User!=null?"Log out":intl.formatMessage({ id: "en8" })}</Nav.Link>
         
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
}
export default App