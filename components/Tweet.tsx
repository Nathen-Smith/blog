import { useContext } from 'react';
import TweetEmbed from 'react-tweet-embed';
import { ContactContext } from '../context/counter';

function Loading() {
  return <h4 className="text-white">Loading</h4>;
}

export default function Tweet({ id }: { id: string }) {
  const [state] = useContext(ContactContext);

  return (
    <TweetEmbed
      tweetId={id}
      className="text-white"
      placeholder={<Loading />}
      options={{ theme: state.isDark ? 'dark' : 'light', align: 'center' }}
    />
  );
}
