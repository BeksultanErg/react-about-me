import React from 'react';

const Footer = () => {
   return (
      <footer className="footer">
      <div className="footer__container">
         <div className="footer__inner">
            <div className="footer__name__block">
               <p className="footer__name">Ivan Ivanov</p>
               <a className="footer__number" href="tel: +996 776 46 16 83">+1 777 777 777</a>
            </div>
            <div className="social">
               <a href="/">
                  <img src="/img/vk.svg" alt="" />
               </a>
               <a href="/">
                  <img src="/img/vk.svg" alt="" />
               </a>
               <a href="/">
                  <img src="/img/vk.svg" alt="" />
               </a>
            </div>
         </div>
      </div>
   </footer>
   );
};

export default Footer;