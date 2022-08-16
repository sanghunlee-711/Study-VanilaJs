import About from '../pages/About.js';
import Home from '../pages/Home.js';
import Post from '../pages/Post.js';

export const ROUTES = [
  {
    path: '#home',
    name: 'Home',
    components: Home,
  },
  {
    path: '#about',
    name: 'About',
    components: About,
  },
  {
    path: '#post',
    name: 'Post',
    components: Post,
  },
];
