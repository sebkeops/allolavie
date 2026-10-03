import { IconeCalendrier, IconeTelephone } from "./Icones";
import { contact, libelles } from "@/content/site";

const base =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal";

export function BoutonAppeler({ texte, className = "" }: { texte: string; className?: string }) {
  return (
    <a href={contact.telephoneLien} aria-label={libelles.telephoneAria} className={`${base} bg-terra text-white hover:bg-terra/90 ${className}`}>
      <IconeTelephone />
      {texte}
    </a>
  );
}

export function BoutonRdv({ texte, className = "" }: { texte: string; className?: string }) {
  return (
    <a href="#contact" className={`${base} bg-teal text-white hover:bg-teal-deep ${className}`}>
      <IconeCalendrier />
      {texte}
    </a>
  );
}
