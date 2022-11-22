/* eslint-disable jsx-a11y/anchor-is-valid */
import Head from 'next/head';
import Link from 'next/link';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/Date';
import HomeWrapper from '../../components/HomeWrapper';

export default function Post({ postData }: any) {
  return (
    <div>
      <Head>
        <title>{postData.title}</title>
        {postData.description && (
          <meta name="description" content={postData.description} />
        )}
      </Head>
      <HomeWrapper>
        <div>
          <div className="mb-2 max-w-2xl font-serif text-4xl">
            {postData.title}
          </div>
          <Date dateString={postData.date} />
          <div className="h-6" />
          <div
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
            className="prose prose-zinc mb-10 dark:prose-invert"
          />
          <Link href="/">
            <a>
              ←<span className="underline">Back to home</span>
            </a>
          </Link>
          <div className="h-20" />
        </div>
      </HomeWrapper>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  // Fetch necessary data for the blog post using params.id
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
