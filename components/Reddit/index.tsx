import dynamic from 'next/dynamic';

export const RedditPost = dynamic(() => import('./RedditPost'), {
  ssr: false,
});

export const RedditComment = dynamic(() => import('./RedditComment'), {
  ssr: false,
});
