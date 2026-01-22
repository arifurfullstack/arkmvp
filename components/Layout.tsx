
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
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 glass border-b border-white/5 h-14">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 
              className="text-xl font-black tracking-tighter text-white flex items-center gap-1.5 cursor-pointer"
              onClick={() => setActivePage(Page.Landing)}
            >
              ARK
            </h1>
            <div className="relative hidden md:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm">search</span>
              <input 
                className="bg-obsidian border border-white/5 rounded-lg pl-9 pr-4 py-1.5 text-[13px] w-[320px] focus:border-white/20 outline-none text-slate-200 placeholder:text-slate-600 transition-all" 
                placeholder="Search stories, tags, people..." 
                type="text" 
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={onOpenCreateModal}
              className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-4 py-1.5 rounded-lg text-[13px] font-bold transition-all"
            >
              Create Post
            </button>
            <button className="p-1.5 text-slate-400 hover:text-white transition-colors">
              <span className="material-symbols-outlined text-lg">notifications</span>
            </button>
            <div 
              className="flex items-center gap-2 px-2 py-1 bg-white/5 border border-white/5 rounded-full cursor-pointer hover:bg-white/10 transition-all"
              onClick={() => setActivePage(Page.Profile)}
            >
              <span className="text-[11px] font-bold text-white pl-1">Me •</span>
              <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white text-[10px] font-bold">JR</div>
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
      <div className="lg:hidden fixed bottom-0 left-0 w-full glass border-t border-white/5 flex items-center justify-around py-3 z-50">
        <button onClick={() => setActivePage(Page.Feed)} className={`material-symbols-outlined ${activePage === Page.Feed ? 'text-primary' : 'text-slate-600'}`}>home</button>
        <button onClick={() => setActivePage(Page.Explore)} className={`material-symbols-outlined ${activePage === Page.Explore ? 'text-primary' : 'text-slate-600'}`}>explore</button>
        <button onClick={onOpenCreateModal} className="material-symbols-outlined text-white bg-primary p-2 rounded-full shadow-lg shadow-primary/20">add</button>
        <button onClick={() => setActivePage(Page.Profile)} className={`material-symbols-outlined ${activePage === Page.Profile ? 'text-primary' : 'text-slate-600'}`}>person</button>
      </div>
    </div>
  );
};

export default Layout;
