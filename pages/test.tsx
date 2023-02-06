/* eslint-disable react/jsx-props-no-spreading */
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { getMdxPostData } from '../lib/posts';
import Tweet from '../components/Tweet';

const components = { Tweet };

export default function TestPage({ mdxSource }: any) {
  return (
    <div className="text-white">
      <MDXRemote {...mdxSource} components={components} />
    </div>
  );
}

export async function getStaticProps() {
  const { contentMdx, estimatedTime } = await getMdxPostData('test');
  console.log(`${estimatedTime} minute`);

  const mdxSource = await serialize(contentMdx);

  return { props: { mdxSource } };
}
