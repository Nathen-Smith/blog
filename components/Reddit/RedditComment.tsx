import useDarkMode from '../../hooks/useDarkMode';
import useScript from '../../hooks/useScript';

interface RedditCommentEmbedProps {
  commentUrl: string;
  postAuthor: string;
  discussionUrl: string;
  subreddit: string;
  height: number;
}

export default function RedditComment({
  commentUrl,
  postAuthor,
  discussionUrl,
  subreddit,
  height,
}: RedditCommentEmbedProps) {
  const { isDark } = useDarkMode();
  useScript('https://embed.reddit.com/widgets.js');

  return (
    <blockquote
      className="reddit-embed-bq"
      style={{ height: `${height.toString()}px` }}
      data-embed-height={height.toString()}
      data-embed-theme={isDark ? 'dark' : 'light'}
    >
      <a href={commentUrl}>Comment</a>
      <br />
      by
      <a href={`https://www.reddit.com/user/${postAuthor}/`}>u/{postAuthor}</a>
      from discussion
      <a href={discussionUrl}>s</a>
      <br />
      in
      <a href={`https://www.reddit.com/r/${subreddit}/`}>{subreddit}</a>
    </blockquote>
  );
}
