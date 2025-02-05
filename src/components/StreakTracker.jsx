import { FaFire } from "react-icons/fa";

const StreakTracker = () => {
  const streakDays = 5;
  const totalGoal = 7; 

  return (
    <div className="p-4 bg-gradient-to-r from-lime-900 to-lime-200  text-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold flex items-center">
        <FaFire className="mr-2 text-2xl animate-pulse" /> Streak Tracker
      </h3>
      <p className="mt-2">🔥 You're on a {streakDays}-day streak!</p>
      <p className="text-sm opacity-80">Keep it up and hit your weekly goal! 💪</p>
      <div className="mt-3 bg-gray-800 rounded-full h-3 w-full">
        <div
          className="bg-yellow-400 h-3 rounded-full transition-all"
          style={{ width: `${(streakDays / totalGoal) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default StreakTracker;
