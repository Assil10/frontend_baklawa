import { Image as ImageIcon, Video, PieChart, Calendar, MoreHorizontal, Heart, MessageCircle, Share2, ShieldCheck } from 'lucide-react';
import { stories, posts, currentUser } from '../mockData';
import { motion } from 'motion/react';
import PostItem from './Post';
import PostModal from './PostModal';
import { useState } from 'react';

export default function Feed() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (url: string) => {
    setSelectedImage(url);
  };

  return (
    <div className="flex-1 pb-8 space-y-6 max-w-2xl mx-auto w-full px-0 sm:px-4">
      <PostModal 
        isOpen={!!selectedImage} 
        onClose={() => setSelectedImage(null)} 
        imageUrl={selectedImage || ''} 
      />

      {/* Stories */}
      <div className="flex items-center gap-4 overflow-x-auto no-scrollbar pb-2 px-4 sm:px-0 scroll-smooth touch-pan-x">
        {stories.map((story, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -2 }}
            className="flex flex-col items-center gap-2 group cursor-pointer shrink-0"
          >
            <div className="relative p-1 rounded-[2.5rem] bg-gradient-to-tr from-brand-yellow via-brand-yellow/50 to-transparent">
              <div className="p-0.5 rounded-[2.2rem] bg-deep-charcoal shrink-0">
                <img 
                  src={story.avatar} 
                  alt={story.name} 
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-[2rem] object-cover group-hover:scale-105 transition-transform" 
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
            </div>
            <span className="text-[11px] font-medium text-white/50 group-hover:text-white transition-colors">{story.name}</span>
          </motion.div>
        ))}
      </div>

      {/* Post Creation */}
      <div className="glass-card p-4 space-y-4">
        <div className="flex items-center gap-3 sm:gap-4">
          <img 
            src={currentUser.avatar} 
            alt="Me" 
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl object-cover ring-2 ring-white/5 shrink-0" 
            referrerPolicy="no-referrer"
            loading="lazy"
          />
          <div className="flex-1 bg-white/5 rounded-2xl p-3 border border-white/5">
            <input 
              type="text" 
              placeholder="Tell your friends about your thoughts..." 
              className="bg-transparent w-full text-sm outline-none placeholder:text-white/20"
            />
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-2 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-1 shrink-0">
            <button className="flex items-center gap-2 px-3 sm:px-4 py-2.5 rounded-xl hover:bg-white/5 transition-all group shrink-0">
              <ImageIcon className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 group-hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
              <span className="text-[11px] sm:text-xs font-medium text-white/60">Photo</span>
            </button>
            <button className="flex items-center gap-2 px-3 sm:px-4 py-2.5 rounded-xl hover:bg-white/5 transition-all group shrink-0">
              <Video className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 group-hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]" />
              <span className="text-[11px] sm:text-xs font-medium text-white/60">Video</span>
            </button>
            <button className="hidden sm:flex items-center gap-2 px-3 sm:px-4 py-2.5 rounded-xl hover:bg-white/5 transition-all group shrink-0">
              <PieChart className="w-4 h-4 sm:w-5 sm:h-5 text-rose-400 group-hover:drop-shadow-[0_0_8px_rgba(251,113,133,0.5)]" />
              <span className="text-[11px] sm:text-xs font-medium text-white/60">Poll</span>
            </button>
            <button className="hidden md:flex items-center gap-2 px-3 sm:px-4 py-2.5 rounded-xl hover:bg-white/5 transition-all group shrink-0">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400 group-hover:drop-shadow-[0_0_8px_rgba(251,146,60,0.5)]" />
              <span className="text-[11px] sm:text-xs font-medium text-white/60">Schedule</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Feed */}
      <div className="space-y-6">
        {posts.map((post) => (
          <PostItem key={post.id} post={post} onImageClick={handleImageClick} />
        ))}
      </div>
    </div>
  );
}
