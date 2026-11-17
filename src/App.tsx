import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatsCards from './components/StatsCards';
import RevenueChart from './components/RevenueChart';
import SalesChart from './components/SalesChart';
import RecentOrders from './components/RecentOrders';
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
          {/* Stats Cards */}
          <StatsCards />

          {/* Charts Row */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <RevenueChart />
            <SalesChart />
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2">
              <RecentOrders />
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
