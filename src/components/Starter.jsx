// import { useRef, useEffect, useState } from 'react';
// import { gsap } from 'gsap';
// import './Starter.css';

// export default function Starter() {
//   const boxRef = useRef(null);
//   const [move, setMove] = useState(false);

//   useEffect(() => {
//     if (move && boxRef.current) {
//         // Create a timeline
//         // paused
//         // delay
//         // repeat
//         // repeatDeplay (time between repeats)
//         // yoyo
//         // onStart, onComplete, onRepeat, onReverseComplete:
//         // These are callback functions that are triggered at specific points during the timeline's execution:
//         // onStart: Called when the timeline starts playing.
//         // onComplete: Called when the timeline finishes playing (all child tweens complete).
//         // onRepeat: Called before each repetition of the timeline.
//         // onReverseComplete: Called when the timeline completes a full "yoyo" cycle (forward and backward).
//         const tl = gsap.timeline({ yoyo: true });
  
//         // Initial state
//         tl.to(boxRef.current, { x: 0, y: 0, opacity: 1, backgroundColor: "white" });
  
//         // Animate to intermediate state
//         tl.to(boxRef.current, { duration: 2, x: 100, y: 100, opacity: 0.5, rotateX: 180, backgroundColor: "pink" });
  
//         // Animate back to initial state
//         tl.to(boxRef.current, { duration: 2, x: 0, y: 0, opacity: 1, rotateX: 0, backgroundColor: "white" });
  
//         // Play the timeline on state change
//         tl.play();
  
//         // Reset state after animation finishes (optional)
//         tl.then(() => setMove(false)); // Uncomment this if you want the animation to trigger only once
//       }
//   }, [move]);

//   const trigger = () => {
//     if(move === true) {
//         setMove(false);
//     } else {
//         setMove(true);
//     }
//   }

//   return (
//     <div className='container'>
//         <button onClick={trigger}>Show Case base</button>
//         <div ref={boxRef} className="box" style={{ paddingLeft: "10px" }}>
//         This is a box.
//         </div>
//     </div>
//   );
// }

// import { useRef, useEffect } from 'react';
// import { gsap } from 'gsap';

// export default function Starter() {
//     const boxesRef = useRef(null);

//     useEffect(() => {
//         gsap.to(".box", {
//             y: 100,
//             stagger: {
//               each: .1,
//               from: "center",
//               grid: "auto",
//               ease: "power2.inOut",
//               repeat: 1,
//             },
//           });
//     }, []);
  
//     return (
//       <div ref={boxesRef}>
//         <div className="box">Box 1</div>
//         <div className="box">Box 2</div>
//         <div className="box">Box 3</div>
//       </div>
//     );
// }

// import { useRef, useEffect } from 'react';
// import { gsap } from 'gsap';
// import './Starter.css';

// export default function Starter() {
//   const boxesRef = useRef(null);
//   const editoRefs = useRef([]);

//   useEffect(() => {
//     const t1 = gsap.timeline({ paused: true });
//     t1.from('.box', {
//       duration: 3,
//       x: 0,
//       y: 0,
//       stagger: {
//         each: 0.1,
//         from: 'center',
//         grid: 'auto',
//         ease: 'power3.inOut',
//       },
//       scale: 1.2,
//       background: 'linear-gradient(43deg, #CECECE 0%, #E8E8E8 46%, #fff 100%)',
//     });
//     t1.to('.box', {
//       margin: '1px solid black',
//       background: 'linear-gradient(43deg, #fff 0%, #fff 46%, #fff 100%)',
//     });
//     t1.play();
//   }, []);

//   return (
//     <div ref={boxesRef} className="container">
//       {['Projects', 'Skills', 'Menu'].map((text, index) => (
//         <div key={index} className="box">
//           <span
//             ref={(el) => {
//               editoRefs.current[index] = el;
//             }}
//             className="edito"
//           >
//             {text}
//           </span>
//         </div>
//       ))}
//     </div>
//   );
// }

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Starter.css';

export default function Starter() {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,    //if I want all the boxes trigger at same time i need to remove the map and add a simple ref
        pin: true,
        start: 'top top',
        end: '+=500%',
        scrub: true,
        snap: {
          snapTo: 'labels',
          duration: { min: 0.2, max: 3 },
          delay: 0.2,
          ease: 'power1.inOut',
        },
      },
    });

    tl.addLabel('start')
      .from(itemsRef.current, {
        y: -100,
        scale: 0.3,
        ease: 'power2.in',
        autoAlpha: 0,
        stagger: 0.2,
      })
      .addLabel('color')
      .from(itemsRef.current, {
        backgroundColor: '#fff',
        margin: '1px solid green',
        stagger: 0.2,
      })
      .to(itemsRef.current, {
        stagger: 0.2,
      })
      .addLabel('end');
  }, []);

  return (
    <div ref={containerRef} className="container">
      {['Projects', 'Skills', 'Menu'].map((text, index) => (
        <div key={index} className="box" ref={(el) => (itemsRef.current[index] = el)}>
          <span className="edito">{text}</span>
        </div>
      ))}
    </div>
  );
}