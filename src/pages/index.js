import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import { useState } from 'react';
import ImageSlider from '@/components/ImageSlider';
import Carousel from '@/components/Carousel';

const inter = Inter({ subsets: ['latin'] })

export function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const plans = [
  {
    name: "Starter",
    id: "tier-hobby",
    href: "#",
    abbr: { monthly: '/mo', annually: '/yr' },
    status: { monthly: "billed monthly", annually: "billed anually" },
    price: { monthly: "$15", annually: "$144" },
    mostPopular: false,
  },
  {
    name: "Basic",
    id: "tier-freelancer",
    href: "#",
    abbr: { monthly: '/mo', annually: '/yr' },
    status: { monthly: "billed monthly", annually: "billed anually" },
    price: { monthly: "$30", annually: "$288" },
    mostPopular: false,
  },
  {
    name: "Growth",
    id: "tier-startup",
    href: "#",
    abbr: { monthly: '/mo', annually: '/yr' },
    status: { monthly: "billed monthly", annually: "billed anually" },
    price: { monthly: "$60", annually: "$576" },
    mostPopular: true,
  },
  {
    name: "Custom",
    id: "tier-enterprise",
    href: "#",
    status: { monthly: "", annually: "" },
    abbr: { monthly: '', annually: '' },
    price: { monthly: "TBD", annually: "TBD" },
    mostPopular: false,
  },
];

export default function Home() {
  const [isMonthly, setIsMonthly] = useState(false)
  return (
   <Layout>
      <main className='h-screen bg-gray-400'>
        <div className="flex flex-col justify-center items-center w-full min-h-screen bg-gray-100">
          <h1 className="text-4xl font-bold mb-4">Welcome to Your App</h1>
          <p className="text-lg mb-8">
            This is the main content of your app. You can add more elements here.
          </p>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 shadow-md rounded-md">
              {/* Dummy element 1 */}
              <h2 className="text-lg font-bold">Dummy Element 1</h2>
              <p>
                This is a description of Dummy Element 1. You can add more
                content here.
              </p>
            </div>
            <div className="bg-white p-4 shadow-md rounded-md">
              {/* Dummy element 2 */}
              <h2 className="text-lg font-bold">Dummy Element 2</h2>
              <p>
                This is a description of Dummy Element 2. You can add more
                content here.
              </p>
            </div>
            <div className="bg-white p-4 shadow-md rounded-md">
              {/* Dummy element 3 */}
              <h2 className="text-lg font-bold">Dummy Element 3</h2>
              <p>
                This is a description of Dummy Element 3. You can add more
                content here.
              </p>
            </div>
          </div>
        </div>
      <div className="flex flex-col justify-center items-center w-full min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your App</h1>
        <p className="text-lg mb-8">
          This is the main content of your app. You can add more elements here.
        </p>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 shadow-md rounded-md">
            {/* Dummy element 1 */}
            <h2 className="text-lg font-bold">Dummy Element 1</h2>
            <p>
              This is a description of Dummy Element 1. You can add more
              content here.
            </p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-md">
            {/* Dummy element 2 */}
            <h2 className="text-lg font-bold">Dummy Element 2</h2>
            <p>
              This is a description of Dummy Element 2. You can add more
              content here.
            </p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-md">
            {/* Dummy element 3 */}
            <h2 className="text-lg font-bold">Dummy Element 3</h2>
            <p>
              This is a description of Dummy Element 3. You can add more
              content here.
            </p>
          </div>
        </div>
      </div>
      {/* <div className='flex justify-center items-center'>
        <div>
          <h3>Bob</h3>
          <h3>John</h3>
        </div>
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={classNames(
              plan.mostPopular ? 'bg-secondary text-light' : '',
              'px-7 py-2 flex flex-col items-center space-y-3 border-2 rounded-lg border-[#f1f1f1] h-full'
            )}
          >
            <p className="font-bold text-[18px]">{plan.name}</p>
            <p>
              {isMonthly
                ? `${plan.price['monthly']} ${plan.abbr['monthly']} ${plan.status['monthly']}`
                : `${plan.price['annually']} ${plan.abbr['annually']} ${plan.status['annually']}`}
            </p>
            <button
              className={classNames(
                plan.mostPopular ? 'bg-light text-secondary' : '',
                'whitespace-nowrap border rounded-lg px-[8px] lg:h-[32px] xl:px-[16px] flex items-center justify-center'
              )}
            >
              {`Get ${plan.name}`}
            </button>
          </div>
        ))}
      </div> */}
      <div className="flex flex-col justify-center items-center w-full min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your App</h1>
        <p className="text-lg mb-8">
          This is the main content of your app. You can add more elements here.
        </p>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 shadow-md rounded-md">
            {/* Dummy element 1 */}
            <h2 className="text-lg font-bold">Dummy Element 1</h2>
            <p>
              This is a description of Dummy Element 1. You can add more
              content here.
            </p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-md">
            {/* Dummy element 2 */}
            <h2 className="text-lg font-bold">Dummy Element 2</h2>
            <p>
              This is a description of Dummy Element 2. You can add more
              content here.
            </p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-md">
            {/* Dummy element 3 */}
            <h2 className="text-lg font-bold">Dummy Element 3</h2>
            <p>
              This is a description of Dummy Element 3. You can add more
              content here.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full min-h-screen bg-gray-100">
        <Carousel />
      </div>
      <div className="bg-gray-50 flex flex-col justify-center items-center w-full min-h-screen">
        <div className="p-4 mt-4">
          <h1 className="text-4xl text-center font-semibold mb-6">Package status</h1>
          <div className="container">
            <div className="flex flex-col md:grid grid-cols-12 text-gray-50">

              <div className="flex md:contents">
                <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-green-500 pointer-events-none"></div>
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow text-center">
                    <i className="fas fa-check-circle text-white"></i>
                  </div>
                </div>
                <div className="bg-green-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                  <h3 className="font-semibold text-lg mb-1">Package Booked</h3>
                  <p className="leading-tight text-justify w-full">
                    21 July 2021, 04:30 PM
                  </p>
                </div>
              </div>

              <div className="flex md:contents">
                <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-green-500 pointer-events-none"></div>
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow text-center">
                    <i className="fas fa-check-circle text-white"></i>
                  </div>
                </div>
                <div className="bg-green-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                  <h3 className="font-semibold text-lg mb-1">Out for Delivery</h3>
                  <p className="leading-tight text-justify">
                    22 July 2021, 01:00 PM
                  </p>
                </div>
              </div>

              <div className="flex md:contents">
                <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-red-500 pointer-events-none"></div>
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-red-500 shadow text-center">
                    <i className="fas fa-times-circle text-white"></i>
                  </div>
                </div>
                <div className="bg-red-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                  <h3 className="font-semibold text-lg mb-1 text-gray-50">Cancelled</h3>
                  <p className="leading-tight text-justify">
                    Customer cancelled the order
                  </p>
                </div>
              </div>

              <div className="flex md:contents">
                <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-300 pointer-events-none"></div>
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-300 shadow text-center">
                    <i className="fas fa-exclamation-circle text-gray-400"></i>
                  </div>
                </div>
                <div className="bg-gray-300 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                  <h3 className="font-semibold text-lg mb-1 text-gray-400">Delivered</h3>
                  <p className="leading-tight text-justify">

                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
   </Layout> 
  )
}
