import Head from 'next/head';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Layout from '../../components/Layout';
import Date from '../../components/date';

export default function Post({ postData } : any) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div className="text-3xl font-bold">
        {postData.title}
      </div>
      <Date dateString={postData.date} />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
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
