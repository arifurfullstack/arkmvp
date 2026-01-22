
import React, { useState } from 'react';
import { Page, Story } from './types';
import { MOCK_STORIES, MOCK_USER } from './constants';
import Layout from './components/Layout';
import Landing from './pages/Landing';
import Feed from './pages/Feed';
import Profile from './pages/Profile';
import Explore from './pages/Explore';
import CreateStoryModal from './components/CreateStoryModal';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>(Page.Landing);
  const [stories, setStories] = useState<Story[]>(MOCK_STORIES);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const handlePostStory = (content: string) => {
    const newStory: Story = {
      id: Date.now().toString(),
      authorId: MOCK_USER.id,
      authorName: MOCK_USER.name,
      authorAvatar: MOCK_USER.avatar,
      location: 'Local Hub',
      timestamp: 'Just now',
      title: content.slice(0, 40) + (content.length > 40 ? '...' : ''),
      content: content,
      tags: ['Kindness'],
      inspiredCount: 0,
      commentCount: 0,
      category: 'Kindness Act'
    };
    setStories([newStory, ...stories]);
  };

  const handleAddStoryFromModal = (newStory: any) => {
    const story: Story = {
      ...newStory,
      authorId: MOCK_USER.id,
      authorName: MOCK_USER.name,
      authorAvatar: MOCK_USER.avatar,
      location: 'Local Hub',
      timestamp: 'Just now',
      inspiredCount: 0,
      commentCount: 0,
      tags: ['Kindness'],
    };
    setStories([story, ...stories]);
  };

  if (activePage === Page.Landing) {
    return <Landing onEnterApp={() => setActivePage(Page.Feed)} />;
  }

  return (
    <Layout 
      activePage={activePage} 
      setActivePage={setActivePage}
      onOpenCreateModal={() => setIsCreateModalOpen(true)}
    >
      {activePage === Page.Feed && (
        <Feed stories={stories} onPostStory={handlePostStory} />
      )}
      {activePage === Page.Profile && <Profile user={MOCK_USER} stories={stories} />}
      {activePage === Page.Explore && <Explore />}

      <CreateStoryModal 
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSubmit={handleAddStoryFromModal}
      />
    </Layout>
  );
};

export default App;
