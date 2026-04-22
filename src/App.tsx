/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import RightPanel from './components/RightPanel';
import LoginPage from './components/LoginPage';
import ProfileView from './components/ProfileView';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [activeView, setActiveView] = useState<'feed' | 'profile'>('feed');

  useEffect(() => {
    // Check if user is already logged in
    const storedUser = localStorage.getItem('social_app_user');
    if (storedUser) {
      setIsLoggedIn(true);
      setUserEmail(storedUser);
    }

    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = (email: string) => {
    setIsLoggedIn(true);
    setUserEmail(email);
    localStorage.setItem('social_app_user', email);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserEmail('');
    localStorage.removeItem('social_app_user');
  };

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-deep-charcoal text-white selection:bg-brand-yellow selection:text-black">
      <Navbar onLogout={handleLogout} onNavClick={(view) => setActiveView(view as any)} />
      
      <main className="max-w-[1600px] mx-auto px-0 sm:px-4 md:px-6 flex gap-0 sm:gap-6 md:gap-8 pt-32 pb-10">
        <AnimatePresence mode="wait">
          {loading ? (
            <div key="loading" className="flex w-full gap-8 animate-pulse px-4 sm:px-0">
              <div className="w-[320px] shrink-0 hidden xl:block space-y-6">
                <div className="h-96 bg-white/5 rounded-3xl" />
                <div className="h-40 bg-white/5 rounded-3xl" />
              </div>
              <div className="flex-1 max-w-2xl mx-auto space-y-6">
                <div className="h-24 bg-white/5 rounded-3xl" />
                <div className="h-96 bg-white/5 rounded-3xl" />
                <div className="h-96 bg-white/5 rounded-3xl" />
              </div>
              <div className="w-[360px] shrink-0 hidden 2xl:block">
                <div className="h-[calc(100vh-140px)] bg-white/5 rounded-3xl" />
              </div>
            </div>
          ) : (
            <motion.div 
              key={activeView}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex w-full gap-8"
            >
              <Sidebar onProfileClick={() => setActiveView('profile')} activeView={activeView} />
              
              {activeView === 'feed' ? <Feed /> : <ProfileView />}
              
              <RightPanel />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Decorative Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-brand-yellow/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-brand-yellow/5 blur-[120px]" />
      </div>
    </div>
  );
}
