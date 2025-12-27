import { Link } from 'react-router-dom';

const Activity = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark antialiased min-h-screen flex flex-col transition-colors duration-200">
      <header className="bg-surface-light dark:bg-surface-dark border-b border-border-light dark:border-border-dark sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-primary text-white p-1 rounded-lg">
              <span className="material-icons-outlined text-2xl">verified_user</span>
            </div>
            <span className="text-xl font-bold text-primary tracking-tight">NoMoreForgot</span>
          </div>
          <div className="flex items-center gap-6 text-sm font-medium text-text-muted-light dark:text-text-muted-dark">
            <a className="flex items-center gap-2 hover:text-primary transition-colors" href="#">
              <span className="material-icons-outlined text-lg">security</span>
              Security Checkup
            </a>
            <a className="flex items-center gap-2 hover:text-primary transition-colors" href="#">
              <span className="material-icons-outlined text-lg">settings</span>
              Settings
            </a>
            <a className="flex items-center gap-2 hover:text-primary transition-colors" href="#">
              <span className="material-icons-outlined text-lg">help_outline</span>
              Help
            </a>
            <div className="h-6 w-px bg-border-light dark:bg-border-dark mx-2"></div>
            <div className="flex items-center gap-3 cursor-pointer">
              <span className="material-icons-outlined text-lg">lock</span>
              <span>Alex</span>
              <img alt="Profile" className="w-8 h-8 rounded-full border-2 border-primary" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGv4gGCo7KAD3EZpQE7hu2wfH27hWD-uYx4sP14Iw7CmdT1BCIlOTME28_XrRbU9JhFXJMH-ivc6Y9W7u_uQdmTgk4AjKwPPLjsUuzefUDceDEmF6aNvOjuSdxpbm-ndko6MUuxTCUMXORB17qf1dsCT8_KUfLtgjHwts0671vm3I9Tr9mGJcjBqfuJXinpGIOa6IetcVvLvJGc6lXTBel-96_FlMSYwqOrsidXuJp8DGH9yKLla1kyBj4YlQ8E-R8JkcWiyT8rPk" />
              <span className="material-icons-outlined text-lg">expand_more</span>
            </div>
          </div>
        </div>
      </header>
      <div className="flex flex-1 max-w-7xl mx-auto w-full">
        <aside className="w-64 py-8 pr-8 hidden md:block">
          <nav className="space-y-1">
            <Link to="/vault" className="flex items-center gap-3 px-4 py-3 text-text-muted-light dark:text-text-muted-dark hover:bg-white dark:hover:bg-surface-dark rounded-lg transition-colors group">
              <span className="material-icons-outlined group-hover:text-primary">business_center</span>
              Vault
            </Link>
            <Link to="/secure-notes" className="flex items-center gap-3 px-4 py-3 text-text-muted-light dark:text-text-muted-dark hover:bg-white dark:hover:bg-surface-dark rounded-lg transition-colors group">
              <span className="material-icons-outlined group-hover:text-primary">sticky_note_2</span>
              Secure Notes
            </Link>
            <a className="flex items-center gap-3 px-4 py-3 text-text-muted-light dark:text-text-muted-dark hover:bg-white dark:hover:bg-surface-dark rounded-lg transition-colors group" href="#">
              <span className="material-icons-outlined group-hover:text-primary">password</span>
              Password Generator
            </a>
            <a className="flex items-center gap-3 px-4 py-3 bg-primary/10 text-primary rounded-lg font-medium border-l-4 border-primary" href="#">
              <span className="material-icons-outlined">bar_chart</span>
              Activity
            </a>
          </nav>
          <div className="mt-10">
            <h3 className="px-4 text-xs font-semibold text-text-muted-light dark:text-text-muted-dark uppercase tracking-wider mb-4">Recent Logins</h3>
            <div className="space-y-2">
              <a className="flex items-center gap-3 px-4 py-2 hover:bg-white dark:hover:bg-surface-dark rounded-lg group transition-colors" href="#">
                <div className="w-8 h-8 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center shadow-sm">
                  <span className="text-lg font-bold text-gray-800 dark:text-white">a</span>
                </div>
                <span className="text-sm font-medium text-text-light dark:text-text-dark">Amazon</span>
              </a>
              <a className="flex items-center gap-3 px-4 py-2 hover:bg-white dark:hover:bg-surface-dark rounded-lg group transition-colors" href="#">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-sm">
                  <span className="text-lg font-bold text-white">f</span>
                </div>
                <span className="text-sm font-medium text-text-light dark:text-text-dark">Facebook</span>
              </a>
              <a className="flex items-center gap-3 px-4 py-2 hover:bg-white dark:hover:bg-surface-dark rounded-lg group transition-colors" href="#">
                <div className="w-8 h-8 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center shadow-sm">
                  <span className="material-icons-outlined text-red-500">mail</span>
                </div>
                <span className="text-sm font-medium text-text-light dark:text-text-dark">Gmail</span>
              </a>
            </div>
          </div>
        </aside>
        <main className="flex-1 py-8">
          <h1 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Activity</h1>
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1 space-y-4">
              <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-2 flex flex-wrap gap-2 items-center shadow-sm border border-border-light dark:border-border-dark">
                <div className="relative flex-grow min-w-[200px]">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 material-icons-outlined text-text-muted-light dark:text-text-muted-dark">search</span>
                  <input className="w-full pl-10 pr-4 py-2 bg-transparent border-none focus:ring-0 text-sm text-text-light dark:text-text-dark placeholder-text-muted-light dark:placeholder-text-muted-dark" placeholder="Search activities" type="text" />
                </div>
                <div className="h-6 w-px bg-border-light dark:bg-border-dark mx-1 hidden sm:block"></div>
                <select className="bg-transparent border-none text-sm font-medium text-text-muted-light dark:text-text-muted-dark focus:ring-0 cursor-pointer hover:text-primary">
                  <option>All Activity</option>
                  <option>Logins</option>
                  <option>Changes</option>
                  <option>Alerts</option>
                </select>
                <div className="h-6 w-px bg-border-light dark:bg-border-dark mx-1 hidden sm:block"></div>
                <select className="bg-transparent border-none text-sm font-medium text-text-muted-light dark:text-text-muted-dark focus:ring-0 cursor-pointer hover:text-primary">
                  <option>Date Range</option>
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                </select>
                <div className="flex items-center gap-1 pl-2 border-l border-border-light dark:border-border-dark ml-2">
                  <button className="p-2 text-text-muted-light dark:text-text-muted-dark hover:bg-background-light dark:hover:bg-background-dark rounded-lg transition-colors">
                    <span className="material-icons-outlined text-lg">image</span>
                  </button>
                  <button className="p-2 text-text-muted-light dark:text-text-muted-dark hover:bg-background-light dark:hover:bg-background-dark rounded-lg transition-colors">
                    <span className="material-icons-outlined text-lg">filter_list</span>
                  </button>
                </div>
              </div>
              <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-5 shadow-sm border border-border-light dark:border-border-dark hover:shadow-md transition-shadow cursor-pointer group">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0 text-blue-600 dark:text-blue-300">
                    <span className="text-xl font-bold">f</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-semibold text-text-light dark:text-text-dark truncate">Facebook access</h3>
                      <span className="material-icons-outlined text-text-muted-light dark:text-text-muted-dark group-hover:text-primary opacity-0 group-hover:opacity-100 transition-opacity">expand_more</span>
                    </div>
                    <p className="text-sm text-text-muted-light dark:text-text-muted-dark">You accessed Facebook in the vault.</p>
                  </div>
                </div>
              </div>
              <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-5 shadow-sm border border-border-light dark:border-border-dark hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center flex-shrink-0 text-orange-600 dark:text-orange-400">
                    <span className="text-lg font-bold">a</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-semibold text-text-light dark:text-text-dark truncate">Log In from New Device</h3>
                      <span className="text-xs text-text-muted-light dark:text-text-muted-dark font-medium whitespace-nowrap">April 15</span>
                    </div>
                    <p className="text-sm text-text-muted-light dark:text-text-muted-dark mb-2">A new login for Amazon on a new device was detected.</p>
                    <div className="flex items-center gap-2 text-xs text-text-muted-light dark:text-text-muted-dark font-mono bg-background-light dark:bg-background-dark p-2 rounded w-fit">
                      <span>IP: 199.166.0.24</span>
                      <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                      <span>San Sentinade, CA</span>
                      <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                      <span>Chrome *****</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-red-50 dark:bg-red-900/10 rounded-xl p-5 shadow-sm border border-red-100 dark:border-red-900/30 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/40 flex items-center justify-center flex-shrink-0 text-red-600 dark:text-red-400">
                    <span className="material-icons-outlined">login</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-gray-900 dark:text-red-100 truncate">Breach Alert</h3>
                        <span className="px-2 py-0.5 rounded-full bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 text-xs font-medium">Dropbox</span>
                      </div>
                      <button className="bg-primary hover:bg-blue-600 text-white text-xs px-3 py-1.5 rounded-lg shadow-sm transition-colors font-medium">
                        Change Password
                      </button>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-red-200/70">A breach was detected for Dropbox. Change your password immediately.</p>
                  </div>
                </div>
              </div>
              <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-5 shadow-sm border border-border-light dark:border-border-dark hover:shadow-md transition-shadow cursor-pointer group">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center flex-shrink-0 text-indigo-600 dark:text-indigo-400">
                    <span className="material-icons-outlined">folder</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-text-light dark:text-text-dark truncate">Added Secure Note</h3>
                        <span className="text-xs text-text-muted-light dark:text-text-muted-dark bg-background-light dark:bg-background-dark px-2 py-0.5 rounded">Bank PINs</span>
                      </div>
                      <span className="text-xs text-text-muted-light dark:text-text-muted-dark font-medium whitespace-nowrap flex items-center gap-1">
                        April 12
                        <span className="material-icons-outlined text-base group-hover:text-primary opacity-0 group-hover:opacity-100 transition-opacity">expand_more</span>
                      </span>
                    </div>
                    <p className="text-sm text-text-muted-light dark:text-text-muted-dark">You added a secure note titled "Bank PINs".</p>
                  </div>
                </div>
              </div>
              <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-5 shadow-sm border border-border-light dark:border-border-dark hover:shadow-md transition-shadow cursor-pointer group">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center flex-shrink-0 text-teal-600 dark:text-teal-400">
                    <span className="material-icons-outlined">password</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-semibold text-text-light dark:text-text-dark truncate">Generated new Password</h3>
                      <span className="text-xs text-text-muted-light dark:text-text-muted-dark font-medium whitespace-nowrap flex items-center gap-1">
                        April 10
                        <span className="material-icons-outlined text-base group-hover:text-primary opacity-0 group-hover:opacity-100 transition-opacity">expand_more</span>
                      </span>
                    </div>
                    <p className="text-sm text-text-muted-light dark:text-text-muted-dark">A new password was generated using the Password Generator.</p>
                  </div>
                </div>
              </div>
              <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-5 shadow-sm border border-border-light dark:border-border-dark hover:shadow-md transition-shadow cursor-pointer group">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 text-blue-600 dark:text-blue-400">
                    <span className="material-icons-outlined">add_moderator</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-semibold text-text-light dark:text-text-dark truncate">Enabled Two-Factor Authentication</h3>
                      <span className="text-xs text-text-muted-light dark:text-text-muted-dark font-medium whitespace-nowrap flex items-center gap-1">
                        April 8
                        <span className="material-icons-outlined text-base group-hover:text-primary opacity-0 group-hover:opacity-100 transition-opacity">expand_more</span>
                      </span>
                    </div>
                    <p className="text-sm text-text-muted-light dark:text-text-muted-dark">Two-factor authentication was enabled.</p>
                  </div>
                </div>
              </div>
            </div>
            <aside className="w-full lg:w-80 space-y-6">
              <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-5 shadow-sm border border-border-light dark:border-border-dark">
                <h2 className="text-lg font-bold text-text-light dark:text-text-dark mb-4">Account Overview</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center p-3 rounded-lg bg-background-light dark:bg-background-dark">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="material-icons-outlined text-text-muted-light dark:text-text-muted-dark">vpn_key</span>
                      <span className="text-2xl font-bold text-text-light dark:text-text-dark">120</span>
                    </div>
                    <span className="text-xs text-text-muted-light dark:text-text-muted-dark font-medium">Saved Passwords</span>
                  </div>
                  <div className="flex flex-col items-center p-3 rounded-lg bg-background-light dark:bg-background-dark">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="material-icons-outlined text-primary">sticky_note_2</span>
                      <span className="text-2xl font-bold text-text-light dark:text-text-dark">8</span>
                    </div>
                    <span className="text-xs text-text-muted-light dark:text-text-muted-dark font-medium">Secure Notes</span>
                  </div>
                </div>
              </div>
              <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-5 shadow-sm border border-border-light dark:border-border-dark">
                <h2 className="text-lg font-bold text-text-light dark:text-text-dark mb-4">Security Tips</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="material-icons-outlined text-green-500 text-xl flex-shrink-0">check_circle</span>
                    <span className="text-sm text-text-light dark:text-text-dark">Enable Two-Factor Authentication</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-icons-outlined text-green-500 text-xl flex-shrink-0">check_circle</span>
                    <span className="text-sm text-text-light dark:text-text-dark">Review Breach Alerts Regularly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-icons-outlined text-green-500 text-xl flex-shrink-0">check_circle</span>
                    <span className="text-sm text-text-light dark:text-text-dark">Use a Secure Master Password</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-icons-outlined text-green-500 text-xl flex-shrink-0">check_circle</span>
                    <span className="text-sm text-text-light dark:text-text-dark">Never Reuse Passwords</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-icons-outlined text-green-500 text-xl flex-shrink-0">check_circle</span>
                    <span className="text-sm text-text-light dark:text-text-dark">Keep App Up to Date</span>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </main>
      </div>
      <div className="fixed bottom-4 right-4 z-50">
        <button className="bg-primary text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors">
          <span className="material-icons-outlined dark:hidden">dark_mode</span>
          <span className="material-icons-outlined hidden dark:block">light_mode</span>
        </button>
      </div>
    </div>
  );
};

export default Activity;





