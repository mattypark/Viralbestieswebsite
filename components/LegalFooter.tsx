export default function LegalFooter() {
  return (
    <footer className="w-full border-t border-neutral-800/60 mt-16">
      <div className="mx-auto w-full max-w-2xl px-6 py-10 text-[11px] leading-relaxed text-neutral-500 space-y-3">
        <p>
          Viral Besties Club is operated by Jayda Jones, LLC, an online
          education and coaching company providing digital programs, challenges,
          mentorship, training, and marketing education for creators and
          entrepreneurs.
        </p>
        <p>
          For support or questions, contact:{" "}
          <a
            href="mailto:jj@viralbesties.club"
            className="text-pink-300 hover:text-pink-brand transition-colors"
          >
            jj@viralbesties.club
          </a>
        </p>
        <p>
          By providing your email address and/or phone number, you agree to
          receive transactional, marketing, and promotional communications from
          Jayda Jones, LLC related to Viral Besties Club, The 30 Day 10K
          Follower Challenge, webinars, offers, updates, and related services.
        </p>
        <p>
          Message frequency may vary. Message and data rates may apply. Reply
          STOP to unsubscribe from SMS communications or HELP for assistance.
          You may unsubscribe from emails at any time using the unsubscribe link
          provided in emails.
        </p>
        <p>
          Your information will never be sold. Please review our{" "}
          <a href="#" className="text-pink-300 hover:text-pink-brand transition-colors">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="#" className="text-pink-300 hover:text-pink-brand transition-colors">
            Terms &amp; Conditions
          </a>{" "}
          for additional details.
        </p>
      </div>
    </footer>
  );
}
