import './App.css';
import React, { useEffect } from 'react';
import Header from './components/header';
import Btn from './components/btn'
import Stupeni from './components/12stupeney.jsx';
import Vagnost from './components/vagnost.jsx';
import Slugenie from './components/slugenie.jsx';
import Pogertvovanie from './components/pogertvovanie/pogertvovanie';

function App() {
  
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let scrollY = window.scrollY;
      document.documentElement.style.setProperty("--scrollTop", `${scrollY}px`);
    });
  },[]);

  return (
    <div className="container" >
      <Header/>  
    
    <article className='main-article'>
      <h3><span>Биография</span></h3>
      <h1>Его Святейшество Бхакти Бхагаватамрита Кешава Свами</h1>

      <div>
        <ul>
          <li>Присоединился к ИСККОН более 30 лет назад</li>
          <li>В 1991 году получил 1-е и 2-е духовные посвящения</li>
          <li> С 1999 года активно проповедует по разным городам России и странам СНГ и является региональным секретарем в Южном регионе России</li>
          <li>Принял посвящение в статус санньяси в 2014 году</li>
          <li>Регулярно участвует в различных образовательных программах как для вайшнавов, так и для широкой аудитории людей</li>
          <li>Помогает как духовный наставник многим преданным</li>
          <li>С 2018 года является членом совета САБХА - Ассамблеи Духовных Советников Бхактиведанта, представляя в этом совете русско-говорящих преданных России и стран СНГ</li>
          <li>В 2022 году, по рекомендации старших вайшнавов и с благословения своего духовного учителя, принял служение инициирующего духовного учителя</li>
        </ul>
      </div>
    </article>

<Vagnost/>    
<Stupeni/>
<Slugenie/>
<Btn/> 
<Pogertvovanie/>

     
    </div>
  );
}

export default App;
