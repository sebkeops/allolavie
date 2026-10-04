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
      {/* < lg : grille 3 colonnes (vide · logo centré · menu) ; ≥ lg : logo · navigation · actions. */}
      <div className="relative mx-auto grid h-16 max-w-5xl grid-cols-[1fr_auto_1fr] items-center gap-3 px-4 sm:px-6 lg:flex lg:justify-between">
        {/* Colonne gauche vide sous lg : garde le logo centré. Pas de téléphone ici sur
            mobile (décision de Sébastien) : la barre du bas et l'accroche le portent déjà. */}
        <span aria-hidden="true" className="h-12 w-12 lg:hidden" />

        <a href="#haut" className="shrink-0 justify-self-center rounded-[45%_55%_50%_50%/60%_45%_55%_40%] bg-paper px-4 py-1.5 shadow-sm">
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

        <div className="flex items-center gap-1 justify-self-end">
          <a href={contact.telephoneLien} aria-label={libelles.telephoneAria} className="hidden min-h-12 items-center gap-2 rounded-full px-3 font-bold text-teal-deep hover:bg-leaf lg:flex">
            <IconeTelephone />
            {contact.telephoneAffiche}
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
