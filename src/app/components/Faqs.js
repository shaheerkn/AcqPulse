"use client";

import React from "react";
import { Disclosure, Transition } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import GetInTouch from "./GetInTouch";

const faqs = [
  {
    question: "What is AcqPulse?",
    answer:
      "AcqPulse is your go-to AI-powered tool designed to assist professionals in easily navigating Federal Acquisition Regulations (FAR) by providing concise and actionable answers sourced live from the internet.",
  },
  {
    question: "How does AcqPulse work?",
    answer: "Simply input your FAR-related query, and AcqPulse will use AI technology to search the internet, synthesize relevant data, and provide you with summarized answers.",
  },
  {
    question: "What are the different subscription tiers available with AcqPulse?",
    answer: "We offer three tiers: <br> - Basic: Utilizes GPT-3.5 for reliable answers <br> - Premium: Offers more detailed responses powered by GPT-4.  <br> - Premium Plus: Allows you to specify which websites to search for even more tailored responses.",
  },
  {
    question: "How does the Premium Plus tier enhance my search experience?",
    answer: "The Premium Plus tier offers the unique feature of letting users specify the websites from which to source information, ensuring the most customized and reliable results for your queries.",
  },
  {
    question: "How up-to-date is the information provided by AcqPulse?",
    answer: "AcqPulse retrieves live data from the internet, ensuring that you always receive the most current and relevant information in response to your queries.",
  },
  {
    question: "Is there a demo available for prospective users?",
    answer: "Yes, we would be delighted to showcase the capabilities of AcqPulse through a demo. Please reach out to us to arrange a session at a convenient time for you.",
  },
  {
    question: "How does AcqPulse ensure compliance with FAR regulations?",
    answer: "AcqPulse is designed to aid in regulatory compliance by providing precise and up-to-date information sourced from a wide array of reliable resources, helping you navigate the complex terrain of FAR with ease.",
  },
  {
    question: "How can AcqPulse give me a competitive edge?",
    answer: "By offering swift and precise responses to regulatory inquiries, AcqPulse empowers you to stay ahead in a competitive landscape, saving you time and facilitating informed decision-making.",
  },
  {
    question: "How can AcqPulse give me a competitive edge?",
    answer: "Absolutely. AcqPulse leverages advanced AI technologies, GPT-3.5 and GPT-4, to synthesize information from reliable sources, delivering trustworthy and accurate answers to your questions.",
  },
  {
    question: "How do I get started with AcqPulse?",
    answer: "Getting started is easy! Sign up for the tier that suits your needs best and begin your journey to effortless FAR compliance. You can also request a demo to witness the capabilities of AcqPulse firsthand.",
  },
]

export default function Faqs() {
  return (
    <section className="bg-primary font-poppins py-12 sm:py-32 lg:py-24" id="faqs">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
        <div className="mx-auto max-w-4xl divide-y divide-white/10">
          <div className="text-white text-center">
            <h2 className="text-2xl sm:text-4xl font-bold leading-10 tracking-tigh">Frequently asked questions</h2>
            <p className='text-base sm:text-xl font-normal mt-3 sm:mt-5'>Everything you need to know about the product and billing.</p>
          </div>

          <dl className="mt-16 space-y-6 divide-y divide-white/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
                        <span className="text-sm sm:text-lg font-medium sm:leading-7">{faq.question}</span>
                        <span className="ml-3 sm:ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6 border-[1px] border-gray-400 rounded-full text-gray-400" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6 border-[1px] border-gray-400 text-gray-400 rounded-full" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>

                    <Transition
                      show={open}
                      enter="transition-opacity duration-300 ease-in"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="transition-opacity duration-300 ease-out"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      {(ref) => (
                        <dd ref={ref} className="mt-2 pr-12">
                          <p className="text-xs leading-4 sm:text-base sm:leading-7 text-gray-300" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                        </dd>
                      )}
                    </Transition>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
        <GetInTouch/>
      </div>
    </section>
  )
}