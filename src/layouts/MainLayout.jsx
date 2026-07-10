import React, { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Navbar from "../components/Navbar";
import BreakingNews from "../components/BreakingNews";
import Footer from "../components/Footer";
import SearchModal from "../components/SearchModal";

gsap.registerPlugin(ScrollTrigger);

const PARTICLES = [
  { id: 1, type: "plus", top: "4%", left: "8%", size: "w-5 h-5", delay: "0s", duration: "18s", anim: "animate-float-particle-1" },
  { id: 2, type: "dot", top: "10%", left: "92%", size: "w-3 h-3", delay: "2s", duration: "22s", anim: "animate-float-particle-2" },
  { id: 3, type: "plus", top: "18%", left: "14%", size: "w-4 h-4", delay: "4s", duration: "20s", anim: "animate-float-particle-1" },
  { id: 4, type: "dot", top: "25%", left: "86%", size: "w-3.5 h-3.5", delay: "1s", duration: "26s", anim: "animate-float-particle-2" },
  { id: 5, type: "plus", top: "35%", left: "6%", size: "w-5 h-5", delay: "3s", duration: "24s", anim: "animate-float-particle-1" },
  { id: 6, type: "dot", top: "42%", left: "94%", size: "w-3 h-3", delay: "5s", duration: "21s", anim: "animate-float-particle-2" },
  { id: 7, type: "plus", top: "50%", left: "12%", size: "w-4 h-4", delay: "2s", duration: "23s", anim: "animate-float-particle-1" },
  { id: 8, type: "dot", top: "60%", left: "89%", size: "w-3.5 h-3.5", delay: "3s", duration: "28s", anim: "animate-float-particle-2" },
  { id: 9, type: "plus", top: "68%", left: "8%", size: "w-5 h-5", delay: "1s", duration: "22s", anim: "animate-float-particle-1" },
  { id: 10, type: "dot", top: "76%", left: "91%", size: "w-3 h-3", delay: "4s", duration: "20s", anim: "animate-float-particle-2" },
  { id: 11, type: "plus", top: "84%", left: "15%", size: "w-4 h-4", delay: "2s", duration: "25s", anim: "animate-float-particle-1" },
  { id: 12, type: "dot", top: "92%", left: "86%", size: "w-3.5 h-3.5", delay: "5s", duration: "23s", anim: "animate-float-particle-2" },
];

const MainLayout = () => {
  const containerRef = useRef(null);
  const pageWrapperRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Scroll progress bar animation
    const progressTrigger = gsap.to("#scroll-progress", {
      width: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    // 2. Page transition animation (fade-in & slide-up)
    gsap.fromTo(
      pageWrapperRef.current,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    );

    // 3. Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const updateTicker = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    // 4. Global ScrollTrigger entrance reveals (only triggers once per item on enter)
    const reveals = containerRef.current?.querySelectorAll(".gsap-reveal");
    if (reveals && reveals.length > 0) {
      reveals.forEach((el) => {
        gsap.fromTo(
          el,
          {
            opacity: 0,
            y: 50,
            scale: 0.98,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }

    // 5. Global Magnetic targets hover effect
    const setupMagnetic = () => {
      const targets = document.querySelectorAll(".magnetic-target");
      targets.forEach((target) => {
        const onMouseMove = (e) => {
          const rect = target.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          gsap.to(target, {
            x: x * 0.35,
            y: y * 0.35,
            duration: 0.3,
            ease: "power2.out",
          });
        };

        const onMouseLeave = () => {
          gsap.to(target, {
            x: 0,
            y: 0,
            duration: 0.6,
            ease: "elastic.out(1, 0.3)",
          });
        };

        // Clean up pre-existing listeners first to avoid duplication
        if (target._cleanupMagnetic) {
          target._cleanupMagnetic();
        }

        target.addEventListener("mousemove", onMouseMove);
        target.addEventListener("mouseleave", onMouseLeave);

        target._cleanupMagnetic = () => {
          target.removeEventListener("mousemove", onMouseMove);
          target.removeEventListener("mouseleave", onMouseLeave);
        };
      });
    };

    // Delay slightly to ensure layout rendering completed
    const timeoutId = setTimeout(setupMagnetic, 300);

    return () => {
      clearTimeout(timeoutId);
      lenis.destroy();
      gsap.ticker.remove(updateTicker);
      progressTrigger.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      
      const targets = document.querySelectorAll(".magnetic-target");
      targets.forEach((target) => {
        if (target._cleanupMagnetic) {
          target._cleanupMagnetic();
        }
      });
    };
  }, [pathname]);

  return (
    <div 
      ref={containerRef} 
      className="relative min-h-screen overflow-x-hidden bg-slate-50 dark:bg-brand-dark transition-colors duration-500"
    >
      {/* Background Grids & Ambient Glowing Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute inset-0 grid-bg-overlay opacity-100"></div>
        <div className="absolute inset-0 aurora-bg-light dark:aurora-bg-dark opacity-100"></div>

        {/* Floating gradient blur circles */}
        <div className="absolute top-[3%] left-[-10%] w-[55vw] h-[55vw] rounded-full bg-teal-500/10 dark:bg-teal-500/4 blur-[130px] animate-blob-1"></div>
        <div className="absolute top-[25%] right-[-15%] w-[60vw] h-[60vw] rounded-full bg-sky-500/8 dark:bg-sky-500/3 blur-[150px] animate-blob-2"></div>
        <div className="absolute top-[50%] left-[-12%] w-[50vw] h-[50vw] rounded-full bg-emerald-500/8 dark:bg-emerald-500/3 blur-[120px] animate-blob-1"></div>
        <div className="absolute top-[75%] right-[-10%] w-[55vw] h-[55vw] rounded-full bg-teal-500/10 dark:bg-teal-500/4 blur-[140px] animate-blob-2"></div>

        {/* Floating Plus Symbols and circles */}
        {PARTICLES.map((p) => (
          <div
            key={p.id}
            className={`absolute ${p.size} ${p.anim} pointer-events-none opacity-20 dark:opacity-30`}
            style={{
              top: p.top,
              left: p.left,
              "--particle-delay": p.delay,
              "--particle-duration": p.duration,
            }}
          >
            {p.type === "plus" ? (
              <svg className="w-full h-full text-teal-500/35 dark:text-teal-400/25 fill-current" viewBox="0 0 24 24">
                <path d="M19 10.5h-5.5V5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v5.5H5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h5.5V19c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-5.5H19c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z"/>
              </svg>
            ) : (
              <div className="w-full h-full rounded-full bg-sky-500/20 dark:bg-sky-400/20 shadow-[0_0_12px_rgba(56,189,248,0.25)]"></div>
            )}
          </div>
        ))}
      </div>

      {/* Top Fixed Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-transparent z-[100] pointer-events-none">
        <div id="scroll-progress" className="h-full bg-gradient-to-r from-teal-500 via-sky-400 to-teal-500 w-0"></div>
      </div>

      {/* Main Page Layout Wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <BreakingNews />
        
        {/* Main Content Area */}
        <main ref={pageWrapperRef} className="flex-grow pt-4">
          <Outlet />
        </main>
        
        <Footer />
        <SearchModal />
      </div>
    </div>
  );
};

export default MainLayout;
