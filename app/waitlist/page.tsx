import { Play } from "lucide-react";
import ProfileHeader from "@/components/ProfileHeader";
import WaitlistForm from "@/components/WaitlistForm";

export default function WaitlistPage() {
  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-16 md:py-24 flex flex-col items-center gap-10">
      <ProfileHeader />

      <h1 className="font-serif font-bold text-4xl md:text-5xl leading-tight tracking-tight text-gray-900 text-center">
        Viral Besties Club Waitlist
      </h1>

      <div className="w-full aspect-video bg-gray-200 rounded-lg flex items-center justify-center shadow-sm">
        <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center shadow">
          <Play size={28} className="text-gray-900 translate-x-0.5" fill="currentColor" />
        </div>
      </div>

      <p className="text-center text-gray-700">
        {/* Placeholder description — edit me */}
        A short description of what the Viral Besties Club is goes here.
      </p>

      <section className="w-full flex flex-col items-center gap-5">
        <h2 className="font-serif text-3xl md:text-4xl text-gray-900">Join the waitlist</h2>
        <WaitlistForm />
      </section>

      <div className="w-full flex items-center gap-4 pt-8">
        <div className="flex-1 h-px bg-gray-300" />
        <span className="text-sm tracking-[0.2em] text-gray-600 font-medium">CASE STUDIES</span>
        <div className="flex-1 h-px bg-gray-300" />
      </div>
    </main>
  );
}
