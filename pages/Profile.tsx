
import React from 'react';
import { User, Story } from '../types';
import StoryCard from '../components/StoryCard';

interface ProfileProps {
  user: User;
  stories: Story[];
}

const Profile: React.FC<ProfileProps> = ({ user, stories }) => {
  const userStories = stories.filter(s => s.authorId === user.id);

  return (
    <div className="space-y-12">
      {/* Header Profile Section */}
      <div className="bg-charcoal border border-border-dark rounded-[3rem] p-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full -mr-20 -mt-20"></div>
        <div className="flex flex-col md:flex-row gap-10 items-start relative z-10">
          <div className="relative">
            <div className="w-40 h-40 rounded-[2.5rem] overflow-hidden border-4 border-border-dark shadow-2xl shadow-primary/20">
              <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-green-500 w-8 h-8 rounded-full border-4 border-charcoal flex items-center justify-center">
              <span className="material-symbols-outlined text-[14px] text-black font-black">verified</span>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-col md:flex-row justify-between items-start gap-4">
              <div>
                <h1 className="text-4xl font-black text-white mb-2">{user.name}</h1>
                <div className="flex flex-wrap items-center gap-4 text-slate-400">
                  <div className="flex items-center gap-1.5 bg-slate-800/40 px-3 py-1 rounded-lg">
                    <span className="material-symbols-outlined text-sm text-primary">location_on</span>
                    <span className="text-sm font-bold uppercase tracking-widest text-[10px]">{user.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-800/40 px-3 py-1 rounded-lg">
                    <span className="material-symbols-outlined text-sm text-primary">calendar_today</span>
                    <span className="text-sm font-bold uppercase tracking-widest text-[10px]">{user.joinedDate}</span>
                  </div>
                </div>
              </div>
              <button className="bg-white/5 border border-border-dark px-6 py-2.5 rounded-xl font-bold text-white hover:bg-white/10 transition-all flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">settings</span>
                Edit Profile
              </button>
            </div>
            <p className="mt-6 text-slate-300 max-w-2xl text-lg leading-relaxed">{user.bio}</p>
            <div className="flex flex-wrap gap-2 mt-6">
                {['Toronto', 'Community Support', 'Environmental'].map(tag => (
                   <span key={tag} className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary rounded-lg text-[10px] font-black uppercase tracking-widest">
                     {tag}
                   </span>
                ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-10 border-t border-border-dark">
          {[
            { label: 'Stories Shared', val: userStories.length, color: 'text-primary' },
            { label: 'People Inspired', val: '1,204', color: 'text-accent' },
            { label: 'Acts Facilitated', val: 86, color: 'text-green-500' },
            { label: 'Impact Score', val: '4.8k', color: 'text-amber-500' }
          ].map(stat => (
            <div key={stat.label} className="p-6 bg-obsidian rounded-2xl border border-border-dark hover:border-primary/30 transition-all">
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-600">{stat.label}</p>
              <p className={`text-4xl font-black mt-2 ${stat.color}`}>{stat.val}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl font-black text-white px-2">Recent Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {userStories.map(story => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
