
import React from 'react';
import { Page } from '../types';

interface LandingProps {
  onEnterApp: () => void;
}

const Landing: React.FC<LandingProps> = ({ onEnterApp }) => {
  return (
    <div className="bg-obsidian min-h-screen text-white font-sans hero-glow">
        <nav className="fixed top-0 w-full z-50 border-b border-white/10 glass">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
                <div className="flex items-center gap-2 animate-fade-in">
                    <span className="text-2xl font-black tracking-tighter bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">✨ ARK</span>
                </div>
                <div className="hidden lg:flex items-center gap-8 text-[13px] font-bold text-slate-400">
                    <a href="#" className="hover:text-white hover:text-primary transition-colors duration-300 relative group">
                        How it works
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <a href="#" className="hover:text-white hover:text-primary transition-colors duration-300 relative group">
                        Explore
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <a href="#" className="hover:text-white hover:text-primary transition-colors duration-300 relative group">
                        Communities
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <a href="#" className="hover:text-white hover:text-primary transition-colors duration-300 relative group">
                        Safety
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <a href="#" className="hover:text-white hover:text-primary transition-colors duration-300 relative group">
                        Log in
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <button 
                        onClick={onEnterApp}
                        className="bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 hover:border-primary/60 hover:from-primary/30 hover:to-accent/30 text-white px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 font-bold"
                    >
                        Join ARK
                    </button>
                </div>
                <button onClick={onEnterApp} className="lg:hidden text-[13px] font-bold text-white border border-primary/30 bg-gradient-to-r from-primary/20 to-accent/20 px-4 py-1.5 rounded-lg hover:border-primary/60 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">Join</button>
            </div>
        </nav>

        <header className="pt-32 pb-24 px-6 lg:px-20 max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-up">
                <h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-[1.1] bg-gradient-to-b from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                    Kindness, shared.<br/>
                    Community, strengthened.<br/>
                    Impact, multiplied.
                </h1>
                <p className="text-lg text-slate-300 leading-relaxed max-w-xl font-medium">
                    ARK is a place to post acts of kindness, discover stories that inspire you, and pay it forward—together with the communities you care about.
                </p>
                <div className="flex flex-wrap gap-4">
                    <button onClick={onEnterApp} className="bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 hover:border-primary/60 hover:from-primary/30 hover:to-accent/30 text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1">
                        Join ARK
                    </button>
                    <button onClick={onEnterApp} className="bg-white/[0.05] border border-white/10 hover:border-primary/30 text-white px-8 py-3 rounded-lg font-bold hover:bg-white/[0.1] hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
                        Explore inspiring stories
                    </button>
                </div>
                <div className="flex flex-wrap gap-2 pt-4">
                    {['Pay it forward', 'Toronto', 'Habad', 'LGBTQ2S+', 'Environmental', 'Community support'].map((tag, idx) => (
                        <span key={tag} style={{ animationDelay: `${idx * 50}ms` }} className="px-3 py-1.5 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 hover:border-primary/50 rounded-lg text-[11px] font-bold text-slate-300 hover:text-white uppercase tracking-widest transition-all duration-300 hover:shadow-md hover:shadow-primary/10 animate-slide-up">{tag}</span>
                    ))}
                </div>
            </div>

            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
                <h3 className="text-xs font-black uppercase tracking-widest text-primary/70 mb-4 px-2">✨ Featured stories</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                        { title: 'A warm meal, no questions.', desc: 'We made extra portions and dropped them off downtown...', tags: ['Food'], loc: 'Toronto', img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=400&q=80' },
                        { title: 'Jump-start in the snow.', desc: 'A stranger was stuck, so we grabbed cables and...', tags: ['Pay it forward'], loc: 'Ontario', img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80' },
                        { title: 'Volunteering with friends.', desc: 'Weekend shifts can be joyful when you go together...', tags: ['Volunteering'], loc: 'Ontario', img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=400&q=80' }
                    ].map((card, idx) => (
                        <div key={card.title} style={{ animationDelay: `${idx * 100}ms` }} className="card-hover bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm animate-slide-up">
                            <div className="h-32 bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
                                <img src={card.img} className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                            </div>
                            <div className="p-4 space-y-3">
                                <h4 className="text-[13px] font-black leading-snug text-white group-hover:text-primary transition-colors">{card.title}</h4>
                                <p className="text-[11px] text-slate-400 line-clamp-2 group-hover:text-slate-300 transition-colors">{card.desc}</p>
                                <div className="pt-2 flex flex-wrap gap-2">
                                    <span className="px-2 py-0.5 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded text-[9px] font-bold text-slate-400">{card.tags[0]}</span>
                                    <span className="px-2 py-0.5 rounded text-[9px] font-bold text-slate-600">{card.loc}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </header>

        <section className="py-24 max-w-[1400px] mx-auto px-6 lg:px-20 border-t border-white/5">
            <h2 className="text-2xl font-black mb-12">How it works</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { title: 'Create your kindness profile', desc: 'Pick what you love doing—donating, volunteering, helping neighbors, supporting causes.' },
                    { title: 'Share stories that matter', desc: 'Post a story, photo, or video. Tag it by community, location, and theme.' },
                    { title: 'Inspire others to pay it forward', desc: 'Your story lands in feeds of people who care about the same things—and you can track ripple effects over time.' }
                ].map(step => (
                    <div key={step.title} className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl">
                        <h3 className="text-lg font-bold mb-4">{step.title}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                ))}
            </div>
        </section>

        <section className="py-24 max-w-[1400px] mx-auto px-6 lg:px-20 border-t border-white/5">
            <h2 className="text-2xl font-black mb-12">Explore by tags</h2>
            <div className="flex flex-wrap gap-3">
                {['Rebbe stories', 'Habad', 'Gratitude', 'Everyday kindness', 'Seniors', 'Youth', 'Medical support', 'Housing', 'Canada', 'Ontario', 'Toronto'].map(tag => (
                    <span key={tag} className="px-4 py-2 bg-white/5 border border-white/5 rounded-lg text-xs font-bold text-slate-400 cursor-pointer hover:border-white/20 transition-all">{tag}</span>
                ))}
            </div>
        </section>

        <section className="py-24 max-w-[1400px] mx-auto px-6 lg:px-20 border-t border-white/5">
            <h2 className="text-2xl font-black mb-12 text-center">Kindness makes a measurable difference</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { label: 'Acts shared', val: '12,480' },
                    { label: 'People inspired', val: '84,200' },
                    { label: 'Communities active', val: '320' }
                ].map(stat => (
                    <div key={stat.label} className="p-10 bg-white/[0.02] border border-white/5 rounded-2xl text-center">
                        <div className="text-4xl font-black mb-2">{stat.val}</div>
                        <div className="text-xs font-bold uppercase tracking-widest text-slate-500">{stat.label}</div>
                    </div>
                ))}
            </div>
        </section>

        <section className="py-24 max-w-[1400px] mx-auto px-6 lg:px-20">
            <div className="p-12 bg-white/[0.02] border border-white/5 rounded-3xl text-center">
                <h2 className="text-xl font-black mb-6">Built for trust and safety</h2>
                <p className="text-slate-400 text-sm max-w-2xl mx-auto leading-relaxed">
                    You control who sees your posts. Reporting and moderation tools protect the community. Verified nonprofits and help requests (future features) will include additional safeguards.
                </p>
            </div>
        </section>

        <footer className="py-12 border-t border-white/5 bg-black/40">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-20 flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] font-bold text-slate-600 uppercase tracking-widest">
                <div>© ARK • Acts of Random Kindness</div>
                <div className="flex gap-8">
                    <a href="#" className="hover:text-white transition-colors">About</a>
                    <a href="#" className="hover:text-white transition-colors">FAQ</a>
                    <a href="#" className="hover:text-white transition-colors">Safety</a>
                    <a href="#" className="hover:text-white transition-colors">Privacy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms</a>
                    <a href="#" className="hover:text-white transition-colors">Contact</a>
                </div>
            </div>
        </footer>
    </div>
  );
};

export default Landing;
