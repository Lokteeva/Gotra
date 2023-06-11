import { useMemo } from 'react';
import './App.css';

function App() {
  const root = useMemo( () =>document.querySelector(":root",[]))

  const parallaxHandler = (e) => {
    const x = (e.clientX - window.innerWidth /2) / 100;
    const y = (e.clientY - window.innerHeight /2 / 100);
    root.style.setProperty('--posX', -x)
    root.style.setProperty('--posY', -y)

  }

  return (
    <div className="parallax__container" onMouseMove={parallaxHandler}>
      <div className="parallax__bg"/>
      <div className="parallax__city"/>
      <div className="parallax__cloud"/>
     
    </div>
  );
}

export default App;
