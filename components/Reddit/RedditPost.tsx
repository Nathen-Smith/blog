import useDarkMode from '../../hooks/useDarkMode';
import useScript from '../../hooks/useScript';

interface RedditPostEmbedProps {
  url: string;
  title: string;
  author: string;
  subreddit: string;
  height: number;
}

export default function RedditPost({
  url,
  title,
  author,
  subreddit,
  height,
}: RedditPostEmbedProps) {
  const { isDark } = useDarkMode();
  useScript('https://embed.reddit.com/widgets.js');

  return (
    <blockquote
      className="reddit-embed-bq"
      style={{ height: `${height.toString()}px` }}
      data-embed-height={height.toString()}
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
