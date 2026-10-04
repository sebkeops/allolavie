/*
 * TOUT le texte affiché par la simulation vit ici (SIGWEB.md §7) : un retour
 * client = l'édition d'une ligne. Sources : allolavie.fr (relevé du lot 0,
 * cf. PARTI-PRIS.md §7) et arbitrages de Sébastien (PARTI-PRIS.md §8).
 *
 * `aValider: true` signale un texte SANS source fournie : il s'affiche avec
 * une étiquette « réponse à valider » tant que Nathalie ne l'a pas relu.
 */

/** Bandeau de simulation : passer à `false` pour le retirer (une ligne). */
export const afficherBandeauSimulation = true;

export const bandeau = "Simulation SIGWEB — non contractuelle";

export const meta = {
  title: "Allo la Vie — Nathalie, praticienne en maïeusthésie · Zoom ou à domicile",
  description:
    "Besoin d'un soutien psychothérapeutique ? Nathalie vous accompagne par la maïeusthésie, en visio (Zoom) ou en présentiel à votre domicile. Premier échange par téléphone.",
};

export const contact = {
  prenom: "Nathalie",
  nomComplet: "Nathalie Brousse Ducrocq",
  telephoneAffiche: "06 76 84 36 48",
  telephoneLien: "tel:+33676843648",
  email: "contact@allolavie.fr",
  phraseContact: "Et oui, j'aime l'idée d'un échange dès le premier contact.",
};

export const images = {
  logo: { src: "/simulation/logo-allo-la-vie.webp", width: 493, height: 154, alt: "Allo la Vie" },
  portrait: {
    src: "/simulation/portrait-nathalie.webp",
    width: 234,
    height: 300,
    alt: "Portrait de Nathalie, souriante, en extérieur",
  },
  cheval: {
    src: "/simulation/nathalie-cheval.webp",
    width: 350,
    height: 170,
    alt: "Nathalie allongée dans l'herbe, un cheval penché vers elle",
  },
  chevaux: {
    src: "/simulation/chevaux-pre.webp",
    width: 400,
    height: 225,
    alt: "Un troupeau de chevaux paisible dans un pré",
  },
  coucherSoleil: {
    src: "/simulation/coucher-soleil-mer.webp",
    width: 300,
    height: 225,
    alt: "Coucher de soleil sur la mer, entre les pins",
  },
  montagne: {
    src: "/simulation/montagne-foret.webp",
    width: 450,
    height: 338,
    alt: "Un chemin dans une forêt de mélèzes, au pied d'une montagne",
  },
};

export const navigation = [
  { label: "La maïeusthésie", href: "#maieusthesie" },
  { label: "Pourquoi consulter", href: "#pourquoi" },
  { label: "Qui suis-je", href: "#qui" },
  { label: "Séances", href: "#seances" },
];

export const libelles = {
  appeler: "Appeler",
  prendreRdv: "Prendre RDV",
  contact: "Contact",
  menu: "Menu",
  telephoneAria: "Appeler Nathalie au 06 76 84 36 48",
  aValider: "Réponse à valider",
};

export const hero = {
  surtitre: "Nathalie · praticienne en maïeusthésie",
  titre: "Besoin d'un soutien psychothérapeutique ?",
  texte:
    "Je vous accompagne par la maïeusthésie, en visio ou en présentiel à votre domicile, avec délicatesse, liberté et respect.",
  ctaAppeler: "Appeler Nathalie",
  ctaRdv: "Demander un rendez-vous",
};

export const pourquoi = {
  titre: "Vous vous reconnaissez ?",
  intro: "Peut-être que l'une de ces phrases vous parle…",
  motifs: <{ titre: string; illustration: "perdu" | "angoisse" | "schemas" | "vivant"; texte: string }[]>[
    {
      titre: "Perdu·e",
      illustration: "perdu",
      texte:
        "Vous vous sentez perdu·e, avec un besoin de vous sentir pleinement écouté·e, rejoint·e au cœur de ce que vous vivez.",
    },
    {
      titre: "Angoissé·e",
      illustration: "angoisse",
      texte:
        "Vous vous sentez régulièrement angoissé·e, avec l'envie de (re)trouver la sérénité en vous.",
    },
    {
      titre: "Toujours les mêmes schémas",
      illustration: "schemas",
      texte:
        "Vous constatez des schémas répétitifs dans vos relations personnelles ou professionnelles et sentez le besoin de changer cela.",
    },
    {
      titre: "Envie de vous sentir vivant·e",
      illustration: "vivant",
      texte:
        "Vous peinez à vous sentir pleinement exister, à trouver votre chemin de vie, avec un besoin de vous sentir vivant·e.",
    },
  ],
  conclusion: "Et si on en parlait ?",
};

export const maieusthesie = {
  titre: "La maïeusthésie en 3 points",
  intro:
    "Une thérapie de la pertinence : cette approche de psychothérapie a été développée par Thierry Tournebise.",
  points: [
    {
      titre: "L'art d'être sensible à la naissance du Soi",
      texte:
        "Le mot vient de maieutikê, l'art d'accoucher, et d'aisthanesthai, sentir, percevoir.",
    },
    {
      titre: "Le symptôme comme un chemin",
      texte:
        "Le « problème psychologique » est considéré comme un chemin qui conduit, en nous, vers ce qui attend d'être réhabilité, de trouver sa juste place, d'être accueilli et aimé par nous-mêmes — tel un fil d'Ariane.",
    },
    {
      titre: "Délicatesse, liberté et respect",
      texte:
        "Vous restez libre à chaque instant : une séance n'engage jamais à la suivante.",
    },
  ],
  lienTexte: "En savoir plus sur maieusthesie.com",
  lienUrl: "https://www.maieusthesie.com",
};

export const qui = {
  titre: "Le jour où j'ai dit STOP !",
  surtitre: "Qui suis-je",
  citation:
    "La Vie, c'est comme une rivière, parfois tranquille, parfois démontée.",
  paragraphes: [
    "J'ai appris à accueillir mes tourments, à écouter mes appels intérieurs, à regarder le vide en moi… Et puis un jour, je me suis sentie prête ; j'ai dit stop : j'étais ingénieure depuis plus de 30 ans !",
    "J'ai demandé une rupture conventionnelle sans savoir ce que j'allais faire de ma vie d'après : j'avais besoin de vivre ce vide pour que la vie le remplisse. Depuis ce jour, je ne cesse de remercier la Vie : je me sens sur mon fil rouge.",
  ],
  etapes: [
    {
      titre: "9 mois de Communication NonViolente",
      texte:
        "Un parcours en ateliers animés par l'équipe de Thomas d'Ansembourg : la communication, ça s'apprend ! Et j'y ai accouché de mon envie d'accompagner les personnes.",
    },
    {
      titre: "La découverte de la maïeusthésie",
      texte:
        "Par hasard, merci la Vie ! C'était comme une évidence, et j'ai plongé dans ce bain.",
    },
  ],
};

export const seances = {
  surtitre: "Séances et tarifs",
  titre: "Les séances",
  intro: "Par Zoom ou en présentiel, à votre domicile — ou ailleurs, on en discute.",
  formules: [
    { titre: "Séance individuelle", duree: "1h30", tarif: "80 €", detail: "Pour les adultes" },
    { titre: "Séance enfant", duree: "1h", tarif: "60 €", detail: "Pour les enfants" },
    { titre: "Couple ou famille", duree: "2h", tarif: "100 €", detail: "À deux ou en famille" },
  ],
  modalites: ["En visio (Zoom)", "En présentiel, à votre domicile"],
  libelleDuree: "Durée",
  parSeance: "la séance",
  frein: "Si le tarif est un frein, discutons-en !",
  ctaFrein: "M'appeler pour en parler",
  ctaRdv: "Prendre rendez-vous",
};

export const temoignages = {
  titre: "Témoignage",
  liste: [
    {
      texte:
        "(…) Dans ce grand passage à vide — que je peux aujourd'hui nommer comme un temps de survie — ta présence a compté. Merci pour ton soutien, et surtout pour la confiance que tu m'as accordée dans ma capacité à prendre de la hauteur, à ne pas me perdre, même quand tout semblait fragile. Cette confiance m'a aidée à tenir, et à continuer ce travail de conscience.",
      auteur: "Une personne accompagnée",
    },
  ],
};

export type QuestionFaq = { question: string; reponse: string; aValider?: boolean };

export const faq: { titre: string; questions: QuestionFaq[] } = {
  titre: "Questions fréquentes",
  questions: [
    {
      question: "Comment se passe le premier contact ?",
      reponse:
        "Par un simple appel : j'aime l'idée d'un échange dès le premier contact. Nous faisons connaissance, vous me dites ce qui vous amène, et nous voyons ensemble si et comment nous commençons.",
      aValider: true,
    },
    {
      question: "En visio ou en présentiel, quelle différence ?",
      reponse:
        "Aucune sur le fond : les séances se font par Zoom ou en présentiel, à votre domicile (ou ailleurs, à discuter). La durée et le tarif sont les mêmes.",
    },
    {
      question: "Combien de séances faut-il prévoir ?",
      reponse:
        "Il n'y a pas de programme imposé. Une séance n'engage jamais à la suivante, et le rendez-vous suivant n'est jamais systématique : c'est vous qui le demandez, si vous le souhaitez.",
    },
    {
      question: "Les séances sont-elles remboursées par la mutuelle ?",
      reponse:
        "Chaque mutuelle a ses propres règles : renseignez-vous auprès de la vôtre. Et si le tarif est un frein, parlons-en dès le premier appel.",
      aValider: true,
    },
    {
      question: "Ce que je dis reste-t-il confidentiel ?",
      reponse:
        "Oui. Rien de ce qui m'est confié n'est rapporté à qui que ce soit — ni à la famille, ni à un conjoint, ni à un confrère — sauf avec votre accord, ou en cas de danger majeur lorsque la loi l'impose.",
    },
  ],
};

export const zone = {
  titre: "Où et comment ?",
  visio: { titre: "Partout, en visio", texte: "Les séances par Zoom se font depuis chez vous, où que vous soyez." },
  presentiel: {
    titre: "Chez vous, en présentiel",
    texte: "Je me déplace à votre domicile.",
    // Zone non fournie : emplacement réservé (PARTI-PRIS.md §8, à demander à Nathalie).
    zonePlaceholder: "Communes desservies : à confirmer avec Nathalie",
  },
  teaser: {
    titre: "Bientôt : une page par commune",
    texte:
      "Sur le site final, chaque commune desservie aura sa propre page, pour être trouvée par les personnes qui cherchent un accompagnement près de chez elles.",
  },
};

export const formulaire = {
  titre: "Prendre contact",
  intro:
    "Le plus simple reste de m'appeler. Vous pouvez aussi me laisser un message : je vous rappelle.",
  champs: {
    nom: "Votre nom",
    telephone: "Votre téléphone",
    email: "Votre e-mail",
    typeSeance: "Type de séance",
    message: "Votre message (facultatif)",
  },
  optionsSeance: [
    "Séance individuelle",
    "Séance enfant",
    "Couple ou famille",
    "Je ne sais pas encore",
  ],
  choisir: "Choisir…",
  rgpdAvant: "J'accepte que mes coordonnées servent uniquement à être recontacté·e. ",
  rgpdLien: "Politique de confidentialité",
  envoyer: "Envoyer ma demande",
  obligatoire: "obligatoire",
  confirmationTitre: "Merci, votre message est bien parti.",
  confirmationTexte: "Je vous rappelle très vite. Si c'est pressé, appelez-moi directement.",
  noteSimulation: "Simulation : aucun message n'est réellement envoyé.",
  urgence:
    "Ce n'est pas un service d'urgence. En cas de détresse, appelez le 3114 (prévention du suicide, 24 h/24) ou le 15.",
};

export const pied = {
  liens: [
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "Charte du praticien", href: "/charte" },
    { label: "Confidentialité", href: "/confidentialite" },
    { label: "Cookies", href: "/cookies" },
  ],
  signature: "Allo la Vie — Nathalie Brousse Ducrocq, praticienne en maïeusthésie",
};

/** Pages annexes : stubs de la simulation (brief §4.7). */
export const pagesAnnexes = {
  retour: "← Retour à l'accueil",
  mentionsLegales: {
    titre: "Mentions légales",
    blocs: [
      { titre: "Éditrice", texte: "Nathalie Brousse Ducrocq. Adresse, statut et SIRET : à compléter." },
      { titre: "Hébergement", texte: "Vercel Inc. Coordonnées complètes : à compléter." },
      {
        titre: "Données personnelles",
        texte: "Aucune donnée n'est enregistrée lors de la consultation du site.",
      },
      { titre: "Propriété intellectuelle", texte: "Les contenus du site sont protégés." },
    ],
  },
  charte: {
    titre: "Charte du praticien",
    blocs: [
      {
        titre: "Laisser chacun·e libre de ses choix",
        texte:
          "Une séance ne constitue jamais un engagement pour des séances suivantes. Le rendez-vous suivant n'est jamais systématique, sauf à votre demande.",
      },
      {
        titre: "Une neutralité chaleureuse et bienveillante",
        texte: "Aucun jugement de valeur, ni envers vous, ni envers vos proches.",
      },
      {
        titre: "La confidentialité",
        texte: "Rien de ce qui est confié n'est rapporté à qui que ce soit, sauf de façon anonyme.",
      },
    ],
    note: "Page de simulation : le texte intégral de la charte sera repris sur le site final.",
  },
  confidentialite: {
    titre: "Politique de confidentialité",
    blocs: [
      {
        titre: "Formulaire de contact",
        texte:
          "Les informations saisies servent uniquement à vous recontacter. Elles ne sont ni stockées dans une base de données, ni transmises à des tiers.",
      },
    ],
    note: "Page de simulation : le texte définitif sera rédigé pour le site final.",
  },
  cookies: {
    titre: "Cookies",
    blocs: [
      {
        titre: "Aucun cookie non essentiel",
        texte: "Ce site ne dépose aucun cookie publicitaire ni de mesure d'audience.",
      },
    ],
    note: "Page de simulation.",
  },
};
