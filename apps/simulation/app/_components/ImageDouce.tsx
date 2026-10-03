import Image from "next/image";

type Props = {
  src: string;
  width: number;
  height: number;
  alt: string;
  className?: string;
  priority?: boolean;
};

/*
 * Photo avec repli gracieux (brief §6) : le cadre porte un dégradé feuillage,
 * visible si l'image ne charge pas. Les photos du site actuel sont petites
 * (≤ 450 px) : on ne les agrandit jamais au-delà de leur taille réelle.
 */
export function ImageDouce({ src, width, height, alt, className = "", priority }: Props) {
  return (
    <div
      className={`overflow-hidden rounded-3xl bg-gradient-to-br from-anis to-pale ${className}`}
      style={{ maxWidth: width, aspectRatio: `${width} / ${height}` }}
    >
      <Image src={src} width={width} height={height} alt={alt} priority={priority} className="h-full w-full object-cover" sizes={`(max-width: ${width}px) 100vw, ${width}px`} />
    </div>
  );
}
