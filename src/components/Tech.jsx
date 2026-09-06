import React from "react";

import { BallCanvas } from "./canvas";
import MobileTechLogos from "./mobile/MobileTechLogos";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
      <div className='hidden md:flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>

      <div className='md:hidden'>
        <MobileTechLogos />
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
