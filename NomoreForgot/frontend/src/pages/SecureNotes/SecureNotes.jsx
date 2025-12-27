import { Link } from 'react-router-dom';

const SecureNotes = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 font-display min-h-screen flex flex-col transition-colors duration-200">
      <nav className="bg-surface-light dark:bg-surface-dark border-b border-border-light dark:border-border-dark sticky top-0 z-50 h-16 flex items-center justify-between px-6 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
            <span className="material-icons-outlined text-xl">shield</span>
          </div>
          <span className="text-xl font-bold text-slate-800 dark:text-white tracking-tight">NoMoreForgot</span>
        </div>
        <div className="flex items-center gap-6 text-sm font-medium text-slate-500 dark:text-slate-400">
          <a className="flex items-center gap-1.5 hover:text-primary transition-colors hidden md:flex" href="#">
            <span className="material-icons-outlined text-[18px]">verified_user</span>
            Security Checkup
          </a>
          <a className="flex items-center gap-1.5 hover:text-primary transition-colors hidden md:flex" href="#">
            <span className="material-icons-outlined text-[18px]">settings</span>
            Settings
          </a>
          <a className="flex items-center gap-1.5 hover:text-primary transition-colors hidden md:flex" href="#">
            <span className="material-icons-outlined text-[18px]">help_outline</span>
            Help
          </a>
          <div className="h-6 w-px bg-border-light dark:bg-border-dark mx-2 hidden md:block"></div>
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden border border-slate-300 dark:border-slate-600">
              <img alt="User Avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-p1pJV0gx3LhdBaM8gdF0UtFG5Rcpro4gwbFwODdg-EBwpsSbhsrUERvwZmktqzN0HEV9ZlZCOND9HJAP8pGoU3pLn6py8e7GrcgU8Q-ZoBd6VRkqSzH2xbiIc83Y1Ux-SPh1sHPvOTnG2gL8tLgTfIB89BR8xV2HlDuPF_QWw_0jhR81ceZzxS7ba_kVRV5wCHKlXKjfVHak1yiNDIRSIs4gFlMg3cEfB9jqvg0lWdcKvdF0n8qUi7odTGy2LByr77FRljs66Nk" />
            </div>
            <div className="flex items-center gap-1">
              <span className="text-slate-700 dark:text-slate-200 group-hover:text-primary">Alex</span>
              <span className="material-icons-outlined text-sm">expand_more</span>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex flex-1 max-w-[1600px] mx-auto w-full">
        <aside className="w-64 py-8 px-4 flex-shrink-0 hidden lg:block border-r border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark">
          <div className="space-y-1">
            <Link to="/vault" className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-800 hover:text-primary dark:hover:text-primary hover:shadow-sm transition-all">
              <span className="material-icons-outlined">business_center</span>
              <span className="font-medium">Vault</span>
            </Link>
            <a className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white dark:bg-slate-800 text-primary shadow-sm border border-slate-100 dark:border-slate-700 font-semibold" href="#">
              <span className="material-icons-outlined">note</span>
              <span>Secure Notes</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-800 hover:text-primary dark:hover:text-primary hover:shadow-sm transition-all" href="#">
              <span className="material-icons-outlined">vpn_key</span>
              <span>Password Generator</span>
            </a>
            <Link to="/activity" className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-800 hover:text-primary dark:hover:text-primary hover:shadow-sm transition-all">
              <span className="material-icons-outlined">analytics</span>
              <span>Activity</span>
            </Link>
          </div>
          <div className="mt-10">
            <h3 className="px-4 text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3">Recent Logins</h3>
            <div className="space-y-2">
              <a className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 border border-transparent hover:border-slate-100 dark:hover:border-slate-700 transition-all group" href="#">
                <div className="w-6 h-6 rounded flex items-center justify-center bg-white shadow-sm p-1">
                  <img alt="Amazon" className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoWeqjxwzR2f7IMqVHRlqLNILZwWBG9O5JSupU0U4VjfRj9jKOqoXuSPrBZlyoTjqY7o11tWGUEu9aiTIqF9LOmBa5it5AnM0w0OkLN31v5RSVlIKcTslS5pl0Ua_x_WPAn310mh7hxgbERAopo7qrELduc6Lf0-LcZIDrGHtLRzRVSLUOkJDQh6Htf-N7a5QXBtdPYfW3xahRBmOUzlENpplXy7T_ZzlmrsCT5hfjvkQ_KC31rr7LO_DErZnuOvERRRA2ltnOYzs" />
                </div>
                <span className="text-sm font-medium">Amazon</span>
              </a>
              <a className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 border border-transparent hover:border-slate-100 dark:hover:border-slate-700 transition-all group" href="#">
                <div className="w-6 h-6 rounded flex items-center justify-center bg-blue-600 shadow-sm text-white text-[10px] font-bold">f</div>
                <span className="text-sm font-medium">Facebook</span>
              </a>
              <a className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 border border-transparent hover:border-slate-100 dark:hover:border-slate-700 transition-all group" href="#">
                <div className="w-6 h-6 rounded flex items-center justify-center bg-white shadow-sm p-1">
                  <img alt="Gmail" className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCltpERA-rm4phmhpmt5p4fVLA36rkcxg7BFiMa1aN5hiI9QjRlK5F-o4O1Gn5xG0pwozlIAEQyF1m45S0vd7DNpysELcxg9DIn7ezsj2MJw4tiyUJ87Lc3_sgoLIiimOxu-ZchjuX7FFykYF6rZugYB94bndbEJyocXMehdacjREMYsKsbVzdUBzz9y4pU79v35tIKW-DvBY6FiwEoX8Qn_uVgOo8DZvIX_3-5_d5hKUd28eq1L_Xckj_1eiD-Xmv4JBIhj7r8K88" />
                </div>
                <span className="text-sm font-medium">Gmail</span>
              </a>
            </div>
          </div>
        </aside>
        <main className="flex-1 px-8 py-8 overflow-y-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Secure Notes</h1>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Keep your confidential information safe and encrypted.</p>
            </div>
            <button className="bg-primary hover:bg-blue-600 text-white px-5 py-2.5 rounded-lg shadow-lg shadow-blue-500/20 font-medium flex items-center gap-2 transition-all active:scale-95">
              <span className="material-icons-outlined text-lg">add</span>
              Add New Note
            </button>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            <div className="xl:col-span-2 space-y-6">
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <span className="material-icons-outlined text-slate-400 group-focus-within:text-primary transition-colors">search</span>
                </div>
                <input className="block w-full pl-11 pr-4 py-3 bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm" placeholder="Search notes..." type="text" />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 p-1">
                    <span className="material-icons-outlined text-lg">filter_list</span>
                  </button>
                </div>
              </div>
              <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-2xl shadow-sm overflow-hidden">
                <div className="group flex items-center justify-between p-4 border-b border-border-light dark:border-border-dark hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                      <span className="material-icons-outlined">shield</span>
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-slate-900 dark:text-white group-hover:text-primary transition-colors">VPN Credentials</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Includes setup keys for office network</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="text-xs font-medium text-slate-400">Modified 2h ago</span>
                    <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                      <span className="material-icons-outlined">chevron_right</span>
                    </button>
                  </div>
                </div>
                <div className="group flex items-center justify-between p-4 border-b border-border-light dark:border-border-dark hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                      <span className="material-icons-outlined">medical_services</span>
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-slate-900 dark:text-white group-hover:text-primary transition-colors">Medical Information</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Insurance policy numbers and contacts</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="text-xs font-medium text-slate-400">Modified 1d ago</span>
                    <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                      <span className="material-icons-outlined">chevron_right</span>
                    </button>
                  </div>
                </div>
                <div className="group flex items-center justify-between p-4 border-b border-border-light dark:border-border-dark hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                      <span className="material-icons-outlined">account_balance</span>
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-slate-900 dark:text-white group-hover:text-primary transition-colors">Bank PINs</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Debit card and telephone banking PINs</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="text-xs font-medium text-slate-400">Modified 3d ago</span>
                    <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                      <span className="material-icons-outlined">chevron_right</span>
                    </button>
                  </div>
                </div>
                <div className="group flex items-center justify-between p-4 border-b border-border-light dark:border-border-dark hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 flex items-center justify-center">
                      <span className="material-icons-outlined">wifi</span>
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-slate-900 dark:text-white group-hover:text-primary transition-colors">Wi-Fi Passwords</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Home and Grandma's house</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="text-xs font-medium text-slate-400">Modified 1w ago</span>
                    <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                      <span className="material-icons-outlined">chevron_right</span>
                    </button>
                  </div>
                </div>
                <div className="group flex items-center justify-between p-4 border-b border-border-light dark:border-border-dark hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 flex items-center justify-center">
                      <span className="material-icons-outlined">laptop_mac</span>
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-slate-900 dark:text-white group-hover:text-primary transition-colors">Laptop Recovery Key</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">BitLocker recovery key for work laptop</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="text-xs font-medium text-slate-400">Modified 2w ago</span>
                    <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                      <span className="material-icons-outlined">chevron_right</span>
                    </button>
                  </div>
                </div>
                <div className="group flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                      <span className="material-icons-outlined">flight</span>
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-slate-900 dark:text-white group-hover:text-primary transition-colors">Passport Info</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Scans and numbers for family</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="text-xs font-medium text-slate-400">Modified 1mo ago</span>
                    <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                      <span className="material-icons-outlined">chevron_right</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="material-icons-outlined text-primary">autorenew</span>
                    <h3 className="font-bold text-slate-900 dark:text-white">Quick Password Generator</h3>
                  </div>
                  <button className="text-sm text-primary font-medium hover:underline">Advanced Options</button>
                </div>
                <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl border border-border-light dark:border-border-dark mb-4">
                  <input className="bg-transparent border-none focus:ring-0 w-full font-mono text-slate-800 dark:text-slate-200 text-lg tracking-wide" readOnly type="text" defaultValue="N-3_p*YIREhw2tZ" />
                  <button className="p-2 text-slate-500 hover:text-primary hover:bg-white dark:hover:bg-slate-700 rounded-lg transition-all shadow-sm">
                    <span className="material-icons-outlined text-lg">content_copy</span>
                  </button>
                  <button className="p-2 text-slate-500 hover:text-primary hover:bg-white dark:hover:bg-slate-700 rounded-lg transition-all shadow-sm">
                    <span className="material-icons-outlined text-lg">refresh</span>
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Length: 16</span>
                    </label>
                    <input className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary" max="32" min="8" type="range" defaultValue="16" />
                  </div>
                  <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input defaultChecked className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox" />
                      <span>Symbols</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input defaultChecked className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox" />
                      <span>Numbers</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input defaultChecked className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox" />
                      <span>Uppercase</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-slate-900 dark:text-white mb-4">Secure Notes Overview</h3>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-800/50 p-5 rounded-xl border border-blue-100 dark:border-slate-700 mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white dark:bg-slate-700 rounded-lg shadow-sm flex items-center justify-center flex-shrink-0 text-3xl">
                      📝
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 dark:text-white text-sm mb-1">What are Secure Notes?</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        Secure Notes are encrypted entries where you can safely store sensitive information like bank PINs, credit card numbers, software keys, or recovery codes. Only you can access them.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500 dark:text-slate-400">Total Notes</span>
                  <span className="font-bold text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded-md">8</span>
                </div>
              </div>
              <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-slate-900 dark:text-white">Recent Password History</h3>
                  <button className="text-xs text-slate-400 hover:text-primary">Delete All</button>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/30 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-all group">
                    <div className="w-8 h-8 rounded bg-primary/10 text-primary flex items-center justify-center">
                      <span className="material-icons-outlined text-sm">lock_clock</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="text-xs font-mono text-slate-500 dark:text-slate-400 truncate">@TwLabxPT2S 2.2</p>
                        <button className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-400 hover:text-primary">
                          <span className="material-icons-outlined text-sm">content_copy</span>
                        </button>
                      </div>
                      <p className="text-[10px] text-slate-400 mt-0.5">Generated 2h ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/30 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-all group">
                    <div className="w-8 h-8 rounded bg-primary/10 text-primary flex items-center justify-center">
                      <span className="material-icons-outlined text-sm">lock_clock</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="text-xs font-mono text-slate-500 dark:text-slate-400 truncate">jeMI....!</p>
                        <button className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-400 hover:text-primary">
                          <span className="material-icons-outlined text-sm">content_copy</span>
                        </button>
                      </div>
                      <p className="text-[10px] text-slate-400 mt-0.5">Generated 13h ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/30 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-all group">
                    <div className="w-8 h-8 rounded bg-primary/10 text-primary flex items-center justify-center">
                      <span className="material-icons-outlined text-sm">lock_clock</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="text-xs font-mono text-slate-500 dark:text-slate-400 truncate">ZkPB84UWOkv -v6</p>
                        <button className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-400 hover:text-primary">
                          <span className="material-icons-outlined text-sm">content_copy</span>
                        </button>
                      </div>
                      <p className="text-[10px] text-slate-400 mt-0.5">Generated 1d ago</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-primary/5 dark:bg-primary/10 border border-primary/20 rounded-2xl p-4 flex items-start gap-3">
                <span className="material-icons-outlined text-primary mt-0.5">lightbulb</span>
                <div>
                  <h5 className="text-sm font-bold text-slate-800 dark:text-white">Pro Tip</h5>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Organize your notes with custom tags to find them even faster in search.</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SecureNotes;





