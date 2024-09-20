"use client";
import Image from "next/image";
import workImg1 from "../assets/work1.png";
import workImg2 from "../assets/work2.png";
import workImg3 from "../assets/work3.png";
import workImg4 from "../assets/work4.png";

function Work() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-4xl font-semibold text-center">How does it work</h1>
      <div className="grid grid-cols-4 gap-4 mt-10">
        <div className=" text-center border-2 rounded-xl p-6 space-y-2">
          <div className="flex items-center justify-center">
            <Image
              src={workImg1}
              alt="Description of image"
              width={80}
              height={200}
              className="pb-4"
            />
          </div>
          <h3 className="text-2xl font-medium">Quality Food</h3>
          <p className="text-gray-600 text-sm">
            Contrary to popular belief, Lorem Ipsum is not simply random text
          </p>
          <button className="font-semibold hover:text-[#F03328]">Learn More</button>
        </div>
        <div className=" text-center border-2 rounded-xl p-6 space-y-2">
          <div className="flex items-center justify-center">
            <Image
              src={workImg2}
              alt="Description of image"
              width={80}
              height={200}
              className="pb-4"
            />
          </div>
          <h3 className="text-2xl font-medium">Quality Food</h3>
          <p className="text-gray-600 text-sm">
            Contrary to popular belief, Lorem Ipsum is not simply random text
          </p>
          <button className="font-semibold hover:text-[#F03328]">Learn More</button>
        </div>
        <div className=" text-center border-2 rounded-xl p-6 space-y-2">
          <div className="flex items-center justify-center">
            <Image
              src={workImg3}
              alt="Description of image"
              width={80}
              height={200}
              className="pb-4"
            />
          </div>
          <h3 className="text-2xl font-medium">Quality Food</h3>
          <p className="text-gray-600 text-sm">
            Contrary to popular belief, Lorem Ipsum is not simply random text
          </p>
          <button className="font-semibold hover:text-[#F03328]">Learn More</button>
        </div>
        <div className=" text-center border-2 rounded-xl p-6 space-y-2">
          <div className="flex items-center justify-center">
            <Image
              src={workImg4}
              alt="Description of image"
              width={80}
              height={200}
              className="pb-4"
            />
          </div>
          <h3 className="text-2xl font-medium">Quality Food</h3>
          <p className="text-gray-600 text-sm">
            Contrary to popular belief, Lorem Ipsum is not simply random text
          </p>
          <button className="font-semibold hover:text-[#F03328]">Learn More</button>
        </div>
    

      </div>
    </div>
  );
}

export default Work;
