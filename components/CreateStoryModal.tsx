
import React, { useState, useEffect } from 'react';
import { suggestStoryTitle } from '../services/geminiService';

interface CreateStoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (story: any) => void;
}

const CreateStoryModal: React.FC<CreateStoryModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [isSuggestingTitle, setIsSuggestingTitle] = useState(false);

  useEffect(() => {
    if (content.length > 50) {
      const timer = setTimeout(async () => {
        setIsSuggestingTitle(true);
        const suggested = await suggestStoryTitle(content);
        setTitle(suggested);
        setIsSuggestingTitle(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [content]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-obsidian/90 backdrop-blur-xl">
      <div className="bg-charcoal w-full max-w-2xl rounded-[2.5rem] border border-primary/30 shadow-2xl overflow-hidden relative">
        <div className="px-8 py-6 border-b border-border-dark flex items-center justify-between">
          <div className="flex items-center gap-2 text-primary">
            <span className="material-symbols-outlined font-bold">volunteer_activism</span>
            <h2 className="text-xl font-bold text-white">Share a Kindness Story</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full text-slate-400">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="p-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white font-bold">JD</div>
            <div>
              <div className="font-bold text-white">Jane Doe</div>
              <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Public Story</div>
            </div>
          </div>

          <div className="space-y-4">
            <input 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder={isSuggestingTitle ? "AI Suggesting title..." : "Give your story a title..."}
              className="w-full bg-obsidian border border-border-dark rounded-xl px-4 py-3 text-lg font-bold focus:border-primary focus:ring-1 focus:ring-primary outline-none"
            />
            <textarea 
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full bg-obsidian border border-border-dark rounded-2xl p-6 text-slate-200 min-h-[150px] focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none"
              placeholder="What happened? How did it feel?"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-obsidian border border-border-dark rounded-xl text-slate-400 hover:text-white hover:border-slate-500 transition-all">
              <span className="material-symbols-outlined text-sm text-primary">image</span>
              <span className="text-sm font-bold">Photo</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-obsidian border border-border-dark rounded-xl text-slate-400 hover:text-white hover:border-slate-500 transition-all">
              <span className="material-symbols-outlined text-sm text-accent">location_on</span>
              <span className="text-sm font-bold">Location</span>
            </button>
          </div>

          <div className="flex items-center justify-between pt-6 border-t border-border-dark">
            <div className="text-[11px] text-slate-500 font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="material-symbols-outlined text-sm text-primary">auto_awesome</span>
              Stories with images reach 3x more people
            </div>
            <div className="flex gap-4">
              <button onClick={onClose} className="px-6 py-3 font-bold text-slate-500 hover:text-white">Cancel</button>
              <button 
                onClick={() => {
                    onSubmit({ id: Date.now().toString(), title, content, authorName: 'Jane Doe', authorAvatar: '', timestamp: 'Just now', inspiredCount: 0, commentCount: 0, tags: [], category: 'Kindness Act' });
                    onClose();
                }}
                className="bg-primary text-white px-10 py-3 rounded-2xl font-bold hover:shadow-lg hover:shadow-primary/30 transition-all transform hover:-translate-y-0.5"
              >
                Publish Story
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateStoryModal;
