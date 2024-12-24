import React from 'react';

import PhotoImg from '../img/about/photo.jpeg';

import {Link} from 'react-router-dom';

import {motion} from 'framer-motion';

import {transition1} from '../transitions';

const About = () => {
  return(
  <motion.section 
  initial={{opacity:0,y:'100%'}}
  animate={{opacity:1,y:0}}
  exit={{opacity:0,y:'100%'}}
  transition={transition1}
  className='section'>
    <div className='container mx-auto h-full relative'>
      <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-10'>
        <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden'>
          <img src={PhotoImg} alt=""/></div>
          <motion.div 
          initial={{opacity:0,y:'-80%'}}
          animate={{opacity:1,y:0}}
          exit={{opacity:0,y:'-80%'}}
          transition={transition1}
          className='flex-1 pt-36 pb-0 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'>
                  <h1 className='h1'>About</h1>
          <p>We specialize in wedding photography, corporate, family and senior portraits, often traveling to your destination to capture the perfect moment in the perfect place. From the shores here in Lake Geneva to the beaches of Lake Michigan in Milwaukee and Chicago and beyond. We will be there with you every step of the way to guarantee your special moments are captured for all time.
            To us photography is about people being real and then letting us paint a picture of that moment to remember it forever. This is the story that matters most: real people, real stories, real moments.
            We are incredibly blessed to have a team of photographers who work with us on any given weekend. Please take a few minutes to get to know us.</p>

            <Link to={'/Portfolio'} className='btn pb-5 mt-5'>View</Link>
        </motion.div>
   </div>
  </div>
    
  </motion.section>
  );
};

export default About;
