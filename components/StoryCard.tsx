
import React, { useState } from 'react';
import { Story } from '../types';

interface StoryCardProps {
  story: Story;
}

const StoryCard: React.FC<StoryCardProps> = ({ story }) => {
  const [inspired, setInspired] = useState(false);
  const [likeCount, setLikeCount] = useState(18); // Default dummy
  const [inspiredCount, setInspiredCount] = useState(story.inspiredCount);

  const handleInspire = () => {
    if (inspired) {
      setInspiredCount(prev => prev - 1);
    } else {
      setInspiredCount(prev => prev + 1);
    }
    setInspired(!inspired);
  };

  return (
    <article className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 backdrop-blur-sm animate-slide-up">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden border border-primary/30 shadow-lg shadow-primary/20 group-hover:shadow-xl group-hover:shadow-primary/30 transition-all">
            <img src={story.authorAvatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80'} className="w-full h-full object-cover" />
          </div>
          <div>
            <h4 className="text-[13px] font-black text-white leading-tight hover:text-primary transition-colors">{story.authorName}</h4>
            <p className="text-[11px] font-bold text-slate-500">{story.location} • {story.timestamp}</p>
          </div>
        </div>
        <button className="text-slate-600 hover:text-white hover:bg-white/10 p-2 rounded-lg transition-all duration-300 hover:shadow-md hover:shadow-primary/10">
          <span className="material-symbols-outlined text-lg">more_horiz</span>
        </button>
      </div>

      <div className="space-y-3 mb-5">
        <h3 className="text-[15px] font-black text-white leading-tight group-hover:text-primary transition-colors">{story.title}</h3>
        <p className="text-[14px] text-slate-400 leading-relaxed font-medium group-hover:text-slate-300 transition-colors">{story.content}</p>
      </div>

      {story.image && (
        <div className="rounded-2xl overflow-hidden mb-5 aspect-video bg-gradient-to-br from-primary/10 to-accent/10 border border-white/10 group-hover:border-primary/30 transition-all duration-300">
          <img src={story.image} className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
        </div>
      )}

      <div className="flex flex-wrap gap-2 mb-6">
        {story.tags.map(tag => (
          <span key={tag} className="px-3 py-1.5 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 hover:border-primary/50 rounded-lg text-[10px] font-bold text-slate-400 hover:text-slate-300 uppercase tracking-widest transition-all duration-300 hover:shadow-md hover:shadow-primary/10">
            {tag}
          </span>
        ))}
      </div>

      <div className="pt-5 border-t border-white/5 space-y-4">
        <div className="flex items-center gap-2">
            <div className="flex items-center bg-white/[0.02] border border-white/10 rounded-xl p-1">
                <button className="flex items-center gap-1.5 px-3 py-2 text-[11px] font-bold text-slate-500 hover:text-white hover:bg-primary/10 hover:border-primary/30 rounded-lg transition-all duration-300">
                    <span className="material-symbols-outlined text-[16px]">favorite</span>
                    Like
                </button>
                <div className="w-[1px] h-5 bg-white/10"></div>
                <button 
                    onClick={handleInspire}
                    className={`flex items-center gap-1.5 px-3 py-2 text-[11px] font-bold transition-all duration-300 rounded-lg ${inspired ? 'text-primary bg-primary/10 border border-primary/30 shadow-md shadow-primary/10' : 'text-slate-500 hover:text-white hover:bg-white/5 hover:border-white/10'}`}
                >
                    <span className="material-symbols-outlined text-[16px]">auto_awesome</span>
                    Inspired me
                </button>
                <div className="w-[1px] h-5 bg-white/10"></div>
                <button className="flex items-center gap-1.5 px-3 py-2 text-[11px] font-bold text-slate-500 hover:text-white hover:bg-white/5 hover:border-white/10 rounded-lg transition-all duration-300">
                    <span className="material-symbols-outlined text-[16px]">chat_bubble</span>
                    Comment
                </button>
                <div className="w-[1px] h-5 bg-white/10"></div>
                <button className="flex items-center gap-1.5 px-3 py-2 text-[11px] font-bold text-slate-500 hover:text-white hover:bg-white/5 hover:border-white/10 rounded-lg transition-all duration-300">
                    <span className="material-symbols-outlined text-[16px]">send</span>
                    Share
                </button>
            </div>
        </div>
        
        <div className="flex items-center gap-4 text-[11px] font-bold text-slate-500 uppercase tracking-widest">
            <span className="group-hover:text-primary transition-colors">{inspiredCount} inspired</span>
            <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
            <span className="group-hover:text-primary transition-colors">6 paid it forward</span>
            <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
            <span className="group-hover:text-primary transition-colors">{likeCount} likes</span>
        </div>
      </div>
    </article>
  );
};

export default StoryCard;
