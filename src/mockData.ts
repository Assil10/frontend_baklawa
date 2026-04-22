import { User, Post, Community, Activity } from './types';

export const currentUser: User = {
  id: 'me',
  name: 'Evgen Ledo',
  handle: '@ledoteam',
  avatar: 'https://picsum.photos/seed/evgen/200/200',
  followers: 1984,
  following: 1002,
  bio: '🌟 Hello, I\'m UX/UI designer. Open to the new projects. 🌟',
  skills: ['UX Design', 'Copywriting', 'Mobile', 'Research', 'User Interview', 'JS', 'Logo']
};

export const communities: Community[] = [
  {
    id: 'c1',
    name: 'UX designers community',
    icon: '🎨',
    membersIn: 32,
    image: 'https://picsum.photos/seed/ux/100/100'
  },
  {
    id: 'c2',
    name: 'Frontend developers',
    icon: '💻',
    membersIn: 12,
    image: 'https://picsum.photos/seed/fe/100/100'
  }
];

export const posts: Post[] = [
  {
    id: 'p1',
    author: {
      name: 'Mudreh Kumbirai',
      handle: '@Muhadrehh',
      avatar: 'https://picsum.photos/seed/mudreh/100/100',
      isVerified: true
    },
    time: '1 hr ago',
    content: 'In some cases you may see a third-party client name, which indicates the Tweet came from a non-Twitter application.',
    image: 'https://picsum.photos/seed/artwork/800/450',
    likes: 124,
    comments: 18
  }
];

export const activities: Activity[] = [
  {
    id: 'a1',
    user: {
      name: 'Vitaliy Akterskiy',
      avatar: 'https://picsum.photos/seed/vitaliy/100/100',
      isVerified: true
    },
    type: 'tip',
    amount: '$10.00',
    time: '3 min ago'
  },
  {
    id: 'a2',
    user: {
      name: 'Maksym Karafizi',
      avatar: 'https://picsum.photos/seed/maksym/100/100'
    },
    type: 'purchase',
    amount: '$90.00',
    time: '6 hrs ago',
    status: 'Thanked'
  },
  {
    id: 'a3',
    user: {
      name: 'Evgeniy Alexandrov',
      avatar: 'https://picsum.photos/seed/evg/100/100'
    },
    type: 'purchase',
    amount: '$30.00',
    time: '7 hrs ago'
  },
  {
    id: 'a4',
    user: {
      name: 'Rosaline Kumbirai',
      avatar: 'https://picsum.photos/seed/rosa/100/100'
    },
    type: 'job_request',
    amount: '$20.00',
    time: '1 hr ago'
  }
];

export const followingUsers = [
  { id: 'f1', name: 'Vitaliy Akterskiy', handle: '@vitaliy_dev', avatar: 'https://picsum.photos/seed/vitaliy/100/100', isVerified: true, status: 'Online' },
  { id: 'f2', name: 'Maksym Karafizi', handle: '@maksym_design', avatar: 'https://picsum.photos/seed/maksym/100/100', isVerified: false, status: 'Last seen 2h ago' },
  { id: 'f3', name: 'Rosaline Kumbirai', handle: '@rosaline_k', avatar: 'https://picsum.photos/seed/rosa/100/100', isVerified: false, status: 'Online' },
  { id: 'f4', name: 'John Doe', handle: '@johndoe', avatar: 'https://picsum.photos/seed/john/100/100', isVerified: true, status: 'Last seen 5m ago' },
];

export const suggestedUsers = [
  { id: 's1', name: 'Sarah Wilson', handle: '@sarah_w', avatar: 'https://picsum.photos/seed/sarah/100/100', isVerified: true, mutualFriends: 12 },
  { id: 's2', name: 'Alex Rivera', handle: '@arivera', avatar: 'https://picsum.photos/seed/alex/100/100', isVerified: false, mutualFriends: 5 },
  { id: 's3', name: 'Emma Watson', handle: '@emma_wat', avatar: 'https://picsum.photos/seed/emma/100/100', isVerified: true, mutualFriends: 8 },
];

export const trendingCategories = [
  { id: 't1', name: 'Design Systems', count: '12.4k posts', icon: '🎨' },
  { id: 't2', name: 'Modern Architecture', count: '8.1k posts', icon: '🏛️' },
  { id: 't3', name: 'React 19 Tips', count: '5.2k posts', icon: '⚛️' },
  { id: 't4', name: 'UX Research', count: '2.9k posts', icon: '🔬' },
];

export const initialMessages = [
  { id: 'm1', sender: 'Vitaliy Akterskiy', avatar: 'https://picsum.photos/seed/vitaliy/100/100', text: 'Hey, did you see the new design system update?', time: '2m ago', unread: true },
  { id: 'm2', sender: 'Rosaline Kumbirai', avatar: 'https://picsum.photos/seed/rosa/100/100', text: 'The job request has been approved! 🎉', time: '1h ago', unread: false },
  { id: 'm3', sender: 'Maksym Karafizi', avatar: 'https://picsum.photos/seed/maksym/100/100', text: 'Can we hop on a quick call later today?', time: '3h ago', unread: false },
];

export const initialNotifications = [
  { id: 'n1', user: 'Mudreh Kumbirai', avatar: 'https://picsum.photos/seed/mudreh/100/100', action: 'liked your post', target: '"In some cases you may see..."', time: '5m ago', unread: true },
  { id: 'n2', user: 'Vitaliy Akterskiy', avatar: 'https://picsum.photos/seed/vitaliy/100/100', action: 'sent you a tip', target: '$10.00', time: '10m ago', unread: true },
  { id: 'n3', user: 'Alex Rivera', avatar: 'https://picsum.photos/seed/alex/100/100', action: 'started following you', target: '', time: '2h ago', unread: false },
  { id: 'n4', user: 'Sarah Wilson', avatar: 'https://picsum.photos/seed/sarah/100/100', action: 'commented on your post', target: '"Beautiful work!"', time: '5h ago', unread: false },
];

export const stories = [
  { name: 'Amanda', avatar: 'https://picsum.photos/seed/amanda/100/100' },
  { name: 'John', avatar: 'https://picsum.photos/seed/john/100/100' },
  { name: 'Andrew', avatar: 'https://picsum.photos/seed/andrew/100/100' },
  { name: 'Rosaline', avatar: 'https://picsum.photos/seed/rosaline/100/100' },
  { name: 'Mudreh', avatar: 'https://picsum.photos/seed/mudreh2/100/100' },
  { name: 'Juliet', avatar: 'https://picsum.photos/seed/juliet/100/100' },
  { name: 'Boh', avatar: 'https://picsum.photos/seed/boh/100/100' },
];
