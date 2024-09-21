"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import heroItem1 from "../assets/heroFoodItem1.png";
import heroItem2 from "../assets/heroFoodItem2.png";
import heroItem3 from "../assets/heroFoodItem3.png";
import heroItem4 from "../assets/heroFoodItem4.png";
import heroimg1 from "../assets/heroImg1.png";
import heroimg2 from "../assets/heroImg2.png";
import heroimg3 from "../assets/heroImg3.png";
import heroimg4 from "../assets/heroImg4.png";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import 'swiper/css/navigation';

function Hero() {
  return (
    <div className=''>
      {/* For large device */}
    <div className='-z-10 relative -top-12 hidden lg:block '>
      <Swiper
        autoplay={{
          delay: 2500,
        }}
        effect={"fade"}
        modules={[Autoplay, EffectFade]}
        className="mySwiper "
      >
        <SwiperSlide>
          <div
            className="hero min-h-screen rounded-b-3xl px-6"
            style={{
              backgroundImage: `url('https://i.postimg.cc/dtGbPYx0/HeroBg1.png')`,
            }}
          >
            <div className="grid grid-cols-2 justify-end  gap-4 max-w-[1350px] mx-auto my-20">
              <div className="space-y-2">
                <h1 className="text-6xl text-white font-semibold">BREAKFAST</h1>
                <p className="text-white">
                  Breakfast, often referred to as the ‘most important meal of
                  the day’, provides essential nutrients to kick start our day.
                  It includes a variety of foods, like fruits, cereals, dairy
                  products, and proteins, that contribute to a balanced diet.
                  Eating a healthy breakfast can improve concentration and
                  performance, boost physical endurance, and lower cholesterol
                  levels.
                </p>
                <div className="grid grid-cols-4 gap-0">
                  <div className=" border-b-4 flex items-center justify-center">
                    <Image
                      src={heroItem1}
                      alt="Description of image"
                      width={140}
                      height={200}
                      className="pb-4"
                    />
                  </div>
                  <div className="  flex items-center justify-center">
                    <Image
                      src={heroItem2}
                      alt="Description of image"
                      width={140}
                      height={200}
                      className="pb-4"
                    />
                  </div>
                  <div className="  flex items-center justify-center">
                    <Image
                      src={heroItem3}
                      alt="Description of image"
                      width={140}
                      height={200}
                      className="pb-4"
                    />
                  </div>
                  <div className="  flex items-center justify-center">
                    <Image
                      src={heroItem4}
                      alt="Description of image"
                      width={140}
                      height={200}
                      className="pb-4"
                    />
                  </div>
                </div>

                <div className="pt-20">
                  <label className="input input-bordered flex items-center rounded-full  gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="h-6 w-6 opacity-90"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <input
                      type="text"
                      className="grow placeholder:text-gray-900"
                      placeholder="Search...."
                    />
                  </label>
                </div>
              </div>
              <div className="flex justify-end items-end">
                <Image
                  src={heroimg1}
                  alt="Description of image"
                  width={500}
                  height={200}
                  className="pb-4"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen rounded-b-3xl px-6"
            style={{
              backgroundImage: `url('https://i.postimg.cc/43trQTRt/HeroBg2.png')`,
            }}
          >
            <div className="grid grid-cols-2 justify-end  gap-4 max-w-[1350px] mx-auto my-20">
              <div className="space-y-2">
                <h1 className="text-6xl text-white font-semibold">BREAKFAST</h1>
                <p className="text-white">
                  Breakfast, often referred to as the ‘most important meal of
                  the day’, provides essential nutrients to kick start our day.
                  It includes a variety of foods, like fruits, cereals, dairy
                  products, and proteins, that contribute to a balanced diet.
                  Eating a healthy breakfast can improve concentration and
                  performance, boost physical endurance, and lower cholesterol
                  levels.
                </p>
                <div className="grid grid-cols-4 gap-0">
                  <div className="  flex items-center justify-center">
                    <Image
                      src={heroItem1}
                      alt="Description of image"
                      width={140}
                      height={200}
                      className="pb-4"
                    />
                  </div>
                  <div className="border-b-4 flex items-center justify-center">
                    <Image
                      src={heroItem2}
                      alt="Description of image"
                      width={140}
                      height={200}
                      className="pb-4"
                    />
                  </div>
                  <div className="  flex items-center justify-center">
                    <Image
                      src={heroItem3}
                      alt="Description of image"
                      width={140}
                      height={200}
                      className="pb-4"
                    />
                  </div>
                  <div className="  flex items-center justify-center">
                    <Image
                      src={heroItem4}
                      alt="Description of image"
                      width={140}
                      height={200}
                      className="pb-4"
                    />
                  </div>
                </div>

                <div className="pt-20">
                  <label className="input input-bordered flex items-center rounded-full  gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="h-6 w-6 opacity-90"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <input
                      type="text"
                      className="grow placeholder:text-gray-900"
                      placeholder="Search...."
                    />
                  </label>
                </div>
              </div>
              <div className="flex justify-end items-end">
                <Image
                  src={heroimg2}
                  alt="Description of image"
                  width={500}
                  height={200}
                  className="pb-4"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen rounded-b-3xl px-6"
            style={{
              backgroundImage: `url('https://i.postimg.cc/0Nb7T8yM/HeroBg3.png')`,
            }}
          >
            <div className="grid grid-cols-2 justify-end  gap-4 max-w-[1350px] mx-auto my-20">
              <div className="space-y-2">
                <h1 className="text-6xl text-white font-semibold">BREAKFAST</h1>
                <p className="text-white">
                  Breakfast, often referred to as the ‘most important meal of
                  the day’, provides essential nutrients to kick start our day.
                  It includes a variety of foods, like fruits, cereals, dairy
                  products, and proteins, that contribute to a balanced diet.
                  Eating a healthy breakfast can improve concentration and
                  performance, boost physical endurance, and lower cholesterol
                  levels.
                </p>
                <div className="grid grid-cols-4 gap-0">
                  <div className="  flex items-center justify-center">
                    <Image
                      src={heroItem1}
                      alt="Description of image"
                      width={140}
                      height={200}
                      className="pb-4"
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <Image
                      src={heroItem2}
                      alt="Description of image"
                      width={140}
                      height={200}
                      className="pb-4"
                    />
                  </div>
                  <div className="border-b-4  flex items-center justify-center">
                    <Image
                      src={heroItem3}
                      alt="Description of image"
                      width={140}
                      height={200}
                      className="pb-4"
                    />
                  </div>
                  <div className="  flex items-center justify-center">
                    <Image
                      src={heroItem4}
                      alt="Description of image"
                      width={140}
                      height={200}
                      className="pb-4"
                    />
                  </div>
                </div>

                <div className="pt-20">
                  <label className="input input-bordered flex items-center rounded-full  gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="h-6 w-6 opacity-90"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <input
                      type="text"
                      className="grow placeholder:text-gray-900"
                      placeholder="Search...."
                    />
                  </label>
                </div>
              </div>
              <div className="flex justify-end items-end">
                <Image
                  src={heroimg3}
                  alt="Description of image"
                  width={500}
                  height={200}
                  className="pb-4"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen rounded-b-3xl px-6"
            style={{
              backgroundImage: `url('https://i.postimg.cc/W1YtBCzh/HeroBg4.png')`,
            }}
          >
            <div className="grid grid-cols-2 justify-end  gap-4 max-w-[1350px] mx-auto my-20">
              <div className="space-y-2">
                <h1 className="text-6xl text-white font-semibold">BREAKFAST</h1>
                <p className="text-white">
                  Breakfast, often referred to as the ‘most important meal of
                  the day’, provides essential nutrients to kick start our day.
                  It includes a variety of foods, like fruits, cereals, dairy
                  products, and proteins, that contribute to a balanced diet.
                  Eating a healthy breakfast can improve concentration and
                  performance, boost physical endurance, and lower cholesterol
                  levels.
                </p>
                <div className="grid grid-cols-4 gap-0">
                  <div className="  flex items-center justify-center">
                    <Image
                      src={heroItem1}
                      alt="Description of image"
                      width={140}
                      height={200}
                      className="pb-4"
                    />
                  </div>
                  <div className=" flex items-center justify-center">
                    <Image
                      src={heroItem2}
                      alt="Description of image"
                      width={140}
                      height={200}
                      className="pb-4"
                    />
                  </div>
                  <div className="  flex items-center justify-center">
                    <Image
                      src={heroItem3}
                      alt="Description of image"
                      width={140}
                      height={200}
                      className="pb-4"
                    />
                  </div>
                  <div className=" border-b-4 flex items-center justify-center">
                    <Image
                      src={heroItem4}
                      alt="Description of image"
                      width={140}
                      height={200}
                      className="pb-4"
                    />
                  </div>
                </div>

                <div className="pt-20">
                  <label className="input input-bordered flex items-center rounded-full  gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="h-6 w-6 opacity-90"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <input
                      type="text"
                      className="grow placeholder:text-gray-900"
                      placeholder="Search...."
                    />
                  </label>
                </div>
              </div>
              <div className="flex justify-end items-end">
                <Image
                  src={heroimg4}
                  alt="Description of image"
                  width={500}
                  height={200}
                  className="pb-4"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>



    {/* For Small Device */}
    <div className='-z-10 relative -top-0  xl:-top-12 block lg:hidden '>
      <Swiper
        autoplay={{
          delay: 2500,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper "
      >
        <SwiperSlide>
          <div
            className="hero min-h-screen rounded-b-3xl"
            style={{
              backgroundImage: `url('https://i.postimg.cc/dtGbPYx0/HeroBg1.png')`,
            }}
          >
            <div className="grid grid-cols-1 justify-end  gap-4 max-w-[1350px] mx-auto px-6 py-6">
              <div className="space-y-2">
                <h1 className="text-6xl text-white font-semibold">BREAKFAST</h1>
                <p className="text-white">
                  Breakfast, often referred to as the ‘most important meal of
                  the day’, provides essential nutrients to kick start our day.
                  It includes a variety of foods, like fruits, cereals, dairy
                  products, and proteins
                </p>
              

               
              </div>
              <div className="flex justify-end items-end my-6">
                <Image
                  src={heroimg1}
                  alt=""
                  width={500}
                  height={200}
                  className="pb-4 w-full"
                />
              </div>


              <div className="grid grid-cols-4 gap-0 pb-6">
                  <div className=" border-b-4 flex items-center justify-center">
                    <Image
                      src={heroItem1}
                      alt="Description of image"
                      width={140}
                      height={200}
                      className="pb-4"
                    />
                  </div>
                  <div className="  flex items-center justify-center">
                    <Image
                      src={heroItem2}
                      alt="Description of image"
                      width={140}
                      height={200}
                      className="pb-4"
                    />
                  </div>
                  <div className="  flex items-center justify-center">
                    <Image
                      src={heroItem3}
                      alt="Description of image"
                      width={140}
                      height={200}
                      className="pb-4"
                    />
                  </div>
                  <div className="  flex items-center justify-center">
                    <Image
                      src={heroItem4}
                      alt="Description of image"
                      width={140}
                      height={200}
                      className="pb-4"
                    />
                  </div>
                </div>


            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen rounded-b-3xl"
            style={{
              backgroundImage: `url('https://i.postimg.cc/43trQTRt/HeroBg2.png')`,
            }}
          >
            <div className="grid grid-cols-1 justify-end  gap-4 max-w-[1350px] mx-auto px-6 py-6">
              <div className="space-y-2">
                <h1 className="text-6xl text-white font-semibold">BREAKFAST</h1>
                <p className="text-white">
                  Breakfast, often referred to as the ‘most important meal of
                  the day’, provides essential nutrients to kick start our day.
                  It includes a variety of foods, like fruits, cereals, dairy
                  products, and proteins.
                </p>
           

             
              </div>
              <div className="flex justify-end items-end my-6">
                <Image
                  src={heroimg2}
                  alt="Description of image"
                  width={500}
                  height={200}
                  className="pb-4 w-full"
                />
              </div>

              <div className="grid grid-cols-4 gap-0 pb-6">
                  <div className="  flex items-center justify-center">
                    <Image
                      src={heroItem1}
                      alt="Description of image"
                      width={140}
                      height={200}
                      className="pb-4"
                    />
                  </div>
                  <div className="border-b-4 flex items-center justify-center">
                    <Image
                      src={heroItem2}
                      alt="Description of image"
                      width={140}
                      height={200}
                      className="pb-4 "
                    />
                  </div>
                  <div className="  flex items-center justify-center">
                    <Image
                      src={heroItem3}
                      alt="Description of image"
                      width={140}
                      height={200}
                      className="pb-4"
                    />
                  </div>
                  <div className="  flex items-center justify-center">
                    <Image
                      src={heroItem4}
                      alt="Description of image"
                      width={140}
                      height={200}
                      className="pb-4"
                    />
                  </div>
                </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen rounded-b-3xl"
            style={{
              backgroundImage: `url('https://i.postimg.cc/0Nb7T8yM/HeroBg3.png')`,
            }}
          >
            <div className="grid grid-cols-1 justify-end  gap-4 max-w-[1350px] mx-auto px-6 py-6">
              <div className="space-y-2">
                <h1 className="text-6xl text-white font-semibold">BREAKFAST</h1>
                <p className="text-white">
                  Breakfast, often referred to as the ‘most important meal of
                  the day’, provides essential nutrients to kick start our day.
                  It includes a variety of foods, like fruits, cereals, dairy
                  products, and proteins.
                </p>
                
              </div>
              <div className="flex justify-end items-end my-6">
                <Image
                  src={heroimg3}
                  alt="Description of image"
                  width={500}
                  height={200}
                  className="pb-4 w-full"
                />
              </div>

              <div className="grid grid-cols-4 gap-0 pb-6">
                  <div className="  flex items-center justify-center">
                    <Image
                      src={heroItem1}
                      alt="Description of image"
                      width={140}
                      height={200}
                      className="pb-4"
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <Image
                      src={heroItem2}
                      alt="Description of image"
                      width={140}
                      height={200}
                      className="pb-4"
                    />
                  </div>
                  <div className="border-b-4  flex items-center justify-center">
                    <Image
                      src={heroItem3}
                      alt="Description of image"
                      width={140}
                      height={200}
                      className="pb-4"
                    />
                  </div>
                  <div className="  flex items-center justify-center">
                    <Image
                      src={heroItem4}
                      alt="Description of image"
                      width={140}
                      height={200}
                      className="pb-4"
                    />
                  </div>
                </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen rounded-b-3xl"
            style={{
              backgroundImage: `url('https://i.postimg.cc/W1YtBCzh/HeroBg4.png')`,
            }}
          >
            <div className="grid grid-cols-1 justify-end  gap-4 max-w-[1350px] mx-auto px-6 py-6">
              <div className="space-y-2">
                <h1 className="text-6xl text-white font-semibold">BREAKFAST</h1>
                <p className="text-white">
                  Breakfast, often referred to as the ‘most important meal of
                  the day’, provides essential nutrients to kick start our day.
                  It includes a variety of foods, like fruits, cereals, dairy
                  products, and proteins.
                </p>
                

              </div>
              <div className="flex justify-end items-end my-6">
                <Image
                  src={heroimg4}
                  alt="Description of image"
                  width={500}
                  height={200}
                  className="pb-4 w-full"
                />
              </div>

              <div className="grid grid-cols-4 gap-0 pb-6">
                  <div className="  flex items-center justify-center">
                    <Image
                      src={heroItem1}
                      alt="Description of image"
                      width={140}
                      height={200}
                      className="pb-4"
                    />
                  </div>
                  <div className=" flex items-center justify-center">
                    <Image
                      src={heroItem2}
                      alt="Description of image"
                      width={140}
                      height={200}
                      className="pb-4"
                    />
                  </div>
                  <div className="  flex items-center justify-center">
                    <Image
                      src={heroItem3}
                      alt="Description of image"
                      width={140}
                      height={200}
                      className="pb-4"
                    />
                  </div>
                  <div className=" border-b-4 flex items-center justify-center">
                    <Image
                      src={heroItem4}
                      alt="Description of image"
                      width={140}
                      height={200}
                      className="pb-4"
                    />
                  </div>
                </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    </div>
  );
}

export default Hero;
