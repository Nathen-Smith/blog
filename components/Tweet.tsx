import TweetEmbed from 'react-tweet-embed';
import useDarkMode from '../hooks/useDarkMode';

export default function Tweet({ id }: { id: string }) {
  const { isDark } = useDarkMode();
  return (
    <TweetEmbed tweetId={id} options={{ theme: isDark ? 'dark' : 'light' }} />
  );
}
