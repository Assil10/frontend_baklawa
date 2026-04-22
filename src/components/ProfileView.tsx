import { MapPin, Globe, Calendar, Link as LinkIcon, Heart, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';
import { currentUser, posts } from '../mockData';
import { motion } from 'motion/react';
import { useState } from 'react';
import PostItem from './Post';
import PostModal from './PostModal';

export default function ProfileView() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const userPosts = posts; // For now reuse global posts for the profile too

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
      {/* Profile Header */}
      <div className="glass-card overflow-hidden">
        {/* Cover Image */}
        <div className="h-48 bg-gradient-to-r from-brand-yellow/20 to-brand-yellow/5 relative">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-yellow via-transparent to-transparent" />
        </div>
        
        <div className="px-6 pb-6 relative">
          {/* Avatar */}
          <div className="relative -mt-16 mb-4 inline-block">
             <div className="absolute inset-0 bg-brand-yellow blur-3xl opacity-20" />
             <img 
               src={currentUser.avatar} 
               alt={currentUser.name} 
               className="relative w-32 h-32 rounded-3xl object-cover border-8 border-matte-black shadow-2xl" 
               referrerPolicy="no-referrer"
             />
          </div>

          <div className="flex items-start justify-between">
            <div className="flex flex-col">
                <h1 className="text-3xl font-black tracking-tight text-white mb-1 uppercase">{currentUser.name}</h1>
                <p className="text-brand-yellow font-medium mb-4">{currentUser.handle}</p>
            </div>
            <button className="btn-primary text-sm !px-8">Edit Profile</button>
          </div>

          <p className="text-white/70 leading-relaxed mb-6 text-sm">
            {currentUser.bio}
          </p>

          <div className="flex flex-wrap gap-4 text-xs text-white/40 mb-8">
            <div className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
                <MapPin className="w-3.5 h-3.5 text-brand-yellow" />
                <span>Berlin, Germany</span>
            </div>
            <div className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
                <Globe className="w-3.5 h-3.5 text-brand-yellow" />
                <span>baklawa.design</span>
            </div>
            <div className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
                <Calendar className="w-3.5 h-3.5 text-brand-yellow" />
                <span>Joined April 2024</span>
            </div>
          </div>

          <div className="flex gap-8 border-t border-white/5 pt-6">
            <div className="flex flex-col items-center">
                <span className="text-xl font-black">{currentUser.followers}</span>
                <span className="text-[10px] uppercase tracking-widest text-white/30">Followers</span>
            </div>
            <div className="flex flex-col items-center">
                <span className="text-xl font-black">{currentUser.following}</span>
                <span className="text-[10px] uppercase tracking-widest text-white/30">Following</span>
            </div>
            <div className="flex flex-col items-center">
                <span className="text-xl font-black">124</span>
                <span className="text-[10px] uppercase tracking-widest text-white/30">Posts</span>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Navigation */}
      <div className="flex gap-8 border-b border-white/5 px-6">
        <button className="pb-4 text-sm font-bold border-b-2 border-brand-yellow text-white uppercase tracking-wider">Posts</button>
        <button className="pb-4 text-sm font-medium text-white/40 hover:text-white transition-colors uppercase tracking-wider">Replies</button>
        <button className="pb-4 text-sm font-medium text-white/40 hover:text-white transition-colors uppercase tracking-wider">Media</button>
        <button className="pb-4 text-sm font-medium text-white/40 hover:text-white transition-colors uppercase tracking-wider">Likes</button>
      </div>

      {/* User Posts */}
      <div className="space-y-6">
        {userPosts.map((post) => (
          <PostItem key={post.id} post={post} onImageClick={handleImageClick} />
        ))}
      </div>
    </div>
  );
}
