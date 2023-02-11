import TweetEmbed from 'react-tweet-embed';
import useDarkMode from '../hooks/useDarkMode';

function Loading() {
  return <h4 className="text-white">Loading</h4>;
}

export default function Tweet({ id }: { id: string }) {
  const { isDark } = useDarkMode();
  return (
    <TweetEmbed
      tweetId={id}
      className="text-white"
      placeholder={<Loading />}
      options={{ theme: isDark ? 'dark' : 'light', align: 'center' }}
    />
  );
}
