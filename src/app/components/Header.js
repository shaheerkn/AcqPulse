"use client"; // This is a client component 👈🏽

import { useState } from 'react'
import logo from '../../../public/assets/AcqPulseLogo.png'
import React from 'react';
import Image from 'next/image'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Features', href: '#features' },
  { name: 'Questions', href: '#faqs' },
  { name: 'Pricing', href: '#pricing' },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="absolute z-10 w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-[52px] p-6 lg:px-10" aria-label="Global">
        <div className="flex items-center gap-10 ">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">AcqPulse</span>
              <Image
                src={logo}
                alt="Logo"
                width="350px"
                height="300px"
                className='h-8 w-auto'
              />
            </a>
          </div>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-base font-poppins font-semibold leading-6 text-white before:content-[''] relative before:absolute before:bottom-0 before:left-1/2 before:transform before:-translate-x-1/2 before:h-[2px] before:bg-secondary before:w-0 before:transition-all before:duration-300 before:origin-center hover:before:w-full">
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex flex-1 items-center justify-end gap-x-6">
          <a href="#" className="hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-white">
            Log in
          </a>
          <a
            href="#"
            className="hidden lg:block rounded-md transition-all hover:bg-transparent border-[1px] border-transparent hover:text-secondary hover:border-secondary bg-secondary px-3 py-2 text-sm font-semibold text-primary shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Sign up
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6 text-white" aria-hidden="true" />
          </button>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-primary px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between gap-x-6">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">AcqPulse</span>
              <Image
                src={logo}
                alt="Logo"
                width="350px"
                height="300px"
                className='h-8 w-auto'
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-gray-400"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:text-gray-400"
                >
                  Log in
                </a>

                <a
                  href="#"
                  className="block mt-5 text-center ml-auto rounded-md bg-secondary px-3 py-2 text-sm font-semibold text-primary shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Sign up
                </a>

              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
