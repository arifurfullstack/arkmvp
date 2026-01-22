
import React from 'react';
import { Page } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activePage: Page;
  setActivePage: (page: Page) => void;
  onOpenCreateModal: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activePage, setActivePage, onOpenCreateModal }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gradient-to-br from-obsidian via-charcoal to-obsidian pb-20 lg:pb-0">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 glass border-b border-white/5 h-16 shadow-lg shadow-primary/5">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 
              className="text-2xl font-black tracking-tighter text-white flex items-center gap-1.5 cursor-pointer hover:text-primary transition-colors duration-300 animate-fade-in"
              onClick={() => setActivePage(Page.Landing)}
            >
              ✨ ARK
            </h1>
            <div className="relative hidden md:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm">search</span>
              <input 
                className="bg-white/[0.02] border border-white/10 rounded-xl pl-9 pr-4 py-2.5 text-[13px] w-[340px] focus:border-primary/50 focus:bg-white/[0.05] outline-none text-slate-200 placeholder:text-slate-600 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.03]" 
                placeholder="Search stories, tags, people..." 
                type="text" 
              />
            </div>
          </div>
          
          <div className="flex items-center gap-3 sm:gap-4">
            <button 
              onClick={onOpenCreateModal}
              className="hidden sm:inline-flex bg-gradient-to-r from-primary/20 to-accent/20 hover:from-primary/30 hover:to-accent/30 text-white border border-primary/30 hover:border-primary/50 px-5 py-2 rounded-lg text-[13px] font-bold transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5"
            >
              ✍️ Create Post
            </button>
            <button className="p-2 text-slate-400 hover:text-primary hover:bg-white/5 rounded-lg transition-all duration-300 hover:shadow-md hover:shadow-primary/10">
              <span className="material-symbols-outlined text-lg">notifications</span>
            </button>
            <div 
              className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-white/5 to-white/[0.02] border border-primary/20 hover:border-primary/50 rounded-full cursor-pointer hover:bg-white/10 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/10"
              onClick={() => setActivePage(Page.Profile)}
            >
              <span className="text-[11px] font-bold text-slate-300 pl-1 group-hover:text-white transition-colors">Me •</span>
              <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white text-[11px] font-bold shadow-lg shadow-primary/20">JR</div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Grid */}
      <div className="flex-grow max-w-[1400px] mx-auto w-full px-4 py-6 grid grid-cols-12 gap-6">
        {/* Left Sidebar */}
        <aside className="hidden lg:block col-span-3 space-y-8 sticky top-20 self-start">
          <section>
            <h3 className="text-[11px] font-black uppercase tracking-widest text-white mb-4">Your ARK</h3>
            <div className="space-y-1">
              {[
                { name: 'My profile', icon: 'person', page: Page.Profile },
                { name: 'My tracker (coming soon)', icon: 'insights' },
                { name: 'Saved posts', icon: 'bookmark' },
                { name: 'Settings', icon: 'settings' }
              ].map(item => (
                <button 
                  key={item.name}
                  onClick={() => item.page && setActivePage(item.page)}
                  className={`w-full flex items-center gap-3 px-3 py-2 text-[13px] rounded-lg transition-all ${activePage === item.page ? 'bg-white/5 text-white font-bold' : 'text-slate-500 hover:bg-white/5 hover:text-slate-300'}`}
                >
                  <span className="material-symbols-outlined text-lg">{item.icon}</span>
                  {item.name}
                </button>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-[11px] font-black uppercase tracking-widest text-white mb-4">Your communities</h3>
            <div className="flex flex-wrap gap-2">
              {['Toronto', 'Habad', 'Pay it forward', 'Environmental'].map(tag => (
                <button key={tag} className="px-3 py-1 bg-white/5 hover:bg-white/10 border border-white/5 rounded-lg text-[11px] font-bold text-slate-400 transition-all">
                  {tag}
                </button>
              ))}
            </div>
          </section>
        </aside>

        {/* Content Area */}
        <main className="col-span-12 lg:col-span-6 space-y-6">
          {children}
        </main>

        {/* Right Sidebar */}
        <aside className="hidden lg:block col-span-3 space-y-6 sticky top-20 self-start">
          <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-5">
            <h3 className="text-[12px] font-black text-white mb-4">Suggested to follow</h3>
            <div className="flex flex-wrap gap-2">
              {['LGBTQ2S+', 'Seniors', 'Youth', 'Environmental action'].map(tag => (
                <button key={tag} className="px-3 py-1 bg-white/5 hover:bg-white/10 border border-white/5 rounded-full text-[11px] text-slate-400 transition-all">
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-5">
            <h3 className="text-[12px] font-black text-white mb-4">Trending stories</h3>
            <div className="space-y-4">
              <div className="p-3 bg-black/20 rounded-xl border border-white/5 cursor-pointer hover:border-white/10">
                <p className="text-[13px] font-bold text-slate-200">“A tire change in the cold...”</p>
                <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-widest font-bold">Pay it forward • 142 inspired</p>
              </div>
              <div className="p-3 bg-black/20 rounded-xl border border-white/5 cursor-pointer hover:border-white/10">
                <p className="text-[13px] font-bold text-slate-200">“Community cleanup day...”</p>
                <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-widest font-bold">Environmental • 98 inspired</p>
              </div>
            </div>
          </div>

          <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-5">
            <h3 className="text-[12px] font-black text-white mb-4">Campaigns</h3>
            <p className="text-[11px] text-slate-500 leading-relaxed">Verified nonprofits and campaigns will appear here as ARK expands.</p>
          </div>
        </aside>
      </div>

      {/* Mobile Nav */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 glass border-t border-white/10 flex items-center justify-around py-3 z-50 backdrop-blur-xl">
        <button onClick={() => setActivePage(Page.Feed)} className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-all duration-300 ${activePage === Page.Feed ? 'text-primary bg-primary/10' : 'text-slate-600 hover:text-white hover:bg-white/5'}`}>
          <span className="material-symbols-outlined">home</span>
          <span className="text-[9px] font-bold">Home</span>
        </button>
        <button onClick={() => setActivePage(Page.Explore)} className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-all duration-300 ${activePage === Page.Explore ? 'text-primary bg-primary/10' : 'text-slate-600 hover:text-white hover:bg-white/5'}`}>
          <span className="material-symbols-outlined">explore</span>
          <span className="text-[9px] font-bold">Explore</span>
        </button>
        <button onClick={onOpenCreateModal} className="material-symbols-outlined text-white bg-gradient-to-r from-primary to-accent p-3 rounded-full shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-1">add</button>
        <button onClick={() => setActivePage(Page.Profile)} className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-all duration-300 ${activePage === Page.Profile ? 'text-primary bg-primary/10' : 'text-slate-600 hover:text-white hover:bg-white/5'}`}>
          <span className="material-symbols-outlined">person</span>
          <span className="text-[9px] font-bold">Profile</span>
        </button>
      </div>
    </div>
  );
};

export default Layout;
