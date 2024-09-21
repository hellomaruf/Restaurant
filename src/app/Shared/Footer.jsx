"use client";
import Image from "next/image";
import { FaTelegramPlane } from "react-icons/fa";
import instaGallary from "../assets/InstaGal.png";
import { IoLocationOutline } from "react-icons/io5";
import socialIcon from "../assets/Social.png";
import { FiPhone } from "react-icons/fi";
import { IoMailOpenOutline } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";

function Footer() {
  return (
    <div className="bg-[#880808] mt-28">
      <footer className="">
        <div className="mx-auto max-w-6xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 border-gray-100 pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:pt-16">
            <div>
              <div className="">
                <h2 className="text-2xl font-semibold text-white ">
                  RESTAURANT
                </h2>
                <p className="text-white text-sm py-4">
                  Subscribe our newsletter and get discount 25%off
                </p>
                <div className="flex items-center">
                  <label className=" py-2  input-bordered flex items-center gap-2 rounded-r-none border-none">
                    <input
                      type="text"
                      className="grow py-3 pl-3 rounded-l-[5px]"
                      placeholder="Email"
                    />
                  </label>
                  <div className="bg-[#A52A2A] btn border-none rounded-l-none h-full text-white">
                    <FaTelegramPlane />
                  </div>
                </div>
                <div>
                  <Image
                    src={socialIcon}
                    alt=""
                    width={200}
                    height={200}
                    className="pt-2"
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="">
                <h3 className="text-lg font-semibold text-white">Contact us</h3>
                <div className="text-gray-200 mt-4 space-y-4 ">
                  <p className="text-sm flex items-center gap-2">
                    <IoLocationOutline className="text-lg w-4 h-4" /> 3517 W.
                    Gray St. Utica
                  </p>
                  <p className="text-sm flex items-center gap-2">
                    <FiPhone className="text-lg w-4 h-4" /> (480) 555-0103
                  </p>
                  <p className="text-sm flex items-center gap-2">
                    <IoMailOpenOutline className="text-lg w-4 h-4" />{" "}
                    M.Alyaqout@4house.Co
                  </p>
                  <p className="text-sm flex items-center gap-2">
                    <IoMdTime className="text-lg w-4 h-4" /> Sun - Sat / 10:00
                    AM - 8:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="">
                <h3 className="text-lg font-semibold text-white">Links</h3>
                <div className="text-gray-200 text-sm space-y-4 mt-4">
                  <p>About us</p>
                  <p>Contact Us</p>
                  <p>Our Menu</p>
                  <p>Team</p>
                  <p>FAQ </p>
                </div>
              </div>
            </div>

            <div className="">
              <h3 className="text-lg font-semibold text-white">
                Instagram Gallery
              </h3>
              <div className="pt-4">
                <Image
                  src={instaGallary}
                  alt=""
                  width={500}
                  height={200}
                  className="pb-4"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#A52A2A]">
          <div className=" flex items-center max-w-6xl mx-auto py-4 justify-between	text-sm">
            <div className="text-gray-200">
              <p>Copyright © 2024. All rights reserved</p>
            </div>
            <div className="flex items-center gap-3 text-gray-200">
              <a>Privacy Policy</a>
              <a>Term of Use</a>
              <a>Partner</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
