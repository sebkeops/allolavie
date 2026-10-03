/* Icônes SVG inline, décoratives (aria-hidden) : aucune dépendance. */
type Props = { className?: string };

export function IconeTelephone({ className = "h-5 w-5" }: Props) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function IconeCalendrier({ className = "h-5 w-5" }: Props) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

export function IconeMenu({ className = "h-6 w-6" }: Props) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

/* Séparateur « rivière » : une vague douce entre deux sections. */
export function Riviere({ className = "" }: Props) {
  return (
    <svg className={`block h-6 w-full ${className}`} viewBox="0 0 1200 40" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 20 C 200 0, 400 40, 600 20 S 1000 0, 1200 20" fill="none" stroke="currentColor" strokeWidth={3} />
    </svg>
  );
}
