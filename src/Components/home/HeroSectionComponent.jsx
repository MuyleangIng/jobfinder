import React from "react";
import { Button } from "flowbite-react";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

const HeroSectionComponent = ({ isLoading }) => {
  return (
    <section className="flex flex-col pb-20 bg-white dark:bg-gray-900" data-aos="zoom-in-up">
      <div className="flex justify-center items-center px-4 py-10 bg-white dark:bg-gray-900 md:px-16">
        <div className="w-full max-w-[1031px] mt-12 md:mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col">
              {isLoading ? (
                <header className="flex flex-col mt-4 md:mt-3.5 space-y-4 animate-pulse">
                  <Skeleton height={50} width={350} />
                  <Skeleton height={50} width={250} />
                  <Skeleton height={300} width={455} className="mt-7" />
                  <Skeleton height={30} width={400} className="mt-1.5" />
                </header>
              ) : (
                <header className="flex flex-col mt-4 md:mt-3.5 space-y-4">
                  <h1 className="text-4xl md:text-7xl font-semibold text-blue-800 dark:text-blue-400 leading-tight md:leading-[79px] text-left">
                    <span className="font-bold text-slate-800 dark:text-slate-200 block">Discover more than</span>
                    <span className="font-bold text-blue-800 dark:text-blue-400 block">5000+ Jobs</span>
                  </h1>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d655f199c80b77e13498ccbdbb457b371b5e7da0adeaf1a1ed99dee40011475d?apiKey=ff00f11844934b2d9618929d5184b9ad&"
                    alt="Job search illustration"
                    className="mt-7 w-full md:w-[455px] aspect-[11.11]"
                    width="455"
                    height="455"
                  />
                  <p className="mt-1.5 text-2xl leading-10 text-slate-600 dark:text-slate-300 text-left">Great platform for the job seeker that searching for new career heights and passionate about startups.</p>
                </header>
              )}
              {isLoading ? (
                <div className="self-start mt-6">
                  <Skeleton height={50} width={150} className="rounded-full" />
                </div>
              ) : (
                <NavLink to="/login" className="self-start">
                  <Button color="blue" className="px-8 py-1.5 mt-6 text-lg font-medium leading-8 text-white bg-blue-800 hover:bg-blue-700 active:bg-blue-900 shadow-sm rounded-full md:px-5">Try now</Button>
                </NavLink>
              )}
            </div>
            <aside className="flex flex-col justify-center mt-20 md:mt-0">
              {isLoading ? (
                <Skeleton height={500} width={500} className="animate-pulse" />
              ) : (
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7620bd35db1e99b287d0833a4e21720c284eae51b18eac7bbdab11c40b01bc31?apiKey=391ff68a63584b0181b4aa51e20262f0&"
                  alt="Job seeker illustration"
                  className="w-full h-auto md:max-w-full"
                  width="500"
                  height="500"
                />
              )}
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionComponent;
