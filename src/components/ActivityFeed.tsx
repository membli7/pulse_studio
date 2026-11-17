import { Heart, MessageCircle, UserPlus, Share2, Eye, TrendingUp, Send, AlertTriangle } from 'lucide-react';

interface Activity {
  id: number;
  type: 'like' | 'comment' | 'follow' | 'share' | 'view' | 'trending' | 'posted' | 'alert';
  message: string;
  platform: 'Facebook' | 'Instagram' | 'TikTok';
  time: string;
}

const activities: Activity[] = [
  { id: 1, type: 'posted', message: 'Post published successfully on Instagram', platform: 'Instagram', time: '2 min ago' },
  { id: 2, type: 'trending', message: 'Your TikTok video is trending! 50K views in 2 hours', platform: 'TikTok', time: '15 min ago' },
  { id: 3, type: 'follow', message: 'Gained 120 new followers on Instagram', platform: 'Instagram', time: '32 min ago' },
  { id: 4, type: 'like', message: 'Post received 500+ likes on Facebook', platform: 'Facebook', time: '1 hour ago' },
  { id: 5, type: 'comment', message: '15 new comments on your latest TikTok', platform: 'TikTok', time: '1.5 hours ago' },
  { id: 6, type: 'view', message: 'Instagram story reached 5K views', platform: 'Instagram', time: '2 hours ago' },
  { id: 7, type: 'share', message: 'Post shared 45 times on Facebook', platform: 'Facebook', time: '3 hours ago' },
  { id: 8, type: 'alert', message: 'Engagement rate dropped below average on TikTok', platform: 'TikTok', time: '4 hours ago' },
  { id: 9, type: 'follow', message: 'New milestone: 90K followers on TikTok!', platform: 'TikTok', time: '5 hours ago' },
];

const iconMap = {
  like: { icon: Heart, color: 'bg-red-100 text-red-500' },
  comment: { icon: MessageCircle, color: 'bg-blue-100 text-blue-500' },
  follow: { icon: UserPlus, color: 'bg-emerald-100 text-emerald-500' },
  share: { icon: Share2, color: 'bg-purple-100 text-purple-500' },
  view: { icon: Eye, color: 'bg-amber-100 text-amber-500' },
  trending: { icon: TrendingUp, color: 'bg-orange-100 text-orange-500' },
  posted: { icon: Send, color: 'bg-violet-100 text-violet-500' },
  alert: { icon: AlertTriangle, color: 'bg-red-100 text-red-500' },
};

const platformDot = {
  Facebook: 'bg-blue-500',
  Instagram: 'bg-pink-500',
  TikTok: 'bg-gray-900',
};

export default function ActivityFeed() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Activity Feed</h3>
          <p className="text-sm text-gray-500 mt-0.5">Latest events across platforms</p>
        </div>
      </div>
      <div className="space-y-4 max-h-[480px] overflow-y-auto pr-1">
        {activities.map((activity) => {
          const { icon: Icon, color } = iconMap[activity.type];
          return (
            <div key={activity.id} className="flex items-start gap-3">
              <div className={`p-2 rounded-lg ${color} shrink-0`}>
                <Icon className="w-3.5 h-3.5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-700 leading-relaxed">{activity.message}</p>
                <div className="flex items-center gap-2 mt-1.5">
                  <div className={`w-2 h-2 rounded-full ${platformDot[activity.platform]}`}></div>
                  <span className="text-xs text-gray-400">{activity.platform}</span>
                  <span className="text-xs text-gray-300">•</span>
                  <span className="text-xs text-gray-400">{activity.time}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
