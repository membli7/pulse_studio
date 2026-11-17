import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { metric: 'Likes', Facebook: 580, Instagram: 1150, TikTok: 3200 },
  { metric: 'Comments', Facebook: 68, Instagram: 260, TikTok: 890 },
  { metric: 'Views (K)', Facebook: 19.5, Instagram: 58, TikTok: 210 },
  { metric: 'New Follows', Facebook: 68, Instagram: 280, TikTok: 1020 },
  { metric: 'Visits', Facebook: 1080, Instagram: 2150, TikTok: 5200 },
];

export default function PlatformComparisonChart() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Platform Comparison</h3>
          <p className="text-sm text-gray-500 mt-0.5">This month's performance by platform</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-[#1877F2]"></div>
            <span className="text-xs text-gray-500">Facebook</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-[#E1306C]"></div>
            <span className="text-xs text-gray-500">Instagram</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-[#010101]"></div>
            <span className="text-xs text-gray-500">TikTok</span>
          </div>
        </div>
      </div>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
            <XAxis dataKey="metric" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#94a3b8' }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#94a3b8' }} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
                fontSize: '12px',
              }}
            />
            <Bar dataKey="Facebook" fill="#1877F2" radius={[4, 4, 0, 0]} barSize={18} />
            <Bar dataKey="Instagram" fill="#E1306C" radius={[4, 4, 0, 0]} barSize={18} />
            <Bar dataKey="TikTok" fill="#010101" radius={[4, 4, 0, 0]} barSize={18} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
