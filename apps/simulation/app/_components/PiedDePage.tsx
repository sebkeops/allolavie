import { contact, pied } from "@/content/site";

export function PiedDePage() {
  const annee = new Date().getFullYear();
  return (
    <footer className="bg-teal-deep px-4 pb-24 pt-10 text-paper sm:px-6 md:pb-10">
      <div className="mx-auto max-w-5xl">
        <p className="font-serif text-xl">{pied.signature}</p>
        <p className="mt-3">
          <a href={contact.telephoneLien} className="inline-flex min-h-12 items-center font-bold underline underline-offset-4">
            {contact.telephoneAffiche}
          </a>
          <span aria-hidden="true"> · </span>
          <a href={`mailto:${contact.email}`} className="inline-flex min-h-12 items-center font-bold underline underline-offset-4">
            {contact.email}
          </a>
        </p>
        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-1">
          {pied.liens.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="inline-flex min-h-12 items-center underline underline-offset-4">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-base">© {annee} Allo la Vie</p>
      </div>
    </footer>
  );
}
