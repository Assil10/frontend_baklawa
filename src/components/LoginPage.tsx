import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Eye, EyeOff } from 'lucide-react';

interface LoginPageProps {
  onLogin: (email: string) => void;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onLogin(email || 'Guest');
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black relative overflow-hidden p-4">
      {/* Full Screen Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105"
      >
        <source src="/images/Animation_of_image_202604220924.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/40" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.98, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative w-full max-w-[900px] h-auto min-h-[550px] grid grid-cols-1 md:grid-cols-2 rounded-[40px] overflow-hidden border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.8)]"
      >
        {/* Left Side: Clearer Glass */}
        <div className="relative bg-white/[0.02] md:block hidden">
          {/* Divider line seen in image */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-4/5 bg-white/10" />
        </div>

        {/* Right Side: Reduced Blur Glass Pane */}
        <div className="relative p-10 sm:p-14 flex flex-col bg-black/50 backdrop-blur-[12px]">
          <div className="flex-1 flex flex-col justify-center">
            <h1 className="text-4xl font-semibold mb-2 tracking-tight text-white">Welcome back</h1>
            <p className="text-sm text-white/50 mb-12">Please enter your details.</p>

            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="space-y-3">
                <label className="text-xs font-medium text-white/70">E-mail</label>
                <input 
                  type="text" 
                  placeholder="Enter anything..." 
                  className="login-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="space-y-3">
                <label className="text-xs font-medium text-white/70">Password</label>
                <div className="relative">
                  <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="••••••••••••" 
                    className="login-input pr-10"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-0 bottom-3 text-white/30 hover:text-brand-yellow transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs">
                <label className="flex items-center gap-2 cursor-pointer group text-white/50">
                  <div 
                    onClick={() => setRememberMe(!rememberMe)}
                    className={`w-3.5 h-3.5 rounded border flex items-center justify-center transition-all ${rememberMe ? 'bg-brand-yellow border-brand-yellow text-black' : 'border-white/20 group-hover:border-white/40'}`}
                  >
                    {rememberMe && <div className="w-1.5 h-1.5 bg-black rounded-[1px]" />}
                  </div>
                  Remember me
                </label>
                <button type="button" className="text-white/60 hover:text-brand-yellow transition-colors font-medium">
                  Forgot the password?
                </button>
              </div>

              <button 
                type="submit" 
                className="w-full py-4 mt-8 bg-[#0a0a0a] hover:bg-black text-white font-bold rounded-2xl active:scale-[0.98] transition-all border border-white/5 shadow-2xl"
              >
                Log in
              </button>
            </form>

            <div className="mt-12 text-center">
              <p className="text-xs text-white/40">
                Don't have an account? <button className="text-white/70 font-semibold hover:text-brand-yellow transition-colors underline-offset-4 hover:underline">Register here</button>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
