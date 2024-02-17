import React from "react";
import Image from "../assets/img/house-banner.png";
import Search from "../components/Search";

const Banner = () => {
  return (
    <section className="h-full max-h-[640px] mb-8 xl:mb-24">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0">
          <h1 className="text-4xl lg:text-[58px] font-semibold leading-none mb-6">
            <span className="text-violet-700">Rent</span> Your Dream House With
            Us.
          </h1>
          <p className="max-w-[480px] mb-8">
            Welcome to HomeLand, where your dream home awaits. Our team of
            dedicated professionals is committed to helping you find the perfect
            property to call home. Whether you're searching for a cozy apartment
            in the heart of the city, a spacious family house in the suburbs, or
            a luxurious waterfront estate, we have the expertise and resources
            to make your real estate dreams a reality. Explore our wide range of
            listings, tailored to suit every lifestyle and budget. With
            personalized service and attention to detail, we're here to guide
            you every step of the way on your journey to finding the home of
            your dreams.
          </p>
        </div>
        <div className="hidden flex-1 lg:flex justify-end items-end">
          <img src={Image} alt="" />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
