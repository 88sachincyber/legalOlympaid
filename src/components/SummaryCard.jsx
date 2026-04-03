const SummaryCard = ({ title, value, color }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
      <div className={`w-10 h-2 ${color} rounded mb-3`}></div>
      <h3 className="text-gray-500 text-sm">{title}</h3>
      <p className="text-2xl font-bold mt-2">{value}</p>
    </div>
  );
};

export default SummaryCard;