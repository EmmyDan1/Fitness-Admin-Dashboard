import React from 'react';
import Card from '../Common/Card';


const activityFeed = [
  {
    id: 1,
    type: "workout",
    title: "Completed HIIT Session",
    time: "2 hours ago",
    icon: "fas fa-fire",
  },
  {
    id: 2,
    type: "achievement",
    title: "Reached 10,000 steps",
    time: "Yesterday",
    icon: "fas fa-trophy",
  },
  {
    id: 3,
    type: "goal",
    title: "New goal set: Run 5K",
    time: "2 days ago",
    icon: "fas fa-bullseye",
  },
  {
    id: 4,
    type: "workout",
    title: "Yoga session completed",
    time: "3 days ago",
    icon: "fas fa-spa",
  },
];

const ActivityFeed = () => {
  return (
    <Card className="slide-up" style={{ animationDelay: "0.5s" }}>
      <h2 className="text-xl font-bold mb-6">Recent Activity</h2>

      <div className="space-y-4">
        {activityFeed.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3">
            <div
              className={`p-2 rounded-lg ${
                activity.type === "workout"
                  ? "bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400"
                  : activity.type === "achievement"
                  ? "bg-yellow-100 dark:bg-yellow-900/50 text-yellow-600 dark:text-yellow-400"
                  : "bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400"
              }`}
            >
              <i className={activity.icon}></i>
            </div>
            <div>
              <h3 className="font-medium">{activity.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {activity.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ActivityFeed;
