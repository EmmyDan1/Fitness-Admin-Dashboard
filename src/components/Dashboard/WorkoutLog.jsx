import React from 'react';
import Card from '../Common/Card';
import Button from '../Common/Button';

const workoutLog = [
  {
    id: 1,
    date: "2023-11-15",
    type: "Strength",
    duration: "45 min",
    calories: "320",
  },
  {
    id: 2,
    date: "2023-11-14",
    type: "Cardio",
    duration: "30 min",
    calories: "280",
  },
  {
    id: 3,
    date: "2023-11-12",
    type: "Yoga",
    duration: "60 min",
    calories: "180",
  },
  {
    id: 4,
    date: "2023-11-10",
    type: "HIIT",
    duration: "25 min",
    calories: "350",
  },
];

const WorkoutLog = () => {
  return (
    <Card className="slide-up" style={{ animationDelay: "0.3s" }}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Recent Workouts</h2>
        <Button variant="secondary" className="text-sm">
          View All
        </Button>
      </div>

      <div className="space-y-4">
        {workoutLog.map((workout) => (
          <div
            key={workout.id}
            className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
          >
            <div>
              <h3 className="font-medium">{workout.type}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {workout.date}
              </p>
            </div>
            <div className="text-right">
              <p className="font-medium">{workout.duration}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {workout.calories} cal
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default WorkoutLog;
