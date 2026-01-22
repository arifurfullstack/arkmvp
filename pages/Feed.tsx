
import React, { useState } from 'react';
import StoryCard from '../components/StoryCard';
import { Story } from '../types';

interface FeedProps {
  stories: Story[];
  onPostStory: (content: string) => void;
}

const Feed: React.FC<FeedProps> = ({ stories, onPostStory }) => {
  const [filter, setFilter] = useState('For You');
  const [postContent, setPostContent] = useState('');

  const handlePost = () => {
    if (postContent.trim()) {
      onPostStory(postContent);
      setPostContent('');
    }
  };

  return (
    <div className="space-y-6">
      {/* Tabs Filter */}
      <div className="flex items-center gap-1 p-1 bg-white/[0.02] border border-white/5 rounded-xl w-fit">
        {['For You', 'Following', 'Local', 'Trending'].map(item => (
          <button 
            key={item}
            onClick={() => setFilter(item)}
            className={`px-4 py-1.5 rounded-lg text-[13px] font-bold transition-all ${filter === item ? 'bg-white/10 text-white' : 'text-slate-500 hover:text-slate-300'}`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Inline Post Composer */}
      <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 space-y-4">
        <div className="flex gap-4">
          <div className="w-10 h-10 shrink-0 rounded-full bg-slate-800 border border-white/5 flex items-center justify-center">
            <span className="material-symbols-outlined text-slate-500 text-lg">person</span>
          </div>
          <div className="flex-grow">
            <textarea 
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              placeholder="Share a kindness story..."
              className="w-full bg-transparent border-none p-0 text-slate-200 placeholder:text-slate-600 focus:ring-0 resize-none min-h-[60px] text-[15px] leading-relaxed"
            />
          </div>
          <div className="self-end">
             <button 
                onClick={handlePost}
                disabled={!postContent.trim()}
                className="px-5 py-1.5 bg-primary/20 text-primary border border-primary/20 rounded-lg text-[13px] font-bold hover:bg-primary/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
             >
                Post
             </button>
          </div>
        </div>
        
        <div className="flex items-center gap-4 pt-2 border-t border-white/5">
           <button className="flex items-center gap-1.5 text-[12px] font-bold text-slate-500 hover:text-slate-300">
             <span className="material-symbols-outlined text-[18px]">image</span>
             Photo
           </button>
           <button className="flex items-center gap-1.5 text-[12px] font-bold text-slate-500 hover:text-slate-300">
             <span className="material-symbols-outlined text-[18px]">video_library</span>
             Video link
           </button>
           <button className="flex items-center gap-1.5 text-[12px] font-bold text-slate-500 hover:text-slate-300">
             <span className="material-symbols-outlined text-[18px]">label</span>
             Tag
           </button>
           <button className="flex items-center gap-1.5 text-[12px] font-bold text-slate-500 hover:text-slate-300">
             <span className="material-symbols-outlined text-[18px]">visibility</span>
             Visibility
           </button>
        </div>
      </div>

      {/* Stories Feed */}
      <div className="space-y-4 pb-20 lg:pb-0">
        {stories.map(story => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
