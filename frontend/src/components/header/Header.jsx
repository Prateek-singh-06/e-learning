/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import "./header.css";
import { CSSTransition } from "react-transition-group";
import logo from "../../assets/logo.svg"
import Dropdown from "./profile-drop-down";
import { useNavigate } from "react-router-dom";
// export default Header

export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [menuicontoggle,setMenuicontoggle]=useState(false);
  const [profileIsVisible,setProfileIsVisible]=useState(false);
  const[user,setUser]=useState(JSON.parse(localStorage.getItem('user')));
  const navigate=useNavigate();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
    setMenuicontoggle((pre)=>!pre);
    if(menuicontoggle){
      setProfileIsVisible(false)
    }
  };
  const showprofile=()=>{
    setProfileIsVisible((pre)=>!pre);
  }
  const handleClick=()=>{

    navigate("/Signin")

  }

  const Nav=`Nav ${profileIsVisible?"gap-y-16":"gap-y-5"} z-10`;

  return (
    <header className="Header">
      <img src={logo} className="Logo" alt="logo" />
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className={Nav}>
          <a href="/" title="Home" >Home</a>
          <a href="/courses" title="Courses">Courses</a>
          <a href="/events" title="Events">Events</a>
          <a href="/subscribe" title="subscribe" className="bg-sky-700 rounded-lg px-2">Subscribe</a>
          {user?<MdAccountCircle className="profile" onClick={showprofile}/>:<button className="text-blue-700 font-serif font-medium text-xl  bg-slate-100 px-2 rounded-lg signin" onClick={handleClick}>signin</button>}
        </nav>

      </CSSTransition>
        <Dropdown isVisible={profileIsVisible} isSmallScreen={isSmallScreen} menuOpen={menuicontoggle}  />
        {/* <div>helndlkn</div> */}
      <button onClick={toggleNav} className="Burger">{!menuicontoggle?
        <IoMenu  />:<MdClose />}
      </button>
    </header>
  );
}
