"use client";
import Image from "next/image";
import { Rate } from 'antd';

function BestSellerDishes() {
  const bestDishesData = [
    {
      disheName: "Breakfast Food",
      img: "https://i.postimg.cc/YCcF3vV9/seller-Dishe1.png",
      price: 12.99,
      rating: 4.8,
    },
    {
      disheName: "Health Breakfast",
      img: "https://i.postimg.cc/VNgbmDNr/seller-Dishe2.png",
      price: 15.5,
      rating: 4.7,
    },
    {
      disheName: "Breakfast Food",
      img: "https://i.postimg.cc/V6N06nS7/seller-Dishe3.png",
      price: 10.99,
      rating: 4.5,
    },
    {
      disheName: "Caesar Salad",
      img: "https://i.postimg.cc/RFb6nhKv/seller-Dishe4.png",
      price: 8.25,
      rating: 4.3,
    },
    {
      disheName: "Beef Burger",
      img: "https://i.postimg.cc/NGS2syQ4/seller-Dishe5.png",
      price: 13.75,
      rating: 4.6,
    },
    {
      disheName: "Sushi Platter",
      img: "https://i.postimg.cc/wjdtNSyR/seller-Dishe6.png",
      price: 22.99,
      rating: 4.9,
    },
  ];

  return (
    <div className="mt-28 max-w-5xl mx-auto">
      <div className="max-w-2xl mx-auto space-y-2">
        <h1 className="text-4xl font-semibold text-center">
          Our best Seller Dishes
        </h1>
        <p className="text-center">
          Our fresh garden salad is a light and refreshing option. It features a
          mix of crisp lettuce, juicy tomatoe all tossed in your choice of
          dressing.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6 mt-10">
        {bestDishesData?.map((item, index) => (
          <div className='shadow rounded-b-xl' key={index}>
            <div>
              <Image
                src={item?.img}
                alt="Description of image"
                width={500}
                height={200}
                className="pb-2"
              />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center">
                <h3 className="text-[20px] font-medium">{item?.disheName}</h3>
                <button className="bg-[#F03328] text-white py-1 rounded-full px-4">
                  Buy Now
                </button>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                    <Rate className='text-lg' disabled defaultValue={item?.rating} />
                        <h3 className='text-xl font-semibold'>${ item?.price}</h3>
                    </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestSellerDishes;
