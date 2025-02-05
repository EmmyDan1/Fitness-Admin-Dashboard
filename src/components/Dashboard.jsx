import { AiOutlineSearch } from "react-icons/ai";
import Workouts from "./workouts";
import SummaryCard from "./SummaryCard";
import Progress from "./Progress";
import StreakTracker from "./StreakTracker";
import CalorieProgress from "./CaloriesProgress";
import Summary from "./Summary";
import Timer from "./Timer";
import { FaDumbbell, FaHeartbeat, FaWalking, FaBullseye } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="p-4 w-full max-w-6xl mx-auto ">
      <div className="relative mb-4 md:hidden">
        <input
          type="text"
          placeholder="Search workouts, meals..."
          className="w-full bg-gray-200 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <AiOutlineSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <SummaryCard
          icon={<FaWalking />}
          title="Steps"
          value="10,000"
          text="Great job! Let's keep up the momentum!"
          color="bg-[#86a0ff;]"
          textColor="text-white"
        />
        <SummaryCard
          icon={<FaHeartbeat />}
          title="Heart Rate"
          value="72 bpm"
          color="bg-white"
        />
        <SummaryCard
          icon={<FaDumbbell />}
          title="Workouts"
          value="5 this week"
          color="bg-white"
        />
        <SummaryCard
          icon={<FaBullseye />}
          title="Calories"
          value="2200 kcal"
          color="bg-white"
        />
      </div>
      <Summary />
      <div className="md:hidden">
        <Progress />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <StreakTracker />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <CalorieProgress />
        </div>
      </div>

      <div className=" flex flex-col md:flex-row justify-between">
        <Progress />
        <p className="m-auto">
          <Timer />
        </p>
        <Workouts />
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md mt-2">
        <h2 className="text-lg font-semibold mb-2">Recent Activities</h2>
        <ul className="space-y-2">
          <li className="p-2 bg-gray-100 rounded">
            🏋️ Completed a 30-min HIIT session
          </li>
          <li className="p-2 bg-gray-100 rounded">🥗 Logged a healthy meal</li>
          <li className="p-2 bg-gray-100 rounded">🚶 Walked 8,000 steps</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
