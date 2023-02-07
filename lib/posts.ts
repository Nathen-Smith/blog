import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';
import { remark } from 'remark';
import remarkMdx from 'remark-mdx';

const POSTS_DIRECTORY = path.join(process.cwd(), 'posts');
const WPM = 238;

export interface PostData {
  id: string;
  title: string;
  description: string;
  date: string;
  estimatedTime: number;
  contentMdx: string;
}

export async function getPostData(id: string): Promise<PostData> {
  const fullPath = path.join(POSTS_DIRECTORY, `${id}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(remarkMdx)
    .process(matterResult.content);

  const contentMdx = processedContent.toString();

  // Estimate the time it takes to read this post
  const numWords = contentMdx.trim().split(/\s+/).length;
  const estimatedTime = Math.ceil(numWords / WPM);

  return {
    id,
    contentMdx,
    estimatedTime,
    ...matterResult.data, // title, description, date
  } as PostData;
}

export type SortedPostData = Omit<PostData, 'contentMdx'>;

export default async function getSortedPostsData(): Promise<
  Array<SortedPostData>
> {
  // Get file names under /posts
  const fileNames = fs.readdirSync(POSTS_DIRECTORY);

  const allPostsData = await Promise.all(
    fileNames.map(async (fileName) => {
      // Remove ".mdx" from file name to get id
      const id = fileName.replace(/\.mdx$/, '');

      const { date, title, estimatedTime } = await getPostData(id);

      // Combine the data with the id
      return {
        id,
        date,
        title,
        estimatedTime,
      };
    }),
  );
  // Sort posts by date
  // @ts-ignore
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    }
    if (a > b) {
      return -1;
    }
    return 0;
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(POSTS_DIRECTORY);

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]

  return fileNames.map((fileName) => ({
    params: {
      id: fileName.replace(/\.mdx$/, ''),
    },
  }));
}
