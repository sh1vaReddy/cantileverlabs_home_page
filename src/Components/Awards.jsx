import amazon from '../assets/amazon.png';
import Microsofticon from "../assets/microsoft.png";
import Hdfc from '../assets/Hdfc.png';
import Tangle from '../assets/Tabgle.jpeg';
import Lab32 from '../assets/lab32.png';

const Awards = () => {
    const awards = [
      {
        id: 1,
        src:Microsofticon,
        name: "Global Training Partner",
        about: "Exclusive access to MS Certifications, GitHub, Outlook",
      },
      {
        id: 2,
        src:Hdfc,
        name: "Winner of All India",
        about: "Received a sum of Rs 0.33 crore in form of a grant.",
      },
      {
        id: 3,
        src:Tangle,
        name: "Part of T-Angel",
        about: "Investment readiness program",
      },
      {
        id: 4,
        src:Lab32,
        name: "Part of Lab-32",
        about: "Start-up Incubation program",
      },
    ];
  
    return (
      <div className="bg-gray-900 py-16 px-6">
        <h1 className="text-center text-4xl md:text-6xl font-bold text-gray-100 mb-12">
          Awards and Recognition
        </h1>
        <div className="flex flex-wrap justify-center gap-8">
          {awards.map(({ id, name, about,src}) => (
            <div
              key={id}
              className="bg-gray-800 text-gray-100 p-6 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300 w-80"
            >
                <img
                  src={src}
                  className='mt-6 mb-6'
                />
              <h2 className="text-2xl font-semibold text-red-400 mb-2">{name}</h2>
              <p className="text-gray-300 text-sm">{about}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Awards;
  