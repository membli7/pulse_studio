import { LayoutDashboard, CalendarPlus, PenSquare, BarChart3, Users, Settings, HelpCircle, LogOut, Bell, MessageSquare, Image } from 'lucide-react';

interface SidebarProps {
  activeItem: string;
  onItemClick: (item: string) => void;
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'schedule', label: 'Schedule Posts', icon: CalendarPlus },
  { id: 'create', label: 'Create Post', icon: PenSquare },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'accounts', label: 'Accounts', icon: Users },
  { id: 'media', label: 'Media Library', icon: Image },
  { id: 'comments', label: 'Comments', icon: MessageSquare },
];

const bottomItems = [
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'settings', label: 'Settings', icon: Settings },
  { id: 'help', label: 'Help Center', icon: HelpCircle },
];

export default function Sidebar({ activeItem, onItemClick }: SidebarProps) {
  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 flex flex-col z-10">
      {/* Logo */}
      <div className="px-6 py-5 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gradient-to-br from-violet-500 to-pink-500 rounded-lg flex items-center justify-center">
            <PenSquare className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">SocialHub</span>
        </div>
      </div>

      {/* Main Menu */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Menu</p>
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onItemClick(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 ${
                isActive
                  ? 'bg-violet-50 text-violet-700'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-violet-600' : 'text-gray-400'}`} />
              {item.label}
              {item.id === 'comments' && (
                <span className="ml-auto bg-red-100 text-red-600 text-xs font-semibold px-2 py-0.5 rounded-full">
                  12
                </span>
              )}
              {item.id === 'schedule' && (
                <span className="ml-auto bg-violet-100 text-violet-600 text-xs font-semibold px-2 py-0.5 rounded-full">
                  8
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Bottom Menu */}
      <div className="px-3 py-4 border-t border-gray-100 space-y-1">
        {bottomItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onItemClick(item.id)}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all duration-150"
            >
              <Icon className="w-5 h-5 text-gray-400" />
              {item.label}
            </button>
          );
        })}
      </div>

      {/* User Profile */}
      <div className="px-3 py-4 border-t border-gray-100">
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="w-9 h-9 bg-gradient-to-br from-violet-400 to-pink-500 rounded-full flex items-center justify-center">
            <span className="text-sm font-bold text-white">SM</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">Social Manager</p>
            <p className="text-xs text-gray-500 truncate">admin@socialhub.com</p>
          </div>
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
