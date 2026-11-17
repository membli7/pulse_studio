import { TrendingUp, TrendingDown, Heart, Eye, Users, MessageCircle } from 'lucide-react';

interface PlatformData {
  name: string;
  handle: string;
  color: string;
  bgColor: string;
  borderColor: string;
  iconBg: string;
  followers: string;
  followersChange: number;
  likes: string;
  views: string;
  comments: string;
  newFollows: string;
  logo: string;
}

const platforms: PlatformData[] = [
  {
    name: 'Facebook',
    handle: '@yourbrand',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    iconBg: 'bg-blue-100',
    followers: '24.5K',
    followersChange: 3.2,
    likes: '8.2K',
    views: '145K',
    comments: '1.4K',
    newFollows: '+342',
    logo: 'f',
  },
  {
    name: 'Instagram',
    handle: '@yourbrand',
    color: 'text-pink-600',
    bgColor: 'bg-pink-50',
    borderColor: 'border-pink-200',
    iconBg: 'bg-gradient-to-br from-pink-100 to-purple-100',
    followers: '48.2K',
    followersChange: 7.8,
    likes: '22.1K',
    views: '312K',
    comments: '3.8K',
    newFollows: '+1,205',
    logo: 'ig',
  },
  {
    name: 'TikTok',
    handle: '@yourbrand',
    color: 'text-gray-900',
    bgColor: 'bg-gray-50',
    borderColor: 'border-gray-200',
    iconBg: 'bg-gray-100',
    followers: '89.7K',
    followersChange: 12.4,
    likes: '156K',
    views: '2.1M',
    comments: '8.9K',
    newFollows: '+4,830',
    logo: 'tk',
  },
];

function PlatformLogo({ platform }: { platform: string }) {
  if (platform === 'Facebook') {
    return (
      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-lg">f</span>
      </div>
    );
  }
  if (platform === 'Instagram') {
    return (
      <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      </div>
    );
  }
  return (
    <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
      <span className="text-white font-bold text-xs">TikTok</span>
    </div>
  );
}

export default function PlatformCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {platforms.map((platform) => (
        <div
          key={platform.name}
          className={`bg-white rounded-xl border border-gray-200 p-5 hover:shadow-lg hover:shadow-gray-100 transition-all duration-300`}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <PlatformLogo platform={platform.name} />
              <div>
                <h3 className="text-sm font-semibold text-gray-900">{platform.name}</h3>
                <p className="text-xs text-gray-500">{platform.handle}</p>
              </div>
            </div>
            <div className={`flex items-center gap-1 px-2 py-1 rounded-full ${platform.followersChange >= 0 ? 'bg-emerald-50' : 'bg-red-50'}`}>
              {platform.followersChange >= 0 ? (
                <TrendingUp className="w-3 h-3 text-emerald-600" />
              ) : (
                <TrendingDown className="w-3 h-3 text-red-600" />
              )}
              <span className={`text-xs font-semibold ${platform.followersChange >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                {platform.followersChange >= 0 ? '+' : ''}{platform.followersChange}%
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="flex items-center gap-1.5 mb-1">
                <Users className="w-3.5 h-3.5 text-gray-400" />
                <span className="text-xs text-gray-500">Followers</span>
              </div>
              <p className="text-lg font-bold text-gray-900">{platform.followers}</p>
              <p className="text-xs text-emerald-600 font-medium">{platform.newFollows} this month</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="flex items-center gap-1.5 mb-1">
                <Eye className="w-3.5 h-3.5 text-gray-400" />
                <span className="text-xs text-gray-500">Views</span>
              </div>
              <p className="text-lg font-bold text-gray-900">{platform.views}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="flex items-center gap-1.5 mb-1">
                <Heart className="w-3.5 h-3.5 text-gray-400" />
                <span className="text-xs text-gray-500">Likes</span>
              </div>
              <p className="text-lg font-bold text-gray-900">{platform.likes}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="flex items-center gap-1.5 mb-1">
                <MessageCircle className="w-3.5 h-3.5 text-gray-400" />
                <span className="text-xs text-gray-500">Comments</span>
              </div>
              <p className="text-lg font-bold text-gray-900">{platform.comments}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
