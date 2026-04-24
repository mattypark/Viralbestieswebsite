// TODO: paste your Typeform ID below once you have it.
// Find it in Typeform → Share → the part after "/to/" in the URL
// (e.g. for https://form.typeform.com/to/AbCd1234 the ID is "AbCd1234").
const TYPEFORM_ID = "";

export default function WaitlistForm() {
  if (!TYPEFORM_ID) {
    return (
      <div className="w-full rounded-xl border-2 border-dashed border-pink-brand/40 bg-pink-950/20 px-6 py-10 text-center">
        <p className="text-white font-medium">Typeform goes here.</p>
        <p className="text-sm text-neutral-400 mt-2">
          Open{" "}
          <code className="bg-black/60 text-pink-200 rounded px-1.5 py-0.5">
            components/WaitlistForm.tsx
          </code>{" "}
          and set{" "}
          <code className="bg-black/60 text-pink-200 rounded px-1.5 py-0.5">TYPEFORM_ID</code>.
        </p>
      </div>
    );
  }

  const src = `https://form.typeform.com/to/${TYPEFORM_ID}`;

  return (
    <div className="w-full rounded-xl overflow-hidden border border-pink-brand/30 bg-black">
      <iframe
        src={src}
        title="Join the waitlist"
        className="w-full h-[500px] border-0"
        allow="camera; microphone; autoplay; encrypted-media;"
      />
    </div>
  );
}
