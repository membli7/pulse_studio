import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import PlatformCards from './components/PlatformCards';
import StatsCards from './components/StatsCards';
import EngagementChart from './components/EngagementChart';
import PlatformComparisonChart from './components/PlatformComparisonChart';
import ScheduledPosts from './components/ScheduledPosts';
import ActivityFeed from './components/ActivityFeed';

export default function App() {
  const [activeItem, setActiveItem] = useState('dashboard');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar activeItem={activeItem} onItemClick={setActiveItem} />

      {/* Main Content */}
      <div className="ml-64">
        {/* Header */}
        <Header />

        {/* Dashboard Content */}
        <main className="p-6 space-y-6">
          {/* Platform Overview Cards */}
          <PlatformCards />

          {/* Stats Cards */}
          <StatsCards />

          {/* Engagement Comparison Chart */}
          <EngagementChart />

          {/* Platform Comparison Bar Chart */}
          <PlatformComparisonChart />

          {/* Bottom Row: Scheduled Posts + Activity Feed */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2">
              <ScheduledPosts />
            </div>
            <div>
              <ActivityFeed />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
