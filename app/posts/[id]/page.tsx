import { getAllPostIds, getPostData } from '../../../lib/posts';
import PostLayout from './PostLayout';

// Dynamic segments not included in generateStaticParams will return a 404
export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllPostIds();
}

export default async function Post({ params }: any) {
  const postData = await getPostData(params.id);

  return <PostLayout postData={postData} />;
}
