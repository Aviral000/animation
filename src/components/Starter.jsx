import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import './Starter.css';

export default function Starter() {
  const boxRef = useRef(null);
  const [move, setMove] = useState(false);

  useEffect(() => {
    if (move && boxRef.current) {
        const tl = gsap.timeline({ paused: false }); // Create a timeline
  
        // Initial state
        tl.to(boxRef.current, { x: 0, y: 0, opacity: 1, backgroundColor: "white" });
  
        // Animate to intermediate state
        tl.to(boxRef.current, { duration: 2, x: 100, y: 100, opacity: 0.5, rotateX: 180, backgroundColor: "pink" });
  
        // Animate back to initial state
        tl.to(boxRef.current, { duration: 2, x: 0, y: 0, opacity: 1, rotateX: 0, backgroundColor: "white" });
  
        // Play the timeline on state change
        tl.play();
  
        // Reset state after animation finishes (optional)
        tl.then(() => setMove(false)); // Uncomment this if you want the animation to trigger only once
      }
  }, [move]);

  const trigger = () => {
    if(move === true) {
        setMove(false);
    } else {
        setMove(true);
    }
  }

  return (
    <div className='container'>
        <button onClick={trigger}>Show Case base</button>
        <div ref={boxRef} className="box" style={{ paddingLeft: "10px" }}>
        This is a box.
        </div>
    </div>
  );
}