import Link from "next/link";

export default function QuantemPage() {
  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-24 md:py-32 flex flex-col items-center gap-6 text-center">
      <h1 className="font-serif font-bold text-5xl md:text-6xl leading-tight tracking-tight text-gray-900">
        Quantem
      </h1>
      <p className="text-lg text-gray-700">Coming soon.</p>
      <Link href="/" className="text-gray-900 underline underline-offset-4 hover:text-gray-600">
        ← Back to home
      </Link>
    </main>
  );
}
