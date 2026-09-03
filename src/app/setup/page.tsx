"use client";

import { useState } from "react";
import { SwiperClass, SwiperSlide, Swiper } from "swiper/react";

import WheelSelector from "@/components/ui/WheelSelector";
import { languages } from "@/values/languages";
import ProgressBar from "@/components/ui/ProgressBar";
import Input from "@/components/ui/Input";
import { LuUser } from "react-icons/lu";
import { MdOutlineCameraAlt } from "react-icons/md";
import { PiPassword } from "react-icons/pi";
import { IoFingerPrint } from "react-icons/io5";
import Indicator from "@/components/ui/Indicator";

const SetupPage = () => {
  const steps = [
    "Welcome",
    "Language",
    "Profile",
    "Password",
    "Biometrics",
    "Finish",
  ];

  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const [activePage, setActivePage] = useState(0);

  const [biometrics, setBiometrics] = useState<boolean>(false);

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
        <SwiperSlide className="flex! flex-col! items-center! justify-start gap-3">
          <header className="w-full min-h-fit flex flex-col items-center justify-start p-4 gap-4">
            <h3 className="font-semibold text-center">Choose your language</h3>
            <p className="text-center">
              We've set this based on your device — change it if needed.
            </p>
          </header>
          <div className="w-full h-full flex items-center justify-center p-4">
            <WheelSelector options={languages} visible={35} />
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex! flex-col! items-center! justify-start gap-4">
          <header className="w-full min-h-fit flex flex-col items-center justify-start p-4 gap-4">
            <h3 className="font-semibold text-center">
              What should we call you?
            </h3>
            <p className="text-center">
              This just personalizes your vault — it's stored locally and never
              leaves your device.
            </p>
          </header>
          <div className="w-full h-full flex flex-col items-center justify-center gap-16">
            <div className="relative w-40 h-40 flex items-center justify-center border-2 border-dashed rounded-full bg-(--text)/1">
              <LuUser className="w-auto h-3/10" />
              <button className="absolute bg-(--accent) bottom-0 right-0 w-16 h-16 border-6 border-(--background) flex flex-col items-center justify-center rounded-full translate-1/4">
                <MdOutlineCameraAlt className="w-auto h-6" />
              </button>
            </div>
            <Input
              className="w-9/10 h-fit bg-(--background) shadow rounded-xl p-4"
              placeholder="Hi, my name is..."
            />
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex! flex-col! items-center! justify-start gap-4">
          <header className="w-full min-h-fit flex flex-col items-center justify-start p-4 gap-4">
            <h3 className="font-semibold text-center">
              Create your master password
            </h3>
            <p className="text-center">
              This is the only password you'll ever need to remember. It
              encrypts everything in your vault.
            </p>
          </header>
          <div className="w-full h-full flex flex-col items-center justify-center gap-8">
            <Input
              className="w-9/10 h-fit bg-(--background) shadow rounded-xl p-4"
              placeholder="Password"
              Icon={PiPassword}
              type="password"
            />
            <Input
              className="w-9/10 h-fit bg-(--background) shadow rounded-xl p-4"
              placeholder="Password Again"
              Icon={PiPassword}
              type="password"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex! flex-col! items-center! justify-start gap-4">
          <header className="w-full min-h-fit flex flex-col items-center justify-start p-4 gap-4">
            <h3 className="font-semibold text-center">Unlock in a glance</h3>
            <p className="text-center">
              Use Face ID or your fingerprint to get into your vault instantly.
            </p>
          </header>
          <div className="w-full h-full flex flex-col items-center justify-center gap-8">
            <button
              className="h-2/4 w-auto flex items-center justify-center"
              onClick={() => setBiometrics(!biometrics)}
            >
              <IoFingerPrint
                className="w-auto h-full duration-300"
                style={{
                  opacity: biometrics ? "1" : "0.25",
                  color: biometrics ? "var(--accent)" : "",
                }}
              />
            </button>
            <p
              className="duration-300"
              style={{ opacity: biometrics ? "1" : "0.5" }}
            >
              Biometrics has been{" "}
              <span
                className="font-semibold"
                style={{
                  opacity: biometrics ? "1" : "0.5",
                  color: biometrics ? "var(--accent)" : "",
                }}
              >
                {biometrics ? "Enabled" : "Disabled"}
              </span>
              .
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex! flex-col! items-center! justify-start gap-4">
          <header className="w-full min-h-fit flex flex-col items-center justify-start p-4 gap-4">
            <h3 className="font-semibold text-center">
              You're all set, [Name]
            </h3>
            <p className="text-center">Your vault is ready.</p>
          </header>
        </SwiperSlide>
      </Swiper>
      {/*<ProgressBar
          options={steps}
          percentage={(100 / steps.length) * (2 + activePage)}
        />*/}
      <Indicator swiper={swiper} activePage={activePage} />
      <footer className="w-full h-fit flex flex-row  items-center justify-center gap-4">
        <button
          className="bg-(--background) w-2/5 h-fit flex items-center justify-center py-4 px-8 rounded-full border"
          onClick={() => {
            swiper?.slidePrev();
          }}
        >
          <p className="font-semibold text-(--text)">Back</p>
        </button>
        <button
          className="bg-(--accent) w-full h-fit flex items-center justify-center p-4 rounded-full border border-(--accent)"
          onClick={() => {
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

export default SetupPage;
