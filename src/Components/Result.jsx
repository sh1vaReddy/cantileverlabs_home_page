import { useState } from 'react';
import  student1 from '../assets/student1.png';
import student2 from '../assets/student2.jpg';
import  student3 from '../assets/student3.jpeg';
import student4 from '../assets/student4.jpg';

export const Result = () => {
  const slides = [
    {
      id: 1,
      src: student1,
      name: "Competitive Programming",
      review:
        "Interviewer provided me with a lot of important insights and answered all of my queries and questions. The interview felt like an actual interview and gave me a ﬂavor of what it's like to be in an interview.",
    },
    {
      id: 2,
      src: student2,
      name: "Get Placement Ready",
      review:
        "Cantilever labs have some very great trainers with specialty in Consulting, Analytics, and IT. The test series of Cantilever Labs proved to be most useful for me because I encountered similar questions in the placement tests.",
    },
    {
      id: 3,
      src: student3,
      name: "Web Development",
      review:
        "I have already been through the Career Cell internship process & was aware of some of the things. But I learned a lot of new things in your session. I admire how you communicated so clearly & precisely, & wished it were a longer session where we could do something hands-on.",
    },
    {
      id: 4,
      src: student4,
      name: "Data Science",
      review:
        "Your session at Youth Speak Forum was truly engrossing & a nice learning experience. Thank you so much for the information & advice you have shared. Looking forward to more such insightful teachings from you & Cantilever Labs.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="py-12 bg-gray-900 h-screen w-full">
      <h1 className="flex justify-center text-6xl text-gray-200 font-bold p-10">Our Champions</h1>
      <div className="relative flex flex-col items-center">
        <div className="flex items-center justify-center space-x-4 w-full">
          <button
            onClick={prevSlide}
            className="text-white p-4 bg-gray-700 rounded-full hover:bg-gray-600"
          >
            &#8592;
          </button>
          <div className="flex flex-row items-center justify-center w-full  rounded-lg shadow-md p-8">
            <div className="w-1/2 text-left text-gray-200 space-y-4">
              <h2 className="text-3xl font-bold">{slides[currentIndex].name}</h2>
              <p className="text-lg">{slides[currentIndex].review}</p>
            </div>
            <div className="w-1/2 flex justify-center">
              <img
                src={slides[currentIndex].src}
                alt={slides[currentIndex].name}
                className="max-w-full h-64 rounded-lg shadow-lg transition-transform duration-500"
              />
            </div>
          </div>
          <button
            onClick={nextSlide}
            className="text-white p-4 bg-gray-700 rounded-full hover:bg-gray-600"
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};
