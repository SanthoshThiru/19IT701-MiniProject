import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { encrypt, decrypt } from '../../services/EncryptionService/encryptionService';
import { checkDOMSafety } from '../../services/DefenseClickPolicy/defenseClickPolicy';
import { assessRisk, requiresConfirmation, RISK_LEVELS } from '../../services/RiskPolicy/riskPolicy';

const Vault = () => {
  // Master password for demo (in real app, this comes from user input)
  const MASTER_PASSWORD = 'demo123';

  // Mock encrypted passwords (pre-encrypted for demo)
  // In a real app, these would come from backend/API
  const [encryptedPasswords, setEncryptedPasswords] = useState([]);

  // State for revealed passwords
  const [revealedPasswords, setRevealedPasswords] = useState({});
  
  // State for confirmation dialog
  const [confirmationDialog, setConfirmationDialog] = useState(null);

  // Initialize encrypted passwords on mount
  useEffect(() => {
    const initializeEncryptedPasswords = async () => {
      const plainPasswords = {
        1: 'amazonPass123!',
        2: 'facebookPass456',
        3: 'gmailPass789',
        4: 'netflixPass012',
        5: 'paypalSecurePass!'
      };

      const initialPasswords = [
        { id: 1, name: 'Amazon', username: 'alex@gmail.com', lastModified: '11h 00mm', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDde8DWDNat42JuJtmRh_WVYu6aZ0fb9BCjkizaoY0SjwfTUv9JpDyDIf6gjxHD1-sD5wH2GjlTlBV_twu73PjbT_p_YzTTjogsKydtd0vgwai1vSI_bSPKmZEbuTYxf5RiFJxBOkGL54WLz3aL9RSXyNzePicv9tXOQZQSZ8TQjvb3xR39fRO8cQRPpK0rHvczjx5iVOzecfhCZ2GFK_uqqT7mFQHvOrxc2z7eBCdgstjhsldEbIkR7er31DJZ7QlCGCaZK24dNy0', encryptedPassword: null },
        { id: 2, name: 'Facebook', username: 'alex_user', lastModified: '12h 00mm', iconText: 'f', iconBg: 'bg-blue-600', iconColor: 'text-white', encryptedPassword: null },
        { id: 3, name: 'Gmail', username: 'alex.1234@ssemails.com', lastModified: '10h 00mm', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC68kklNFe02c58AFSw0PGqeVRH9HxN3M1De-WgTY_SQmXqcL2vEo9SYQTRdx1obV3eN_88HTh0bSoSu_so1g8HMnpucXGtwhsZKNT4UqDIgMfizwA8a_99G0qu96BdNGeeCMVP7tXz3Mt-ySd5Wrod3glpSwQc6vH6L4lsnFLiLaVFgWxUjv1uNDCEkdeQ8zzTTr1icASnT2oF7jpx7FbdCafjo5QVp_OJz4IA7k9IzHroonTqhQTe9XMxTuXeMDZ-c2t3NIzX3kk', encryptedPassword: null },
        { id: 4, name: 'Netflix', username: 'alexnetflix@emails.com', lastModified: '12h 00mm', iconText: 'N', iconBg: 'bg-black', iconColor: 'text-white', encryptedPassword: null },
        { id: 5, name: 'PayPal', username: 'alex.p1234', lastModified: '12h 00mm', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVqizQFJRVH5i0d4sJlp5QENpR-fL5jxDwEqceWWAyI-PScuUva7OcUZnsGdg4MVeCzi9a6vNJj8ZdeG7NQTHd6lVWe_b0_XNQoCI4Ja563Zy1SHjO6vQOTFVnIB9biSnUCh8QXZWH5EjUhQLwIxeXfnrfTA3MxownWVHC0xS4Ga8dtcoB1VFQes_z8u2-8l-7CJwxLqiYYC-6mN69VBnUTm6bFT9tFjyrMG_Zs8hluJoonD8em1xteDIAffmddz9Srqdeclw6NLE', encryptedPassword: null }
      ];

      const initialized = await Promise.all(
        initialPasswords.map(async (pwd) => {
          if (!pwd.encryptedPassword) {
            const encrypted = await encrypt(plainPasswords[pwd.id], MASTER_PASSWORD);
            return { ...pwd, encryptedPassword: encrypted };
          }
          return pwd;
        })
      );

      setEncryptedPasswords(initialized);
    };

    initializeEncryptedPasswords();
  }, []);

  // Auto-hide passwords after 5 seconds
  useEffect(() => {
    const timers = Object.keys(revealedPasswords).map(id => {
      if (revealedPasswords[id]) {
        return setTimeout(() => {
          setRevealedPasswords(prev => {
            const updated = { ...prev };
            delete updated[id];
            return updated;
          });
        }, 5000);
      }
      return null;
    });

    return () => {
      timers.forEach(timer => timer && clearTimeout(timer));
    };
  }, [revealedPasswords]);

  const handlePasswordReveal = async (passwordId) => {
    // If already revealed, hide it
    if (revealedPasswords[passwordId]) {
      setRevealedPasswords(prev => {
        const updated = { ...prev };
        delete updated[passwordId];
        return updated;
      });
      return;
    }

    // Step 1: Defense Click Policy check
    const safetyCheck = checkDOMSafety();
    if (!safetyCheck.safe) {
      alert(`Security check failed: ${safetyCheck.reason}`);
      return;
    }

    // Step 2: Risk assessment
    const passwordData = encryptedPasswords.find(p => p.id === passwordId);
    if (!passwordData) return;

    const riskLevel = assessRisk(passwordData);
    
    // Step 3: Check if confirmation is required
    if (requiresConfirmation(riskLevel)) {
      setConfirmationDialog({
        passwordId,
        riskLevel,
        message: `This is a ${riskLevel}-risk credential. Are you sure you want to reveal it?`
      });
      return;
    }

    // Step 4: Decrypt and reveal password
    await revealPassword(passwordId);
  };

  const revealPassword = async (passwordId) => {
    const passwordData = encryptedPasswords.find(p => p.id === passwordId);
    if (!passwordData || !passwordData.encryptedPassword) return;

    try {
      const decrypted = await decrypt(passwordData.encryptedPassword, MASTER_PASSWORD);
      setRevealedPasswords(prev => ({
        ...prev,
        [passwordId]: decrypted
      }));
    } catch (error) {
      alert('Failed to decrypt password: ' + error.message);
    }
  };

  const handleConfirmation = async (confirmed) => {
    if (confirmed && confirmationDialog) {
      await revealPassword(confirmationDialog.passwordId);
    }
    setConfirmationDialog(null);
  };

  const getPasswordDisplay = (passwordId) => {
    if (revealedPasswords[passwordId]) {
      return revealedPasswords[passwordId];
    }
    return '••••••••';
  };

  const secureNotes = [
    { id: 1, name: 'VPN Credentials', lastModified: '11h 00mm', icon: 'sticky_note_2' },
    { id: 2, name: 'Medical info', lastModified: '12h 30mm', icon: 'medical_services' },
    { id: 3, name: 'Twitter', username: 'alex.p123', lastModified: '13h 00mm', icon: 'chat' }
  ];

  const passwordStrength = {
    strong: 45,
    medium: 25,
    weak: 25,
    worse: 5,
    total: 100,
    score: 45,
    label: 'Strong'
  };

  const weakPasswords = [
    { id: 1, name: 'Facebook', icon: 'f', iconBg: 'bg-blue-600', iconColor: 'text-white' },
    { id: 2, name: 'Dropbox', icon: 'folder', iconType: 'material-icons', iconBg: 'bg-blue-100 dark:bg-blue-900', iconColor: 'text-blue-600 dark:text-blue-300' }
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-display antialiased transition-colors duration-200">
      <header className="bg-surface-light dark:bg-surface-dark border-b border-border-light dark:border-border-dark sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <div className="flex items-center gap-2">
                <div className="bg-primary text-white p-1.5 rounded-lg">
                  <span className="material-icons text-xl">shield</span>
                </div>
                <span className="font-bold text-xl tracking-tight text-primary">NoMoreForgot</span>
              </div>
            </div>
            <div className="flex items-center space-x-6 text-sm font-medium text-text-muted-light dark:text-text-muted-dark">
              <a className="hover:text-primary dark:hover:text-primary flex items-center gap-1 transition-colors" href="#">
                <span className="material-icons text-lg">verified_user</span> Security Checkup
              </a>
              <a className="hover:text-primary dark:hover:text-primary flex items-center gap-1 transition-colors" href="#">
                <span className="material-icons text-lg">settings</span> Settings
              </a>
              <a className="hover:text-primary dark:hover:text-primary flex items-center gap-1 transition-colors" href="#">
                <span className="material-icons text-lg">help_outline</span> Help
              </a>
              <div className="h-6 w-px bg-border-light dark:bg-border-dark mx-2"></div>
              <button className="flex items-center gap-2 text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary transition-colors">
                <img alt="User Avatar" className="h-8 w-8 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8PfvRCLhjQmND__S-dcw_7YkOPDEuDurRQh1Fx0AtSnjhtwrjX_AjziYW6WoreTxATi8VJUpuIFTwK3H6ehWuwYJZPpO-kKIOts-Y40bpEAvC0kUNVBReJNa42-ROIX_3NQVW8rIdi5zHBEQ4-QPu3cN5gNLeNCsNbvJegXsGr-rEoNNdhPEyPzalhPFfiovT2sQYQjF8lQR0xZT0yCvvItyh4GueF_l6cqDIUPNrfhRcCytTXQKC8EEHz8lsFeKAvussXZxYXAs" />
                <span>Alex</span>
                <span className="material-icons text-lg">expand_more</span>
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="w-full lg:w-64 flex-shrink-0 space-y-8">
            <nav className="space-y-1">
              <a className="bg-primary/10 text-primary border-l-4 border-primary group flex items-center px-3 py-3 text-sm font-medium rounded-r-md transition-colors" href="#">
                <span className="material-icons mr-3 text-primary">business_center</span>
                Vault
              </a>
              <Link to="/secure-notes" className="text-text-muted-light dark:text-text-muted-dark hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-text-light dark:hover:text-text-dark group flex items-center px-3 py-3 text-sm font-medium rounded-md transition-colors">
                <span className="material-icons mr-3 text-gray-400 dark:text-gray-500">sticky_note_2</span>
                Secure Notes
              </Link>
              <Link to="/dashboard" className="text-text-muted-light dark:text-text-muted-dark hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-text-light dark:hover:text-text-dark group flex items-center px-3 py-3 text-sm font-medium rounded-md transition-colors">
                <span className="material-icons mr-3 text-gray-400 dark:text-gray-500">manage_accounts</span>
                Account
              </Link>
              <Link to="/activity" className="text-text-muted-light dark:text-text-muted-dark hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-text-light dark:hover:text-text-dark group flex items-center px-3 py-3 text-sm font-medium rounded-md transition-colors">
                <span className="material-icons mr-3 text-gray-400 dark:text-gray-500">bar_chart</span>
                Activity
              </Link>
            </nav>
            <div className="pt-4 border-t border-border-light dark:border-border-dark">
              <h3 className="px-3 text-xs font-semibold text-text-muted-light dark:text-text-muted-dark uppercase tracking-wider mb-3">
                Recent Logins
              </h3>
              <div className="space-y-1">
                <a className="bg-white dark:bg-surface-dark shadow-sm border border-border-light dark:border-border-dark group flex items-center px-3 py-2.5 text-sm font-medium rounded-md transition-all hover:shadow-md" href="#">
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center mr-3 border border-gray-100">
                    <img alt="Amazon" className="w-4 h-4 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs5qUEXT0vI0HB1fiF2Jlw5L-yZHDojUrMTbRRo75fTE0rSdsECb3058IccfIMARyKLxDrya6GOghUFo-AxbsZY7UQMOdziLxt0TQhzz0w_1wX0qMSXv8qPzbby-xV0cjA2m_BpyXPBkojH9VgQijujptHtNL4gViVxrOIcENQjThLzy3QnY8mEv6-aPeYv0LuZunaDWLNODpeFbk9_F7xEQfQeetzC3J6g7HOjP_gntB9dGM1PHo1UvuvlqQIwgwqfJWyEvpislA" />
                  </div>
                  <span className="text-text-light dark:text-text-dark">Amazon</span>
                </a>
                <a className="text-text-muted-light dark:text-text-muted-dark hover:bg-gray-50 dark:hover:bg-gray-800 group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors" href="#">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mr-3">
                    <span className="text-white text-[10px] font-bold">f</span>
                  </div>
                  Facebook
                </a>
                <a className="text-text-muted-light dark:text-text-muted-dark hover:bg-gray-50 dark:hover:bg-gray-800 group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors" href="#">
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center mr-3">
                    <img alt="Gmail" className="w-4 h-4 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-624lWBMNLDPVAJw1ydLZjtu49QadKqXhfBDdCEUC5R15sqWCrmTELVlAXXzlIiQw8g56MInfFKvO8K9ZEpSmAGjLBp_QZh9kAlqfMGgSthqNEHKCYFgcIOrTsPnf8WfyboaCVPmU73SYGcTkCo3x3hBG2FGaOawJBqs-CkES5O8SxkeBGhIQ-8VxsurPveeC0aQxjKC9-tpfP0okMLbmfsTNNQqTurnt-M-Htg3yhQgdT7eDlKGLZ4vpyqLnfQDz_Y_QzzcKxbc" />
                  </div>
                  Gmail
                </a>
              </div>
            </div>
          </aside>
          <main className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-text-light dark:text-text-dark">Vault</h1>
              <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm transition-colors flex items-center gap-2">
                <span className="material-icons text-lg">add</span> Add New
              </button>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex-1">
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="material-icons text-gray-400">search</span>
                  </div>
                  <input className="focus:ring-primary focus:border-primary block w-full pl-10 sm:text-sm border-border-light dark:border-border-dark rounded-md py-2.5 bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark placeholder-text-muted-light dark:placeholder-text-muted-dark" placeholder="Search passwords..." type="text" />
                </div>
              </div>
              <div className="hidden md:flex items-center space-x-1 overflow-x-auto pb-1 sm:pb-0">
                <button className="bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap">All</button>
                <button className="text-text-muted-light dark:text-text-muted-dark hover:text-text-light dark:hover:text-text-dark hover:bg-gray-100 dark:hover:bg-gray-800 px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors">Favorites</button>
                <button className="text-text-muted-light dark:text-text-muted-dark hover:text-text-light dark:hover:text-text-dark hover:bg-gray-100 dark:hover:bg-gray-800 px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors">Work</button>
                <button className="text-text-muted-light dark:text-text-muted-dark hover:text-text-light dark:hover:text-text-dark hover:bg-gray-100 dark:hover:bg-gray-800 px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors">Finance</button>
                <button className="text-text-muted-light dark:text-text-muted-dark hover:text-text-light dark:hover:text-text-dark hover:bg-gray-100 dark:hover:bg-gray-800 px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors">Social</button>
              </div>
              <div className="sm:w-40">
                <select className="block w-full pl-3 pr-10 py-2.5 text-base border-border-light dark:border-border-dark focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark">
                  <option>Categories</option>
                  <option>Work</option>
                  <option>Personal</option>
                  <option>Finance</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-4">
                {encryptedPasswords.map((password) => (
                  <div key={password.id} className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark p-4 hover:shadow-md transition-shadow group">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 ${password.iconBg || 'bg-white p-1 border border-gray-100'} rounded-full flex items-center justify-center flex-shrink-0`}>
                          {password.icon ? (
                            <img alt={`${password.name} Logo`} className="w-6 h-6 object-contain" src={password.icon} />
                          ) : password.iconText ? (
                            <span className={`font-bold ${password.iconText === 'N' ? 'text-white' : password.iconText === 'f' ? 'text-lg text-white' : ''}`}>{password.iconText}</span>
                          ) : null}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-text-light dark:text-text-dark text-base group-hover:text-primary transition-colors">{password.name}</h3>
                          <p className="text-sm text-text-muted-light dark:text-text-muted-dark">{password.username}</p>
                          <button
                            onClick={() => handlePasswordReveal(password.id)}
                            className="mt-2 text-xs text-primary hover:text-primary-dark font-medium hover:underline"
                          >
                            {revealedPasswords[password.id] ? 'Hide' : 'Reveal'} Password
                          </button>
                          {password.encryptedPassword && (
                            <p className="text-sm text-text-light dark:text-text-dark font-mono mt-1">
                              {getPasswordDisplay(password.id)}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <button className="text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-primary transition-colors p-1">
                          <span className="material-icons text-xl">expand_more</span>
                        </button>
                      </div>
                    </div>
                    <div className="mt-2 flex justify-end">
                      <span className="text-xs text-text-muted-light dark:text-text-muted-dark">Last Modified {password.lastModified}</span>
                    </div>
                  </div>
                ))}
                <div className="pt-4 pb-2">
                  <h2 className="text-lg font-semibold text-text-light dark:text-text-dark flex items-center gap-2">
                    <span className="material-icons text-text-muted-light dark:text-text-muted-dark">lock</span> Secure Notes
                  </h2>
                </div>
                {secureNotes.map((note) => (
                  <div key={note.id} className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark p-4 hover:shadow-md transition-shadow cursor-pointer group">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0 text-gray-500 dark:text-gray-300">
                          <span className="material-icons">{note.icon}</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-text-light dark:text-text-dark text-base group-hover:text-primary transition-colors">{note.name}</h3>
                          {note.username && (
                            <p className="text-sm text-text-muted-light dark:text-text-muted-dark">{note.username}</p>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-xs text-text-muted-light dark:text-text-muted-dark hidden sm:inline-block">Last Modified {note.lastModified}</span>
                        <button className="text-primary hover:text-primary-dark text-xs font-semibold">Reprove Now <span className="material-icons text-sm align-middle">keyboard_arrow_right</span></button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="lg:col-span-1 space-y-6">
                <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark p-6">
                  <h3 className="text-base font-semibold text-text-light dark:text-text-dark mb-4">Password Strength Breakdown</h3>
                  <div className="flex items-center justify-center py-4 relative">
                    <div className="relative w-40 h-40">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                        <path className="text-gray-100 dark:text-gray-700" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.8"></path>
                        <path className="text-success" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="50, 100" strokeWidth="3.8"></path>
                        <path className="text-warning" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="25, 100" strokeDashoffset="-50" strokeWidth="3.8"></path>
                        <path className="text-danger" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="25, 100" strokeDashoffset="-75" strokeWidth="3.8"></path>
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-3xl font-bold text-text-light dark:text-text-dark">{passwordStrength.score}</span>
                        <span className="text-xs font-medium text-text-muted-light dark:text-text-muted-dark">{passwordStrength.label}</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-success"></span>
                      <span className="text-sm text-text-muted-light dark:text-text-muted-dark">Strong</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-warning"></span>
                      <span className="text-sm text-text-muted-light dark:text-text-muted-dark">Medium</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-danger"></span>
                      <span className="text-sm text-text-muted-light dark:text-text-muted-dark">Weak</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-orange-400"></span>
                      <span className="text-sm text-text-muted-light dark:text-text-muted-dark">Worse</span>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark p-6">
                  <h3 className="text-base font-semibold text-text-light dark:text-text-dark mb-4">Weak Passwords</h3>
                  <div className="space-y-3">
                    {weakPasswords.map((weak) => (
                      <div key={weak.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full ${weak.iconBg} flex items-center justify-center ${weak.iconColor || 'text-white'} ${weak.iconType ? '' : 'text-xs font-bold'}`}>
                            {weak.iconType ? (
                              <span className={`${weak.iconType} text-lg`}>{weak.icon}</span>
                            ) : (
                              <span>{weak.icon}</span>
                            )}
                          </div>
                          <span className="text-sm font-medium text-text-light dark:text-text-dark">{weak.name}</span>
                        </div>
                        <button className="text-xs bg-white dark:bg-surface-dark border border-border-light dark:border-border-dark text-text-muted-light dark:text-text-muted-dark px-2.5 py-1.5 rounded hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">Improve</button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Confirmation Dialog */}
      {confirmationDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-6 max-w-md w-full mx-4 shadow-xl">
            <h3 className="text-lg font-bold text-text-light dark:text-text-dark mb-2">Confirm Password Reveal</h3>
            <p className="text-sm text-text-muted-light dark:text-text-muted-dark mb-4">{confirmationDialog.message}</p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => handleConfirmation(false)}
                className="px-4 py-2 text-sm font-medium text-text-muted-light dark:text-text-muted-dark hover:text-text-light dark:hover:text-text-dark transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => handleConfirmation(true)}
                className="px-4 py-2 text-sm font-medium bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Vault;
