import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-12 px-6 py-24">
      <section className="flex flex-col gap-4">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Rebecca Tavangar
        </h1>
        <p className="max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
          Writing on PIVOT, a neurobiologically informed emotional regulation
          method, along with other reflections in progress.
        </p>
        <div className="flex gap-4 text-sm font-medium">
          <Link href="/pivot" className="underline">
            Read about PIVOT
          </Link>
          <Link href="/reflections" className="underline">
            Reflections
          </Link>
        </div>
      </section>

      <section className="flex flex-col gap-2 border-t border-black/[.08] pt-8 dark:border-white/[.145]">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Placeholder content — Phase 2 design and copy still to come.
        </p>
      </section>
    </div>
  );
}
