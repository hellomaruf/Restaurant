"use client";
import Image from "next/image";
import about1 from "../assets/about.png";
import aboutLine from "../assets/aboutLine.png";
import { FiPlay } from "react-icons/fi";

function About() {
  return (
    <div className="max-w-5xl mx-auto mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mx-6">
        <div data-aos="fade-right" className="lg:order-1 order-2">
          <div>
            <h6 className="text-[#A52A2A] text-[18px]">PIZZA DELIVERY</h6>
            <h1 className="text-4xl font-semibold my-2">Get Started Today!</h1>
            <Image
              src={aboutLine}
              alt="Description of image"
              width={130}
              height={200}
              className="pb-2"
            />
          </div>
          <div className="mt-4">
            <h4 className="text-lg font-semibold pb-2">
              Everything you need to build an amazing food restaurant responsive
              website.
            </h4>
            <p>
              Hendrerit in vulputate velit esse molestie consequat, vel illum
              dolore eu feugiat nulla facilisis at vero eros et accumsan et
              iusto odio dignissim qui blandit praesent luptatum zzril delenit
              augue duis.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 mt-14">
            <div>
              <Image
                src={about1}
                alt="Description of image"
                width={100}
                height={200}
                className="pb-2"
              />
              <h3 className="font-semibold text-lg pb-2">Food Order</h3>
              <p>
                Food is the necessity of life. It provides nutrition, sustenance
                growth to human body.
              </p>
            </div>
            <div>
              <Image
                src={about1}
                alt="Description of image"
                width={100}
                height={200}
                className="pb-2"
              />
              <h3 className="font-semibold text-lg pb-2">Promote Restaurant</h3>
              <p>
                Food can be classified into cereals, pulses, nuts and oilseeds,
                vegetable
              </p>
            </div>
          </div>
        </div>
        <div data-aos="fade-left" className="lg:order-1 order-1">
          <div className="">
            <h5 className="text-[#A52A2A]">About us ____</h5>
            <h1 className="text-4xl font-semibold my-2">
              Food is an important part Of a balanced Diet
            </h1>
            <p className='my-8'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu
              velit in consequat.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button className="btn px-10 text-white bg-[#A52A2A] hover:bg-[#A52A2A]">
              See More
            </button>
            <div className='flex items-center gap-2'>
              <div className="text-white bg-[#A52A2A] hover:bg-green-700 h-12 w-12 rounded-full flex items-center justify-center ">
                <FiPlay className="text-xl" />
              </div>
              <h4 className='font-semibold'>Watch Video</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
