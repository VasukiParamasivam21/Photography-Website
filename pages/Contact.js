import React from 'react';
import heavenkuttyImg from '../img/contact/heavenkutty.png';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className="section bg-white"
    >
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start pt-20 gap-x-8 text-center lg:text-left">
          <div className="lg:flex-1 lg:pt-20 px-4">
            <h1 className="h1">Contact</h1>
            <h2 className='h2'>ADDRESS :  </h2><p>Opulent Photography,kolathur,Chennai</p>
    <p>Num:9047472009</p>
            <p className="mb-10 pt-10">I would love to get suggestions from you.</p>
           
            <form className="flex flex-col gap-y-6 ">
              <input
                className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                type="text"
                placeholder="Your Name"
                aria-label="Your Name"
              />
              <input
                className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                type="email"
                placeholder="Your Email address"
                aria-label="Your Email Address"
              />
              <textarea
                className="outline-none border-b border-b-primary bg-transparent font-secondary w-full pl-3 h-[60px] placeholder:text-[#757879]"
                placeholder="Your Message"
                aria-label="Your Message"
              ></textarea>

            <button className="btn mb-20 mx-auto lg:mx-0 self-start">
                Send it
            </button>

            
            </form>
          </div>
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ transition: transition1, duration: 1.5 }}
            className="lg:flex-1"
          >
            <img src={heavenkuttyImg} alt="heavenimg" className="w-full mb-19 pl-3" />
          
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact; 