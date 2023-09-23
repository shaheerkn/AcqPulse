"use client"; 

import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../../public/assets/scheme_2.json';

const features = [
  {
    id: 1,
    title: "Submit Your Acquisition-related Query",
    featureDescription:
      "Begin with typing in your Federal Acquisition Regulation (FAR) related question or keyword. AcqPulse is designed to assist contracting professionals in navigating the complex regulatory landscape with ease and precision.",
    featureURl: "#"
  },
  {
    id: 2,
    title: "AI-Powered Analysis and Synthesis",
    featureDescription:
      "<li>Basic users: Experience the intelligence of GPT-3.5 as it synthesizes answers from a wide array of online sources.</li> <li>Basic users: Experience the intelligence of GPT-3.5 as it synthesizes answers from a wide array of online sources.</li>",
    featureURl: "#"
  },
  {
    id: 3,
    title: "Receive Concise, Actionable Answers",
    featureDescription:
      "Retrieve expertly crafted summaries and answers to your queries, helping you stay compliant and informed without the need to sift through volumes of data. AcqPulse consolidates the most relevant information, offering you a streamlined pathway to regulatory compliance.",
    featureURl: "#"
  }
]

const FeaturesWithLottie = () => {
  return (
    <section className='py-12 lg:py-28 font-poppins' id='features'>
      <div className='text-center max-w-3xl mx-auto px-6 sm:px-0'>
       <h5 className='text-secondary text-base font-semibold'>Features</h5>
       <h2 className='text-4xl font-semibold mt-3'>Overflowing with useful features</h2>
       <p className='text-xl font-normal text-[#475467] mt-5'>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
      </div>

      <div className='flex items-center max-w-[1200px] mx-auto px-6 justify-between mt-10 flex-col lg:flex-row gap-y-14'>
        <div className='max-w-sm xl:max-w-lg'>
          <Lottie animationData={animationData} />
        </div>
        <div className='max-w-[590px] flex flex-col gap-12'>
          {features.map((feature) => {
            return (
              <div className='flex gap-4 items-start' key={feature.id}>
                <div className='bg-[#F4EBFF] border-4 xl:border-8 border-[#F9F5FF] text-base text-secondary flex items-center justify-center rounded-[50%] w-8 h-8 xl:w-14 xl:h-14'>
                  <p className='leading-0'>{ feature.id }</p>
                </div>
                <div className=' max-w-[300px] sm:max-w-lg'>
                  <h5 className='text-base font-semibold text-[#101828] mt-2'>{ feature.title }</h5>

                  <div className='text-[#475467] font-normal font-poppins mt-2'>
                    {feature.featureDescription.includes('<li>') ? (
                      <ul className="list-disc pl-4" dangerouslySetInnerHTML={{ __html: feature.featureDescription }} />
                    ) : (
                      <p dangerouslySetInnerHTML={{ __html: feature.featureDescription }} />
                    )}
                  </div>

                  <a href={feature.featureURl} className='text-secondary font-semibold mt-5 inline-block flex gap-1 group'>Learn more 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 group-hover:translate-x-3 transition-transform"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" /></svg>
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}

export default FeaturesWithLottie;
