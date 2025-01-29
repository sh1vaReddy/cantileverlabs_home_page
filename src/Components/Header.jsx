import Headerlogo from "../assets/cantileverlogoblack.png";

const Header = () => {
  const headerdata = [
    { name: "Course" },
    { name: "Free Resource" },
    { name: "For Colleges" },
    { name: "Blog" },
  ];

  return (
    <header className="p-8 px-28 flex justify-between items-center w-full">
      <img src={Headerlogo} alt="Logo" className="w-64 bg-white rounded-md" />
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <ul className="flex space-x-8">
          {headerdata.map((item, index) => (
            <li key={index} className="text-white hover:text-gray-200 hover:text-xl font-semibold">
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-end">
        <button className="px-8 py-3 bg-yellow-400 text-white rounded-lg font-semibold hover:bg-yellow-500 transition-all flex items-center space-x-2">
          <span>Login</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
