import { TrendingUp, TrendingDown, DollarSign, Users, ShoppingCart, Eye } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  change: number;
  changeLabel: string;
  icon: React.ReactNode;
  color: string;
}

function StatCard({ title, value, change, changeLabel, icon, color }: StatCardProps) {
  const isPositive = change >= 0;
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:shadow-gray-100 transition-all duration-300">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
          <div className="flex items-center gap-1.5 mt-3">
            {isPositive ? (
              <TrendingUp className="w-4 h-4 text-emerald-500" />
            ) : (
              <TrendingDown className="w-4 h-4 text-red-500" />
            )}
            <span className={`text-sm font-semibold ${isPositive ? 'text-emerald-600' : 'text-red-600'}`}>
              {isPositive ? '+' : ''}{change}%
            </span>
            <span className="text-sm text-gray-400">{changeLabel}</span>
          </div>
        </div>
        <div className={`p-3 rounded-xl ${color}`}>
          {icon}
        </div>
      </div>
    </div>
  );
}

export default function StatsCards() {
  const stats: StatCardProps[] = [
    {
      title: 'Total Revenue',
      value: '$45,231',
      change: 12.5,
      changeLabel: 'vs last month',
      icon: <DollarSign className="w-5 h-5 text-emerald-600" />,
      color: 'bg-emerald-50',
    },
    {
      title: 'Total Customers',
      value: '2,450',
      change: 8.2,
      changeLabel: 'vs last month',
      icon: <Users className="w-5 h-5 text-blue-600" />,
      color: 'bg-blue-50',
    },
    {
      title: 'Total Orders',
      value: '1,234',
      change: -2.4,
      changeLabel: 'vs last month',
      icon: <ShoppingCart className="w-5 h-5 text-purple-600" />,
      color: 'bg-purple-50',
    },
    {
      title: 'Page Views',
      value: '64,892',
      change: 18.7,
      changeLabel: 'vs last month',
      icon: <Eye className="w-5 h-5 text-amber-600" />,
      color: 'bg-amber-50',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <StatCard key={stat.title} {...stat} />
      ))}
    </div>
  );
}
