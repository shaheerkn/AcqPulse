"use client";

import { CheckIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";

const tiers = [
  {
    name: "Basic plan",
    id: "tier-freelancer",
    href: "#",
    priceMonthly: "$395/yr",
    description: "Billed annually.",
    features: [
      "AI powered research with live results from the internet",
      "Leverage the intelligence of <br> <b>GPT-3.5</b> to receive reliable answers to your acquisition queries.",
      "Basic reporting and analytics",
      "Up to 10 individual users",
      "20GB individual data each user",
      "Basic chat and email support",
    ],
    mostPopular: false,
  },
  {
    name: "Business plan",
    id: "tier-startup",
    href: "#",
    priceMonthly: "$495/yr",
    description: "Billed annually.",
    features: [
      "AI powered research with live results from the internet",
      "Experience the heightened capabilities of <b>GPT-4</b>, offering even more precise and detailed responses.",
      "Advanced reporting and analytics",
      "<b>Unlimited Inquiries</b>",
      "Intelligent Analysis",
      "Priority chat and email support"
    ],
    mostPopular: false,
  },
  {
    name: "Enterprise plan",
    id: "tier-enterprise",
    href: "#",
    priceMonthly: "Contact Us",
    description: "Specify which websites to search.",
    features: [
      "AI powered research with live results from the internet",
      "Experience the heightened capabilities of <b>GPT-4</b>, offering even more precise and detailed responses.",
      "Audit log and data history",
      "Unlimited individual users",
      "Unlimited individual data",
      "Personalised+priotity service"
    ],
    mostPopular: true,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Pricing() {
  return (
    <div className="py-24 sm:py-32 font-poppins" id="pricing" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-base font-semibold leading-7 text-secondary">
            Pricing
          </h2>
          <p className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Multi-Tiered Offerings
          </p>
        </div>
        <p className="mt-6 text-xl max-w-3xl leading-8 text-gray-600">
         We believe Untitled should be accessible to all companies, no matter the size.
        </p>
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 gap-8 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.id}
              className={classNames(
                "relative shadow-md flex flex-col justify-between rounded-2xl bg-white p-8 ring-1 ring-gray-200 xl:p-10"
              )}
            > 
              {tier.mostPopular && (
                <motion.div initial={{ scale: 0 }} viewport={{ once: true }} whileInView={{ scale: 1 }} transition={{ delay: 1 }} className="text-[#8ECAE6] text-center text-sm font-semibold sm:absolute -top-8 -right-4 pl-6">
                  <svg width="60" height="47" viewBox="0 0 60 47" className="hidden sm:block sm:absolute -left-8 top-2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.22056 42.9485C9.06321 43.7619 9.595 44.5488 10.4084 44.7061C11.2217 44.8635 12.0086 44.3317 12.166 43.5184L9.22056 42.9485ZM50.5841 4.2912C51.405 4.18023 51.9806 3.42474 51.8696 2.60378C51.7586 1.78282 51.0032 1.20727 50.1822 1.31824L50.5841 4.2912ZM4.78725 32.8308C4.36038 32.1208 3.43878 31.8913 2.7288 32.3182C2.01882 32.7451 1.78931 33.6667 2.21618 34.3766L4.78725 32.8308ZM8.9767 42.7098L7.69117 43.4828L7.69189 43.484L8.9767 42.7098ZM12.5932 43.7606L11.9803 42.3916L11.979 42.3921L12.5932 43.7606ZM23.5123 40.5155C24.2684 40.177 24.6069 39.2897 24.2684 38.5336C23.9299 37.7774 23.0425 37.4389 22.2864 37.7774L23.5123 40.5155ZM10.6933 43.2334C12.166 43.5184 12.1659 43.5187 12.1658 43.519C12.1658 43.5189 12.1658 43.5192 12.1658 43.5192C12.1658 43.5192 12.1658 43.5189 12.166 43.5184C12.1662 43.5173 12.1666 43.5152 12.1672 43.512C12.1684 43.5058 12.1705 43.4953 12.1735 43.4808C12.1794 43.4517 12.1887 43.4064 12.2016 43.3456C12.2274 43.2239 12.2676 43.0403 12.3233 42.8008C12.4349 42.3216 12.6088 41.6193 12.8551 40.7421C13.3481 38.9863 14.1291 36.5371 15.2773 33.7782C17.5833 28.2375 21.3236 21.5615 27.0838 16.7002L25.1489 14.4076C18.8763 19.7013 14.905 26.8651 12.5076 32.6255C11.3042 35.5171 10.4856 38.0837 9.96684 39.9311C9.7073 40.8554 9.52235 41.6015 9.40152 42.1204C9.34109 42.3799 9.29667 42.5827 9.26695 42.7227C9.25209 42.7927 9.24091 42.8471 9.23323 42.885C9.22939 42.9039 9.22643 42.9187 9.22432 42.9294C9.22327 42.9347 9.22243 42.9389 9.22181 42.9421C9.22149 42.9437 9.22123 42.9451 9.22103 42.9461C9.22092 42.9467 9.22081 42.9473 9.22075 42.9475C9.22065 42.9481 9.22056 42.9485 10.6933 43.2334ZM27.0838 16.7002C38.8964 6.73107 48.2848 4.60201 50.5841 4.2912L50.1822 1.31824C47.3237 1.70465 37.402 4.06662 25.1489 14.4076L27.0838 16.7002ZM2.21618 34.3766L7.69117 43.4828L10.2622 41.9369L4.78725 32.8308L2.21618 34.3766ZM7.69189 43.484C8.83415 45.3798 11.2204 46.0209 13.2074 45.1291L11.979 42.3921C11.2779 42.7068 10.5661 42.4412 10.2615 41.9357L7.69189 43.484ZM13.2061 45.1297L23.5123 40.5155L22.2864 37.7774L11.9803 42.3916L13.2061 45.1297Z" fill="#8ECAE6"/>
                  </svg>
                  Most Popular</motion.div>
              )}
              <div>
                <div className="flex flex-col items-center justify-center gap-x-4 ">
                  <p className="flex text-center items-baseline gap-x-1">
                    <span className="text-4xl font-semibold tracking-tight text-gray-900">
                      {tier.priceMonthly}
                    </span>
                  </p>
                  <h3
                    id={tier.id}
                    className={classNames(
                      "text-lg mt-2 font-semibold leading-8"
                    )}
                  >
                    {tier.name}
                  </h3>
                  <p className="text-sm text-center leading-6 text-gray-600">
                    {tier.description}
                  </p>
                </div>
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm leading-6 text-gray-600"
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="24" height="24" rx="12" fill="#DCFAE6" />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z"
                          fill="#17B26A"
                        />
                      </svg>
                      <div className="w-full max-[80%]" dangerouslySetInnerHTML={{ __html: feature }} />
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  "bg-primary mt-8 text-white block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 transition-all border hover:border-primary hover:bg-transparent hover:text-primary"
                )}
              >
                Get started
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


