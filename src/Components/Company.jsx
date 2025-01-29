import Marquee from "react-fast-marquee";
import Awards from "./Awards";
import Microsofticon from "../assets/microsoft.png";
import googleicon from "../assets/google.jpg";
import amzonicon from "../assets/amazon.png";
import metaicon from "../assets/meta.jpeg";
import cisconicon from "../assets/cicso.png";
import adobeicon from "../assets/adobe.png";

export const Company = () => {
  const companyData = [
    {
      id: 1,
      src: Microsofticon,
    },
    {
      id: 2,
      src: googleicon,
    },
    {
      id: 3,
      src: amzonicon,
    },
    {
      id:4,
      src: metaicon,
    },
    {
      id:5,
      src:cisconicon,
    },
    {
      id:6,
      src:adobeicon,
    }
  ];

  return (
    <div className="h-full bg-gray-900 py-10">
      <div className="flex flex-col items-center">
        <div className="flex justify-center font-bold text-6xl text-gray-100 gap-6">
          <h1>Our </h1>
          <h1 className="text-red-500">Alumni</h1>
          <h1>Got Offers From</h1>
        </div>

        <p className="text-gray-200 text-center p-5 font-medium max-w-4xl">
          Dreaming big is the first step to achieving big. Professional job is
          going to be a large part of where you spend your time, so it better be
          your dream place that you would love being at. We have seen ample of
          students who ended up dreaming big with us and making it a reality,
          working in some of the world's best places. You can too!
        </p>
      </div>
      <Marquee speed={120}>
        {companyData.map(({ id, src }) => (
          <div key={id} className="mx-10 flex items-center justify-center mt-8">
            <img
              src={src}
              alt={`Company ${id}`}
              className="h-24 w-auto object-contain"
            />
          </div>
        ))}
      </Marquee>
      <div className="mt-16">
      <Awards/>
      </div>
  
    </div>
  );
};
