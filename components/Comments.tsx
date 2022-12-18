import Giscus from '@giscus/react';
import useDarkMode from '../hooks/useDarkMode';

export default function Comments() {
  const { isDark } = useDarkMode();

  return (
    <Giscus
      id="comments"
      repo="Nathen-Smith/blog"
      repoId="R_kgDOHyFutg"
      category="General"
      categoryId="DIC_kwDOHyFuts4CTIOb"
      mapping="pathname"
      term="Welcome to @giscus/react component!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={isDark ? 'dark' : 'light'}
      lang="en"
      loading="lazy"
    />
  );
}
