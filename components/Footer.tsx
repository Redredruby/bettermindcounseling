export default function Footer() {
  return (
    <footer className="border-t border-black/[.08] dark:border-white/[.145]">
      <div className="mx-auto flex max-w-3xl flex-col gap-2 px-6 py-8 text-sm text-zinc-600 dark:text-zinc-400">
        <p>
          Rebecca also sees a light caseload of individual, couples, and family
          therapy clients. Book through{" "}
          <a
            href="https://sessions.psychologytoday.com/rebecca-tavangar"
            className="underline"
          >
            Psychology Today
          </a>
          .
        </p>
        <p>&copy; {new Date().getFullYear()} Rebecca Tavangar</p>
      </div>
    </footer>
  );
}
