import { IconeCalendrier, IconeTelephone } from "./Icones";
import { contact, libelles } from "@/content/site";

/* Barre d'action fixe en bas d'écran, mobile uniquement (brief §4.2). */
export function BarreMobile() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-sand bg-paper/95 p-2 backdrop-blur md:hidden">
      <a href={contact.telephoneLien} aria-label={libelles.telephoneAria} className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-terra font-bold text-white">
        <IconeTelephone />
        {libelles.appeler}
      </a>
      <a href="#contact" className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-teal font-bold text-white">
        <IconeCalendrier />
        {libelles.prendreRdv}
      </a>
    </div>
  );
}
