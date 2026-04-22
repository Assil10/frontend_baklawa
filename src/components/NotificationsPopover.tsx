import { motion } from 'motion/react';
import { initialNotifications } from '../mockData';
import { Check, MoreHorizontal } from 'lucide-react';

interface NotificationsPopoverProps {
  onClose: () => void;
}

export default function NotificationsPopover({ onClose }: NotificationsPopoverProps) {
  return (
    <>
      <div className="fixed inset-0 z-40" onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -10 }}
        className="absolute top-full right-0 mt-3 w-[380px] bg-deep-charcoal border border-white/5 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-2xl z-50 overflow-hidden"
      >
        <div className="p-6 border-b border-white/5 flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">Notifications</h3>
          <div className="flex items-center gap-3">
             <button className="text-[11px] font-medium text-brand-yellow hover:text-white transition-colors">Mark all as read</button>
             <button className="text-white/30 hover:text-white">
                <MoreHorizontal className="w-4 h-4" />
             </button>
          </div>
        </div>

        <div className="max-h-[400px] overflow-y-auto custom-scrollbar">
          {initialNotifications.length > 0 ? (
            initialNotifications.map((notification) => (
              <div 
                key={notification.id} 
                className={`p-5 flex gap-4 hover:bg-white/[0.03] transition-colors cursor-pointer border-b border-white/5 last:border-none group ${notification.unread ? 'bg-white/[0.01]' : ''}`}
              >
                <div className="relative shrink-0">
                  <img src={notification.avatar} className="w-12 h-12 rounded-2xl object-cover" alt="" referrerPolicy="no-referrer" />
                  {notification.unread && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-brand-yellow rounded-full border-2 border-deep-charcoal" />
                  )}
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm text-white/90 leading-snug">
                    <span className="font-bold text-white">{notification.user}</span>{' '}
                    <span className="text-white/60">{notification.action}</span>{' '}
                    {notification.target && <span className="font-medium text-brand-yellow">{notification.target}</span>}
                  </p>
                  <span className="text-[11px] text-white/30 font-medium">{notification.time}</span>
                </div>
              </div>
            ))
          ) : (
            <div className="p-12 text-center">
              <p className="text-white/30 text-sm italic">No notifications yet</p>
            </div>
          )}
        </div>

        <div className="p-4 bg-white/[0.01] text-center border-t border-white/5">
           <button className="text-[12px] font-bold text-white/60 hover:text-white uppercase tracking-widest transition-colors">View All Notifications</button>
        </div>
      </motion.div>
    </>
  );
}
