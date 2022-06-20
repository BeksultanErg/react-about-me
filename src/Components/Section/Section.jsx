import React from 'react';

const Section = () => {
   return (
      <section className="section">
      <div className="intro">
         <div className="intro__container">
            <div className="intro__inner">
               <div className="intro__image">
                  <img src="/img/introImage.svg" alt="" />
               </div>
               <div className="intro__about">
                  <h1 className="intro__about-title">
                     Дизайн и верстка
                  </h1>
                  <p className="intro__about-subtitle">
                     Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.
                  </p>
                  <a className="intro__about-btn" href="/">НАПИСАТЬ МНЕ</a>
               </div>
            </div>
         </div>
      </div>
      <div className="about-me">
         <div className="about-me__container">
            <div className="about-me__inner">
               <h2 className="about-me__title title">
                  Обо мне
               </h2>
               <p className="about-me__text subtitle">
                  Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.
               </p>
            </div>
         </div>
      </div>
      <div className="about-projects">
         <div className="about-projects__container">
            <div className="about-projects__inner">
               <div className="about-projects__inner__block">
                  <img src="/img/projectIcon.svg" alt="" />
                  <div>
                     <p className="block__project-client">
                        40+
                     </p>
                     <p className="block__project-client__text">
                        проектов
                     </p>
                  </div>
               </div>
               <div className="about-projects__inner__block">
                  <img src="/img/projectIcon.svg" alt="" />
                  <div>
                     <p className="block__project-client">
                        40+
                     </p>
                     <p className="block__project-client__text">
                        клиентов
                     </p>
                  </div>
               </div>
               <div className="about-projects__inner__block">
                  <img src="/img/projectIcon.svg" alt="" />
                  <div>
                     <p className="block__project-client">
                        40+
                     </p>
                     <p className="block__project-client__text">
                        сайтов
                     </p>
                  </div>
               </div>
               <div className="about-projects__inner__block">
                  <img src="/img/projectIcon.svg" alt="" />
                  <div>
                     <p className="block__project-client">
                        100000+
                     </p>
                     <p className="block__project-client__text">
                        строк кода
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="my-skills">
         <div className="my-skills__container">
            <div className="my-skills__inner">
               <div className="my-skills__block">
                  <h2 className="my-skills__block__title">
                     Мои навыки
                  </h2>
                  <div className="my-skills__block__tech">
                     <p className="tech__name">
                        React JS
                     </p>
                     <div className="tech__procent"></div>
                  </div>
                  <div className="my-skills__block__tech">
                     <p className="tech__name">
                        Node JS
                     </p>
                     <div className="tech__procent"></div>
                  </div>
                  <div className="my-skills__block__tech">
                     <p className="tech__name">
                        React Native
                     </p>
                     <div className="tech__procent"></div>
                  </div>
                  <div className="my-skills__block__tech">
                     <p className="tech__name">
                        Python
                     </p>
                     <div className="tech__procent"></div>
                  </div>
               </div>
               <div className="my-skills__img">
                  <img src="/img/me.svg" alt="" />
               </div>
            </div>
         </div>
      </div>
      <div className="how-i-work">
         <div className="how-i-work__container">
            <div className="how-i-work__inner">
               <h2 className="how-i-work__title title">
                  Как я работаю
               </h2>
               <p className="how-i-worktext subtitle">
                  Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.
               </p>
            </div>
         </div>
      </div>
   </section>
   );
};

export default Section;