import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

type Metric = 'likes' | 'comments' | 'views' | 'follows' | 'visits';

const data = {
  likes: [
    { date: 'Jan 1', Facebook: 320, Instagram: 580, TikTok: 1200 },
    { date: 'Jan 5', Facebook: 410, Instagram: 620, TikTok: 1450 },
    { date: 'Jan 10', Facebook: 380, Instagram: 710, TikTok: 1680 },
    { date: 'Jan 15', Facebook: 520, Instagram: 890, TikTok: 2100 },
    { date: 'Jan 20', Facebook: 480, Instagram: 950, TikTok: 2400 },
    { date: 'Jan 25', Facebook: 610, Instagram: 1020, TikTok: 2800 },
    { date: 'Jan 30', Facebook: 580, Instagram: 1150, TikTok: 3200 },
  ],
  comments: [
    { date: 'Jan 1', Facebook: 45, Instagram: 120, TikTok: 380 },
    { date: 'Jan 5', Facebook: 52, Instagram: 145, TikTok: 420 },
    { date: 'Jan 10', Facebook: 48, Instagram: 160, TikTok: 510 },
    { date: 'Jan 15', Facebook: 65, Instagram: 190, TikTok: 620 },
    { date: 'Jan 20', Facebook: 58, Instagram: 210, TikTok: 680 },
    { date: 'Jan 25', Facebook: 72, Instagram: 240, TikTok: 750 },
    { date: 'Jan 30', Facebook: 68, Instagram: 260, TikTok: 890 },
  ],
  views: [
    { date: 'Jan 1', Facebook: 12000, Instagram: 28000, TikTok: 85000 },
    { date: 'Jan 5', Facebook: 14500, Instagram: 32000, TikTok: 98000 },
    { date: 'Jan 10', Facebook: 13200, Instagram: 35000, TikTok: 112000 },
    { date: 'Jan 15', Facebook: 18000, Instagram: 42000, TikTok: 135000 },
    { date: 'Jan 20', Facebook: 16500, Instagram: 48000, TikTok: 158000 },
    { date: 'Jan 25', Facebook: 21000, Instagram: 52000, TikTok: 185000 },
    { date: 'Jan 30', Facebook: 19500, Instagram: 58000, TikTok: 210000 },
  ],
  follows: [
    { date: 'Jan 1', Facebook: 45, Instagram: 120, TikTok: 380 },
    { date: 'Jan 5', Facebook: 52, Instagram: 145, TikTok: 450 },
    { date: 'Jan 10', Facebook: 48, Instagram: 160, TikTok: 520 },
    { date: 'Jan 15', Facebook: 65, Instagram: 190, TikTok: 680 },
    { date: 'Jan 20', Facebook: 58, Instagram: 210, TikTok: 750 },
    { date: 'Jan 25', Facebook: 72, Instagram: 240, TikTok: 890 },
    { date: 'Jan 30', Facebook: 68, Instagram: 280, TikTok: 1020 },
  ],
  visits: [
    { date: 'Jan 1', Facebook: 850, Instagram: 1200, TikTok: 2400 },
    { date: 'Jan 5', Facebook: 920, Instagram: 1350, TikTok: 2800 },
    { date: 'Jan 10', Facebook: 880, Instagram: 1480, TikTok: 3200 },
    { date: 'Jan 15', Facebook: 1050, Instagram: 1720, TikTok: 3800 },
    { date: 'Jan 20', Facebook: 980, Instagram: 1850, TikTok: 4200 },
    { date: 'Jan 25', Facebook: 1120, Instagram: 2000, TikTok: 4800 },
    { date: 'Jan 30', Facebook: 1080, Instagram: 2150, TikTok: 5200 },
  ],
};

const metrics: { key: Metric; label: string }[] = [
  { key: 'likes', label: 'Likes' },
  { key: 'comments', label: 'Comments' },
  { key: 'views', label: 'Views' },
  { key: 'follows', label: 'New Follows' },
  { key: 'visits', label: 'Profile Visits' },
];

const platformColors = {
  Facebook: '#1877F2',
  Instagram: '#E1306C',
  TikTok: '#010101',
};

export default function EngagementChart() {
  const [activeMetric, setActiveMetric] = useState<Metric>('likes');

  const formatValue = (value: number) => {
    if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
    if (value >= 1000) return `${(value / 1000).toFixed(1)}K`;
    return value.toString();
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Engagement Comparison</h3>
          <p className="text-sm text-gray-500 mt-0.5">Compare metrics across all platforms</p>
        </div>
        <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
          {metrics.map((metric) => (
            <button
              key={metric.key}
              onClick={() => setActiveMetric(metric.key)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                activeMetric === metric.key
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {metric.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-5 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#1877F2]"></div>
          <span className="text-xs text-gray-500">Facebook</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#E1306C]"></div>
          <span className="text-xs text-gray-500">Instagram</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#010101]"></div>
          <span className="text-xs text-gray-500">TikTok</span>
        </div>
      </div>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data[activeMetric]} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#94a3b8' }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#94a3b8' }} tickFormatter={formatValue} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
                fontSize: '12px',
              }}
              formatter={(value: number) => [formatValue(value), '']}
            />
            <Line type="monotone" dataKey="Facebook" stroke={platformColors.Facebook} strokeWidth={2.5} dot={{ r: 3 }} activeDot={{ r: 5 }} />
            <Line type="monotone" dataKey="Instagram" stroke={platformColors.Instagram} strokeWidth={2.5} dot={{ r: 3 }} activeDot={{ r: 5 }} />
            <Line type="monotone" dataKey="TikTok" stroke={platformColors.TikTok} strokeWidth={2.5} dot={{ r: 3 }} activeDot={{ r: 5 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
