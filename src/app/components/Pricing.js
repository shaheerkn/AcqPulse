import { CheckIcon } from "@heroicons/react/20/solid";

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
    mostPopular: true,
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
    <div className="py-24 sm:py-32" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-4xl">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Pricing
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Multi-Tiered Offerings
          </p>
        </div>
        <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
          We believe Untitled should be accessible to all companies, no matter
          the size.
        </p>
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.id}
              className={classNames(
                // tier.mostPopular ? "lg:z-10 lg:rounded-b-none" : "lg:mt-8",
                // tierIdx === 0 ? "lg:rounded-r-none" : "",
                // tierIdx === tiers.length - 1 ? "lg:rounded-l-none" : "",
                "flex flex-col justify-between rounded bg-white mx-4 p-8 ring-1 ring-gray-200 xl:p-10"
              )}
            >
              <div>
                <div className="flex flex-col items-center justify-center gap-x-4">
                  <p className="flex text-center items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-gray-900">
                      {tier.priceMonthly}
                    </span>
                    {/* <span className="text-sm font-semibold leading-6 text-gray-600">
                      /month
                    </span> */}
                  </p>
                  <h3
                    id={tier.id}
                    className={classNames(
                      // tier.mostPopular ? "text-indigo-600" : "text-gray-900",
                      "text-lg mt-2 font-semibold leading-8"
                    )}
                  >
                    {tier.name}
                  </h3>
                  {/* {tier.mostPopular ? (
                    <p className="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-indigo-600">
                      Most popular
                    </p>
                  ) : null} */}
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
                      {/* <CheckIcon
                        className="h-6 w-5 flex-none text-indigo-600"
                        aria-hidden="true"
                      /> */}
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="24" height="24" rx="12" fill="#DCFAE6" />
                        <path
                          fillrule="evenodd"
                          cliprule="evenodd"
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
                  // tier.mostPopular
                  //   ? "bg-indigo-600 text-white shadow-sm hover:bg-indigo-500"
                  //   : "text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300",
                  "mt-8 text-white block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                )}
                style={{ backgroundColor: "#023047" }}
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
