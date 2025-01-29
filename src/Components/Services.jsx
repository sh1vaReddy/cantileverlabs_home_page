import cp from '../assets/cp.png'
import Datascinece from '../assets/Data.png';
import web from '../assets/Web development.png';
import palcement from '../assets/placement.png'

const Services = () => {
    const Carddata = [
        {
            id: 1,
            src: cp,
            name: "Competitive Programming",
            button: "Explore"
        },
        {
            id: 2,
            src: palcement,
            name: "Get Placement Ready",
            button: "Explore"
        },
        {
            id: 3,
            src: web,
            name: "Web Development",
            button: "Explore"
        },
        {
            id: 4,
            src:Datascinece,
            name: "Data Science",
            button: "Explore"
        }
    ];

    return (
        <div className="flex flex-col justify-center bg-gray-900 h-screen">
            <h1 className="text-6xl font-bold text-gray-100 text-center mb-10">Services</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 px-8">
                {Carddata.map(({ id, src, name, button }) => (
                    <div key={id} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                        <img src={src} alt={`Service ${id}`} className="mb-4 rounded-md" />
                        <h2 className="text-2xl font-bold text-gray-100 mb-4 text-center">{name}</h2>
                        <div className="flex justify-center">
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-200">{button}</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
