import React from 'react';

const Header = () => {
   return (
      <header className="header">
      <div className="header__container">
         <div className="header__inner">
            <div className="logo">
               <a href="/">
                  <img src="/img/logo.svg" alt="logo" />
               </a>
            </div>
            <div className="header__burger">
               <span></span>
            </div>
            <nav className="header__menu">
               <ul className="header__list">
                  <li><a className="header__link" href="/">главная</a></li>
                  <li><a className="header__link" href="/">об авторе</a></li>
                  <li><a className="header__link" href="/">работы</a></li>
                  <li><a className="header__link" href="/">процесс</a></li>
                  <li><a className="header__link" href="/">контакты</a></li>
               </ul>
            </nav>
         </div>
      </div>
   </header>
   );
};

export default Header;