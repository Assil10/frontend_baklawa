import { followingUsers, suggestedUsers } from '../mockData';
import { motion } from 'motion/react';
import { ShieldCheck, UserPlus, MoreHorizontal } from 'lucide-react';

export default function RightPanel() {
  return (
    <aside className="w-[360px] pb-8 space-y-6 shrink-0 overflow-y-auto no-scrollbar hidden 2xl:block">
      {/* Following Section */}
      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold">Following</h3>
          <button className="text-white/20 hover:text-white transition-colors">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4">
          {followingUsers.map((user, idx) => (
            <motion.div 
              key={user.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="relative shrink-0">
                  <img 
                    src={user.avatar} 
                    alt={user.name} 
                    className="w-10 h-10 rounded-xl object-cover ring-2 ring-transparent group-hover:ring-brand-yellow/30 transition-all" 
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-matte-black ${user.status === 'Online' ? 'bg-emerald-500' : 'bg-white/20'}`} />
                </div>
                <div className="flex flex-col leading-tight">
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-semibold text-white/90 group-hover:text-white">{user.name}</span>
                    {user.isVerified && <ShieldCheck className="w-3 h-3 text-brand-yellow" />}
                  </div>
                  <span className="text-[11px] text-white/40">{user.status}</span>
                </div>
              </div>
              <button className="p-2 text-white/20 hover:text-white transition-colors">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
        
        <button className="w-full mt-6 py-2.5 text-xs font-semibold text-brand-yellow bg-brand-yellow/5 hover:bg-brand-yellow/10 border border-brand-yellow/10 rounded-xl transition-all">
          View all following
        </button>
      </div>

      {/* Suggested People Section */}
      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold">Suggested for you</h3>
          <button className="text-brand-yellow hover:underline text-xs font-medium">See all</button>
        </div>

        <div className="space-y-5">
          {suggestedUsers.map((user, idx) => (
            <motion.div 
              key={user.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="relative shrink-0">
                  <img 
                    src={user.avatar} 
                    alt={user.name} 
                    className="w-11 h-11 rounded-2xl object-cover" 
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col leading-tight">
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-semibold">{user.name}</span>
                    {user.isVerified && <ShieldCheck className="w-3 h-3 text-brand-yellow" />}
                  </div>
                  <span className="text-[11px] text-white/40">{user.mutualFriends} mutual friends</span>
                </div>
              </div>
              <button className="p-2.5 bg-brand-yellow/10 hover:bg-brand-yellow/20 text-brand-yellow rounded-xl transition-all group">
                <UserPlus className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </aside>
  );
}
