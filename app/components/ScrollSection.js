'use client'
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "../globals.css";
import AboutMe from "./AboutMe";
import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";
import Stack from "./Stack";


function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-400vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
          snap: {
            snapTo: 1 / 4, 
          },
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <div className="scroll-section">
            <AboutMe />
          </div>
          <div className="scroll-section">
            <Project1 />
          </div>
          <div className="scroll-section">
            <Project2 />
          </div>
          <div className="scroll-section">
            <Project3 />
          </div>
          <div className="scroll-section">
            <Stack />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
