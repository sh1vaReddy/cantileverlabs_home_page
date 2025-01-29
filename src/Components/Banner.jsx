import { useState, useEffect } from "react";
import Upskill from "../assets/Bannerlogo.webp";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";
import { FaRupeeSign } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { FaRegStar } from "react-icons/fa";

const Banner = () => {
  const cardsdata = [
    {
      id: 1,
      logo: <IoPersonOutline className="text-yellow-400 text-4xl" />,
      value: "320+",
      data: "Students got placed",
    },
    {
      id: 2,
      logo: <FaRupeeSign className="text-green-400 text-4xl" />,
      value: "1.5 Crores",
      data: "Highest package received",
    },
    {
      id: 3,
      logo: <PiStudentBold className="text-blue-400 text-4xl" />,
      value: "24,000+",
      data: "Students trained at top colleges",
    },
    {
      id: 4,
      logo: <FaRegStar className="text-purple-400 text-4xl" />,
      value: "4.9/5",
      data: "Rated highly by our students",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cardsdata.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [cardsdata.length]);

  return (
    <div className="flex items-center justify-between bg-gray-900 text-white py-16">
      <div className="w-1/2 px-36">
        <h1 className="text-5xl font-bold">Cantileverlabs</h1>
        <h3 className="text-xl mt-4">Grab your Dream Job</h3>
        <p className="text-lg mt-4">
          Be Different & Make the Difference, Start your Journey Today
        </p>
        <div className="mt-6 flex flex-col items-start space-y-6">
          <button className="px-10 py-4 bg-yellow-400 rounded-lg font-semibold hover:bg-yellow-500  hover:text-md transition-all flex items-center space-x-2">
            <span>Enroll Now</span>
            <FaArrowRightLong />
          </button>
          <div className="relative bg-gray-800 text-gray-100 p-4 rounded-2xl shadow-lg w-80 h-36 overflow-hidden transition-transform duration-500 ease-in-out">
            <div className="flex flex-col items-center justify-center space-y-2">
              <div>{cardsdata[currentIndex].logo}</div>
              <h1 className="text-3xl font-bold">
                {cardsdata[currentIndex].value}
              </h1>
              <p className="text-lg font-medium text-gray-300 text-center">
                {cardsdata[currentIndex].data}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <img
          src={Upskill}
          alt="Banner Image"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Banner;
