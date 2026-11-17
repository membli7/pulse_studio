import { ShoppingCart, UserPlus, CreditCard, Star, Package, AlertCircle } from 'lucide-react';

interface Activity {
  id: number;
  type: 'order' | 'signup' | 'payment' | 'review' | 'shipping' | 'alert';
  message: string;
  time: string;
}

const activities: Activity[] = [
  { id: 1, type: 'order', message: 'New order #7291 placed by Sarah Johnson', time: '2 min ago' },
  { id: 2, type: 'signup', message: 'New customer registered: Alex Turner', time: '15 min ago' },
  { id: 3, type: 'payment', message: 'Payment of $1,199 received from Michael Chen', time: '32 min ago' },
  { id: 4, type: 'review', message: '5-star review on MacBook Pro 14"', time: '1 hour ago' },
  { id: 5, type: 'shipping', message: 'Order #7285 shipped via FedEx Express', time: '2 hours ago' },
  { id: 6, type: 'alert', message: 'Low stock alert: AirPods Pro (12 remaining)', time: '3 hours ago' },
  { id: 7, type: 'order', message: 'New order #7284 placed by David Park', time: '4 hours ago' },
  { id: 8, type: 'payment', message: 'Refund of $249 processed for order #7280', time: '5 hours ago' },
];

const iconMap = {
  order: { icon: ShoppingCart, color: 'bg-indigo-100 text-indigo-600' },
  signup: { icon: UserPlus, color: 'bg-emerald-100 text-emerald-600' },
  payment: { icon: CreditCard, color: 'bg-blue-100 text-blue-600' },
  review: { icon: Star, color: 'bg-amber-100 text-amber-600' },
  shipping: { icon: Package, color: 'bg-purple-100 text-purple-600' },
  alert: { icon: AlertCircle, color: 'bg-red-100 text-red-600' },
};

export default function ActivityFeed() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
          <p className="text-sm text-gray-500 mt-0.5">Latest updates and events</p>
        </div>
      </div>
      <div className="space-y-4">
        {activities.map((activity) => {
          const { icon: Icon, color } = iconMap[activity.type];
          return (
            <div key={activity.id} className="flex items-start gap-3">
              <div className={`p-2 rounded-lg ${color} shrink-0`}>
                <Icon className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-700 leading-relaxed">{activity.message}</p>
                <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
