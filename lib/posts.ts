import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkMdx from 'remark-mdx';

const POSTS_DIRECTORY = path.join(process.cwd(), 'posts');
const WPM = 238;
const SHOW_MDX = false;
const filterFn = (fileName: string) => SHOW_MDX || fileName.endsWith('md');

export async function getAllMdxIds() {
  const fileNames = fs.readdirSync(POSTS_DIRECTORY);
  return fileNames.filter(filterFn).map((fileName) => ({
    params: {
      id: fileName.replace(/\.mdx$/, ''),
    },
  }));
}

export async function getMdxPostData(id: string) {
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
  };
}

export interface PostMetaData {
  title: string;
  description: string;
  date: string;
}

export interface PostData extends PostMetaData {
  id: string;
  contentHtml: string;
  estimatedTime: number;
}

export interface SortedPostData extends PostMetaData {
  id: string;
  estimatedTime: number;
}

export async function getPostData(id: string): Promise<PostData> {
  const fullPath = path.join(POSTS_DIRECTORY, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Estimate the time it takes to read this post
  const numWords = contentHtml.trim().split(/\s+/).length;
  const estimatedTime = Math.ceil(numWords / WPM);

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    estimatedTime,
    ...matterResult.data,
  } as PostData;
}

export default async function getSortedPostsData(): Promise<
  Array<SortedPostData>
> {
  // Get file names under /posts
  const fileNames = fs.readdirSync(POSTS_DIRECTORY);

  const allPostsData = await Promise.all(
    fileNames.filter(filterFn).map(async (fileName) => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, '');

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

  // x.replace(/\.[^/.]+$/, "")
  return fileNames.filter(filterFn).map((fileName) => ({
    params: {
      id: fileName.replace(/\.md$/, ''),
    },
  }));
}
