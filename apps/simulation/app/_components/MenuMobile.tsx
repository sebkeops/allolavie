"use client";

import { useRef } from "react";
import { IconeMenu } from "./Icones";
import { libelles, navigation } from "@/content/site";

/*
 * Burger mobile en <details> natif : il s'ouvre même sans JavaScript.
 * Le script ne sert qu'à le refermer quand on choisit une entrée.
 */
export function MenuMobile() {
  const ref = useRef<HTMLDetailsElement>(null);
  const fermer = () => ref.current?.removeAttribute("open");

  return (
    <details ref={ref} className="group lg:hidden">
      <summary className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full text-teal hover:bg-leaf focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal">
        <IconeMenu />
        <span className="sr-only">{libelles.menu}</span>
      </summary>
      <nav aria-label={libelles.menu} className="absolute inset-x-0 top-full border-b border-pale bg-paper px-4 pb-4 shadow-lg">
        <ul>
          {[...navigation, { label: libelles.contact, href: "#contact" }].map((lien) => (
            <li key={lien.href}>
              <a href={lien.href} onClick={fermer} className="flex min-h-12 items-center border-b border-pale text-lg font-bold text-teal">
                {lien.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </details>
  );
}
