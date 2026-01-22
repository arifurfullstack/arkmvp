
import { Story, Community, User } from './types';

export const MOCK_USER: User = {
  id: 'u1',
  name: 'Sarah L.',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
  location: 'Toronto, Ontario',
  joinedDate: 'Joined Nov 2023',
  bio: 'Believer in small actions making big ripples. Passionate about community building, urban gardening, and ensuring everyone has a seat at the table.',
  impactScore: 4800
};

export const MOCK_STORIES: Story[] = [
  {
    id: 's1',
    authorId: 'u1',
    authorName: 'Sarah L.',
    authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    location: 'Toronto',
    timestamp: '2h ago',
    title: 'A small grocery gift that became a big moment',
    content: 'I noticed someone counting change at checkout. I quietly covered the rest. The cashier smiled and said, "You have no idea what this means."',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80',
    tags: ['Community Support', 'Pay It Forward'],
    inspiredCount: 142,
    commentCount: 12,
    category: 'Kindness Act'
  },
  {
    id: 's2',
    authorId: 'u2',
    authorName: 'David R.',
    authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    location: 'Ontario',
    timestamp: 'Yesterday',
    title: 'Volunteering felt different this week',
    content: 'Someone shared a story about noticing the one person on the edge. I tried it at the shelter today—made a point to sit and just listen for an hour.',
    tags: ['Community'],
    inspiredCount: 18,
    commentCount: 4,
    category: 'Community'
  },
  {
    id: 's3',
    authorId: 'u3',
    authorName: 'Maya T.',
    authorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
    location: 'Montreal',
    timestamp: '5h ago',
    title: 'Sharing a hot meal during the cold snap',
    content: 'We made extra portions and dropped them off downtown. A stranger was stuck, so we grabbed cables and jumped his car too.',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80',
    tags: ['Pay It Forward'],
    inspiredCount: 112,
    commentCount: 8,
    category: 'Pay It Forward'
  }
];

export const MOCK_COMMUNITIES: Community[] = [
  { id: 'c1', name: 'Eco-Warriors', membersCount: '1.2k', type: 'Environmental', icon: 'eco' },
  { id: 'c2', name: 'Elder Care', membersCount: '850', type: 'Social', icon: 'volunteer_activism' },
  { id: 'c3', name: 'Youth Mentors', membersCount: '2.4k', type: 'Education', icon: 'school' }
];
