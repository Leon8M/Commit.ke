// app/components/Header.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navLinks = [
  { name: "News", href: "/news" },
  { name: "Blogs", href: "/blogs" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="font-bold text-xl">
          Commit.Ke
        </Link>
        <nav className="flex items-center space-x-2 rounded-full border p-1">
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  isActive ? "text-background" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="bubble"
                    className="absolute inset-0 z-10 bg-primary"
                    style={{ borderRadius: 9999 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-20">{link.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}