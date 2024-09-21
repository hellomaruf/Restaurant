"use client";
import Image from "next/image";
import feedbackImg from "../assets/feedbackImg.png";
import profile from "../assets/profile.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

function Feedback() {
  return (
    <div className="max-w-5xl mx-auto mt-28  mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-6 justify-between mx-6 items-center">
        <div data-aos="fade-right" className="col-span-1 lg:col-span-4 space-y-4 lg:order-1 order-2">
          <h1 className="text-4xl font-semibold">Customer Feedback</h1>
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="space-y-4">
                <p>
                  I recently dined at your restaurant and wanted to share my
                  experience. The food was absolutely delicious, and I was
                  impressed by the freshness of the ingredients. Each dish was
                  bursting with flavor, and the portion sizes were perfect. The
                  service was quick and efficient, and the staff was incredibly
                  friendly and welcoming.
                </p>
                <div className="flex items-center gap-2">
                  <Image
                    src={profile}
                    alt="Description of image"
                    width={60}
                    height={200}
                    className="pb-2"
                  />

                  <div className="">
                    <h5 className="text-[#AC1518] font-semibold">
                      Tayyab Sohail
                    </h5>
                    <h5>UX/UI Designer</h5>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="space-y-4">
                <p>
                  I recently dined at your restaurant and wanted to share my
                  experience. The food was absolutely delicious, and I was
                  impressed by the freshness of the ingredients. Each dish was
                  bursting with flavor, and the portion sizes were perfect. The
                  service was quick and efficient.
                </p>
                <div className="flex items-center gap-2">
                  <Image
                    src={profile}
                    alt="Description of image"
                    width={60}
                    height={200}
                    className="pb-2"
                  />

                  <div className="">
                    <h5 className="text-[#AC1518] font-semibold">
                      Nafiz Salim
                    </h5>
                    <h5>Graphics Designer</h5>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="space-y-4">
                <p>
                  I recently dined at your restaurant and wanted to share my
                  experience. The food was absolutely delicious, and I was
                  impressed by the freshness of the ingredients. Each dish was
                  bursting with flavor, and the portion sizes were perfect. The
                  service was quick and efficient, and the staff was incredibly
                  friendly and welcoming.
                </p>
                <div className="flex items-center gap-2">
                  <Image
                    src={profile}
                    alt="Description of image"
                    width={60}
                    height={200}
                    className="pb-2"
                  />

                  <div className="">
                    <h5 className="text-[#AC1518] font-semibold">
                      Tayyab Iqbal
                    </h5>
                    <h5>Developer</h5>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div data-aos="fade-up"  className="lg:col-span-3 col-span-1 lg:order-1 order-1">
          <Image
            src={feedbackImg}
            alt="Description of image"
            width={500}
            height={200}
            className=" w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Feedback;
