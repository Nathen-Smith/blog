export default function Footer() {
  return (
    <footer className="mx-auto mt-auto w-full max-w-[65ch] px-[14px] pb-[14px] sm:px-0 sm:pb-8">
      <div className="border-t-[1px] border-zinc-500 text-zinc-500 transition-colors dark:border-zinc-400 dark:text-zinc-400">
        <div className="sm:float-left">
          © 2022 by Nathen Smith. All rights reserved.
        </div>
        <a
          className="font-medium text-black underline transition-colors dark:text-white sm:float-right"
          href="https://github.com/Nathen-Smith/blog"
        >
          Source code
        </a>
      </div>
    </footer>
  );
}
