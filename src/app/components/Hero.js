"use client"

import React from 'react';
import { motion } from "framer-motion";


const Hero = () => {
  return (
    <section className='relative lg:h-screen bg-primary bg-no-repeat bg-top flex flex-col items-center justify-center text-white text-center font-poppins bg-fixed' style={{ backgroundImage: 'url(/assets/BgPattern.svg)'}}>
      <div className='max-w-7xl px-6 mt-10 py-28'>
        <h5 className='text-base font-semibold animate-wiggle'>Welcome to AcqPulse</h5>
          <h1 className='font-semibold text-3xl sm:text-4xl lg:text-[65px] lg:leading-snug tracking-tight'>The fastest way to conduct AI powered acquisition <motion.span initial={{ position: "static" }} animate={{ position: "relative" }} className='relative hidden lg:inline-block z-50 before:-z-40 before:absolute before:left-2/4 before:-translate-x-2/4 before:contents-[] before:border-4 before:border-secondary before:w-[256.95px] before:-rotate-6 before:top-2  before:h-[68px] before:rounded-[50%] '>research</motion.span> with live data from the internet</h1>
        <p className='text- text- sm:text-lg text-[#EAECF0] mt-6 max-w max-w-[998px] mx-auto'>AcqPulse goes beyond being just another web-based research tool – it stands as the world's first platform empowering users to extract live data directly from the internet. Tailoring solutions to enterprise users, it grants the ability to specify which acquisition websites to search from, offering a carefully curated list to derive data from. This presents an unrivaled avenue for harnessing the most current and relevant information available online, streamlining research processes, and optimizing decision-making.</p>
        <div className='flex flex-wrap mt-12 gap-3 justify-center'>
          <a href='#' className='flex items-center gap-3 text-lg bg-white text-[#344054] px-8 py-4 rounded-lg font-semibold'> 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
          </svg>Demo</a>
          <a href='#' className='transition-all hover:bg-transparent border-[1px] border-transparent hover:text-secondary hover:border-secondary bg-secondary  px-8 py-4 rounded-lg text-lg font-semibold text-primary shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'>Get Started</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;



        {/* <motion.div
          className="container"
          initial={{ scale: 0 }} animate={{ rotate: 180, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
        /> */}