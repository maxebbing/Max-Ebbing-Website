import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <p className="mb-5 text-sm font-medium tracking-wide text-blue-600">
          404
        </p>

        <h1 className="mb-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          Seite nicht gefunden
        </h1>

        <p className="mb-10 text-base leading-relaxed text-slate-500">
          Die angeforderte Seite existiert nicht oder wurde verschoben.
        </p>

        <Link
          href="/"
          className="inline-flex items-center rounded-2xl border border-slate-200 px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
        >
          Zur Startseite
        </Link>
      </div>
    </main>
  );
}