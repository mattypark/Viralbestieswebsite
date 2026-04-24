import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  title: string;
  description?: string;
  icon?: ReactNode;
  className?: string;
};

export default function CTAButton({ href, title, description, icon, className = "" }: Props) {
  return (
    <Link
      href={href}
      className={`block w-full rounded-2xl py-5 px-6 shadow-md hover:shadow-lg transition-shadow ${className}`}
    >
      <div className="flex items-center gap-4">
        {icon ? <div className="shrink-0">{icon}</div> : null}
        <div className="flex-1 text-left">
          <div className="font-bold text-lg text-gray-900 leading-tight">{title}</div>
          {description ? (
            <div className="text-sm text-gray-800/80 mt-0.5">{description}</div>
          ) : null}
        </div>
      </div>
    </Link>
  );
}
