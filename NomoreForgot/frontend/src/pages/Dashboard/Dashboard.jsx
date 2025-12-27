import { Link } from 'react-router-dom';

const Dashboard = () => {
  // Mock data
  const stats = {
    savedPasswords: 120,
    secureNotes: 8,
    twoFactorEnabled: true,
    breachAlerts: 2
  };

  const securityScore = {
    value: 85,
    label: 'Strong',
    weakPasswords: 5,
    compromised: 2
  };

  const passwords = [
    { id: 1, name: 'Google', username: 'alex@gmail.com', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxThdpwgReykA6WtazHUhDdm__jT3Ny8HWvbIR8FupGiDHX-3nmYyY2nEAw7ha0U0QZfiOpVVIzP7GTyW7TMpXGY3cePoOTlxwXc1P_8tUe-llnlxvmFbHsGKhqPXwRpCGyvPEmzMuoi8AYCtyNbZPsac7qMvRM3c_jEmMVIlfmoWeP3Y49tzVoJvSYldwUs2Gx4rHh1CKzPk8bLAHTgoAEmUs4km2zna0Z3CNpm0hRyYXwUqdRWSmHdqIGN67Yj7IKw8jpwFEUOQ', strength: 'strong' },
    { id: 2, name: 'Amazon', username: 'alex_user', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfohi5aC4Ofmi8QlRjG7oZAbsCZRCvuCLSjtRewkMvp008OCN0VV8mTKrkcfrhc0rQzU30xR4BgS_tTnMPArS6Gno1H3qTunjuAZcat5u3XawNta4vYhGbcaXN0AvEPMU9YUxeQsG_Mhw8AN0z7y0UIIe0hfZsWKLCeCN8q-R_oCWDGp-zPf4qCLDQa-2CLlFweD0I6JHk4KEAJpwLpyz1nkVhyNI26jclnMAVrZvswQ38ivwV2cTtVLorbnBAMPhxRNmahiamAm4', strength: 'strong' },
    { id: 3, name: 'Facebook', username: 'alex.1234', icon: null, iconText: 'f', iconBg: 'bg-blue-600', strength: 'weak' },
    { id: 4, name: 'Netflix', username: 'alexnetflix', icon: null, iconText: 'NETFLIX', iconBg: 'bg-black', iconColor: 'text-red-500', strength: 'strong' },
    { id: 5, name: 'PayPal', username: 'alex.p123', icon: null, iconType: 'payments', strength: 'strong' }
  ];

  const breachAlerts = [
    { id: 1, name: 'Dropbox', type: 'Password Leak', icon: 'cloud_queue', iconColor: 'text-blue-500' },
    { id: 2, name: 'LinkedIn', type: 'Email Leak', icon: 'work', iconColor: 'text-blue-700' }
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark antialiased min-h-screen flex flex-col transition-colors duration-200">
      <header className="bg-surface-light dark:bg-surface-dark border-b border-border-light dark:border-border-dark sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-primary text-white p-1 rounded-lg">
              <span className="material-icons-round text-2xl">verified_user</span>
            </div>
            <span className="text-xl font-bold text-primary tracking-tight">NoMoreForgot</span>
          </div>
          <div className="flex items-center space-x-6 text-sm font-medium text-subtext-light dark:text-subtext-dark">
            <a className="hover:text-primary transition-colors flex items-center space-x-1" href="#">
              <span className="material-icons-round text-base">security</span>
              <span>Security Checkup</span>
            </a>
            <a className="hover:text-primary transition-colors flex items-center space-x-1" href="#">
              <span className="material-icons-round text-base">settings</span>
              <span>Settings</span>
            </a>
            <a className="hover:text-primary transition-colors flex items-center space-x-1" href="#">
              <span className="material-icons-round text-base">help_outline</span>
              <span>Help</span>
            </a>
            <div className="h-6 w-px bg-border-light dark:bg-border-dark mx-2"></div>
            <button className="flex items-center space-x-2 hover:bg-background-light dark:hover:bg-background-dark py-1 px-2 rounded-full transition-colors">
              <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 overflow-hidden">
                <img alt="User Avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZamzwYcCAxqVy3jAnEV0wJbgsxRzYVpcXKGhGtaEmpXE9BaIaDxW9nSEwfGCDF4gbPW9jkAPOnAg6EK6KqkVF-93ILrxpXvZtH7UVugGmXACBgBjTEX5CJ2DCI4_OovNTxY0w8A37vbA6pov9VoCRI8XURZMx-jxO2U0PksKnlcpHn3YkXbPlcEiBU3heN-zJLvXZ-Dcnh2ypeh0IZiqgCcPYyd2kue9okzwUbE71SjtlRG5xYKnQgpQqveQMOK7zCKoDrMmiNeU" />
              </div>
              <span>Alex</span>
              <span className="material-icons-round text-lg">expand_more</span>
            </button>
          </div>
        </div>
      </header>
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 flex gap-8">
        <aside className="w-64 flex-shrink-0 hidden lg:block">
          <nav className="space-y-1">
            <a className="bg-blue-50 dark:bg-blue-900/20 text-primary flex items-center px-4 py-3 text-sm font-medium rounded-lg group" href="#">
              <span className="material-icons-round mr-3 text-xl">grid_view</span>
              Dashboard
            </a>
            <Link to="/vault" className="text-subtext-light dark:text-subtext-dark hover:bg-surface-light dark:hover:bg-surface-dark hover:text-primary dark:hover:text-white flex items-center px-4 py-3 text-sm font-medium rounded-lg group transition-colors">
              <span className="material-icons-round mr-3 text-xl text-subtext-light dark:text-subtext-dark group-hover:text-primary dark:group-hover:text-white">lock</span>
              All Items
            </Link>
            <Link to="/secure-notes" className="text-subtext-light dark:text-subtext-dark hover:bg-surface-light dark:hover:bg-surface-dark hover:text-primary dark:hover:text-white flex items-center px-4 py-3 text-sm font-medium rounded-lg group transition-colors">
              <span className="material-icons-round mr-3 text-xl text-subtext-light dark:text-subtext-dark group-hover:text-primary dark:group-hover:text-white">note</span>
              Secure Notes
            </Link>
            <a className="text-subtext-light dark:text-subtext-dark hover:bg-surface-light dark:hover:bg-surface-dark hover:text-primary dark:hover:text-white flex items-center px-4 py-3 text-sm font-medium rounded-lg group transition-colors" href="#">
              <span className="material-icons-round mr-3 text-xl text-subtext-light dark:text-subtext-dark group-hover:text-primary dark:group-hover:text-white">password</span>
              Password Generator
            </a>
            <Link to="/activity" className="text-subtext-light dark:text-subtext-dark hover:bg-surface-light dark:hover:bg-surface-dark hover:text-primary dark:hover:text-white flex items-center px-4 py-3 text-sm font-medium rounded-lg group transition-colors">
              <span className="material-icons-round mr-3 text-xl text-subtext-light dark:text-subtext-dark group-hover:text-primary dark:group-hover:text-white">bar_chart</span>
              Activity
            </Link>
          </nav>
          <div className="mt-8">
            <h3 className="px-4 text-xs font-semibold text-subtext-light dark:text-subtext-dark uppercase tracking-wider">
              Recent Logins
            </h3>
            <div className="mt-4 space-y-1">
              <a className="group flex items-center px-4 py-2 text-sm font-medium text-text-light dark:text-text-dark rounded-md hover:bg-surface-light dark:hover:bg-surface-dark transition-colors" href="#">
                <div className="mr-3 flex-shrink-0 h-6 w-6 rounded-full bg-white flex items-center justify-center p-1 border border-border-light dark:border-border-dark">
                  <img alt="Amazon" className="w-full h-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJYLAaZ__og38AQ-tjVpMO1CT59rszjGx7ZdvtY5GfbGSNAmG9Sqwj_GwQJ9404z_YX8BOuLXI6G8rfzMFzAJULn1kzv_SnR1mzM4ExgkYaFa1my4JngrwxeBfFziXYMmMSg6Et8ogGjg_zaQkVBGWetS9aAYFO9dMFVELwhDGHBRLgwj179YIi5i-l6OkbehrMw4SpjDIGSFGRe2yejk5KTm_A3n7oLzblmkRg5dENp8QiFMWOjeWhgdefw8ARm3JRKC2hEDTJiI" />
                </div>
                Amazon
              </a>
              <a className="group flex items-center px-4 py-2 text-sm font-medium text-text-light dark:text-text-dark rounded-md hover:bg-surface-light dark:hover:bg-surface-dark transition-colors" href="#">
                <div className="mr-3 flex-shrink-0 h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center p-1 text-white">
                  <span className="font-bold text-xs">f</span>
                </div>
                Facebook
              </a>
              <a className="group flex items-center px-4 py-2 text-sm font-medium text-text-light dark:text-text-dark rounded-md hover:bg-surface-light dark:hover:bg-surface-dark transition-colors" href="#">
                <div className="mr-3 flex-shrink-0 h-6 w-6 rounded-full bg-white flex items-center justify-center p-1 border border-border-light dark:border-border-dark">
                  <img alt="Gmail" className="w-full h-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkXX1XXEuAIEq5uxjqJvgAsXH7xiE3JZt1dfyc7cCMovwinKG78VsQ9Z-_S6jfeO1OM1g_l4IlncHtXsKzie1oIEB-Q3bdOYpfQZB_IN-M_vKxggmIIuqLrhNUzX6xiFBq-iW6svrt7l5huJmqfJzYlgekSFnVTABUKBOBoudpuGvmUUBTYaSrXadFGqHCYOAwpt0Y8WDyc5HCLzDth6R-YwjSKl0Ux5t5QRLCt7imzSwIRWPY2a7DE0G-JKFX00ZtwG5wFmuUwWI" />
                </div>
                Gmail
              </a>
            </div>
          </div>
        </aside>
        <main className="flex-1 min-w-0">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-text-light dark:text-text-dark">Welcome back, Alex!</h1>
            <p className="text-subtext-light dark:text-subtext-dark mt-1">Here is what's happening with your secure vault today.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-5 border border-border-light dark:border-border-dark shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-primary">
                  <span className="material-icons-round text-2xl">vpn_key</span>
                </div>
                <span className="text-3xl font-bold text-text-light dark:text-text-dark">{stats.savedPasswords}</span>
              </div>
              <div className="text-sm font-medium text-subtext-light dark:text-subtext-dark">Saved Passwords</div>
            </div>
            <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-5 border border-border-light dark:border-border-dark shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-2 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400">
                  <span className="material-icons-round text-2xl">sticky_note_2</span>
                </div>
                <span className="text-3xl font-bold text-text-light dark:text-text-dark">{stats.secureNotes}</span>
              </div>
              <div className="text-sm font-medium text-subtext-light dark:text-subtext-dark">Secure Notes</div>
            </div>
            <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-5 border border-border-light dark:border-border-dark shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-2 bg-teal-50 dark:bg-teal-900/30 rounded-lg text-teal-600 dark:text-teal-400">
                  <span className="material-icons-round text-2xl">security</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-success">{stats.twoFactorEnabled ? 'Enabled' : 'Disabled'}</span>
                  <span className="text-xs text-subtext-light dark:text-subtext-dark">2FA Status</span>
                </div>
              </div>
              <div className="text-sm font-medium text-subtext-light dark:text-subtext-dark mt-1">Account Protected</div>
            </div>
            <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-5 border border-danger/20 dark:border-danger/30 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute right-0 top-0 p-3 opacity-10">
                <span className="material-icons-round text-6xl text-danger">warning</span>
              </div>
              <div className="flex items-center space-x-3 mb-2 relative z-10">
                <div className="p-2 bg-red-50 dark:bg-red-900/30 rounded-lg text-danger">
                  <span className="material-icons-round text-2xl">warning</span>
                </div>
                <span className="text-3xl font-bold text-danger">{stats.breachAlerts}</span>
              </div>
              <div className="text-sm font-medium text-danger relative z-10">Breach Alerts</div>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row gap-8">
            <div className="flex-1 bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark shadow-sm overflow-hidden">
              <div className="p-5 border-b border-border-light dark:border-border-dark flex justify-between items-center">
                <h2 className="text-lg font-bold text-text-light dark:text-text-dark flex items-center gap-2">
                  My Passwords
                  <span className="material-icons-round text-subtext-light dark:text-subtext-dark text-base cursor-help" title="Recent activity">history</span>
                </h2>
                <div className="flex space-x-2">
                  <button className="p-1 text-subtext-light dark:text-subtext-dark hover:text-primary transition-colors">
                    <span className="material-icons-round">settings</span>
                  </button>
                  <button className="p-1 text-subtext-light dark:text-subtext-dark hover:text-primary transition-colors">
                    <span className="material-icons-round">filter_list</span>
                  </button>
                </div>
              </div>
              <div className="p-4 border-b border-border-light dark:border-border-dark bg-background-light/50 dark:bg-background-dark/30">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="material-icons-round text-subtext-light dark:text-subtext-dark text-xl">search</span>
                    </div>
                    <input className="block w-full pl-10 pr-3 py-2 border border-border-light dark:border-border-dark rounded-lg leading-5 bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark placeholder-subtext-light dark:placeholder-subtext-dark focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm" placeholder="Search passwords..." type="text" />
                  </div>
                  <select className="block w-32 pl-3 pr-8 py-2 border border-border-light dark:border-border-dark rounded-lg leading-5 bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm">
                    <option>All Categories</option>
                    <option>Social</option>
                    <option>Shopping</option>
                    <option>Finance</option>
                  </select>
                </div>
              </div>
              <div className="divide-y divide-border-light dark:divide-border-dark">
                {passwords.map((password) => (
                  <div key={password.id} className="p-4 flex items-center justify-between hover:bg-background-light dark:hover:bg-background-dark/50 transition-colors group cursor-pointer">
                    <div className="flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${password.iconBg || 'bg-white border border-border-light dark:border-border-dark'} p-2`}>
                        {password.icon ? (
                          <img alt={password.name} className="w-full h-full" src={password.icon} />
                        ) : password.iconText ? (
                          <span className={`font-bold ${password.iconText === 'NETFLIX' ? 'text-xs text-red-500 tracking-tighter' : password.iconText === 'f' ? 'text-lg text-white' : ''}`}>{password.iconText}</span>
                        ) : password.iconType ? (
                          <span className={`material-icons-round ${password.iconType === 'payments' ? 'text-blue-800 text-2xl' : ''}`}>{password.iconType}</span>
                        ) : null}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-text-light dark:text-text-dark">{password.name}</div>
                        <div className="text-xs text-subtext-light dark:text-subtext-dark">{password.username}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {password.strength === 'weak' && (
                        <span className="text-xs text-warning bg-warning/10 px-2 py-0.5 rounded border border-warning/20">Weak</span>
                      )}
                      <button className="opacity-0 group-hover:opacity-100 transition-opacity bg-white dark:bg-surface-dark border border-border-light dark:border-border-dark text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-primary px-3 py-1 rounded text-xs font-medium shadow-sm">
                        Open
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full xl:w-80 flex flex-col gap-6">
              <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark shadow-sm p-5">
                <h3 className="text-sm font-bold text-text-light dark:text-text-dark mb-4">Security Checkup</h3>
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-16 h-16">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle className="text-gray-200 dark:text-gray-700" cx="32" cy="32" fill="none" r="28" stroke="currentColor" strokeWidth="6"></circle>
                      <circle className="text-success" cx="32" cy="32" fill="none" r="28" stroke="currentColor" strokeDasharray="175.9" strokeDashoffset="26" strokeLinecap="round" strokeWidth="6"></circle>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="material-icons-round text-success text-3xl">verified_user</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-subtext-light dark:text-subtext-dark">Your Security Score:</div>
                    <div className="text-2xl font-bold text-success">{securityScore.value} <span className="text-sm font-medium text-success/80">{securityScore.label}</span></div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-warning">
                      <span className="material-icons-round text-base">warning_amber</span>
                      <span>{securityScore.weakPasswords} Weak Passwords</span>
                    </div>
                    <a className="text-xs font-medium text-primary hover:underline" href="#">Improve</a>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-danger">
                      <span className="material-icons-round text-base">report_problem</span>
                      <span>{securityScore.compromised} Compromised</span>
                    </div>
                    <a className="text-xs font-medium text-primary hover:underline" href="#">Fix Now</a>
                  </div>
                </div>
              </div>
              <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark shadow-sm p-5">
                <h3 className="text-sm font-bold text-text-light dark:text-text-dark mb-4">Breach Alerts</h3>
                <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-3 flex items-start gap-3 mb-4">
                  <span className="material-icons-round text-danger mt-0.5">error</span>
                  <div>
                    <div className="text-sm font-bold text-danger">2 Data Breaches Detected</div>
                    <div className="text-xs text-danger/80 mt-1">Action required for affected accounts.</div>
                  </div>
                </div>
                <div className="space-y-3">
                  {breachAlerts.map((alert) => (
                    <div key={alert.id} className="flex items-center justify-between p-2 rounded hover:bg-background-light dark:hover:bg-background-dark/50 transition-colors">
                      <div className="flex items-center gap-2">
                        <span className={`material-icons-round ${alert.iconColor} text-xl`}>{alert.icon}</span>
                        <div className="flex flex-col">
                          <span className="text-sm font-medium text-text-light dark:text-text-dark">{alert.name}</span>
                          <span className="text-xs text-subtext-light dark:text-subtext-dark">{alert.type}</span>
                        </div>
                      </div>
                      <button className="text-xs font-medium text-primary border border-primary/20 dark:border-primary/40 px-2 py-1 rounded hover:bg-primary hover:text-white transition-colors">
                        {alert.type.includes('Password') ? 'Fix' : 'Update'}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary to-primary-dark rounded-xl shadow-md p-5 text-white">
                <h3 className="text-sm font-bold mb-4 flex items-center gap-2">
                  <span className="material-icons-round">build</span>
                  Quick Tools
                </h3>
                <div className="space-y-2">
                  <button className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/20 rounded-lg p-2 text-sm flex items-center justify-center gap-2 transition-colors">
                    <span className="material-icons-round text-base">add</span>
                    Add Password
                  </button>
                  <button className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/20 rounded-lg p-2 text-sm flex items-center justify-center gap-2 transition-colors">
                    <span className="material-icons-round text-base">password</span>
                    Generate Secure Password
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark p-5 flex items-center justify-between">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-full text-orange-600 dark:text-orange-400">
                  <span className="material-icons-round text-2xl">vpn_key</span>
                </div>
                <div>
                  <h4 className="font-bold text-text-light dark:text-text-dark">Password Generator</h4>
                  <p className="text-sm text-subtext-light dark:text-subtext-dark mt-1">Create strong, unique passwords instantly.</p>
                </div>
              </div>
              <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">Generate</button>
            </div>
            <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark p-5 flex items-center justify-between">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full text-purple-600 dark:text-purple-400">
                  <span className="material-icons-round text-2xl">lock</span>
                </div>
                <div>
                  <h4 className="font-bold text-text-light dark:text-text-dark">Secure Notes</h4>
                  <p className="text-sm text-subtext-light dark:text-subtext-dark mt-1">Keep sensitive information private and encrypted.</p>
                </div>
              </div>
              <button className="bg-surface-light dark:bg-surface-dark hover:bg-background-light dark:hover:bg-background-dark text-primary border border-primary px-4 py-2 rounded-lg text-sm font-medium transition-colors">View Notes</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

