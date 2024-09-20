"use client";
import Image from "next/image";
import teamImg from "../assets/teamImg.png";
function Team() {
  return (
    <div className="relative -top-3">
      {/* Team Member background */}
      <div
        className="hero h-[350px]"
        style={{
          backgroundImage: `url('https://i.postimg.cc/cLxhqsf0/teamBg.png')`,
        }}
      >
        <div className="max-w-xl mx-auto text-center space-y-2 relative -top-[50px]">
          <h1 className="text-4xl font-semibold text-white">Team Member</h1>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
            pharetra dictum neque massa congue
          </p>
        </div>
      </div>

      <div className=" max-w-5xl mx-auto relative -top-[140px]">
        <div className="grid grid-cols-4 gap-4">
          <div>
            <div className=" shadow-lg">
              <Image
                src={teamImg}
                alt="Description of image"
                width={500}
                height={200}
                className="pb-4"
              />
              <h3 className="text-lg font-semibold text-center">Mark Henry</h3>
              <h4 className="text-center text-gray-500 pb-3 text-sm">Owner</h4>
            </div>
          </div>
          <div>
            <div className=" shadow-lg">
              <Image
                src={teamImg}
                alt="Description of image"
                width={500}
                height={200}
                className="pb-4"
              />
              <h3 className="text-lg font-semibold text-center">Lucky Helen</h3>
              <h4 className="text-center text-gray-500 pb-3 text-sm">Chef</h4>
            </div>
          </div>
          <div>
            <div className=" shadow-lg">
              <Image
                src={teamImg}
                alt="Description of image"
                width={500}
                height={200}
                className="pb-4"
              />
              <h3 className="text-lg font-semibold text-center">Moon Henry</h3>
              <h4 className="text-center text-gray-500 pb-3 text-sm">
                Founder
              </h4>
            </div>
          </div>
          <div>
            <div className=" shadow-lg">
              <Image
                src={teamImg}
                alt="Description of image"
                width={500}
                height={200}
                className="pb-4"
              />
              <h3 className="text-lg font-semibold text-center">Tom Monrow</h3>
              <h4 className="text-center text-gray-500 pb-3 text-sm">
                Specialist
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
