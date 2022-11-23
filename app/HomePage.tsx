'use client';

/* eslint-disable @next/next/no-script-component-in-head */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';

import Date from '../components/Date';
import HomeWrapper from '../components/HomeWrapper';

export default function HomePage({ allPostsData }: any) {
  return (
    <div className="">
      <HomeWrapper>
        <div className="space-y-2">
          <div className="font-serif text-4xl">Blog</div>
          {allPostsData.map(({ id, date, title }: any) => (
            <div key={id}>
              <Link href={`/posts/${id}`} legacyBehavior>
                <a className="underline">{title}</a>
              </Link>
              <span className="pl-2">
                <Date dateString={date} />
              </span>
            </div>
          ))}
        </div>
      </HomeWrapper>
    </div>
  );
}
