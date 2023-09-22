import Image from "next/image";
import React from "react";

const CustomizedSearch = () => {
  return (
    <section>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Pricing
            </h2> */}
            <span className="bg-slate-100 text-[#219EBC] text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-2xl border border-slate-200">
              Integrations
            </span>
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Customized Search
            </p>
          </div>
          <p className="mt-6 text-center mx-auto max-w-xl text-lg leading-8 text-gray-600">
            The following are some of the websites available to limit your
            search for a curated epxerience:
          </p>
        </div>
        <div className="space-y-8 mx-auto max-w-7xl my-16 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div className="flex flex-col items-center justify-start">
            <div className="flex justify-center items-center mb-4 rounded-full bg-primary-100 dark:bg-primary-900 w-full h-[45px]">
              <Image src="/assets/ACQ.png" width="268" height="36" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-center">Acquisition.gov</h3>
            <p className="text-gray-500 dark:text-gray-400 text-center">
              Plan it, create it, launch it. Collaborate seamlessly with all the
              organization and hit your marketing goals every month with our
              marketing plan.
            </p>
          </div>

          <div className="flex flex-col items-center justify-start">
            <div className="flex justify-center items-center mb-4 rounded-full bg-primary-100 dark:bg-primary-900 w-full h-[45px]">
              <Image src="/assets/DAU.png" width="117" height="30" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-center">DAU.edu</h3>
            <p className="text-gray-500 dark:text-gray-400 text-center">
             Central hub for acquisition-related information, policies, and tools.
            </p>
          </div>

          <div className="flex flex-col items-center justify-start">
            <div className="flex justify-center items-center mb-4 rounded-full bg-primary-100 dark:bg-primary-900 w-full h-[45px]">
              <Image src="/assets/GAO.png" width="145" height="48" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-center">
              GAO.Gov
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-center">
             The Government Accountability Office (GAO) is known as "the investigative arm of Congress" and "the congressional watchdog."
            </p>
          </div>
  
          <div className="flex flex-col items-center justify-start">
            <div className="flex justify-center items-center mb-4 rounded-full bg-primary-100 dark:bg-primary-900 w-full h-[45px]">
              <Image src="/assets/Govinfo.png" width="118" height="41" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-center">Code of Federal Regulations</h3>
            <p className="text-gray-500 dark:text-gray-400 text-center">
             The Code of Federal Regulations (CFR) is the codification of the general and permanent rules published in the Federal Register by the executive departments and agencies of the Federal Government.
            </p>
          </div>
  
          <div className="flex flex-col items-center justify-start">
            <div className="flex justify-center items-center mb-4 rounded-full bg-primary-100 dark:bg-primary-900 w-full h-[45px]">
              <Image src="/assets/wifcon.png" width="175" height="50" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-center">
              Wifcon.com
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-center">
             Where in Federal Contracting? Serves the federal acquisition community by providing quick access to acquisition information.
            </p>
          </div>
    
          <div className="flex flex-col items-center justify-start">
            <div className="flex justify-center items-center mb-4 rounded-full bg-primary-100 dark:bg-primary-900 w-full h-[45px]">
              <Image src="/assets/armed.png" width="64" height="63" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-center">ABSCA.Mil</h3>
            <p className="text-gray-500 dark:text-gray-400 text-center">
              The Armed Services Board of Contract Appeals (ASBCA) is a court that decides appeals from government contracting officers' final decisions.
            </p>
          </div>
        </div>
        <a
          href="#"
          className="text-[#219EBC] font-semibold text-center block underline"
        >
          AND MANY MORE!
        </a>
      </div>
    </section>
  );
};

export default CustomizedSearch;
