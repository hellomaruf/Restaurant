"use client";
import Image from "next/image";
import leftImg from "../assets/chooseUsImg.png";
import chooseImg1 from "../assets/chooseImg1.png";
import chooseImg2 from "../assets/chooseImg2.png";
import chooseImg3 from "../assets/chooseImg3.png";

function WhyChooseUs() {
  return (
    <div className="max-w-5xl mx-auto mt-28">
      <div className="grid grid-cols-2 gap-10">
        <div data-aos="fade-right" className="">
          <Image
            src={leftImg}
            alt="Description of image"
            width={500}
            height={200}
            className="pb-2"
          />
        </div>
        <div data-aos="fade-left" className="">
          <div className="">
            <h1 className="text-4xl font-semibold">Why People Choose us?</h1>
          </div>
          <div className=" mt-10 space-y-3">
            <div className="flex items-center gap-2 p-4 rounded-xl shadow">
              <div className="">
                <Image
                  src={chooseImg1}
                  alt="Description of image"
                  width={200}
                  height={200}
                  className="pb-2 w-[200px]"
                />
              </div>
              <div className="">
                <h4 className="text-lg font-semibold">
                  Convenient and Reliable
                </h4>
                <p className="pt-1">
                  Whether you dine in, take out, or order delivery, our service
                  is convenient, fast, and reliable, making mealtime
                  hassle-free.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 p-4 rounded-xl shadow">
              <div className="">
                <Image
                  src={chooseImg2}
                  alt="Description of image"
                  width={200}
                  height={200}
                  className="pb-2 w-[200px]"
                />
              </div>
              <div className="">
                <h4 className="text-lg font-semibold">
                Variety of Options
                </h4>
                <p className="pt-1">
                From hearty meals to light snacks, we offer a wide range of options to suit every taste and craving taste and craving.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 p-4 rounded-xl shadow">
              <div className="">
                <Image
                  src={chooseImg3}
                  alt="Description of image"
                  width={200}
                  height={200}
                  className="pb-2 w-[200px]"
                />
              </div>
              <div className="">
                <h4 className="text-lg font-semibold">
                Eat Burger
                </h4>
                <p className="pt-1">
                Our burgers are grilled to perfection, with juicy patties and flavorful toppings that make every bite a delicious experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
