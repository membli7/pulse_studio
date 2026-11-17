import { useState } from 'react';
import { Calendar, Clock, Plus, Filter, ChevronLeft, ChevronRight } from 'lucide-react';

interface ScheduledPost {
  id: number;
  platform: 'Facebook' | 'Instagram' | 'TikTok';
  content: string;
  scheduledTime: string;
  scheduledDate: string;
  status: 'scheduled' | 'published' | 'failed';
  media?: string;
}

const posts: ScheduledPost[] = [
  { id: 1, platform: 'Instagram', content: '🌟 New product launch! Check out our latest collection...', scheduledTime: '2:00 PM', scheduledDate: '2026-01-28', status: 'scheduled', media: '📸' },
  { id: 2, platform: 'TikTok', content: 'Behind the scenes of our latest photoshoot 🎬', scheduledTime: '4:30 PM', scheduledDate: '2026-01-28', status: 'scheduled', media: '🎥' },
  { id: 3, platform: 'Facebook', content: 'Join us for a live Q&A session this Friday at 3 PM!', scheduledTime: '10:00 AM', scheduledDate: '2026-01-29', status: 'scheduled', media: '📝' },
  { id: 4, platform: 'Instagram', content: 'Customer spotlight: How @sarah uses our products daily', scheduledTime: '12:00 PM', scheduledDate: '2026-01-29', status: 'published', media: '📸' },
  { id: 5, platform: 'TikTok', content: 'Quick tutorial: 5 ways to style our accessories ✨', scheduledTime: '6:00 PM', scheduledDate: '2026-01-30', status: 'scheduled', media: '🎥' },
  { id: 6, platform: 'Facebook', content: 'Weekly recap: Top moments from this week!', scheduledTime: '9:00 AM', scheduledDate: '2026-01-30', status: 'failed', media: '📝' },
  { id: 7, platform: 'Instagram', content: 'Weekend vibes: Our team enjoying the sunny day ☀️', scheduledTime: '11:00 AM', scheduledDate: '2026-01-31', status: 'scheduled', media: '📸' },
  { id: 8, platform: 'TikTok', content: 'Challenge accepted! Trying the latest trend 💃', scheduledTime: '3:00 PM', scheduledDate: '2026-01-31', status: 'scheduled', media: '🎥' },
];

const platformBadge = {
  Facebook: 'bg-blue-100 text-blue-700',
  Instagram: 'bg-pink-100 text-pink-700',
  TikTok: 'bg-gray-100 text-gray-700',
};

const statusBadge = {
  scheduled: 'bg-amber-100 text-amber-700',
  published: 'bg-emerald-100 text-emerald-700',
  failed: 'bg-red-100 text-red-700',
};

export default function SchedulePage() {
  const [filter, setFilter] = useState<'all' | 'scheduled' | 'published' | 'failed'>('all');
  const [platformFilter, setPlatformFilter] = useState<'all' | 'Facebook' | 'Instagram' | 'TikTok'>('all');

  const filteredPosts = posts.filter(post => {
    if (filter !== 'all' && post.status !== filter) return false;
    if (platformFilter !== 'all' && post.platform !== platformFilter) return false;
    return true;
  });

  const groupedByDate = filteredPosts.reduce((acc, post) => {
    if (!acc[post.scheduledDate]) {
      acc[post.scheduledDate] = [];
    }
    acc[post.scheduledDate].push(post);
    return acc;
  }, {} as Record<string, ScheduledPost[]>);

  return (
    <main className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Schedule Posts</h2>
          <p className="text-sm text-gray-500 mt-1">Manage and schedule your social media posts</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-500 to-pink-500 text-white rounded-lg text-sm font-medium hover:from-violet-600 hover:to-pink-600 transition-all shadow-sm">
          <Plus className="w-4 h-4" />
          Schedule New Post
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-gray-200 p-4">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-400" />
            <span className="text-sm font-medium text-gray-700">Status:</span>
          </div>
          <div className="flex items-center gap-2">
            {(['all', 'scheduled', 'published', 'failed'] as const).map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  filter === status
                    ? 'bg-violet-100 text-violet-700'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 ml-4">
            <span className="text-sm font-medium text-gray-700">Platform:</span>
            <div className="flex items-center gap-2">
              {(['all', 'Facebook', 'Instagram', 'TikTok'] as const).map((platform) => (
                <button
                  key={platform}
                  onClick={() => setPlatformFilter(platform)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    platformFilter === platform
                      ? 'bg-violet-100 text-violet-700'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {platform === 'all' ? 'All' : platform}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Calendar View */}
      <div className="space-y-6">
        {Object.entries(groupedByDate).map(([date, datePosts]) => (
          <div key={date} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-500" />
                <h3 className="text-sm font-semibold text-gray-900">
                  {new Date(date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </h3>
                <span className="ml-auto text-xs text-gray-500">{datePosts.length} post{datePosts.length !== 1 ? 's' : ''}</span>
              </div>
            </div>
            <div className="divide-y divide-gray-100">
              {datePosts.map((post) => (
                <div key={post.id} className="px-6 py-4 hover:bg-gray-50/50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="text-2xl shrink-0 mt-0.5">{post.media}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${platformBadge[post.platform]}`}>
                          {post.platform}
                        </span>
                        <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${statusBadge[post.status]}`}>
                          {post.status.charAt(0).toUpperCase() + post.status.slice(1)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700">{post.content}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Clock className="w-3.5 h-3.5 text-gray-400" />
                        <span className="text-xs text-gray-500">{post.scheduledTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all">
                        Edit
                      </button>
                      <button className="px-3 py-1.5 text-xs font-medium text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-all">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
