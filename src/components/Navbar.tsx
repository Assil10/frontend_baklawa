import { useState } from 'react';
import { Search, Home, MessageCircle, Heart, Bell, ChevronDown, LogOut } from 'lucide-react';
import { currentUser } from '../mockData';
import MessagesPopover from './MessagesPopover';
import NotificationsPopover from './NotificationsPopover';

interface NavbarProps {
  onLogout: () => void;
  onNavClick: (view: string) => void;
}

export default function Navbar({ onLogout, onNavClick }: NavbarProps) {
  const [isMessagesOpen, setIsMessagesOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-deep-charcoal/90 backdrop-blur-xl px-4 sm:px-8 py-5 flex items-center justify-between border-b border-white/5">
      <div className="flex items-center gap-10">
        <div 
          onClick={() => onNavClick('feed')}
          className="flex items-center gap-5 group cursor-pointer"
        >
          <div className="w-16 h-16 flex items-center justify-center shrink-0 transform group-hover:scale-110 transition-all duration-500">
            <img 
              src="/images/img.png" 
              alt="Logo" 
              className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="text-4xl font-black tracking-tighter text-white uppercase sm:block hidden select-none hover:text-brand-yellow transition-colors leading-none">Baklawa</span>
        </div>
        
        <div className="relative group hidden md:block md:min-w-[240px] lg:min-w-[400px]">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 group-focus-within:text-brand-yellow transition-colors" />
          <input 
            type="text" 
            placeholder="# Explore the world..." 
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-3.5 pl-14 pr-6 text-sm focus:outline-none focus:border-brand-yellow/50 focus:bg-white/[0.08] transition-all placeholder:text-white/20"
          />
        </div>
        <button className="md:hidden nav-icon">
          <Search className="w-5 h-5" />
        </button>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <button 
          onClick={() => onNavClick('feed')}
          className="nav-icon w-12 h-12 nav-icon-active"
        >
          <Home className="w-6 h-6" />
        </button>
        <div className="relative">
          <button 
            onClick={() => {
              setIsMessagesOpen(!isMessagesOpen);
              setIsNotificationsOpen(false);
            }}
            className={`hidden sm:flex nav-icon w-12 h-12 ${isMessagesOpen ? 'text-brand-yellow bg-white/5' : ''}`}
          >
            <MessageCircle className="w-6 h-6" />
          </button>
          {isMessagesOpen && <MessagesPopover onClose={() => setIsMessagesOpen(false)} />}
        </div>
        <div className="relative">
          <button 
            onClick={() => {
              setIsNotificationsOpen(!isNotificationsOpen);
              setIsMessagesOpen(false);
            }}
            className={`nav-icon w-12 h-12 ${isNotificationsOpen ? 'text-brand-yellow bg-white/5' : ''}`}
          >
            <div className="relative">
              <Bell className="w-6 h-6" />
              <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-brand-yellow rounded-full border-2 border-deep-charcoal" />
            </div>
          </button>
          {isNotificationsOpen && <NotificationsPopover onClose={() => setIsNotificationsOpen(false)} />}
        </div>
        <button className="hidden sm:flex nav-icon w-12 h-12">
          <Heart className="w-6 h-6" />
        </button>
      </div>

      <div 
        onClick={() => onNavClick('profile')}
        className="flex items-center gap-2 sm:gap-3 pl-3 sm:pl-6 border-l border-white/5 cursor-pointer group"
      >
        <img 
          src={currentUser.avatar} 
          alt={currentUser.name} 
          className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl object-cover ring-2 ring-transparent group-hover:ring-brand-yellow/50 transition-all" 
          referrerPolicy="no-referrer"
          loading="eager"
        />
        <div className="hidden sm:flex flex-col items-start leading-none gap-1">
          <span className="text-sm font-medium text-white/90 group-hover:text-white truncate max-w-[100px]">{currentUser.name}</span>
          <span className="text-[10px] text-white/40 uppercase tracking-wider">{currentUser.handle}</span>
        </div>
        <button 
          onClick={onLogout}
          className="p-1 px-2 text-white/20 hover:text-rose-500 transition-colors flex items-center gap-1 group/logout"
        >
          <LogOut className="w-4 h-4" />
        </button>
      </div>
    </nav>
  );
}
