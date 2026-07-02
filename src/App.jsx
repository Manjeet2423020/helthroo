import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BreakingNews from "./components/BreakingNews";
import Footer from "./components/Footer";
import Health from "./components/Health";
import HealthShorts from "./components/Healthshorts";
import Hero from "./components/Hero";
import Medical from "./components/Medical";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Other from "./components/Other";
import Podcast from "./components/Podcast";
import ShortVideo from "./components/Shortvedio";
import StateNews from "./components/Statenews";
import Webstories from "./components/Webstories";
import Wellness from "./components/Wellness";

gsap.registerPlugin(ScrollTrigger);

const PARTICLES = [
  { id: 1, type: "plus", top: "5%", left: "6%", size: "w-5 h-5", delay: "0s", duration: "16s", anim: "animate-float-particle-1" },
  { id: 2, type: "dot", top: "12%", left: "94%", size: "w-2.5 h-2.5", delay: "2s", duration: "20s", anim: "animate-float-particle-2" },
  { id: 3, type: "plus", top: "20%", left: "12%", size: "w-4 h-4", delay: "4s", duration: "18s", anim: "animate-float-particle-1" },
  { id: 4, type: "dot", top: "28%", left: "88%", size: "w-3 h-3", delay: "1s", duration: "24s", anim: "animate-float-particle-2" },
  { id: 5, type: "plus", top: "37%", left: "5%", size: "w-5 h-5", delay: "3s", duration: "22s", anim: "animate-float-particle-1" },
  { id: 6, type: "dot", top: "45%", left: "95%", size: "w-2.5 h-2.5", delay: "5s", duration: "19s", anim: "animate-float-particle-2" },
  { id: 7, type: "plus", top: "53%", left: "10%", size: "w-4 h-4", delay: "2s", duration: "21s", anim: "animate-float-particle-1" },
  { id: 8, type: "dot", top: "62%", left: "91%", size: "w-3.5 h-3.5", delay: "3s", duration: "25s", anim: "animate-float-particle-2" },
  { id: 9, type: "plus", top: "70%", left: "7%", size: "w-5 h-5", delay: "1s", duration: "20s", anim: "animate-float-particle-1" },
  { id: 10, type: "dot", top: "78%", left: "93%", size: "w-2.5 h-2.5", delay: "4s", duration: "18s", anim: "animate-float-particle-2" },
  { id: 11, type: "plus", top: "86%", left: "14%", size: "w-4 h-4", delay: "2s", duration: "23s", anim: "animate-float-particle-1" },
  { id: 12, type: "dot", top: "94%", left: "88%", size: "w-3.5 h-3.5", delay: "5s", duration: "21s", anim: "animate-float-particle-2" },
];

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Select all sections to animate
    const reveals = containerRef.current.querySelectorAll(".gsap-reveal");
    
    reveals.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%", // Animation starts when the section top reaches 85% of viewport height
            toggleActions: "play none none none",
          },
        }
      );
    });

    // Cleanup scroll triggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="relative min-h-screen overflow-x-hidden bg-[#f3f8f8] dark:bg-[#070a13] transition-colors duration-300"
    >
      {/* Ambient background glowing blobs - adjusted opacities for light mode visibility */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[5%] left-[-5%] w-[55vw] h-[55vw] rounded-full bg-brand-mint/18 dark:bg-brand-mint/5 blur-[140px] animate-blob-1"></div>
        <div className="absolute top-[22%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-brand-accent/16 dark:bg-brand-accent/6 blur-[160px] animate-blob-2"></div>
        <div className="absolute top-[45%] left-[-8%] w-[50vw] h-[50vw] rounded-full bg-brand-mint/15 dark:bg-brand-mint/5 blur-[130px] animate-blob-1"></div>
        <div className="absolute top-[68%] right-[-5%] w-[58vw] h-[58vw] rounded-full bg-brand-accent/16 dark:bg-brand-accent/6 blur-[150px] animate-blob-2"></div>

        {/* Floating Health themed particles (Plus symbols & Glowing circles) */}
        {PARTICLES.map((p) => (
          <div
            key={p.id}
            className={`absolute ${p.size} ${p.anim} pointer-events-none`}
            style={{
              top: p.top,
              left: p.left,
              "--particle-delay": p.delay,
              "--particle-duration": p.duration,
            }}
          >
            {p.type === "plus" ? (
              <svg className="w-full h-full text-brand-cyan/20 dark:text-brand-mint/20 fill-current" viewBox="0 0 24 24">
                <path d="M19 10.5h-5.5V5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v5.5H5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h5.5V19c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-5.5H19c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z"/>
              </svg>
            ) : (
              <div className="w-full h-full rounded-full bg-brand-cyan/15 dark:bg-brand-mint/15 shadow-[0_0_8px_rgba(20,201,184,0.2)]"></div>
            )}
          </div>
        ))}
      </div>

      <div className="relative z-10">
        <Navbar />
        
        <div className="gsap-reveal">
          <BreakingNews />
        </div>

        <div className="gsap-reveal">
          <Hero />
        </div>

        <div className="gsap-reveal">
          <Webstories />
        </div>

        <div className="gsap-reveal">
          <HealthShorts />
        </div>

        <div className="gsap-reveal">
          <StateNews />
        </div>

        <div className="gsap-reveal">
          <Wellness />
        </div>

        <div className="gsap-reveal">
          <Health />
        </div>

        <div className="gsap-reveal">
          <Other />
        </div>

        <div className="gsap-reveal">
          <ShortVideo />
        </div>

        <div className="gsap-reveal">
          <Podcast />
        </div>

        <div className="gsap-reveal">
          <Medical />
        </div>

        <div className="gsap-reveal">
          <Newsletter />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
