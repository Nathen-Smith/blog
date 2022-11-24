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
        <div className="prose prose-zinc transition-colors duration-300 dark:prose-invert 2xl:prose-xl">
          <h1>{postData.title}</h1>
          <Date dateString={postData.date} />
          <div className="h-4" />
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          <Link href="/">
            <a className="no-underline">
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
