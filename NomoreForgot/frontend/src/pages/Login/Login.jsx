import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleUnlockVault = () => {
    navigate('/dashboard');
  };

  return (
    <div className="gradient-bg min-h-screen flex flex-col font-display text-text-light dark:text-text-dark transition-colors duration-200">
      <nav className="w-full flex justify-between items-center px-8 py-6 relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
            <span className="material-icons-round text-lg">verified_user</span>
          </div>
          <span className="text-xl font-bold text-slate-800 dark:text-white tracking-tight">NoMoreForgot</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
          <a className="flex items-center gap-1 hover:text-primary transition-colors" href="#">
            <span className="material-icons-round text-lg">shield</span> Vault
          </a>
          <a className="flex items-center gap-1 hover:text-primary transition-colors" href="#">
            <span className="material-icons-round text-lg">security</span> Security Checkup
          </a>
          <a className="flex items-center gap-1 hover:text-primary transition-colors" href="#">
            <span className="material-icons-round text-lg">help_outline</span> Help
          </a>
          <div className="flex gap-3 ml-4">
            <button className="px-5 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition shadow-sm font-semibold">Log In</button>
            <button className="px-5 py-2 bg-white dark:bg-slate-700 dark:text-white text-primary border border-primary/20 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-600 transition font-semibold">Sign Up</button>
          </div>
        </div>
        <button className="md:hidden text-slate-600 dark:text-slate-300">
          <span className="material-icons-round">menu</span>
        </button>
      </nav>
      <main className="flex-grow flex items-center justify-center p-4 relative z-10">
        <div className="bg-card-light dark:bg-card-dark rounded-2xl shadow-xl w-full max-w-md p-8 relative overflow-hidden ring-1 ring-black/5 dark:ring-white/10">
          <button className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition">
            <span className="material-icons-round">close</span>
          </button>
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 dark:bg-blue-900/30 rounded-full mb-4">
              <span className="material-icons-round text-4xl text-primary">lock</span>
            </div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">Secure Vault</h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm">Zero-Knowledge Encryption</p>
          </div>
          <form className="space-y-4">
            <div className="relative group">
              <span className="material-icons-round absolute left-3 top-3.5 text-slate-400 group-focus-within:text-primary transition-colors">person</span>
              <input className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-border-light dark:border-border-dark rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-sm outline-none transition-all dark:text-white placeholder-slate-400" placeholder="Email / Username" type="email" />
            </div>
            <div className="relative group">
              <span className="material-icons-round absolute left-3 top-3.5 text-slate-400 group-focus-within:text-primary transition-colors">lock</span>
              <input className="w-full pl-10 pr-10 py-3 bg-slate-50 dark:bg-slate-800 border border-border-light dark:border-border-dark rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-sm outline-none transition-all dark:text-white" type="password" defaultValue="alex@gmail.com" />
              <button className="absolute right-3 top-3.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300" type="button">
                <span className="material-icons-round">visibility</span>
              </button>
            </div>
            <button onClick={handleUnlockVault} className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 rounded-lg shadow-lg shadow-blue-500/30 transition-all flex items-center justify-center gap-2 mt-6 transform active:scale-[0.98]" type="button">
              <div className="loading-spinner hidden"></div>
              Unlock Vault
            </button>
            <div className="text-center mt-2">
              <span className="text-xs text-slate-400 animate-pulse">Deriving key... 2–5 seconds</span>
            </div>
          </form>
          <div className="mt-8 bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-100 dark:border-slate-700/50">
            <div className="flex items-start gap-3">
              <span className="material-icons-round text-slate-400 mt-0.5">verified_user</span>
              <div className="text-xs text-slate-600 dark:text-slate-300 space-y-1.5">
                <p className="font-medium text-slate-700 dark:text-slate-200">Powered by AES-256 Encryption</p>
                <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                  <span className="material-icons-round text-[14px]">vpn_key</span>
                  <span>PBKDF2 Key Derivation</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                  <span className="material-icons-round text-[14px]">timer</span>
                  <span>Auto-lock after 15 minutes of inactivity</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 text-center space-y-4">
            <p className="text-xs text-slate-400">Your master password never leaves your device</p>
            <a className="block text-sm text-primary hover:text-primary-dark font-medium hover:underline decoration-2 underline-offset-4" href="#">New user? Register here.</a>
          </div>
        </div>
      </main>
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-white/20 dark:bg-blue-900/10 blur-[100px] rounded-full"></div>
        <div className="absolute top-[40%] right-[10%] w-[30%] h-[30%] bg-blue-300/20 dark:bg-blue-600/10 blur-[80px] rounded-full"></div>
        <div className="absolute bottom-0 left-[20%] w-[60%] h-[20%] bg-white/40 dark:bg-slate-800/20 blur-[60px]"></div>
      </div>
    </div>
  );
};

export default Login;





