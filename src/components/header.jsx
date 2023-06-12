import '../App.css'
import myVideo from '../video/logo2.mp4'

const Header =()=>{
    return(
    <div>
<div className="main-header">
<div className="layers">

  <div className="layers__header">
    <div className="layers__title">Ачьюта-готра</div>
    <div className="layers__caption">ДУХОВНАЯ СЕМЬЯ ШРИЛЫ ПРАБХУПАДЫ</div>
  </div>

 
  <div className='layer layers__base' style={{backgroundImage: "url('header.jpg')"}}></div>
  <div className='layer layers__1' style={{backgroundImage: "url('header1.png')"}}></div>
  <div className='layer layers__2' style={{backgroundImage: "url('t1.png')"}}></div>
  <div className='layer layers__3' style={{backgroundImage: "url('t2.png')"}}></div>
  <div className='layer layers__4' style={{backgroundImage: "url('t3.png')"}}></div>
  <div className='layer layers__5' style={{backgroundImage: "url('t4.png')"}}></div>

</div>

</div>
      <p>
      Сайт создан с целью помощи кандидатам в ученики <br/>
      <strong>Его Святейшества Бхакти Бхагаватамрита Кешава Свами</strong>
      </p>

      <div className='hand center-div'>
"Наш прогресс зависит именно от связи со Шрилой Прабхупадой. И человек, который почувствовал связь со Шрилой Прабхупадой, открывается к чистому преданному служению.
Успех проповедника в нашем движении в том, чтобы соединить начинающего человека со Шрилой Прабхупадой."
</div>

<div className='liSection'>
<div >
      <video autoPlay muted loop id="video" width="100%">
      <source src={myVideo} type="video/mp4" />
      </video>
</div> 
<div>
<img className='imgLi' src="/swami.jpg" alt="img"/>
</div>
</div>

</div>
)
}
export default Header