"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

// Form submits to /api/waitlist (server-side):
//   • appends row to Google Sheet (env: GOOGLE_SHEET_WEBHOOK_URL)
//   • fires Day-1 confirmation email via Resend (env: RESEND_API_KEY,
//     RESEND_FROM_EMAIL)
//   • placeholder for CRM (Kit) subscription that drives days 2–14
//     of the email warm-up sequence

type Form = {
  name: string;
  email: string;
  phone: string;
  instagram: string;
  goal: string;
  content: string;
};

const initial: Form = {
  name: "",
  email: "",
  phone: "",
  instagram: "",
  goal: "",
  content: "",
};

export default function MasterclassForm() {
  const router = useRouter();
  const [form, setForm] = useState<Form>(initial);
  const [submitting, setSubmitting] = useState(false);

  function update<K extends keyof Form>(key: K, value: Form[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    // Persist locally so the /waitlist/confirmed page can read it.
    if (typeof window !== "undefined") {
      try {
        sessionStorage.setItem(
          "vbc:masterclass-signup",
          JSON.stringify(form),
        );
      } catch {
        /* ignore */
      }
    }

    // Submit to our server-side API route (handles Sheet + email).
    try {
      await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          instagram: form.instagram,
          goal: form.goal,
          content: form.content,
        }),
      });
    } catch (err) {
      console.error("waitlist submit failed", err);
    }

    router.push("/waitlist/confirmed");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full rounded-2xl border border-pink-brand/40 bg-gradient-to-br from-pink-950/40 via-black to-black p-6 md:p-8 space-y-5 shadow-[0_0_40px_rgba(236,72,153,0.15)]"
    >
      <div className="text-center space-y-1">
        <div className="text-xs uppercase tracking-[0.3em] text-pink-300 font-semibold">
          Save your free seat
        </div>
        <p className="font-serif text-xl md:text-2xl text-white">
          May 15 · 10am EST
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field
          label="Name"
          name="name"
          type="text"
          value={form.name}
          onChange={(v) => update("name", v)}
          placeholder="Your name"
          required
          autoComplete="name"
        />
        <Field
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={(v) => update("email", v)}
          placeholder="you@email.com"
          required
          autoComplete="email"
        />
        <Field
          label="Phone #"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={(v) => update("phone", v)}
          placeholder="(555) 555-5555"
          required
          autoComplete="tel"
        />
        <Field
          label="Instagram"
          name="instagram"
          type="text"
          value={form.instagram}
          onChange={(v) => update("instagram", v)}
          placeholder="@yourhandle"
          required
        />
      </div>

      <Textarea
        label="What is your main goal for joining?"
        name="goal"
        value={form.goal}
        onChange={(v) => update("goal", v)}
        placeholder="e.g. become consistent on camera, hit my first 10K followers, build a brand that converts..."
      />

      <Textarea
        label="What is your content about?"
        name="content"
        value={form.content}
        onChange={(v) => update("content", v)}
        placeholder="e.g. wellness, faith-based content, finance for women, fashion + lifestyle..."
      />

      <button
        type="submit"
        disabled={submitting}
        className="group w-full inline-flex items-center justify-center gap-3 rounded-2xl py-4 px-6 bg-gradient-to-br from-pink-bright via-pink-brand to-pink-deep text-white shadow-[0_0_40px_rgba(236,72,153,0.5)] hover:shadow-[0_0_60px_rgba(236,72,153,0.7)] transition-shadow font-semibold tracking-wide disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? "Saving your seat..." : "Register for Free"}
        <ArrowRight
          size={20}
          className="transition-transform group-hover:translate-x-0.5"
        />
      </button>

      <p className="text-center text-[11px] text-neutral-500">
        Free 3-day live masterclass · No payment required
      </p>
    </form>
  );
}

function Field(props: {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="block space-y-1.5">
      <span className="block text-xs uppercase tracking-[0.18em] text-pink-200 font-semibold">
        {props.label}
      </span>
      <input
        name={props.name}
        type={props.type}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        placeholder={props.placeholder}
        required={props.required}
        autoComplete={props.autoComplete}
        className="w-full rounded-xl border border-pink-brand/30 bg-black/60 px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-pink-brand focus:ring-2 focus:ring-pink-brand/40 transition"
      />
    </label>
  );
}

function Textarea(props: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="block space-y-1.5">
      <span className="block text-xs uppercase tracking-[0.18em] text-pink-200 font-semibold">
        {props.label}
      </span>
      <textarea
        name={props.name}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        placeholder={props.placeholder}
        rows={3}
        className="w-full rounded-xl border border-pink-brand/30 bg-black/60 px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-pink-brand focus:ring-2 focus:ring-pink-brand/40 transition resize-none"
      />
    </label>
  );
}
