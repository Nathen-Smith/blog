/* eslint-disable @next/next/no-script-component-in-head */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Head from 'next/head';
import Link from 'next/link';
import getSortedPostsData, { SortedPostData } from '../lib/posts';

import PostSubHeader from '../components/PostSubHeader';
import HomeWrapper from '../components/HomeWrapper';

export default function Home({
  allPostsData,
}: {
  allPostsData: Array<SortedPostData>;
}) {
  return (
    <div>
      <Head>
        <title>Blog</title>
        <meta
          name="description"
          content="Writings on the topics of Psychology, Self Help, Human Nature, and Philosophy"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeWrapper>
        <div>
          <h1>Blog</h1>
          <div className="space-y-4 sm:space-y-2">
            {allPostsData.map(({ id, date, title }) => (
              <div key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <span className="pl-2">
                  <PostSubHeader dateString={date} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </HomeWrapper>
    </div>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
