import { useState } from "react";
import manish from "../assets/manish.jpeg";
import vivek from "../assets/1679396258661_vivek.jpeg";
import suresh from "../assets/1679396313039_suresh.jpeg";
import vivek1 from "../assets/1679396370162_vivek1.jpeg";
import fareen from "../assets/1679396502605_fareen.jpeg";
import drishti from "../assets/1679396484799_drishti.jpeg";
import Microsofticon from "../assets/microsoft.png";
import googleicon from "../assets/google.jpg";
import amzonicon from "../assets/amazon.png";
import metaicon from "../assets/meta.jpeg";
import cisconicon from "../assets/cicso.png";
import adobeicon from "../assets/adobe.png";

const Mentors = () => {
  const Mentordata = [
    {
      id: 1,
      name: "Manish Kankani",
      college: "IIT Roorkee",
      image: manish,
      bio: "Manish is an expert in data structures and algorithms with 5 years of teaching experience.",
      company: googleicon,
      Linkedin: "https://www.linkedin.com/in/manishkankani/",
    },
    {
      id: 2,
      name: "Vivek Jhaver",
      college: "VNIT Nagpur",
      image: vivek,
      bio: "Vivek specializes in competitive programming and has participated in ACM ICPC regionals.",
      company: Microsofticon,
      Linkedin: "https://www.linkedin.com/in/vivek-jhaver-8853a261/",
    },
    {
      id: 3,
      name: "Suresh Santhanam",
      college: "IIIT Hyderabad",
      image: suresh,
      bio: "Suresh is a full-stack developer with a passion for mentoring students in web technologies.",
      company: amzonicon,
      Linkedin: "https://www.linkedin.com/in/sureshsan/",
    },
    {
      id: 4,
      name: "Vivek Jhunjhunwala",
      college: "IIT Bombay",
      image: vivek1,
      bio: "Vivek has extensive knowledge in machine learning and artificial intelligence.",
      company: metaicon,
      Linkedin: "https://www.linkedin.com/in/vivek-jhunjhunwala/",
    },
    {
      id: 5,
      name: "Farheen Bano",
      college: "IIIT Bombay",
      image: fareen,
      bio: "Farheen is a cybersecurity expert with certifications in ethical hacking.",
      company: cisconicon ,
      Linkedin: "https://www.linkedin.com/in/farheen-bano/",
    },
    {
      id: 6,
      name: "Drishti Mamtani",
      college: "BITS",
      image: drishti,
      bio: "Drishti is a software engineer with experience in cloud computing and DevOps.",
      company: adobeicon ,
      Linkedin: "https://www.linkedin.com/in/drishti-mamtani-572338159/",
    },
  ];

  const [selectedMentor, setSelectedMentor] = useState(Mentordata[0]);

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center p-4">
      <h1 className="text-gray-200 font-bold text-4xl mb-6">
        Meet Your Mentors
      </h1>
      <div className="flex w-full">
        <div className="w-1/3 bg-gray-800 p-4 rounded-lg overflow-auto">
          {Mentordata.map((mentor) => (
            <div
              key={mentor.id}
              onClick={() => setSelectedMentor(mentor)}
              className={`p-4 mb-4 rounded-lg cursor-pointer transition-transform transform hover:scale-105 ${
                selectedMentor.id === mentor.id ? "bg-gray-700" : "bg-gray-600"
              }`}
            >
              <h2 className="text-white font-semibold text-lg flex justify-between items-center">
                <span>{mentor.name}</span>
                <img
                  src={mentor.company}
                  alt={`${mentor.name}'s company`}
                  className="w-10 h-10 object-contain ml-2" 
                />
              </h2>
              <p className="text-gray-400 text-sm">{mentor.college}</p>
            </div>
          ))}
        </div>
        <div className="w-2/3 bg-gray-800 p-8 rounded-2xl shadow-xl flex flex-col items-center">
          <img
            src={selectedMentor.image}
            alt={selectedMentor.name}
            className="w-48 h-48 rounded-full mb-6 border-4 border-blue-500 shadow-md object-cover"
          />
          <h2 className="text-white font-bold text-3xl mb-2 flex items-center gap-3">
            {selectedMentor.name}
            <img
              src={selectedMentor.company}
              alt={`${selectedMentor.name}'s company`}
              className="w-10 h-10 object-contain"
            />
          </h2>
          <h3 className="text-gray-100 text-lg mb-4">
            {selectedMentor.college}
          </h3>
          <p className="text-gray-300 text-center">{selectedMentor.bio}</p>
          <button
            className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 mt-10"
            onClick={() => window.open(selectedMentor.Linkedin, "_blank")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.812 19h-3.676v-11h3.676v11zm-1.838-12.281c-1.161 0-2.109-.948-2.109-2.109 0-1.161.948-2.109 2.109-2.109 1.161 0 2.109.948 2.109 2.109 0 1.161-.948 2.109-2.109 2.109zm14.65 12.281h-3.676v-5.604c0-1.336-.026-3.057-1.864-3.057-1.865 0-2.15 1.455-2.15 2.956v5.705h-3.676v-11h3.529v1.507h.049c.491-.93 1.688-1.912 3.474-1.912 3.712 0 4.395 2.443 4.395 5.617v5.788z" />
            </svg>
            Connect on LinkedIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mentors;
