
export interface User {
  id: string;
  name: string;
  avatar: string;
  location: string;
  joinedDate: string;
  bio: string;
  impactScore: number;
}

export interface Story {
  id: string;
  authorId: string;
  authorName: string;
  authorAvatar: string;
  location: string;
  timestamp: string;
  title: string;
  content: string;
  image?: string;
  tags: string[];
  inspiredCount: number;
  commentCount: number;
  category: 'Kindness Act' | 'Environmental' | 'Story Moment' | 'Community' | 'Education' | 'Animal Welfare' | 'Pay It Forward';
}

export interface Community {
  id: string;
  name: string;
  membersCount: string;
  type: string;
  icon: string;
}

export enum Page {
  Landing = 'landing',
  Feed = 'feed',
  Explore = 'explore',
  Profile = 'profile'
}
