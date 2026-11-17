import { TrendingUp, TrendingDown, Users, Heart, CalendarCheck, Send } from 'lucide-react';

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
    <div className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-lg hover:shadow-gray-100 transition-all duration-300">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1.5">{value}</p>
          <div className="flex items-center gap-1.5 mt-2">
            {isPositive ? (
              <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
            ) : (
              <TrendingDown className="w-3.5 h-3.5 text-red-500" />
            )}
            <span className={`text-xs font-semibold ${isPositive ? 'text-emerald-600' : 'text-red-600'}`}>
              {isPositive ? '+' : ''}{change}%
            </span>
            <span className="text-xs text-gray-400">{changeLabel}</span>
          </div>
        </div>
        <div className={`p-2.5 rounded-xl ${color}`}>
          {icon}
        </div>
      </div>
    </div>
  );
}

export default function StatsCards() {
  const stats: StatCardProps[] = [
    {
      title: 'Total Followers',
      value: '162.4K',
      change: 8.3,
      changeLabel: 'vs last month',
      icon: <Users className="w-5 h-5 text-violet-600" />,
      color: 'bg-violet-50',
    },
    {
      title: 'Total Engagement',
      value: '186.3K',
      change: 15.2,
      changeLabel: 'vs last month',
      icon: <Heart className="w-5 h-5 text-pink-600" />,
      color: 'bg-pink-50',
    },
    {
      title: 'Scheduled Posts',
      value: '24',
      change: 4.0,
      changeLabel: 'this week',
      icon: <CalendarCheck className="w-5 h-5 text-blue-600" />,
      color: 'bg-blue-50',
    },
    {
      title: 'Posts Published',
      value: '156',
      change: -2.1,
      changeLabel: 'vs last month',
      icon: <Send className="w-5 h-5 text-emerald-600" />,
      color: 'bg-emerald-50',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
      {stats.map((stat) => (
        <StatCard key={stat.title} {...stat} />
      ))}
    </div>
  );
}
