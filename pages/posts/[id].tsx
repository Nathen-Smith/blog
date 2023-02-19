/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Head from 'next/head';
import Link from 'next/link';
import { serialize } from 'next-mdx-remote/serialize';

import { MDXRemote } from 'next-mdx-remote';
import { getAllPostIds, getPostData, PostData } from '../../lib/posts';
import HomeWrapper from '../../components/HomeWrapper';
import Comments from '../../components/Comments';
import SubHeader from '../../components/SubHeader';

type SerializedPostData = Omit<PostData, 'contentMdx' | 'id'> & {
  mdxSource: any;
};

export default function Post({ postData }: { postData: SerializedPostData }) {
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
          <SubHeader
            date={postData.date}
            estimatedTime={postData.estimatedTime}
          />

          <div className="h-4" />
          <MDXRemote {...postData.mdxSource} />
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
  const { title, description, date, estimatedTime, contentMdx } =
    await getPostData(params.id);
  const mdxSource = await serialize(contentMdx);

  const postData: SerializedPostData = {
    title,
    description,
    date,
    estimatedTime,
    mdxSource,
  };

  return {
    props: {
      postData,
    },
  };
}
