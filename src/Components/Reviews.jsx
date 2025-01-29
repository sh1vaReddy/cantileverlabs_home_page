import  student1 from '../assets/student1.png';
import student2 from '../assets/student2.jpg';
import  student3 from '../assets/student3.jpeg';
import student4 from '../assets/student4.jpg';
import student5 from '../assets/student5.png';

const Reviews = () => {
  const reviewsData = [
    {
      id: 1,
      review:
        "Cantilever Labs provided excellent training and helped me secure a job with top-notch placement guidance.",
      data: "January 2025",
      college: "IIT Bombay",
      image: student1, 
    },
    {
      id: 2,
      review:
        "Their mock interviews and resume workshops were highly effective and tailored to industry standards.",
      data: "December 2024",
      college: "NIT Trichy",
      image: student2, 
    },
    {
      id: 3,
      review:
        "The team at Cantilever Labs is very supportive, and their group discussions really boosted my confidence.",
      data: "November 2024",
      college: "BITS Pilani",
      image: student3, 
    },
    {
      id: 4,
      review:
        "I loved the practical approach they took in teaching concepts, making complex topics easy to grasp.",
      data: "October 2024",
      college: "IIIT Hyderabad",
      image:student4, 
    },
    {
      id: 5,
      review:
        "Cantilever Labs' team of mentors has unparalleled expertise, which was invaluable during my preparation.",
      data: "September 2024",
      college: "IIT Kanpur",
      image:student5, 
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen p-8">
      <h1 className="flex justify-center text-4xl font-extrabold text-gray-100 mb-10">
        Student Reviews
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-8">
        {reviewsData.map(({ id, review, data, college, image }) => (
          <div
            key={id}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col items-center"
          >
            <img
              src={image}
              alt={`Student from ${college}`}
              className="w-24 h-24 rounded-full mb-4"
            />
    
            <h2 className="text-lg font-semibold text-gray-100">
              {college}
            </h2>{" "}
            <p className="text-sm text-gray-400 mb-2">{data}</p> 
            <p className="text-gray-300 text-center text-sm italic">
              {" "}
              "{review}"{" "}
            </p>{" "}
          </div>
        ))}{" "}
      </div>{" "}
    </div>
  );
};

export default Reviews;
