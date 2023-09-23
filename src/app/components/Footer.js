import React from 'react';

const navigation = [
  {
    name: 'Terms',
    href: '#',
  },
  {
    name: 'Privacy',
    href: '#',
  },
  {
    name: 'Support',
    href: '#',
  },
]

const Footer = () => {
  return (
    <footer className='bg-primary'>
      <div className="relative isolate overflow-hidden">
        <div className="px-6 pt-24 sm:px-6 sm:pt-32 lg:px-8 pb-16">
          <div className="mx-auto max-w-3xl text-center" data-aos="fade-right">
            <h2 className="text-3xl font-bold tracking-tight text-white font-poppins">
              Experience the Future of FAR Compliance Today
            </h2>
            <p className="mx-auto font-light mt-4 max-w-3xl text-xl leading-8 text-gray-300">
              Reach out for a demo or sign up to experience the differentiated offerings that come with our multi-tiered packages.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href='#' className='flex items-center gap-2 text-lg bg-white text-black px-5 py-[14px] rounded-lg font-semibold transition-transform hover:-translate-y-2'> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                </svg>View demo
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-[1216px] pt-8 pb pb-32 md:flex md:items-center md:justify-between border-t-2 border-[#667085]">
          <div className="flex justify-center space-x-6 md:order-2">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className=" text-[#667085] hover:text-gray-100">
                <span className="sr-only">{item.name}</span>
                {item.name}
              </a>
            ))}
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-[#667085]">
              AcqPulse  &copy; 2023 All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
