import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type Props = {
  href?: string;
  label?: string;
};

export default function BackButton({ href = "/", label = "Back to home" }: Props) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-pink-brand transition-colors group"
    >
      <ArrowLeft
        size={16}
        className="transition-transform group-hover:-translate-x-0.5"
      />
      <span>{label}</span>
    </Link>
  );
}
