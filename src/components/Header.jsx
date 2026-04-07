const Header = ({ toggleSidebar }) => {
  const today = new Date().toLocaleDateString();

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        {/* Hamburger Icon */}
        <button
          onClick={toggleSidebar}
          className="text-2xl p-2 rounded-md hover:bg-gray-200 transition"
        >
          ☰
        </button>

        <h1 className="text-2xl font-bold">
          Welcome, Sachin 
        </h1>
      </div>

      <p className="text-gray-500 text-sm">{today}</p>
    </div>
  );
};

export default Header;