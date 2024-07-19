import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay, Pagination, Scrollbar } from "swiper/modules";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SliderComponent = () => {
  const [isLoading, setIsLoading] = useState(true);

  const imageUrls = [
    {
      url: "https://cdn.builder.io/api/v1/image/assets/TEMP/c34719a5760b420da93199b245058d19f21dd1681df6e0596cf8bf1de786d308?apiKey=0bc16f2f0d6a46d9b1296b8c9a315482&",
      width: 800,
      height: 600,
      alt: "Image 1 description",
    },
    {
      url: "https://cdn.builder.io/api/v1/image/assets/TEMP/1b0637bed0518cc6adfec9c73be1365577988d916ebb2ce4986966ab195df3d4?apiKey=0bc16f2f0d6a46d9b1296b8c9a315482&",
      width: 800,
      height: 600,
      alt: "Image 2 description",
    },
    {
      url: "https://cdn.builder.io/api/v1/image/assets/TEMP/7e11de303ac43192e0f21e0fcf534706f392055a37b5c512820034c67bef43be?apiKey=0bc16f2f0d6a46d9b1296b8c9a315482&",
      width: 800,
      height: 600,
      alt: "Image 3 description",
    },
    {
      url: "https://cdn.builder.io/api/v1/image/assets/TEMP/626db36b70df8272aaf2363bd249d433878d9fa1c04b2c7cbf832050c92b8c1c?apiKey=0bc16f2f0d6a46d9b1296b8c9a315482&",
      width: 800,
      height: 600,
      alt: "Image 4 description",
    },
    {
      url: "https://ecommerce.techinsights.guru/file/9994758f-3018-4310-ac66-c32ead46cd05.png",
      width: 800,
      height: 600,
      alt: "Image 5 description",
    },
    {
      url: "https://ibccambodia.com/wp-content/uploads/2023/09/ABA-Logo-Secondary.png.webp",
      width: 800,
      height: 600,
      alt: "Image 6 description",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const renderSkeleton = () => (
    <Skeleton
      height={0}
      width="100%"
      className="w-full aspect-[4/3] mt-10"
      style={{ paddingBottom: "75%" }}
    />
  );

  const renderImage = (image) => (
    <img
      loading="lazy"
      src={image.url}
      width={image.width}
      height={image.height}
      srcSet={`${image.url} 800w, ${image.url}?w=400 400w`}
      sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
      className="w-full h-full object-cover"
      alt={image.alt}
      style={{ aspectRatio: `${image.width}/${image.height}` }}
    />
  );

  return (
    <div>
      <section className="product-gallery" data-aos="fade-up-left">
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
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          {imageUrls.map((image, index) => (
            <SwiperSlide key={index} className="h-auto pb-10">
              <figure className="flex flex-col grow justify-center w-full bg-white rounded-xl">
                {isLoading ? renderSkeleton() : renderImage(image)}
              </figure>
            </SwiperSlide>
          ))}
          <div className="swiper-scrollbar mt-8"></div>
          <div className="swiper-pagination mt-8"></div>
        </Swiper>
      </section>
    </div>
  );
};

export default SliderComponent;
