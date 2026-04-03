const activities = [
  { text: "Completed 'Constitutional Law' course", time: "2 hrs ago" },
  { text: "Internship at Legal Firm updated", time: "1 day ago" },
  { text: "Scored 85% in Mock Test", time: "3 days ago" },
];

const RecentActivity = () => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md">
      <h3 className="text-gray-500 mb-4">Recent Activity</h3>

      <ul className="space-y-3">
        {activities.map((item, index) => (
          <li
            key={index}
            className="flex justify-between text-sm border-b pb-2"
          >
            <span>{item.text}</span>
            <span className="text-gray-400">{item.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;