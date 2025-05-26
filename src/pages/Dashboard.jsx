import SummaryCards from "../components/Dashboard/SummaryCards";
import ActivityChart from "../components/Dashboard/ActivityChart";
import WorkoutLog from "../components/Dashboard/WorkoutLog";
import Goals from "../components/Dashboard/Goals";
import ActivityFeed from "../components/Dashboard/ActivityFeed";

const DashboardPage = () => {
  return (
    <div className="p-6">
      <SummaryCards />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <ActivityChart />
        </div>
        <div>
          <WorkoutLog />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Goals />
        <ActivityFeed />
      </div>
    </div>
  );
};

export default DashboardPage;
