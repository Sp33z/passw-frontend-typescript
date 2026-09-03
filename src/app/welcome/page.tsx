"use client";

import { useState } from "react";
import Image from "next/image";
import { SwiperClass, SwiperSlide, Swiper } from "swiper/react";

import Indicator from "@/components/ui/Indicator";

import { ONBOARDING_SLIDES } from "./content";
import { redirect } from "next/navigation";

const WelcomePage = () => {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const [activePage, setActivePage] = useState(0);

  return (
    <>
      <Swiper
        className="w-full h-full"
        slidesPerView={1}
        spaceBetween={50}
        onSwiper={(swiper) => {
          setSwiper(swiper);
        }}
        onSlideChange={(swiper) => {
          setActivePage(swiper.activeIndex);
        }}
      >
        {ONBOARDING_SLIDES.map((options) => {
          const { id, headline, body, visual } = options;

          return (
            <SwiperSlide
              key={id}
              className="flex! flex-col! items-center! justify-evenly! gap-8"
            >
              <header className="w-full min-h-35 flex flex-col items-center justify-between p-4 gap-8">
                <h3 className="font-semibold text-center">{headline}</h3>
                <p className="text-center">{body}</p>
              </header>
              <Image
                className="w-auto h-1/2 my-auto"
                loading="eager"
                src={visual}
                alt="Phone with lock."
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Indicator swiper={swiper} activePage={activePage} />
      <footer className="w-full h-fit flex flex-row  items-center justify-center gap-4">
        <button
          className="bg-transparent w-2/5 h-fit flex items-center justify-center py-4 px-8 rounded-full border"
          onClick={() => {
            swiper?.slideTo(swiper.slides.length);
          }}
        >
          <p
            className="font-semibold text-(--text)"
            style={{
              opacity:
                (swiper?.slides.length || 0) - 1 == activePage ? "0.25" : "1",
            }}
          >
            Skip
          </p>
        </button>
        <button
          className="bg-(--accent) w-full h-fit flex items-center justify-center p-4 rounded-full border border-(--accent)"
          onClick={() => {
            if (swiper?.slides.length == activePage + 1) {
              redirect("/setup");
            }

            swiper?.slideNext();
          }}
        >
          <p className="font-semibold text-(--text)">
            {swiper && activePage == swiper?.slides.length - 1
              ? "Get started"
              : "Confirm"}
          </p>
        </button>
      </footer>
    </>
  );
};

export default WelcomePage;
