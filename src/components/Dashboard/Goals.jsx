import Card from "../Common/Card";
import Button from "../Common/Button";

const goals = [
  {
    id: 1,
    title: "Lose Weight",
    target: "5 kg",
    progress: 60,
    deadline: "Dec 31, 2023",
  },
  {
    id: 2,
    title: "Run 5K",
    target: "Under 25 min",
    progress: 45,
    deadline: "Jan 15, 2024",
  },
  {
    id: 3,
    title: "Strength Training",
    target: "3x per week",
    progress: 80,
    deadline: "Ongoing",
  },
];

const Goals = () => {
  return (
    <Card className="slide-up" style={{ animationDelay: "0.4s" }}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Your Goals</h2>
        <Button className="text-sm">
          <i className="fas fa-plus mr-1"></i> Add Goal
        </Button>
      </div>

      <div className="space-y-6">
        {goals.map((goal) => (
          <div key={goal.id}>
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium">{goal.title}</h3>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {goal.deadline}
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex-1 bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-blue-600 h-full rounded-full"
                  style={{ width: `${goal.progress}%` }}
                ></div>
              </div>
              <span className="text-sm font-medium">{goal.progress}%</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Target: {goal.target}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default Goals;
