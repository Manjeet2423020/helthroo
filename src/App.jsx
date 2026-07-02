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
function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#f6f9f9] dark:bg-[#0b0f19] transition-colors duration-300">
      {/* Ambient background animations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[8%] left-[5%] w-[45vw] h-[45vw] rounded-full bg-brand-mint/10 blur-[130px] animate-blob-1"></div>
        <div className="absolute top-[28%] right-[2%] w-[50vw] h-[50vw] rounded-full bg-brand-accent/10 blur-[150px] animate-blob-2"></div>
        <div className="absolute top-[50%] left-[10%] w-[42vw] h-[42vw] rounded-full bg-brand-mint/8 blur-[130px] animate-blob-1"></div>
        <div className="absolute top-[72%] right-[5%] w-[48vw] h-[48vw] rounded-full bg-brand-accent/10 blur-[140px] animate-blob-2"></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <BreakingNews />
        <Hero />
        <Webstories />
        <HealthShorts />
        <StateNews />
        <Wellness />
        <Health />
        <Other />
        <ShortVideo />
        <Podcast />
        <Medical />
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
}

export default App;
