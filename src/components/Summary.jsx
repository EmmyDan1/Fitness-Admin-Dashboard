import { FaFire, FaDumbbell, FaClock, FaChartLine } from "react-icons/fa";

const Summary = () => {
  return (
    <div className="p-4 text-black rounded-lg  mt-4">
      <h3 className="text-lg font-semibold text-black">📊 Summary</h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3">
        <div className="bg-white shadow-md p-3 rounded-lg flex items-center gap-2">
          <FaFire className="text-orange-400" size={20} />
          <div>
            <p className="text-sm text-orange-300  p-0 ">Streak</p>
            <p className="text-lg font-bold">🔥 5 days</p>
          </div>
        </div>

        <div className="bg-white p-3 rounded-lg shadow-md flex items-center gap-2">
          <FaChartLine className="text-yellow-400" size={20} />
          <div>
            <p className="text-sm text-green-500 p-0 rounded-2xl ">Calories</p>
            <p className="text-lg font-bold">1,800 / 2,200 kcal</p>
          </div>
        </div>

        <div className="bg-white p-3 rounded-lg shadow-md flex items-center gap-2">
          <FaDumbbell className="text-green-400" size={20} />
          <div>
            <p className="text-sm text-[#86a0ff]">Workouts</p>
            <p className="text-lg font-bold">🏋️ 5 this week</p>
          </div>
        </div>

        <div className="bg-white p-3 rounded-lg shadow-md flex items-center gap-2">
          <FaClock className="text-blue-400" size={20} />
          <div>
            <p className="text-sm text-gray-300 text-lime-400">Active Time</p>
            <p className="text-lg font-bold">⏳ 120 min</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
