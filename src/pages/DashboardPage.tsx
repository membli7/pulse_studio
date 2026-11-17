import PlatformCards from '../components/PlatformCards';
import StatsCards from '../components/StatsCards';
import EngagementChart from '../components/EngagementChart';
import PlatformComparisonChart from '../components/PlatformComparisonChart';
import ScheduledPosts from '../components/ScheduledPosts';
import ActivityFeed from '../components/ActivityFeed';

export default function DashboardPage() {
  return (
    <main className="p-6 space-y-6">
      <PlatformCards />
      <StatsCards />
      <EngagementChart />
      <PlatformComparisonChart />
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <ScheduledPosts />
        </div>
        <div>
          <ActivityFeed />
        </div>
      </div>
    </main>
  );
}
