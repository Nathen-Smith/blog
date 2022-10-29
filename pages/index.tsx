/* eslint-disable jsx-a11y/anchor-is-valid */
import Head from 'next/head';
import Link from 'next/link';
import getSortedPostsData from '../lib/posts';
// import Image from 'next/image';

import NavBar from '../components/Navbar';
import Date from '../components/Date';

export default function Home({ allPostsData }: any) {
  return (
    <div>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <div className="">
          <NavBar />
          <ul className="max-w-3xl mx-auto">
            {allPostsData.map(({ id, date, title }: any) => (
              <li key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <small className="">
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </div>
      </main>

      {/* <footer>footer</footer> */}
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
