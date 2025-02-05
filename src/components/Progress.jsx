import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Progress = () => {
  const progressData = [
    { day: "Mon", steps: 4000 },
    { day: "Tue", steps: 5200 },
    { day: "Wed", steps: 6100 },
    { day: "Thu", steps: 7200 },
    { day: "Fri", steps: 8000 },
    { day: "Sat", steps: 9500 },
    { day: "Sun", steps: 10000 },
  ];

  return (
    <div className="mt-6 p-4 bg-white shadow rounded-lg md:w-4/12">
      <h2 className="text-lg font-semibold mb-2">Weekly Steps Progress</h2>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={progressData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="steps"
            stroke="#3182CE"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
export default Progress;
