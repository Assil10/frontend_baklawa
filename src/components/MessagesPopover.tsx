import { motion } from 'motion/react';
import { initialMessages } from '../mockData';
import { Search, Plus, MoreHorizontal } from 'lucide-react';

interface MessagesPopoverProps {
  onClose: () => void;
}

export default function MessagesPopover({ onClose }: MessagesPopoverProps) {
  return (
    <>
      <div className="fixed inset-0 z-40" onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -10 }}
        className="absolute top-full right-0 mt-3 w-[360px] bg-deep-charcoal border border-white/5 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-2xl z-50 overflow-hidden"
      >
        <div className="p-6 border-b border-white/5 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-white">Direct Messages</h3>
            <div className="flex items-center gap-2">
                <button className="p-2 text-white/40 hover:text-white hover:bg-white/5 rounded-xl transition-all">
                   <Plus className="w-5 h-5" />
                </button>
                <button className="p-2 text-white/40 hover:text-white hover:bg-white/5 rounded-xl transition-all">
                   <MoreHorizontal className="w-5 h-5" />
                </button>
            </div>
          </div>
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-brand-yellow transition-colors" />
            <input 
              type="text" 
              placeholder="Search messages..." 
              className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-xs focus:outline-none focus:border-brand-yellow/50 transition-all placeholder:text-white/20"
            />
          </div>
        </div>

        <div className="max-h-[400px] overflow-y-auto custom-scrollbar">
          {initialMessages.length > 0 ? (
            initialMessages.map((msg) => (
              <div 
                key={msg.id} 
                className="p-5 flex gap-4 hover:bg-white/[0.03] transition-colors cursor-pointer border-b border-white/5 last:border-none group"
              >
                <div className="relative shrink-0">
                  <img src={msg.avatar} className="w-12 h-12 rounded-2xl object-cover" alt="" referrerPolicy="no-referrer" />
                  <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-deep-charcoal" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-sm font-bold text-white truncate">{msg.sender}</span>
                    <span className="text-[10px] text-white/30 font-medium">{msg.time}</span>
                  </div>
                  <p className={`text-xs truncate ${msg.unread ? 'text-white/80 font-medium' : 'text-white/40'}`}>
                    {msg.text}
                  </p>
                </div>
                {msg.unread && (
                    <div className="shrink-0 flex items-center">
                        <div className="w-2 h-2 bg-brand-yellow rounded-full" />
                    </div>
                )}
              </div>
            ))
          ) : (
            <div className="p-12 text-center">
              <p className="text-white/30 text-sm italic">No messages yet</p>
            </div>
          )}
        </div>

        <div className="p-4 bg-white/[0.01] text-center border-t border-white/5">
           <button className="text-[12px] font-bold text-white/60 hover:text-white uppercase tracking-widest transition-colors">Open Full Inbox</button>
        </div>
      </motion.div>
    </>
  );
}
