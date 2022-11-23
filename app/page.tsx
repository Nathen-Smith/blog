import HomePage from './HomePage';
import getSortedPostsData from '../lib/posts';

export default async function Page() {
  // Fetch data directly in a Server Component
  const allPostsData = getSortedPostsData();
  // Forward fetched data to your Client Component
  return <HomePage allPostsData={allPostsData} />;
}
