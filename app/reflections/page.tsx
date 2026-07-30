import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reflections | Rebecca Tavangar",
};

export default function Reflections() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-6 px-6 py-24">
      <h1 className="text-3xl font-semibold tracking-tight">Reflections</h1>
      <p className="max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
        Shorter pieces of writing and thinking, separate from PIVOT. Nothing
        published here yet.
      </p>
      <p className="text-sm text-zinc-500 dark:text-zinc-500">
        Placeholder — content and design still to come.
      </p>
    </div>
  );
}
