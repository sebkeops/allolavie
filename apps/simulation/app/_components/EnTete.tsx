import Image from "next/image";
import { MenuMobile } from "./MenuMobile";
import { IconeTelephone } from "./Icones";
import { contact, images, libelles, navigation } from "@/content/site";

export function EnTete() {
  return (
    <header className="sticky top-0 z-40 border-b-4 border-lime bg-paper/95 backdrop-blur">
      <div className="relative mx-auto flex h-16 max-w-5xl items-center justify-between gap-3 px-4 sm:px-6">
        <a href="#haut" className="shrink-0">
          <Image src={images.logo.src} width={images.logo.width} height={images.logo.height} alt={images.logo.alt} priority className="h-9 w-auto" />
        </a>

        <nav aria-label="Navigation principale" className="hidden md:block">
          <ul className="flex items-center gap-6">
            {navigation.map((lien) => (
              <li key={lien.href}>
                <a href={lien.href} className="font-bold text-teal hover:text-terra">
                  {lien.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <a href={contact.telephoneLien} aria-label={libelles.telephoneAria} className="flex min-h-12 items-center gap-2 rounded-full px-3 font-bold text-teal hover:bg-pale">
            <IconeTelephone />
            <span className="hidden sm:inline">{contact.telephoneAffiche}</span>
          </a>
          <a href="#contact" className="hidden min-h-12 items-center rounded-full bg-teal px-5 font-bold text-white hover:bg-teal-deep md:flex">
            {libelles.contact}
          </a>
          <MenuMobile />
        </div>
      </div>
    </header>
  );
}
