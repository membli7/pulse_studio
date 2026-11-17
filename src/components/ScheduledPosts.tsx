import { Clock, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

interface ScheduledPost {
  id: number;
  platform: 'Facebook' | 'Instagram' | 'TikTok';
  content: string;
  scheduledTime: string;
  scheduledDate: string;
  status: 'scheduled' | 'published' | 'failed' | 'publishing';
  media?: string;
}

const posts: ScheduledPost[] = [
  {
    id: 1,
    platform: 'Instagram',
    content: '🌟 New product launch! Check out our latest collection...',
    scheduledTime: '2:00 PM',
    scheduledDate: 'Today',
    status: 'scheduled',
    media: '📸',
  },
  {
    id: 2,
    platform: 'TikTok',
    content: 'Behind the scenes of our latest photoshoot 🎬',
    scheduledTime: '4:30 PM',
    scheduledDate: 'Today',
    status: 'scheduled',
    media: '🎥',
  },
  {
    id: 3,
    platform: 'Facebook',
    content: 'Join us for a live Q&A session this Friday at 3 PM!',
    scheduledTime: '10:00 AM',
    scheduledDate: 'Tomorrow',
    status: 'scheduled',
    media: '📝',
  },
  {
    id: 4,
    platform: 'Instagram',
    content: 'Customer spotlight: How @sarah uses our products daily',
    scheduledTime: '12:00 PM',
    scheduledDate: 'Tomorrow',
    status: 'published',
    media: '📸',
  },
  {
    id: 5,
    platform: 'TikTok',
    content: 'Quick tutorial: 5 ways to style our accessories ✨',
    scheduledTime: '6:00 PM',
    scheduledDate: 'Jan 30',
    status: 'publishing',
    media: '🎥',
  },
  {
    id: 6,
    platform: 'Facebook',
    content: 'Weekly recap: Top moments from this week!',
    scheduledTime: '9:00 AM',
    scheduledDate: 'Jan 30',
    status: 'failed',
    media: '📝',
  },
];

const platformBadge = {
  Facebook: 'bg-blue-100 text-blue-700',
  Instagram: 'bg-pink-100 text-pink-700',
  TikTok: 'bg-gray-100 text-gray-700',
};

const statusConfig = {
  scheduled: { icon: Clock, color: 'text-amber-500', bg: 'bg-amber-50', label: 'Scheduled' },
  published: { icon: CheckCircle2, color: 'text-emerald-500', bg: 'bg-emerald-50', label: 'Published' },
  failed: { icon: AlertCircle, color: 'text-red-500', bg: 'bg-red-50', label: 'Failed' },
  publishing: { icon: Loader2, color: 'text-blue-500', bg: 'bg-blue-50', label: 'Publishing...' },
};

export default function ScheduledPosts() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Scheduled Posts</h3>
          <p className="text-sm text-gray-500 mt-0.5">Upcoming and recent posts</p>
        </div>
        <button className="text-sm font-medium text-violet-600 hover:text-violet-700 transition-colors">
          View All →
        </button>
      </div>
      <div className="divide-y divide-gray-50">
        {posts.map((post) => {
          const status = statusConfig[post.status];
          const StatusIcon = status.icon;
          return (
            <div key={post.id} className="px-6 py-4 hover:bg-gray-50/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="text-2xl shrink-0 mt-0.5">{post.media}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${platformBadge[post.platform]}`}>
                      {post.platform}
                    </span>
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium ${status.bg} ${status.color}`}>
                      <StatusIcon className={`w-3 h-3 ${post.status === 'publishing' ? 'animate-spin' : ''}`} />
                      {status.label}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 truncate">{post.content}</p>
                  <p className="text-xs text-gray-400 mt-1">
                    {post.scheduledDate} at {post.scheduledTime}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
