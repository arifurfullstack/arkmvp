
import React from 'react';

const Explore: React.FC = () => {
  return (
    <div className="space-y-12 pb-24">
      <header>
        <h1 className="text-5xl font-black tracking-tight mb-6 bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">Explore Communities</h1>
        <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">Connect with thousands of global communities dedicated to acts of random kindness and social impact.</p>
      </header>

      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            Trending Topics
          </h2>
          <button className="text-[10px] font-black uppercase tracking-widest text-primary hover:text-white">View all tags</button>
        </div>
        <div className="flex flex-wrap gap-3">
          {['Community support', 'Animal welfare', 'Pay it forward', 'Environment', 'Seniors', 'Youth programs', 'Medical aid', 'Crisis relief'].map(tag => (
            <button key={tag} className="px-6 py-2 bg-charcoal border border-border-dark rounded-full text-sm font-bold text-white hover:border-primary/50 transition-all">
              {tag}
            </button>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-black text-white mb-10">Kindness Hubs</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { name: 'Toronto Kindness Collective', members: '4.2k', desc: 'The original hub for grassroots kindness in the GTA.', image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=400&q=80' },
            { name: 'Planet First Architects', members: '8.1k', desc: 'Sustainable living meets radical empathy. Helping the earth and its people.', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80' }
          ].map(hub => (
            <div key={hub.name} className="bg-charcoal border border-border-dark rounded-[2.5rem] overflow-hidden group hover:border-primary/50 transition-all">
              <div className="h-48 overflow-hidden">
                <img src={hub.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60" />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-black text-white">{hub.name}</h3>
                  <span className="text-[10px] font-black text-primary uppercase tracking-widest">{hub.members} members</span>
                </div>
                <p className="text-slate-400 mb-6">{hub.desc}</p>
                <button className="w-full bg-primary/10 text-primary py-3 rounded-2xl font-bold border border-primary/20 hover:bg-primary hover:text-white transition-all">Join Community</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Explore;
