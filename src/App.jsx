import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Starter from './components/Starter';
import './App.css';

function App() {
  const appContainerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });
    tl.from(appContainerRef.current, {
      duration: 1,
      ease: 'none',
      display: 'flex',
      height: '100vh',
      width: '100vw',
      justifyContent: 'center',
      alignItems: 'center',
    });
    tl.to(appContainerRef.current, {
      duration: 1,
      background: 'linear-gradient(to right, #fff, #FDEA9E)',
      ease: 'none',
      display: 'flex',
      minHeight: '100vh',
      justifyContent: 'center',
      paddingTop: '2rem'
    });
    tl.play();
  }, []);

  return (
    <div ref={appContainerRef} className="app-container">
      <Starter />
    </div>
  );
}

export default App;