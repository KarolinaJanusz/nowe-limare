import React, { useState } from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import logo6 from '../images/logo6.png';
import Dropdown from './Dropdown'

function Nav(){
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () =>{
    if(window.innerWidth < 1042){
      setDropdown(false)
    }
    else{
      setDropdown(true)
    }
  }

  const onMouseLeave = () =>{
    if(window.innerWidth < 1042){
      setDropdown(false)
    }
    else{
      setDropdown(false)
    }
  }



  
    return(
      <nav className = 'mainNav'>

     <div className = "logo-menu">   
      <Link to ='/'> 
    <img src={logo6} className = "menu-logo"/>
    </Link> 
    </div>

    <div className = "menu-icon" onClick = {handleClick}>
      <i className = {click ? 'fas fa-times' : 'fas fa-bars'}></i>
    </div>
    

    <ul className = {click ? 'nav-menu-active' : 'nav-menu'}>
 
        
      <li className = "oferta"
      onMouseEnter = {onMouseEnter}
      onMouseLeave = {onMouseLeave}
      onClick= {closeMobileMenu}>
      
        <Link to='./oferta'>
        oferta 
        <i className = "fas fa-caret-down" />
        </Link>
        

      {dropdown && <Dropdown />}
      
      </li>
      
     
      <li className = "nav-item"
      onClick= {closeMobileMenu}>
      <Link to='./zdrowie'>
      zdrowie
      </Link>
      </li>
      
      <li className = "nav-item"
      onClick= {closeMobileMenu}>
      <Link to = './blog'>
      blog
      </Link>
      </li>
      
      <li className = "nav-item"
      onClick= {closeMobileMenu}>
      <Link to = './galeria'>
      galeria
      </Link>
      </li>
      
      <li className = "nav-item"
      onClick= {closeMobileMenu}>
      <Link to = './cennik'>
      cennik
      </Link>
      </li>
      
      <li className = "nav-item"
      onClick= {closeMobileMenu}>
      <Link to = './sklep'>
      sklep
      </Link>
      </li>

      <li className = "nav-item"
      onClick= {closeMobileMenu}>
      <Link to = './kontakt'>
     kontakt
      </Link>
      </li>
      
      

    </ul>
    
  
    </nav>
  )
  }
// }

  export default Nav;