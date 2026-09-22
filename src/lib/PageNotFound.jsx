import { useLocation } from 'react-router-dom';

export default function PageNotFound() {
  const location = useLocation();
  const pageName = location.pathname.substring(1) || 'this page';

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 p-6 text-slate-800">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <p className="text-6xl font-light tracking-tight text-slate-300">404</p>
        <h1 className="mt-4 text-2xl font-semibold">Page not found</h1>
        <p className="mt-3 text-sm text-slate-600">
          The page <span className="font-medium text-slate-700">{pageName}</span> could not be found.
        </p>
        <a
          href="/"
          className="mt-6 inline-flex items-center rounded-lg border border-slate-200 bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-200"
        >
          Go home
        </a>
      </div>
    </main>
  );
}