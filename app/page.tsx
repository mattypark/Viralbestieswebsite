import { Sparkles, Rocket } from "lucide-react";
import ProfileHeader from "@/components/ProfileHeader";
import CTAButton from "@/components/CTAButton";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-16 md:py-24 flex flex-col items-center gap-10">
      <ProfileHeader />

      <div className="flex flex-col items-center gap-3 text-center">
        <h1 className="font-serif font-bold text-5xl md:text-6xl leading-tight tracking-tight text-gray-900">
          {/* Placeholder headline — edit me */}
          I Help Founders
          <br />
          Go Viral.
        </h1>
        <p className="text-lg text-gray-700">Where do you want to grow?</p>
      </div>

      <div className="w-full flex flex-col gap-4">
        <CTAButton
          href="/waitlist"
          title="Apply for Waitlist"
          description="Join the Viral Besties Club"
          icon={<Sparkles size={28} className="text-gray-900" />}
          className="bg-amber-300"
        />
        <CTAButton
          href="/quantem"
          title="Apply for Quantem"
          description="Next-level growth partnership"
          icon={<Rocket size={28} className="text-gray-900" />}
          className="bg-red-400"
        />
      </div>
    </main>
  );
}
