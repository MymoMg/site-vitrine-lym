# LYM — Lift Your Mind · Site vitrine

Site one-page React + TypeScript (Vite) pour l'application mobile **LYM**.
Direction artistique : noir-violet `#0C080E`, accents violet `#8730F9` et vert
`#D6FF60`, glassmorphism, animations de scroll fluides.

## Lancer le projet

```bash
npm install
npm run dev
```

Le site est disponible sur `http://localhost:5173`.

```bash
npm run build    # build de production dans /dist
npm run preview  # prévisualiser le build
```

## Arborescence

```
lym-landing/
├── index.html              # point d'entrée HTML, chargement des polices
├── public/
│   └── favicon.svg
└── src/
    ├── main.tsx             # bootstrap React
    ├── App.tsx              # assemble toutes les sections de la page
    ├── styles/
    │   └── globals.css      # tokens couleur/typo, reset, utilitaires (.glass-card, .btn, .reveal…)
    ├── hooks/
    │   ├── useReveal.ts      # animation fade + blur + translate au scroll (IntersectionObserver)
    │   └── useCountUp.ts     # compteurs animés (section Progression)
    └── components/
        ├── Navbar/           # nav sticky avec blur au scroll + emplacement logo
        ├── Hero/              # accroche + CTA + fond animé (blobs/grille)
        ├── StatsMarquee/      # bandeau défilant type tableau de bord sportif
        ├── PhoneMockup/       # smartphone réutilisé (Hero + AppPreview)
        ├── AppPreview/        # "Ta progression, dans ta poche"
        ├── Features/          # cartes glassmorphism en grille bento (inclut l'avatar 3D)
        ├── OrbitRing/         # anneau filaire 3D décoratif (Features + Progression)
        ├── Concept/           # storytelling + diagramme corps/mental/habitudes
        ├── Progression/       # graphique animé + statistiques
        ├── AISection/         # bloc IA adaptative
        ├── FinalCTA/          # appel à l'action final
        └── Footer/
```

Chaque composant a son propre fichier `.css` à côté de son `.tsx` : c'est
volontairement lisible et isolé plutôt que dans un seul gros fichier de
styles.

## Logo

`public/logo.svg` est un **placeholder** (texte « LYM » généré en SVG).
Remplacez ce fichier par votre vrai logo en conservant le nom `logo.svg`
(ou changez le `src` dans `src/components/Navbar/Navbar.tsx` si vous
préférez un `.png`). La hauteur est fixée à 34px dans la navbar, la largeur
s'adapte automatiquement.

## Notes de direction artistique

- **Typographies** : `Clash Display` (Fontshare, gratuite) pour les titres —
  c'est l'alternative libre la plus proche de l'esprit Roc Grotesk (large,
  affirmée, expressive) qui n'est pas disponible en libre accès. Si vous
  possédez une licence Roc Grotesk, remplacez simplement la variable
  `--font-display` dans `src/styles/globals.css` et chargez le fichier de
  police dans `index.html`. `Inter` est utilisée telle quelle pour les textes
  courants.
- **Couleurs** : toutes centralisées en variables CSS dans
  `src/styles/globals.css` (`--c-bg`, `--c-violet`, `--c-green`, etc.) — à
  modifier à un seul endroit pour ajuster toute la charte.
- **Animations** : le hook `useReveal` gère l'apparition au scroll (fade +
  blur + translate). Le hover des cartes (`.glass-card`) ajoute un léger zoom
  et un glow violet. Les graphiques (anneau de progression, courbes) se
  dessinent au scroll via `stroke-dashoffset`. `prefers-reduced-motion` est
  respecté partout.

## Prochaines pistes (hors périmètre de ce livrable)

- Brancher le bouton « Entrer dans LYM » vers l'onboarding réel une fois
  développé.
- Ajouter les écrans de suivi santé avancés (ex. analyses de prise de sang)
  évoqués dans le cahier des charges, dans une page dédiée plutôt que sur le
  site vitrine one-page.
- Remplacer le smartphone en CSS/SVG par un véritable visuel 3D (ex. Spline ou
  Three.js) si vous souhaitez aller plus loin que l'effet flottant actuel.
