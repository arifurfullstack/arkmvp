
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
    <article className="bg-white/[0.02] border border-white/5 rounded-2xl p-5 hover:border-white/10 transition-all group">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-slate-800 overflow-hidden border border-white/10">
            <img src={story.authorAvatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80'} className="w-full h-full object-cover" />
          </div>
          <div>
            <h4 className="text-[13px] font-black text-white leading-tight">{story.authorName}</h4>
            <p className="text-[11px] font-bold text-slate-500">{story.location} • {story.timestamp}</p>
          </div>
        </div>
        <button className="text-slate-600 hover:text-white transition-colors">
          <span className="material-symbols-outlined text-lg">more_horiz</span>
        </button>
      </div>

      <div className="space-y-3 mb-5">
        <h3 className="text-[15px] font-black text-white leading-tight">{story.title}</h3>
        <p className="text-[14px] text-slate-400 leading-relaxed font-medium">{story.content}</p>
      </div>

      {story.image && (
        <div className="rounded-xl overflow-hidden mb-5 aspect-video bg-black/40 border border-white/5">
          <img src={story.image} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
        </div>
      )}

      <div className="flex flex-wrap gap-1.5 mb-6">
        {story.tags.map(tag => (
          <span key={tag} className="px-2.5 py-1 bg-white/5 border border-white/5 rounded text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            {tag}
          </span>
        ))}
      </div>

      <div className="pt-4 border-t border-white/5 space-y-4">
        <div className="flex items-center gap-2">
            <div className="flex items-center bg-black/20 border border-white/5 rounded-lg p-0.5">
                <button className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-bold text-slate-500 hover:text-white hover:bg-white/5 rounded-md transition-all">
                    <span className="material-symbols-outlined text-[16px]">favorite</span>
                    Like
                </button>
                <div className="w-[1px] h-4 bg-white/10"></div>
                <button 
                    onClick={handleInspire}
                    className={`flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-bold transition-all rounded-md ${inspired ? 'text-primary bg-primary/10' : 'text-slate-500 hover:text-white hover:bg-white/5'}`}
                >
                    <span className="material-symbols-outlined text-[16px]">auto_awesome</span>
                    Inspired me
                </button>
                <div className="w-[1px] h-4 bg-white/10"></div>
                <button className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-bold text-slate-500 hover:text-white hover:bg-white/5 rounded-md transition-all">
                    <span className="material-symbols-outlined text-[16px]">chat_bubble</span>
                    Comment
                </button>
                <div className="w-[1px] h-4 bg-white/10"></div>
                <button className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-bold text-slate-500 hover:text-white hover:bg-white/5 rounded-md transition-all">
                    <span className="material-symbols-outlined text-[16px]">send</span>
                    Share
                </button>
            </div>
        </div>
        
        <div className="flex items-center gap-4 text-[11px] font-bold text-slate-500 uppercase tracking-widest">
            <span>{inspiredCount} inspired</span>
            <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
            <span>6 paid it forward</span>
            <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
            <span>{likeCount} likes</span>
        </div>
      </div>
    </article>
  );
};

export default StoryCard;
