import useDarkMode from '../hooks/useDarkMode';
import useScript from '../hooks/useScript';

interface RedditEmbedProps {
  url: string;
  title: string;
  author: string;
  subreddit: string;
}

export default function RedditPost({
  url,
  title,
  author,
  subreddit,
}: RedditEmbedProps) {
  const { isDark } = useDarkMode();
  useScript('https://embed.reddit.com/widgets.js');

  return (
    <blockquote
      className="reddit-embed-bq"
      style={{ height: '316px' }}
      data-embed-height="316"
      data-embed-theme={isDark ? 'dark' : 'light'}
    >
      <a href={url}>{title}</a>
      <br />
      by
      <a href={`https://www.reddit.com/user/${author}/`}>u/{author}</a>
      in
      <a href={`https://www.reddit.com/r/${subreddit}/`}>{subreddit}</a>
    </blockquote>
  );
}
