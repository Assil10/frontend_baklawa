export interface User {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  followers: number;
  following: number;
  bio: string;
  skills: string[];
}

export interface Post {
  id: string;
  author: {
    name: string;
    handle: string;
    avatar: string;
    isVerified?: boolean;
  };
  time: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
}

export interface Community {
  id: string;
  name: string;
  icon: string;
  membersIn: number;
  image: string;
}

export interface Activity {
  id: string;
  user: {
    name: string;
    avatar: string;
    isVerified?: boolean;
  };
  type: 'tip' | 'purchase' | 'job_request' | 'group_join';
  amount?: string;
  time: string;
  status?: string;
}

export interface SuggestedUser {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  isVerified?: boolean;
  mutualFriends?: number;
}

export interface Category {
  id: string;
  name: string;
  count: string;
  icon: string;
}
