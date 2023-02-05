/* eslint-disable @next/next/no-script-component-in-head */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Head from 'next/head';
import Link from 'next/link';
import getSortedPostsData, { SortedPostData } from '../lib/posts';

import Date from '../components/Date';
import HomeWrapper from '../components/HomeWrapper';

interface PostCardProps {
  id: string;
  title: string;
  estimatedTime: number;
  date: string;
}
function PostCard({ id, title, estimatedTime, date }: PostCardProps) {
  return (
    <Link href={`/posts/${id}`}>
      <div className="-mx-2 h-32 cursor-pointer px-2 transition-all dark:rounded-md sm:mx-0 sm:rounded-lg sm:border sm:py-6 sm:pt-4 dark:sm:-mx-2 dark:sm:border-0 dark:sm:bg-zinc-900 dark:sm:py-4 lg:h-[9.5rem] lg:p-4 lg:hover:scale-105 lg:hover:border-2 lg:hover:border-indigo-500 dark:lg:h-32 dark:lg:p-2 dark:lg:hover:scale-100 dark:lg:hover:border-0 dark:lg:hover:bg-zinc-800 2xl:h-40 dark:2xl:h-[8.5rem]">
        <div className="flex items-start justify-between">
          <div className="space-y-4">
            <div className="m-0 inline text-xl font-semibold text-black dark:text-white sm:w-3/4 lg:text-2xl">
              {title}
            </div>
            <div className="font-['SF_Compact_Text','SF_Pro_Text',-apple-system,BlinkMacSystemFont,'Inter','Segoe_UI',Roboto,Helvetica,Arial,sans-serif,'Apple_Color_Emoji','Segoe_UI_Emoji','Segoe_UI_Symbol'] text-sm font-medium uppercase text-zinc-600 dark:text-zinc-400">
              <div className="inline">
                <Date dateString={date} inline />
                {` ∙ `}
              </div>
              {`${estimatedTime} MIN READ`}
            </div>
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
              <div key={id} className="py-6 sm:py-2 lg:dark:py-4">
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
