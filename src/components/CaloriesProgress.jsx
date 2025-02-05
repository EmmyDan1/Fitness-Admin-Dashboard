import { FaUtensils } from "react-icons/fa";

const CalorieProgress = () => {
  const consumedCalories = 1800;
  const goalCalories = 2200;

  return (
    <div className="p-4 bg-gradient-to-r from-lime-900 to-lime-200  text-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold flex items-center">
        <FaUtensils className="mr-2 text-yellow-400 text-xl" /> Calorie Progress
      </h3>
      <p className="mt-2">
        💪 {consumedCalories} kcal out of {goalCalories} kcal consumed
      </p>
      <p className="text-sm opacity-80">
        {goalCalories - consumedCalories} kcal remaining for today! 🏆
      </p>
      <div className="mt-3 bg-gray-700 rounded-full h-3 w-full">
        <div
          className="bg-green-400 h-3 rounded-full transition-all"
          style={{ width: `${(consumedCalories / goalCalories) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default CalorieProgress;
