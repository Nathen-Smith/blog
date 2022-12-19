/* eslint-disable jsx-a11y/anchor-is-valid */
import Head from 'next/head';
import Link from 'next/link';
import { getAllPostIds, getPostData, PostData } from '../../lib/posts';
import PostSubHeader from '../../components/PostSubHeader';
import HomeWrapper from '../../components/HomeWrapper';
import Comments from '../../components/Comments';

export default function Post({ postData }: { postData: PostData }) {
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
          <h1>{postData.title}</h1>
          <PostSubHeader
            dateString={postData.date}
            estimatedTime={postData.estimatedTime}
          />
          <div className="h-4" />
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          <Link href="/">
            <a className="no-underline">
              ←<span className="underline">Back to home</span>
            </a>
          </Link>
          <div className="h-4 sm:h-8" />
          <Comments />
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
