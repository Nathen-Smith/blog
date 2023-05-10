import Giscus from '@giscus/react';
import { useContext } from 'react';
import { ContactContext } from '../context/counter';
// import useDarkMode from '../hooks/useDarkMode';

export default function Comments({ isDark }: { isDark: boolean }) {
  const [state] = useContext(ContactContext);

  // const {isDark} = useDarkMode();

  console.log(`HOOK isDark: ${isDark}`);

  function x() {
    return state.isDark;
  }

  console.log(`comments see ${state.isDark ? 'dark' : 'light'}`);

  return (
    <>
      {isDark ? 'CTX DARK' : 'CTX LIGHT'}
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
        theme={x() ? 'dark' : 'light'}
        lang="en"
        // loading="lazy"
      />
    </>
  );
}
