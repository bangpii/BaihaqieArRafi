import { motion } from "framer-motion";

import { technologies } from "../../constants";

const MobileTechLogos = () => {
  return (
    <div className='mobile-tech-logos py-4 px-2'>
      {technologies.map((technology, i) => (
        <motion.div
          key={technology.name}
          className='mobile-tech-item'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: (i % 5) * 0.1 }}
        >
          <img src={technology.icon} alt={technology.name} loading='lazy' />
        </motion.div>
      ))}
    </div>
  );
};

export default MobileTechLogos;
