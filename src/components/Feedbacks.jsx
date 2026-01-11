import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

// ✅ HANYA SATU FeedbackCard
const FeedbackCard = ({ index, name, image }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
  >
    <div className='relative w-full'>
      <img
        src={image}
        alt={name}
        className='w-full h-auto rounded-2xl'
      />
    </div>

    <div className='mt-4'>
      <h3 className='text-white font-bold text-[20px] text-center'>
        {name}
      </h3>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My achievements</p>
          <h2 className={styles.sectionHeadText}>Certificates.</h2>
        </motion.div>
      </div>

      <div className={`-mt-20 pb-14 ${styles.paddingX}`}>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 place-items-center">
    {testimonials.map((item, index) => (
      <FeedbackCard key={item.name} index={index} {...item} />
    ))}
  </div>
</div>

    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
