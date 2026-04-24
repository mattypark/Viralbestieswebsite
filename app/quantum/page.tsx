import BackButton from "@/components/BackButton";

export default function QuantumPage() {
  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-16 md:py-24 flex flex-col gap-10">
      <BackButton />
      <div className="flex flex-col items-center gap-6 text-center py-16">
        <h1 className="font-serif font-bold text-5xl md:text-6xl leading-tight tracking-tight text-white">
          <span className="text-pink-brand">Quantum</span>
        </h1>
        <p className="text-lg text-neutral-300">Coming soon.</p>
      </div>
    </main>
  );
}
