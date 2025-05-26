const summaryData = [
  {
    title: "Steps",
    value: "8,742",
    icon: "fas fa-walking",
    change: "+12%",
    color: "bg-blue-500",
  },
  {
    title: "Calories",
    value: "2,450",
    icon: "fas fa-fire",
    change: "+8%",
    color: "bg-red-500",
  },
  {
    title: "Workouts",
    value: "14",
    icon: "fas fa-dumbbell",
    change: "+23%",
    color: "bg-purple-500",
  },
  {
    title: "Sleep",
    value: "7.5h",
    icon: "fas fa-moon",
    change: "-5%",
    color: "bg-green-500",
  },
];

const SummaryCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {summaryData.map((item, index) => (
        <div
          key={index}
          className={`${item.color} text-white rounded-xl p-6 shadow-md transition-all duration-300 card-hover fade-in`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm opacity-80">{item.title}</p>
              <h3 className="text-2xl font-bold mt-1">{item.value}</h3>
            </div>
            <div className={`p-3 rounded-lg bg-white bg-opacity-20`}>
              <i className={`${item.icon} text-xl`}></i>
            </div>
          </div>
          <p className="text-sm mt-4 opacity-90">
            <span className="font-medium">{item.change}</span> from last week
          </p>
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;
