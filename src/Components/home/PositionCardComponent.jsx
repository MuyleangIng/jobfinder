import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay, Pagination, Scrollbar } from "swiper/modules";
import { CardComponent } from "../feat-jobs/CardComponent";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const PositionCardComponent = ({ jobs, isLoading }) => {
  const renderSlides = () => {
    if (isLoading) {
      return Array.from({ length: 4 }).map((_, index) => (
        <SwiperSlide key={index} className="h-auto">
          <div className="flex flex-col p-6 text-base leading-6 bg-white border border-solid border-gray-200 rounded-lg shadow-md max-w-xs mx-auto animate-pulse">
            <div className="flex gap-5 justify-between items-center mb-4">
              <Skeleton circle={true} height={48} width={48} />
              <Skeleton height={24} width={80} className="rounded-full" />
            </div>
            <Skeleton height={20} width={`75%`} className="mb-4 rounded-full" />
            <div className="flex gap-2 justify-between mb-4">
              <Skeleton height={20} width={`30%`} className="rounded-full" />
              <Skeleton height={20} width={`25%`} className="rounded-full" />
            </div>
            <Skeleton height={80} width={`100%`} className="mb-4 rounded" />
            <Skeleton
              height={36}
              width={150}
              className="self-center rounded-full"
            />
          </div>
        </SwiperSlide>
      ));
    }

    return jobs.map((job) => (
      <SwiperSlide key={job.id} className="h-auto">
        <CardComponent job={job} />
      </SwiperSlide>
    ));
  };

  return (
    <div>
      <section
        className="flex flex-col mt-16"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
      >
        <h2 className="self-start text-3xl leading-6 text-black max-md:ml-2.5">
          List Jobs
        </h2>
        <div className="mt-8 w-full max-md:mt-10">
          <Swiper
            modules={[Autoplay, Pagination, Scrollbar]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
          >
            {renderSlides()}
            {/* <div className="swiper-scrollbar mt-8"></div>
            <div className="swiper-pagination mt-8"></div> */}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default PositionCardComponent;
