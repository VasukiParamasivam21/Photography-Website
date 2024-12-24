import React from 'react';

import vasuImg from '../img/home/vasu.jpeg';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {transition1} from '../transitions';

const Home = () => {
  return(
  <motion.section initial={{opacity:0}} 
  animate={{opacity:1}}
  exit={{opacity:0}}
  transition={transition1}
  className='section'>
    <div className="container mx-auto h-full relative">
     <div className='flex flex-col justify-center'>
       <motion.div 
       initial={{opacity:0,y:'-50%'}} 
       animate={{opacity:1,y:'0'}}
       exit={{opacity:0,y:'-50%'}}
       transition={transition1}
       className='w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 mb-30 lg:absolute flex flex-col justify-start lg:items-start'>
         <h1 className='h1'>Opulent<br/>Photography</h1>
         <p className='text-[30px] lg:text-[36px] font-primary mb-20 mt-2'>Chennai</p>
         <div>
         <Link to={'/about'} className='btn mb-[300px]'>Get Started</Link></div>
       </motion.div>
       <div className='flex justify-end max-h-96 lg:max-h-max'>
        <motion.div 
        initial={{scale:0}} 
        animate={{scale:1}}
        exit={{scale:0}}
        transition={transition1}
        className='relative lg:-right-40 overflow-hidden'>
          <motion.img
          whileHover={{scale:1.1}}
          transition={transition1}
          className='w-full'
          src={vasuImg} alt="vasu"  />
        </motion.div>
       </div>
      </div>
    </div>
  </motion.section>
  );
};

export default Home;
