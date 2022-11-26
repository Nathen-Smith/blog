export default function Footer() {
  return (
    <footer className="mx-auto mt-auto w-full max-w-[65ch] px-[14px] pb-8 text-center sm:px-0">
      <div className="border-t-[1px] border-zinc-500 text-zinc-500 dark:border-zinc-400 dark:text-zinc-400">
        <div className="float-left">
          © 2022 by Nathen Smith. All rights reserved.
        </div>
        <a
          className="float-none text-zinc-900 underline dark:text-white sm:float-right"
          href="https://github.com/Nathen-Smith/blog"
        >
          Source code
        </a>
      </div>
    </footer>
  );
}
