import Image from "next/image";
import { MenuMobile } from "./MenuMobile";
import { IconeCalendrier, Riviere } from "./Icones";
import { images, libelles, navigation } from "@/content/site";

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
          <ul className="flex items-center gap-8">
            {navigation.map((lien) => (
              <li key={lien.href}>
                {/* Survol / focus : une petite vague « rivière » apparaît sous le lien (au lieu du soulignement). */}
                <a href={lien.href} className="group relative inline-flex min-h-12 items-center font-semibold text-teal-deep">
                  {lien.label}
                  <Riviere className="absolute -bottom-0.5 left-0 !h-2.5 translate-y-1 text-teal-deep opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 motion-reduce:transition-none" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1 justify-self-end">
          {/* Desktop allégé (retour de recette) : plus de numéro ici — il est dans l'accroche et
              la section contact. Un seul bouton, clair, à la place de l'aplat foncé. */}
          <a href="#contact" className="hidden min-h-12 items-center gap-2 rounded-full border-2 border-teal-deep bg-paper px-5 font-bold text-teal-deep transition-colors hover:bg-leaf lg:flex">
            <IconeCalendrier />
            {libelles.prendreRdv}
          </a>
          <MenuMobile />
        </div>
      </div>
    </header>
  );
}
