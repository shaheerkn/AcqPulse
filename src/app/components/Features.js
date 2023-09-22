import React from 'react';
import { BoltIcon, CalendarDaysIcon, UsersIcon } from '@heroicons/react/24/outline'

const primaryFeatures = [
  {
    name: 'Efficiency',
    description:
      'Enhance productivity with a tool that automates the research process, freeing you to focus on strategic decision-making.',
    icon: BoltIcon,
  },
  {
    name: 'Compliance',
    description:
      'Secure regulatory compliance with AcqPulse as your trusted aide in maneuvering through federal acquisition regulations seamlessly.',
    icon: UsersIcon,
  },
  {
    name: 'Competitive Edge',
    description:
      'Gain a strategic advantage with prompt and precise responses to regulatory inquiries, setting you a class apart in a  environment.',
    icon: CalendarDaysIcon,
  },
]

const Features = () => {
  return (
    <section className='bg-[#F9FAFB] py-24'>
      <dl className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3 max-w-[1230px] px-6 mx-auto">
        {primaryFeatures.map((feature) => (
          <div key={feature.name} className="flex flex-col items-center">
            <dt className="text-base font-semibold leading-7 text-[#101828] flex flex-col items-center gap-5 text-xl">
              <div className="flex items-center justify-center shadow-md border-2 border-[#EAECF0] bg-white rounded-xl p-3">
                <feature.icon className="h-6 w-6 text-black " aria-hidden="true" />
              </div>
              {feature.name}
            </dt>
            <dd className="mt-2 flex flex-auto flex-col text-base leading-7 text-[#475467] text-center">
              <p className="flex-auto">{feature.description}</p>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export default Features;
