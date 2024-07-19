import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

const AdvertisingComponent = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust as needed for real data loading time

    return () => clearTimeout(timer);
  }, []);

  const renderSkeletonArticle = () => (
    <article className="flex flex-col w-72 max-md:w-full">
      <div className="flex flex-col grow justify-end items-start pb-6 mx-auto w-full bg-white dark:bg-gray-800 rounded-lg border border-solid shadow-md border-zinc-100 max-md:mt-10">
        <Skeleton className="self-stretch w-full aspect-[1.64] rounded-t-lg" />
        <div className="px-4 py-3 w-full">
          <Skeleton height={24} width="80%" className="rounded" />
          <Skeleton height={20} width="90%" className="mt-2 rounded" />
          <div className="flex gap-2.5 mt-4">
            <Skeleton circle={true} height={36} width={36} />
            <div className="flex flex-col justify-center">
              <Skeleton height={20} width={100} className="rounded" />
              <Skeleton height={16} width={80} className="mt-1 rounded" />
            </div>
          </div>
        </div>
      </div>
    </article>
  );

  const renderArticle = () => (
    <article className="flex flex-col w-72 max-md:w-full">
      <div className="flex flex-col grow justify-end items-start pb-6 mx-auto w-full bg-white dark:bg-gray-800 rounded-lg border border-solid shadow-md border-zinc-100 max-md:mt-10">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5b56424f758fec61a49032145e42510f80e63232849847e7e8a597820af9287?apiKey=ff00f11844934b2d9618929d5184b9ad&"
          alt="iOS App Development and Web Development className"
          className="self-stretch w-full shadow-sm aspect-[1.64] rounded-t-lg"
        />
        <div className="px-4 py-3 w-full">
          <h3 className="mt-3 text-left font-bold leading-6 text-neutral-800 dark:text-neutral-200">
            "iOS App Development" and "Web Development" class
          </h3>
          <p className="mt-2 text-left leading-5 text-slate-500 dark:text-slate-400">
            We would like to thank the ADITI Academy for honoring ...
          </p>
          <div className="flex gap-2.5 mt-4">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/946966d7733b47c431c3071da2dbe95c11147830f249496e392a362399c528ea?apiKey=ff00f11844934b2d9618929d5184b9ad&"
              alt="Ryan Samuel's profile picture"
              className="shrink-0 w-9 aspect-square rounded-full"
            />
            <div className="flex flex-col justify-center">
              <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                Ryan Samuel
              </span>
              <time
                dateTime="2022-09-10"
                className="mt-1 text-xs text-slate-400 dark:text-slate-500"
              >
                10 September 2022
              </time>
            </div>
          </div>
        </div>
      </div>
    </article>
  );

  return (
    <div>
      <Link to={`/media`}>
        <section
          className="mt-16"
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <h2 className="text-3xl text-left leading-7 text-black dark:text-white max-md:ml-2.5">
            Advertising
          </h2>
          <div className="mt-8 overflow-x-auto scrollbar-hide">
            <div className="flex flex-row self-stretch max-md:max-w-full">
              <div className="flex gap-5 py-2 max-md:flex-col max-md:gap-0">
                {isLoading
                  ? Array.from({ length: 4 }).map((_, index) => (
                      <React.Fragment key={index}>
                        {renderSkeletonArticle()}
                      </React.Fragment>
                    ))
                  : Array.from({ length: 4 }).map((_, index) => (
                      <React.Fragment key={index}>
                        {renderArticle()}
                      </React.Fragment>
                    ))}
              </div>
            </div>
          </div>
        </section>
      </Link>
    </div>
  );
};

export default AdvertisingComponent;
