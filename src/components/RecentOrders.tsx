import { MoreHorizontal } from 'lucide-react';

interface Order {
  id: string;
  customer: string;
  email: string;
  product: string;
  amount: string;
  status: 'completed' | 'pending' | 'processing' | 'cancelled';
  date: string;
}

const orders: Order[] = [
  { id: '#ORD-7291', customer: 'Sarah Johnson', email: 'sarah@email.com', product: 'MacBook Pro 14"', amount: '$2,499', status: 'completed', date: 'Jan 28, 2026' },
  { id: '#ORD-7290', customer: 'Michael Chen', email: 'michael@email.com', product: 'iPhone 15 Pro', amount: '$1,199', status: 'processing', date: 'Jan 28, 2026' },
  { id: '#ORD-7289', customer: 'Emily Davis', email: 'emily@email.com', product: 'AirPods Pro', amount: '$249', status: 'completed', date: 'Jan 27, 2026' },
  { id: '#ORD-7288', customer: 'James Wilson', email: 'james@email.com', product: 'iPad Air', amount: '$799', status: 'pending', date: 'Jan 27, 2026' },
  { id: '#ORD-7287', customer: 'Lisa Anderson', email: 'lisa@email.com', product: 'Apple Watch Ultra', amount: '$899', status: 'cancelled', date: 'Jan 26, 2026' },
  { id: '#ORD-7286', customer: 'Robert Brown', email: 'robert@email.com', product: 'Magic Keyboard', amount: '$349', status: 'completed', date: 'Jan 26, 2026' },
];

const statusStyles = {
  completed: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  processing: 'bg-blue-50 text-blue-700 border-blue-200',
  pending: 'bg-amber-50 text-amber-700 border-amber-200',
  cancelled: 'bg-red-50 text-red-700 border-red-200',
};

export default function RecentOrders() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Recent Orders</h3>
          <p className="text-sm text-gray-500 mt-0.5">Latest customer transactions</p>
        </div>
        <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors">
          View All →
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-3">Order</th>
              <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-3">Customer</th>
              <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-3">Product</th>
              <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-3">Amount</th>
              <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-3">Status</th>
              <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-3">Date</th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4">
                  <span className="text-sm font-medium text-indigo-600">{order.id}</span>
                </td>
                <td className="px-6 py-4">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{order.customer}</p>
                    <p className="text-xs text-gray-500">{order.email}</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-gray-700">{order.product}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm font-semibold text-gray-900">{order.amount}</span>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${statusStyles[order.status]}`}>
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-gray-500">{order.date}</span>
                </td>
                <td className="px-6 py-4">
                  <button className="text-gray-400 hover:text-gray-600 transition-colors">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
