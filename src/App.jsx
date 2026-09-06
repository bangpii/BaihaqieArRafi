import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import ParticleDrift from "./components/ParticleDrift";
import useIsMobile from "./hooks/useIsMobile";

const App = () => {
  const isMobile = useIsMobile();

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <div className='relative'>
          <div className='particle-drift-bg'>
            <ParticleDrift
              mode='dark'
              speed={isMobile ? 0.6 : 1}
              density={isMobile ? 1.1 : 6}
              length={isMobile ? 1.3 : 2.2}
              opacity={isMobile ? 0.6 : 1}
              hue={-10}
              saturation={1}
              brightness={1.15}
            />
          </div>
          <div className='relative z-10'>
            <Experience />
            <Tech />
            <Works />
            <Feedbacks />
          </div>
        </div>
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;