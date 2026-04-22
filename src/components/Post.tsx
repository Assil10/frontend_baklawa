import { useState } from 'react';
import { MoreHorizontal, Heart, MessageCircle, Share2, ShieldCheck, Image as ImageIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { currentUser } from '../mockData';
import { Post as PostType } from '../types';

interface PostProps {
  post: PostType;
  onImageClick?: (url: string) => void;
  key?: string | number;
}

export default function Post({ post, onImageClick }: PostProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes);

  const toggleLike = () => {
    if (isLiked) {
      setLikesCount(prev => prev - 1);
    } else {
      setLikesCount(prev => prev + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card"
    >
      <div className="p-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative shrink-0">
            <img src={post.author.avatar} alt="" className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl object-cover" referrerPolicy="no-referrer" loading="lazy" />
            {post.author.isVerified && (
              <div className="absolute -top-1 -right-1 bg-brand-yellow rounded-full p-0.5 border-2 border-matte-black">
                <ShieldCheck className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-black" />
              </div>
            )}
          </div>
          <div className="flex flex-col leading-tight">
             <div className="flex items-center gap-2">
               <span className="text-sm font-bold">{post.author.name}</span>
               {post.author.isVerified && <ShieldCheck className="w-3 h-3 text-brand-yellow" />}
             </div>
             <p className="text-[11px] text-white/40">
               <span className="font-medium text-white/60">{post.author.handle}</span>
               <span className="mx-2">•</span>
               {post.time}
             </p>
          </div>
        </div>
        <button className="text-white/20 hover:text-white transition-colors">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      <div className="px-5 pb-4">
        <p className="text-sm text-white/80 leading-relaxed mb-4">
          {post.content}
        </p>
        {post.image && (
          <div 
            onClick={() => onImageClick?.(post.image!)}
            className="relative rounded-3xl overflow-hidden border border-white/5 cursor-zoom-in group"
          >
            <img 
              src={post.image} 
              alt="Post content" 
              className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none opacity-50 group-hover:opacity-80 transition-opacity" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                    <ImageIcon className="w-6 h-6 text-white" />
                </div>
            </div>
          </div>
        )}
      </div>

      <div className="px-5 py-4 flex items-center justify-between border-t border-white/5 bg-white/[0.01]">
        <div className="flex items-center gap-6">
          <button 
            onClick={toggleLike}
            className={`flex items-center gap-2 transition-all group ${isLiked ? 'text-brand-yellow' : 'text-white/50 hover:text-brand-yellow'}`}
          >
            <Heart className={`w-5 h-5 ${isLiked ? 'fill-brand-yellow' : 'group-hover:fill-brand-yellow'}`} />
            <span className="text-sm font-medium">{likesCount}</span>
          </button>
          <button className="flex items-center gap-2 text-white/50 hover:text-white transition-all group">
            <MessageCircle className="w-5 h-5" />
            <span className="text-sm font-medium">{post.comments}</span>
          </button>
          <button className="text-white/50 hover:text-white transition-all">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="btn-secondary text-[10px] !py-1.5 !px-4 uppercase tracking-widest">
            Promote
          </button>
        </div>
      </div>

      <div className="px-5 py-4 border-t border-white/5 flex items-center gap-3 md:gap-4 transition-all focus-within:bg-white/[0.02]">
          <img src={currentUser.avatar} alt="" className="w-7 h-7 md:w-8 md:h-8 rounded-xl object-cover opacity-50 shrink-0" referrerPolicy="no-referrer" loading="lazy" />
          <div className="flex-1 bg-white/5 rounded-xl px-3 md:px-4 py-2 border border-transparent focus-within:border-white/10 transition-all">
            <input 
              type="text" 
              placeholder="Write your comment..." 
              className="bg-transparent w-full text-[11px] md:text-xs outline-none placeholder:text-white/20"
            />
          </div>
          <div className="flex items-center gap-2 opacity-30 shrink-0">
             <ImageIcon className="w-3.5 h-3.5 md:w-4 md:h-4 cursor-pointer hover:opacity-100" />
          </div>
      </div>
    </motion.article>
  );
}
