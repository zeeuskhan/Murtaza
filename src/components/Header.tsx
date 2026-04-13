import React, { useState } from 'react';
import { Menu, X, Globe, Languages, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { pathname } = useLocation();

  const navItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.forms'), path: '/forms' },
    { name: t('nav.tools'), path: '/tools' },
    { name: t('nav.schemes'), path: '/schemes' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && (pathname === '/' || pathname === '/index.html' || pathname.endsWith('index.html'))) return true;
    return pathname === path || pathname.endsWith(path) || pathname === `${path}.html` || pathname.endsWith(`${path}.html`);
  };

  return (
    <nav className="sticky top-0 z-50 glass-3d border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group relative z-[60] card-3d px-3 py-1 rounded-xl bg-white/50">
            <div className="p-2 bg-indigo-600 rounded-lg text-white group-hover:rotate-12 transition-transform shadow-3d">
              <Globe size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black text-slate-900 tracking-tight leading-none text-gradient">e-Mitra</span>
              <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest">Bhilwara</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 relative z-[60]">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/50 rounded-2xl border border-white/20 shadow-3d-inner">
              {navItems.map((item) => {
                const active = isActive(item.path);
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`inline-block px-4 py-2 text-sm font-bold transition-all relative z-[70] hover:-translate-y-0.5 ${
                      active ? 'text-indigo-600' : 'text-slate-500 hover:text-indigo-600'
                    }`}
                  >
                    {item.name}
                    {active && (
                      <motion.div
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 rounded-full mx-4"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>
            
            {/* Language Toggle */}
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white/50 rounded-full border border-white/20 shadow-3d-inner relative z-[60]">
              <Languages size={14} className="text-slate-400" />
              <button 
                onClick={() => setLanguage('en')}
                className={`text-xs font-bold transition-colors ${language === 'en' ? 'text-indigo-600' : 'text-slate-400 hover:text-slate-600'}`}
              >
                EN
              </button>
              <span className="text-slate-200 text-xs">|</span>
              <button 
                onClick={() => setLanguage('hi')}
                className={`text-xs font-bold transition-colors ${language === 'hi' ? 'text-indigo-600' : 'text-slate-400 hover:text-slate-600'}`}
              >
                हिंदी
              </button>
            </div>

            <a
              href="tel:+916350489219"
              className="bg-indigo-600 text-white px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest shadow-3d hover:scale-105 hover:shadow-3d-hover transition-all relative z-[60]"
            >
              {t('nav.callUs')}
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden relative z-[60]">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-full border border-slate-100">
              <button 
                onClick={() => setLanguage('en')}
                className={`text-[10px] font-bold ${language === 'en' ? 'text-indigo-600' : 'text-slate-400'}`}
              >
                EN
              </button>
              <span className="text-slate-200 text-[10px]">|</span>
              <button 
                onClick={() => setLanguage('hi')}
                className={`text-[10px] font-bold ${language === 'hi' ? 'text-indigo-600' : 'text-slate-400'}`}
              >
                हिंदी
              </button>
            </div>
            <button className="p-2 text-slate-600" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden shadow-2xl"
          >
            <div className="px-6 py-8 flex flex-col gap-2">
              {navItems.map((item, i) => {
                const active = isActive(item.path);
                return (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between px-6 py-4 rounded-2xl font-bold transition-all ${
                        active 
                          ? 'bg-indigo-50 text-indigo-600 shadow-3d-inner' 
                          : 'text-slate-500 hover:bg-slate-50'
                      }`}
                    >
                      {item.name}
                      {active && <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full" />}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
                className="mt-4"
              >
                <a
                  href="tel:+916350489219"
                  className="w-full inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-8 py-5 rounded-[24px] text-center font-black uppercase tracking-widest shadow-3d active:scale-[0.98] transition-all"
                >
                  <Phone size={20} />
                  {t('nav.callUs')}
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
