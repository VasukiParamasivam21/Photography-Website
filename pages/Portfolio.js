import React from 'react';

import Image1 from '../img/portfolio/1.photo.jpeg';
import Image2 from '../img/portfolio/2.png.jpeg';
import Image3 from '../img/portfolio/3.png.jpeg';
import Image4 from '../img/portfolio/4.png.jpeg';
import Image5 from '../img/portfolio/5.png.jpeg';
import Image6 from '../img/portfolio/6.png.jpeg';

import {Link} from 'react-router-dom';

const Portfolio = () => {
    return <section class='section'>
      <div class="container mx-auto h-full relative">
         <div class='flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
            <div class='flex flex-col lg:items-start'>
               <h1 class='h1'>portfolio</h1>
               <p class='mb-3 max-w-sm'>In the digital era, a photographer's website is more than just an online portfolio; it's a comprehensive showcase of their artistic vision, technical skills, and unique style. The best photographer websites display stunning imagery and provide a seamless user browsing experience, 
                  ensuring potential clients can easily navigate through the portfolio, learn about the photographer, and get in touch for bookings. Whether you’re a skilled professional or an emerging talent, having a well-designed website is crucial to standing out in the competitive world of photography.
                  Photographers websites must be visually appealing, accessible, and mobile-friendly. They should feature high-quality images, a clear and concise biography, client testimonials, and an easy-to-use contact form.</p>

            <Link to={'/contact'} class='btn mb-20 mx-auto lg:mx-10'>Feedback</Link>       
            </div>
            <div class='grid grid-cols-2 lg:gap-2'>
               <div class='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220]  overflow-hidden'>
                  <img class='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'src={Image1} alt='baby boy'/>
               </div>

               <div class='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220]  overflow-hidden'>
                  <img class='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'src={Image2} alt='baby girl'/>
               </div>

               <div class='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220]  overflow-hidden'>
                  <img class='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'src={Image3} alt='baby shower'/>
               </div>

               <div class='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220]  overflow-hidden'>
                  <img class='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'src={Image4} alt='bride to be'/>
               </div>

               <div class='max-w-[250px] lg:max-w-[320px] h-[200px] lg:h-[220] w-[400] overflow-hidden'>
                  <img class='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'src={Image5} alt='pre-wedding'/>
               </div>

               <div class='max-w-[250px] lg:max-w-[320px] h-[200px] lg:h-[220]  overflow-hidden'>
                  <img class='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'src={Image6} alt='wedding'/>
               </div>
            </div>
         </div>
      </div>

    </section>
}

export default Portfolio