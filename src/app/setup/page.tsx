"use client";

import { useState } from "react";
import { SwiperClass, SwiperSlide, Swiper } from "swiper/react";

import WheelSelector from "@/components/ui/WheelSelector";
import { languages } from "@/values/languages";
import ProgressBar from "@/components/ui/ProgressBar";
import Input from "@/components/ui/Input";

const SetupPage = () => {
    const steps = ["Welcome", "Language", "Profile", "Password", "Biometrics", "Finish"];

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
                <SwiperSlide className="flex! flex-col! items-center! justify-start gap-6">
                    <header className="w-full min-h-fit flex flex-col items-center justify-start p-4 gap-4">
                        <h3 className="font-semibold text-center">Choose your language</h3>
                        <p className="text-center">We've set this based on your device — change it if needed.</p>
                    </header>
                    <div className="w-full h-full flex items-center justify-center p-4">
                        <WheelSelector options={languages} visible={25} />
                    </div>
                </SwiperSlide>

                <SwiperSlide className="flex! flex-col! items-center! justify-start gap-4">
                    <header className="w-full min-h-fit flex flex-col items-center justify-start p-4 gap-4">
                        <h3 className="font-semibold text-center">What should we call you?</h3>
                        <p className="text-center">This just personalizes your vault — it's stored locally and never leaves your device.</p>
                    </header>
                    <div className="w-fit h-full flex flex-col items-center justify-center gap-4">
                        <div className="w-60 h-60 bg-amber-300 rounded-2xl"></div>
                        <Input />
                    </div>
                </SwiperSlide>
                
                <SwiperSlide className="flex! flex-col! items-center! justify-start gap-4">
                    <header className="w-full min-h-fit flex flex-col items-center justify-start p-4 gap-4">
                        <h3 className="font-semibold text-center">Create your master password</h3>
                        <p className="text-center">This is the only password you'll ever need to remember. It encrypts everything in your vault.</p>
                    </header>
                </SwiperSlide>
                
                <SwiperSlide className="flex! flex-col! items-center! justify-start gap-4">
                    <header className="w-full min-h-fit flex flex-col items-center justify-start p-4 gap-4">
                        <h3 className="font-semibold text-center">Unlock in a glance</h3>
                        <p className="text-center">Use Face ID or your fingerprint to get into your vault instantly.</p>
                    </header>
                </SwiperSlide>
                
                <SwiperSlide className="flex! flex-col! items-center! justify-start gap-4">
                    <header className="w-full min-h-fit flex flex-col items-center justify-start p-4 gap-4">
                        <h3 className="font-semibold text-center">You're all set, [Name]</h3>
                        <p className="text-center">Your vault is ready.</p>
                    </header>
                </SwiperSlide>
            </Swiper>
            <ProgressBar options={steps} percentage={(100 / (steps.length)) * ( 2 + activePage)} />
            <footer className="w-full h-fit flex flex-row  items-center justify-center gap-4">
                <button className="bg-transparent w-2/5 h-fit flex items-center justify-center py-4 px-8 rounded-full" onClick={() => { swiper?.slidePrev() }}>
                    <p className="font-semibold text-(--text)">Back</p>
                </button>
                <button className="bg-(--accent) w-full h-fit flex items-center justify-center p-4 rounded-full" onClick={() => { swiper?.slideNext() }}>
                    <p className="font-semibold text-(--text)">{swiper && activePage == (swiper?.slides.length - 1) ? "Get started" : "Confirm"}</p>
                </button>
                {/*<button
                    className="w-full h-fit flex items-center justify-center p-4 rounded-full"
                    style={{ opacity: swiper && activePage == 0 ? "0.25" : "1" }}
                    onClick={() => { swiper?.slidePrev() }}>
                    <p className="font-semibold text-(--text)">Back</p>
                </button>*/}
            </footer>
        </>
    );
};

export default SetupPage;
