import React, { useEffect } from "react";
import { Button } from "flowbite-react";
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import heroImage1 from '../assets/images/hero-section.webp';
import heroImage2 from '../assets/images/react.svg';

const HeroSectionComponent = ({ title, subtitle, buttonText }) => {
  useEffect(() => {
    const img1 = new Image();
    img1.src = heroImage1;
    const img2 = new Image();
    img2.src = heroImage2;
  }, []);

  return (
    <section className="flex flex-col pb-20 bg-white dark:bg-gray-900 hero-section" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
      <div className="flex justify-center items-center px-4 py-10 bg-white dark:bg-gray-900 md:px-16">
        <div className="w-full max-w-[1031px] mt-12 md:mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col">
              <header className="flex flex-col mt-4 md:mt-3.5 space-y-4 hero-header">
                <h1 className="text-4xl md:text-7xl font-semibold text-blue-800 dark:text-blue-400 leading-tight md:leading-[79px] text-left">
                  <span className="font-bold text-slate-800 dark:text-slate-200 block">{title.line1}</span>
                  <span className="font-bold text-blue-800 dark:text-blue-400 block">{title.line2}</span>
                </h1>
                <img
                  loading="eager"
                  srcSet={`${heroImage1} 320w, ${heroImage1} 480w, ${heroImage1} 800w`}
                  sizes="(max-width: 320px) 280px, (max-width: 480px) 440px, 800px"
                  src={heroImage1}
                  alt="Job search illustration"
                  className="mt-7 w-full md:w-[455px] aspect-[11.11]"
                  width="500"
                  height="500"
                />
                <p className="mt-1.5 text-2xl leading-10 text-slate-600 dark:text-slate-300 text-left">{subtitle}</p>
              </header>
              <NavLink to="/login" className="self-start">
                <Button color="blue" className="px-8 py-1.5 mt-6 text-lg font-medium leading-8 text-white bg-blue-800 hover:bg-blue-700 active:bg-blue-900 shadow-sm rounded-full md:px-5">{buttonText}</Button>
              </NavLink>
            </div>
            <aside className="flex flex-col justify-center mt-20 md:mt-0">
              <img
                loading="lazy"
                srcSet={`${heroImage2} 320w, ${heroImage2} 480w, ${heroImage2} 800w`}
                sizes="(max-width: 320px) 280px, (max-width: 480px) 440px, 800px"
                src={heroImage2}
                alt="Job seeker illustration"
                className="w-full h-auto md:max-w-full"
                width="500"
                height="500"
              />
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

HeroSectionComponent.propTypes = {
  title: PropTypes.shape({
    line1: PropTypes.string,
    line2: PropTypes.string
  }).isRequired,
  subtitle: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired
};

HeroSectionComponent.defaultProps = {
  title: {
    line1: "Discover more than",
    line2: "5000+ Jobs"
  },
  subtitle: "Great platform for the job seeker that searching for new career heights and passionate about startups.",
  buttonText: "Try now"
};

export default HeroSectionComponent;
