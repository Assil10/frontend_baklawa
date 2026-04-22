import { useState, useRef, ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Image as ImageIcon, Smile, MapPin, UserPlus, MoreHorizontal, Globe, ChevronDown } from 'lucide-react';
import { currentUser } from '../mockData';

interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPost: (content: string, image?: string) => void;
}

export default function CreatePostModal({ isOpen, onClose, onPost }: CreatePostModalProps) {
  const [content, setContent] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePost = () => {
    if (content.trim() || image) {
      onPost(content, image || undefined);
      setContent('');
      setImage(null);
      onClose();
    }
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[500px] bg-deep-charcoal border border-white/10 rounded-3xl shadow-2xl z-[70] overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-white/5">
              <div className="w-10 h-10" /> {/* Spacer */}
              <h3 className="text-lg font-bold text-white">Create post</h3>
              <button 
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 space-y-5 max-h-[70vh] overflow-y-auto custom-scrollbar">
              {/* User Identity */}
              <div className="flex items-center gap-3">
                <img 
                  src={currentUser.avatar} 
                  alt="Me" 
                  className="w-10 h-10 rounded-2xl object-cover" 
                  referrerPolicy="no-referrer"
                />
                <div className="space-y-1">
                  <p className="text-sm font-bold text-white leading-none">{currentUser.name}</p>
                  <button className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-white/5 text-[11px] font-medium text-white/60 hover:bg-white/10 transition-colors">
                    <Globe className="w-3 h-3" />
                    Public
                    <ChevronDown className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Text Input */}
              <textarea
                autoFocus
                placeholder="What's on your mind, Evgen?"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full bg-transparent text-lg text-white placeholder:text-white/20 outline-none resize-none min-h-[120px]"
              />

              {/* Image Preview */}
              {image && (
                <div className="relative group rounded-2xl overflow-hidden border border-white/10">
                  <img src={image} alt="Preview" className="w-full h-auto max-h-[300px] object-cover" />
                  <button 
                    onClick={() => setImage(null)}
                    className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-full bg-black/60 hover:bg-black/80 text-white transition-all opacity-0 group-hover:opacity-100"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* Add to Post Section */}
              <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] flex items-center justify-between">
                <span className="text-sm font-medium text-white/80">Add to your post</span>
                <div className="flex items-center gap-1">
                  <button 
                    onClick={() => fileInputRef.current?.click()}
                    className="p-2.5 rounded-full hover:bg-white/5 text-emerald-400 transition-colors"
                    title="Photo"
                  >
                    <ImageIcon className="w-6 h-6" />
                  </button>
                  <button className="p-2.5 rounded-full hover:bg-white/5 text-brand-yellow transition-colors" title="Tag people">
                    <UserPlus className="w-6 h-6" />
                  </button>
                  <button className="p-2.5 rounded-full hover:bg-white/5 text-orange-400 transition-colors" title="Feeling/activity">
                    <Smile className="w-6 h-6" />
                  </button>
                  <button className="p-2.5 rounded-full hover:bg-white/5 text-rose-400 transition-colors" title="Location">
                    <MapPin className="w-6 h-6" />
                  </button>
                  <button className="p-2.5 rounded-full hover:bg-white/5 text-white/40 transition-colors" title="More">
                    <MoreHorizontal className="w-6 h-6" />
                  </button>
                </div>
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleImageUpload} 
                  accept="image/*" 
                  className="hidden" 
                />
              </div>
            </div>

            {/* Actions */}
            <div className="p-5 bg-white/[0.01]">
              <button 
                onClick={handlePost}
                disabled={!content.trim() && !image}
                className={`w-full py-3.5 rounded-2xl font-bold text-sm transition-all shadow-xl ${
                  content.trim() || image 
                    ? 'bg-brand-yellow text-black hover:bg-brand-yellow/90 active:scale-[0.98]' 
                    : 'bg-white/5 text-white/20 cursor-not-allowed'
                }`}
              >
                Post
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
