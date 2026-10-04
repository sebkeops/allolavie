import Image from "next/image";
import { MenuMobile } from "./MenuMobile";
import { IconeTelephone } from "./Icones";
import { contact, images, libelles, navigation } from "@/content/site";

/*
 * En-tête sur fond vert anis vif (demande de Sébastien, pour qu'il ressorte).
 * L'orange du logo ne se lit pas sur ce vert (1,3:1) : le logo est posé sur un
 * galet clair. Textes et icônes en teal-deep sur lime : 5,2:1.
 */
export function EnTete() {
  return (
    <header className="sticky top-0 z-40 border-b-4 border-teal bg-lime shadow-md">
      <div className="relative mx-auto flex h-16 max-w-5xl items-center justify-between gap-3 px-4 sm:px-6">
        <a href="#haut" className="shrink-0 rounded-[45%_55%_50%_50%/60%_45%_55%_40%] bg-paper px-4 py-1.5 shadow-sm">
          <Image src={images.logo.src} width={images.logo.width} height={images.logo.height} alt={images.logo.alt} priority className="h-8 w-auto" />
        </a>

        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {navigation.map((lien) => (
              <li key={lien.href}>
                <a href={lien.href} className="font-bold text-teal-deep underline-offset-4 hover:underline">
                  {lien.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <a href={contact.telephoneLien} aria-label={libelles.telephoneAria} className="flex min-h-12 items-center gap-2 rounded-full px-3 font-bold text-teal-deep hover:bg-leaf">
            <IconeTelephone />
            <span className="hidden sm:inline">{contact.telephoneAffiche}</span>
          </a>
          <a href="#contact" className="hidden min-h-12 items-center rounded-full bg-teal-deep px-5 font-bold text-white hover:bg-night lg:flex">
            {libelles.contact}
          </a>
          <MenuMobile />
        </div>
      </div>
    </header>
  );
}
