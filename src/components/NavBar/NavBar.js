import React from 'react';
import "./navBar.css"
import Logo from '../assets/Group.png'
import MyIcon from '../assets/Group 427322867.png'
const NavBar = () => {
    return (
       <div className={'nav-bar'}>
           <div className={'container nav-bar-position'}>
               <div>
                   <a href="#"><img src={Logo} alt="logo"/></a>
               </div>
               <div>
                   <button className={'catalog-btn'}>
                       <svg xmlns="http://www.w3.org/2000/svg" width="15" height="9" viewBox="0 0 15 9" fill="none">
                           <rect width="15" height="1" rx="0.5" fill="#D9D9D9"/>
                           <rect y="4" width="15" height="1" rx="0.5" fill="#D9D9D9"/>
                           <rect y="8" width="15" height="1" rx="0.5" fill="#D9D9D9"/>
                       </svg>
                       Каталог
                   </button>
               </div>
               <div>
                   <form action="" className={'search-form'}>
                       <input type="text" className={'search-input'} placeholder={'Искать товары ...'}/>
                       <i className={'icon search-icon'}></i>
                   </form>
               </div>
               <div className={'login-bar'}>
                   <div className={'login-links'}>
                       <p>Добро пожаловать</p>
                       <a href="#">Вход/Регистрация</a>
                   </div>
                   <div className={'link-icons'}>
                       <a href="#"> <img src={MyIcon} alt=""/></a>
                       <span></span>
                       <a href="#"> <img src={MyIcon} alt=""/></a>
                   </div>
               </div>

           </div>
       </div>
    );
};

export default NavBar;