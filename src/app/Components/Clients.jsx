"use client";
import Image from "next/image";
import clientImg1 from "../assets/client1.png";
import clientImg2 from "../assets/client2.png";
import clientImg3 from "../assets/client3.png";
import clientImg4 from "../assets/client4.png";
import clientImg5 from "../assets/client5.png";
import clientImg6 from "../assets/client6.png";
import Marquee from "react-fast-marquee";

function Clients() {
  return (
    <div>
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl mx-auto mt-28 space-y-2">
          <p className="text-center  text-[#A52A2A] mx-6">Partners & Clients</p>
          <h1 className="text-3xl md:text-4xl font-semibold text-center mx-6">
            We work with the best pepole
          </h1>
        </div>
        <div className="mt-10">
          <Marquee
            gradient={false} // No gradient for small devices by default
            gradientColor={"white"}
            direction="right"
            className="flex md:gradient"
          >
            <div className="flex items-center ">
              <Image
                src={clientImg1}
                alt=""
                width={150}
                height={200}
                className="h-28 sm:h-20 object-contain mx-4"
              />
              <Image
                src={clientImg2}
                alt=""
                width={150}
                height={200}
                className="h-28 sm:h-20 object-contain mx-4"
              />
              <Image
                src={clientImg3}
                alt=""
                width={150}
                height={200}
                className="h-28 sm:h-20 object-contain mx-4"
              />
              <Image
                src={clientImg4}
                alt=""
                width={150}
                height={200}
                className="h-28 sm:h-20 object-contain mx-4"
              />
              <Image
                src={clientImg5}
                alt=""
                width={150}
                height={200}
                className="h-28 sm:h-20 object-contain mx-4"
              />
              <Image
                src={clientImg6}
                alt=""
                width={150}
                height={200}
                className="h-28 sm:h-20 object-contain mx-4"
              />
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default Clients;
