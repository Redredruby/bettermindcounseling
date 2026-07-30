import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Rebecca Tavangar",
};

export default function About() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-6 px-6 py-24">
      <h1 className="text-3xl font-semibold tracking-tight">
        Meet Rebecca Tavangar, LPC, NCC
      </h1>
      <div className="flex flex-col gap-4 text-lg text-zinc-600 dark:text-zinc-400">
        <p>
          I am a licensed professional counselor with over a decade of
          experience supporting individuals, couples, and families through
          anxiety, trauma, grief, and life transitions. My work is grounded
          in neuroscience-informed and contemplative approaches that
          emphasize emotional regulation, self-reflection, and meaningful
          change.
        </p>
        <p>
          I help clients develop the internal resources needed to relate
          differently to difficult emotions, make sense of their
          experiences, and move toward lasting growth.
        </p>
      </div>
    </div>
  );
}
