import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import ParticleDrift from "./components/ParticleDrift";

const App = () => {
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
              speed={1}
              density={2.5}
              length={1.5}
              opacity={0.9}
              hue={-10}
              saturation={0.9}
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
