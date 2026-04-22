import { X, Heart, MessageCircle, Share2, ShieldCheck, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { currentUser } from '../mockData';

interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
}

export default function PostModal({ isOpen, onClose, imageUrl }: PostModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-10">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/95 backdrop-blur-3xl"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-6xl aspect-[16/9] bg-deep-charcoal rounded-[40px] overflow-hidden border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.8)] flex flex-col md:flex-row"
          >
            {/* Image Section */}
            <div className="flex-1 bg-black relative group overflow-hidden">
                <img 
                    src={imageUrl} 
                    alt="Expanded post" 
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                />
                <button 
                  onClick={onClose}
                  className="absolute top-6 left-6 w-12 h-12 bg-black/50 backdrop-blur-md rounded-2xl flex items-center justify-center text-white/50 hover:text-white transition-all border border-white/10"
                >
                  <X className="w-6 h-6" />
                </button>
            </div>

            {/* Content/Comments Section */}
            <div className="w-full md:w-[400px] flex flex-col border-l border-white/5">
                <div className="p-6 border-b border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <img src={currentUser.avatar} alt="" className="w-10 h-10 rounded-2xl object-cover" referrerPolicy="no-referrer" />
                        <div className="flex flex-col leading-tight">
                            <div className="flex items-center gap-1">
                                <span className="text-sm font-bold">{currentUser.name}</span>
                                <ShieldCheck className="w-3 h-3 text-brand-yellow" />
                            </div>
                            <span className="text-[11px] text-white/40">Posting details</span>
                        </div>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-6 no-scrollbar">
                    {/* Mock Comments */}
                    <div className="flex gap-3">
                        <img src="https://picsum.photos/seed/user1/100/100" className="w-8 h-8 rounded-xl object-cover" alt="" referrerPolicy="no-referrer" />
                        <div className="flex-1 space-y-1">
                            <div className="bg-white/5 p-3 rounded-2xl rounded-tl-none">
                                <p className="text-xs text-white/80 leading-relaxed font-medium mb-1">Vitaliy Akterskiy</p>
                                <p className="text-xs text-white/60 leading-relaxed">This visual aesthetic is absolutely perfect. The colors and contrast are spot on! 🚀</p>
                            </div>
                            <span className="text-[10px] text-white/20 pl-2">2 hours ago</span>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <img src="https://picsum.photos/seed/user2/100/100" className="w-8 h-8 rounded-xl object-cover" alt="" referrerPolicy="no-referrer" />
                        <div className="flex-1 space-y-1">
                            <div className="bg-white/5 p-3 rounded-2xl rounded-tl-none">
                                <p className="text-xs text-white/80 leading-relaxed font-medium mb-1">Sarah Wilson</p>
                                <p className="text-xs text-white/60 leading-relaxed">How did you achieve that glass effect? It looks so crisp!</p>
                            </div>
                            <span className="text-[10px] text-white/20 pl-2">45 mins ago</span>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <img src="https://picsum.photos/seed/user3/100/100" className="w-8 h-8 rounded-xl object-cover" alt="" referrerPolicy="no-referrer" />
                        <div className="flex-1 space-y-1">
                            <div className="bg-white/5 p-3 rounded-2xl rounded-tl-none">
                                <p className="text-xs text-white/80 leading-relaxed font-medium mb-1">Alex Rivera</p>
                                <p className="text-xs text-white/60 leading-relaxed">Beautiful work as always, Evgen!</p>
                            </div>
                            <span className="text-[10px] text-white/20 pl-2">12 mins ago</span>
                        </div>
                    </div>
                </div>

                <div className="p-6 border-t border-white/5 space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="flex gap-4">
                            <Heart className="w-5 h-5 text-white/40 hover:text-brand-yellow cursor-pointer transition-colors" />
                            <MessageCircle className="w-5 h-5 text-white/40 hover:text-white cursor-pointer transition-colors" />
                            <Share2 className="w-5 h-5 text-white/40 hover:text-white cursor-pointer transition-colors" />
                        </div>
                    </div>
                    
                    <div className="relative">
                        <input 
                            type="text" 
                            placeholder="Add a comment..."
                            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-4 pr-12 text-xs focus:outline-none focus:border-brand-yellow/50 transition-all"
                        />
                        <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-brand-yellow hover:scale-110 transition-transform">
                            <Send className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
