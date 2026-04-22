import { MapPin, MoreHorizontal, Plus, TrendingUp } from 'lucide-react';
import { currentUser, communities, trendingCategories } from '../mockData';

interface SidebarProps {
  onProfileClick: () => void;
  activeView: string;
}

export default function Sidebar({ onProfileClick, activeView }: SidebarProps) {
  return (
    <aside className="w-[320px] pb-8 space-y-6 shrink-0 overflow-y-auto no-scrollbar hidden xl:block">
      {/* Profile Card */}
      <div 
        onClick={onProfileClick}
        className={`glass-card p-6 relative overflow-hidden group cursor-pointer transition-all duration-300 ${activeView === 'profile' ? 'ring-2 ring-brand-yellow/50' : 'hover:ring-1 hover:ring-white/10'}`}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[180px] h-[180px] opacity-10">
           {/* Concentric Circles Background Pattern */}
          {[1, 2, 3, 4, 5].map((i) => (
            <div 
              key={i} 
              className="absolute inset-0 border-4 border-brand-yellow rounded-full" 
              style={{ padding: `${i * 12}px`, opacity: 1 - i * 0.15 }}
            />
          ))}
        </div>

        <div className="flex justify-end mb-4">
          <button className="text-white/20 hover:text-white transition-colors">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>

        <div className="relative flex flex-col items-center text-center">
          <div className="relative mb-4">
            <div className="absolute inset-0 bg-brand-yellow blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
            <img 
              src={currentUser.avatar} 
              alt={currentUser.name} 
              className="relative w-24 h-24 rounded-3xl object-cover border-4 border-matte-black shadow-2xl" 
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </div>
          
          <h2 className="text-xl font-bold tracking-tight mb-1">{currentUser.name}</h2>
          <p className="text-sm text-white/40 mb-4">{currentUser.handle}</p>
          
          <div className="flex items-center justify-center gap-8 mb-6">
            <div className="flex flex-col items-center">
              <span className="text-lg font-bold">{currentUser.followers}</span>
              <span className="text-[10px] text-white/40 uppercase tracking-widest leading-none">Followers</span>
            </div>
            <div className="w-px h-6 bg-white/5" />
            <div className="flex flex-col items-center">
              <span className="text-lg font-bold">{currentUser.following}</span>
              <span className="text-[10px] text-white/40 uppercase tracking-widest leading-none">Following</span>
            </div>
          </div>

          <p className="text-sm text-white/60 leading-relaxed mb-6 px-4">
            {currentUser.bio}
          </p>

          <button 
            onClick={onProfileClick}
            className="w-full btn-secondary text-sm"
          >
            My Profile
          </button>
        </div>
      </div>

      {/* Trending Topics */}
      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40">Trending Topics</h3>
          <TrendingUp className="w-4 h-4 text-brand-yellow/50" />
        </div>
        <div className="space-y-4">
          {trendingCategories.map((topic) => (
            <div key={topic.id} className="group cursor-pointer">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{topic.icon}</span>
                  <span className="text-sm font-medium text-white/90 group-hover:text-brand-yellow transition-colors">{topic.name}</span>
                </div>
                <MoreHorizontal className="w-4 h-4 text-white/10 group-hover:text-white/40" />
              </div>
              <span className="text-[11px] text-white/20 pl-7">{topic.count}</span>
            </div>
          ))}
        </div>
        <button className="w-full mt-6 py-2 text-xs font-medium text-white/40 hover:text-white border border-white/5 hover:border-white/10 rounded-xl transition-all">
          Show more
        </button>
      </div>

      {/* Communities */}
      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40">Communities</h3>
          <button className="text-white/20 hover:text-white transition-colors">
            <Plus className="w-4 h-4" />
          </button>
        </div>
        
        <div className="space-y-4">
          {communities.map((community) => (
            <div key={community.id} className="flex items-center gap-3 group cursor-pointer">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-white/5 flex items-center justify-center relative">
                <img 
                  src={community.image} 
                  alt={community.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform" 
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-white/90 group-hover:text-brand-yellow transition-colors">{community.name}</span>
                <span className="text-[11px] text-white/40 flex items-center gap-1.5">
                  <div className="w-1 h-1 bg-brand-yellow rounded-full" />
                  {community.membersIn} your friends are in
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
