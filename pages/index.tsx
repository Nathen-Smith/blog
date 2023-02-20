/* eslint-disable @next/next/no-script-component-in-head */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Head from 'next/head';
import Link from 'next/link';
import getSortedPostsData, { SortedPostData } from '../lib/posts';

import HomeWrapper from '../components/HomeWrapper';
import SubHeader from '../components/SubHeader';

interface PostCardProps {
  id: string;
  title: string;
  estimatedTime: number;
  date: string;
}
function PostCard({ id, title, estimatedTime, date }: PostCardProps) {
  return (
    <Link href={`/posts/${id}`}>
      <div className="-mx-2 min-h-[96px] cursor-pointer px-2 transition-all dark:rounded-md sm:mx-0 sm:min-h-[128px] sm:rounded-lg sm:border sm:py-6 sm:pt-4 dark:sm:-mx-2 dark:sm:border-0 dark:sm:bg-zinc-900 dark:sm:py-4 lg:min-h-[128px] lg:p-4 lg:pt-6 lg:pb-10 lg:hover:scale-105 lg:hover:border-2 lg:hover:border-indigo-500 dark:lg:h-32 dark:lg:p-2 dark:lg:hover:scale-100 dark:lg:hover:border-0 dark:lg:hover:bg-zinc-800">
        <div className="flex items-start justify-between">
          <div className="space-y-3 sm:space-y-4">
            <div className="m-0 inline text-xl font-semibold text-black dark:text-white sm:w-3/4">
              {title}
            </div>
            <SubHeader date={date} estimatedTime={estimatedTime} />
          </div>
        </div>
      </div>
    </Link>
  );
}

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
        <div className="pb-20">
          <h1 className="text-black dark:text-white">Blog</h1>
          <div className="grid grid-cols-1 divide-y divide-zinc-500 transition-colors dark:divide-zinc-700 sm:divide-y-0 sm:dark:divide-y">
            {allPostsData.map(({ id, date, title, estimatedTime }) => (
              <div key={id} className="py-5 sm:py-2 lg:dark:py-4">
                <PostCard
                  id={id}
                  date={date}
                  title={title}
                  estimatedTime={estimatedTime}
                />
              </div>
            ))}
          </div>
        </div>
      </HomeWrapper>
    </div>
  );
}

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
