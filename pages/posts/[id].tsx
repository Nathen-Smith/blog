/* eslint-disable jsx-a11y/anchor-is-valid */
import Head from 'next/head';
import Link from 'next/link';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/date';
import NavBar from '../../components/navbar';

export default function Post({ postData } : any) {
  return (
    <div>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <NavBar />
      <div className="max-w-3xl mt-20 mx-auto">
        <div className="text-3xl font-bold">
          {postData.title}
        </div>
        <Date dateString={postData.date} />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} className="mb-10" />
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </div>

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

export async function getStaticProps({ params }:any) {
  // Fetch necessary data for the blog post using params.id
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
