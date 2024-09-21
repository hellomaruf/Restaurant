"use client";
import Image from "next/image";
import { MdOutlineDateRange } from "react-icons/md";
import { GoCommentDiscussion } from "react-icons/go";
import { IoIosArrowRoundForward } from "react-icons/io";


function NewsAndBlog() {
  const newsAndBlogData = [
    {
      title: "The Ultimate Guide to Making Homemade Pizza",
      img: "https://i.postimg.cc/YCSqjqVd/blogImg.png",
      date: "02 Jan 2022",
      description:
        "Master the art of making authentic Italian pasta at home with this step-by-step guide. From choosing the right ingredients to cooking it al dente, learn all the secrets.",
      comments: 12,
    },
    {
      title: "Mastering the Art of Perfect Pasta at Home",
      img: "https://i.postimg.cc/YCSqjqVd/blogImg.png",
      date: "02 Jan 2022",
      description:
        "Discover the secret to making the best homemade pizza with a crispy crust, rich tomato sauce, and a variety of toppings. Perfect for a weekend treat!",
      comments: 25,
    },
    {
      title: "10-Minute Smoothie Recipes for Busy Mornings",
      img: "https://i.postimg.cc/YCSqjqVd/blogImg.png",
      date: "02 Jan 2022",
      description:
        "Start your day with a boost of energy! These smoothie recipes are not only quick to make but packed with nutrients to keep you going all day.",
      comments: 8,
    },
  ];

  return (
      <div className='max-w-5xl mx-auto'>
        <div className='mx-6'>

          <div className="max-w-2xl mx-auto mt-28 space-y-2 ">
              <h1 className='text-3xl md:text-4xl font-semibold text-center'>Latest news & Blog</h1>
              <p className='text-center text-gray-600'>Discover easy recipes, cooking tips, and tasty trends to elevate your kitchen game. Join us on a delicious journey, one dish at a time!</p>
          </div>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 mx-6">
        {newsAndBlogData?.map((item, index) => (
          <div className="shadow-lg rounded-lg" key={index}>
            <div className="p-4">
              <Image
                src={item?.img}
                alt=""
                width={500}
                height={200}
                className="pb-4 w-full"
              />
              <div className='flex items-center gap-4'>
                <div className='flex items-center gap-2 text-gray-500 text-sm'>
                <MdOutlineDateRange className='text-xl text-[#A52A2A]' /> {item?.date}
                </div>
                <div className='flex items-center gap-2 text-gray-500 text-sm'>
                <GoCommentDiscussion  className='text-xl  text-[#A52A2A]' />Comments ({item?.comments})
                </div>
                
              </div>

              <div className='mt-3 space-y-3'>
                <h4 className='text-md font-semibold'>{item?.title}</h4>
                <p className='text-gray-500'>{item?.description.slice(0,90)}</p>
                <button className='flex items-center text-sm'>Read More <IoIosArrowRoundForward className='text-2xl' /></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsAndBlog;
