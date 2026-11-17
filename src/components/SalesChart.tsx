import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { day: 'Mon', sales: 120, returns: 12 },
  { day: 'Tue', sales: 98, returns: 8 },
  { day: 'Wed', sales: 150, returns: 15 },
  { day: 'Thu', sales: 130, returns: 10 },
  { day: 'Fri', sales: 180, returns: 20 },
  { day: 'Sat', sales: 210, returns: 18 },
  { day: 'Sun', sales: 165, returns: 14 },
];

export default function SalesChart() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Weekly Sales</h3>
          <p className="text-sm text-gray-500 mt-0.5">Sales & returns this week</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-indigo-500"></div>
            <span className="text-xs text-gray-500">Sales</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-red-300"></div>
            <span className="text-xs text-gray-500">Returns</span>
          </div>
        </div>
      </div>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
            <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
              }}
            />
            <Bar dataKey="sales" fill="#6366f1" radius={[4, 4, 0, 0]} barSize={28} />
            <Bar dataKey="returns" fill="#fca5a5" radius={[4, 4, 0, 0]} barSize={28} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
