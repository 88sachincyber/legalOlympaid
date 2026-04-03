const Header = () => {
  const today = new Date().toLocaleDateString();

  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-bold">
        Welcome, Genius
      </h1>
      <p className="text-gray-500 text-sm">{today}</p>
    </div>
  );
};

export default Header;