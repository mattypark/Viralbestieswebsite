// TODO: paste your Typeform ID below once you have it.
// Find it in Typeform → Share → the part after "/to/" in the URL
// (e.g. for https://form.typeform.com/to/AbCd1234 the ID is "AbCd1234").
const TYPEFORM_ID = "";

export default function WaitlistForm() {
  if (!TYPEFORM_ID) {
    return (
      <div className="w-full rounded-xl border-2 border-dashed border-gray-300 bg-white px-6 py-10 text-center">
        <p className="text-gray-800 font-medium">Typeform goes here.</p>
        <p className="text-sm text-gray-500 mt-2">
          Open{" "}
          <code className="bg-gray-100 rounded px-1.5 py-0.5">
            components/WaitlistForm.tsx
          </code>{" "}
          and set{" "}
          <code className="bg-gray-100 rounded px-1.5 py-0.5">TYPEFORM_ID</code>.
        </p>
      </div>
    );
  }

  const src = `https://form.typeform.com/to/${TYPEFORM_ID}`;

  return (
    <div className="w-full rounded-xl overflow-hidden border border-gray-200 bg-white">
      <iframe
        src={src}
        title="Join the waitlist"
        className="w-full h-[500px] border-0"
        allow="camera; microphone; autoplay; encrypted-media;"
      />
    </div>
  );
}
