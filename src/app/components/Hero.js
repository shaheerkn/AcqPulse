import React from 'react';
// import BgPattern from '../assets/BgPattern.svg'


const Hero = () => {
  return (
    <section className='relative h-screen bg-primary bg-no-repeat bg-top flex flex-col items-center justify-center text-white text-center' style={{ backgroundImage: 'url(/assets/BgPattern.svg)'}}>
      <div className='max-w-[1230px]'>
        <h5 className='text-base'>Welcome to AcqPulse</h5>
        <h1 className='font- font-semibold text-[65px] leading-snug'>The fastest way to conduct AI powered acquisition <span className='relative z-10 before:absolute before:left-2/4 before:-translate-x-2/4 before:contents-[] before:border-2 before:border-secondary before:w-[256.95px] before:-rotate-6 before:top-2  before:h-[68px] before:rounded-[50%] '>research</span> with live data from the internet</h1>
        <p className='text-lg text-[#EAECF0] mt-6'>AcqPulse goes beyond being just another web-based research tool – it stands as the world's first platform empowering users to extract live data directly from the internet. Tailoring solutions to enterprise users, it grants the ability to specify which acquisition websites to search from, offering a carefully curated list to derive data from. This presents an unrivaled avenue for harnessing the most current and relevant information available online, streamlining research processes, and optimizing decision-making.</p>
      </div>
    </section>
  );
}

export default Hero;
