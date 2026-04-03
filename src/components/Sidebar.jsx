const Sidebar = ({ isOpen }) => {
  const menu = ["Dashboard", "Internships", "Courses", "Rankings"];

  return (
    <div
      className={`bg-[#0B132B] text-white shadow-md flex flex-col transition-all duration-300 overflow-hidden min-w-0 ${
        isOpen ? "w-64 p-5" : "w-0 p-0"
      }`}
    >
      <h2 className="text-xl font-bold mb-6 whitespace-nowrap">Legal Olympiad</h2>

      <ul className="space-y-2">
        {menu.map((item, index) => (
          <li
            key={index}
            className={`p-2 rounded-lg cursor-pointer transition whitespace-nowrap ${
              item === "Dashboard"
                ? "bg-white/10 font-semibold"
                : "hover:bg-white/10"
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;