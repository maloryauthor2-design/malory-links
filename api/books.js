// ============================================================
// MALORY — BOOK LINK DATABASE
// ============================================================
// Each book has a "slug" (the short URL path), a default ASIN,
// and optionally an Audible link.
//
// To ADD a book: copy any entry below and change the fields.
// To EDIT a link: just change the ASIN or audible URL.
//
// The slug becomes the URL: links.maloryauthor.com/dark-ages
// ============================================================

const books = {

  // ── MORGAN & MERLIN ──────────────────────────
  "dark-ages": {
    title: "Welcome to the Dark Ages",
    asin: "B0DWNBPKBJ",
    audible: "https://www.audible.com/pd/Welcome-to-the-Dark-Ages-Audiobook/B0DXR2YSR7",
  },
  "dark-tower": {
    title: "Journey to the Dark Tower",
    asin: "B0DY59XD7L",
    audible: "https://www.audible.com/pd/Journey-to-the-Dark-Tower-Audiobook/B0DVJ8LKS1",
  },
  "dark-blade": {
    title: "Quest for the Dark Blade",
    asin: "B0DF37V6G9",
    audible: "https://www.audible.com/pd/Quest-for-the-Dark-Blade-Audiobook/B0DVJ57PR5",
  },

  // ── THE SOAR CHRONICLES ──────────────────────
  "murder-temple": {
    title: "Murder in the Temple",
    asin: "B0F8W9B8YL",
    audible: "https://www.audible.com/pd/Murder-in-the-Temple-Audiobook/B0G7LRJXRZ",
  },
  "death-curator": {
    title: "Death of a Curator",
    asin: "B0G9B5ZBNL",
    audible: "https://www.audible.com/pd/Death-of-a-Curator-Audiobook/B0G9B55JJL",
  },
  "cuckoos-call": {
    title: "The Cuckoo's Last Call",
    asin: "B0G99MVCBN",
    audible: "https://www.audible.com/pd/The-Cuckoos-Last-Call-Audiobook/B0GFQBL8ZF",
  },

  // ── PSYKER MARINE ────────────────────────────
  "psyker-1": {
    title: "Psyker Marine: Book 1",
    asin: "B0DKK52KFZ",
  },
  "psyker-2": {
    title: "Psyker Marine: Book 2",
    asin: "B0DNWLTNR4",
  },
  "psyker-3": {
    title: "Psyker Marine: Book 3",
    asin: "B0DQWLB55D",
  },
  "psyker-4": {
    title: "Psyker Marine: Book 4",
    asin: "B0DXN2BYQN",
  },
  "psyker-5": {
    title: "Psyker Marine: Book 5",
    asin: "B0F6VCQR25",
  },
  "psyker-6": {
    title: "Psyker Marine: Book 6",
    asin: "B0FHLP267F",
  },
  "psyker-omnibus": {
    title: "Psyker Marine: Complete Omnibus",
    asin: "B0G7M7Z92R",
    audible: "https://www.audible.com/pd/Psyker-Marine-Omnibus-Audiobook/B0GCPKSK4F",
  },

  // ── ARCANE GALAXY ────────────────────────────
  "chaos-protocols": {
    title: "Arcane Galaxy: Chaos Protocols",
    asin: "B0G2DYHDBL",
    audible: "https://www.audible.com/pd/Chaos-Protocols-Audiobook/B0GR1Q5754",
  },
  "swashbuckler": {
    title: "Arcane Galaxy: Swashbuckler",
    asin: "B0FRWCKD96",
  },

  // ── PUNISH THE SYSTEM ────────────────────────
  "punish-system": {
    title: "Punish the System",
    asin: "B0GSH1T6KK",
    audible: "https://www.audible.com/pd/Punish-the-System-Book-1-Audiobook/B0GTW953L9",
  },

  // ── BOY'S OWN ADVENTURES ─────────────────────
  "mr-glimm": {
    title: "The Weird Map in Mr Glimm's Skull",
    asin: "B0G7MMN47C",
  },

  // ── RACONTEUR PRESS ANTHOLOGIES ───────────────
  "mad-science": {
    title: "Mad Science!",
    asin: "B0FCPJTM37",
  },
  "vice-noir": {
    title: "Vice Noir",
    asin: "B0FH5V32YB",
  },
  "alien-family": {
    title: "Alien Family Traditions",
    asin: "B0CWVG29RK",
  },
  "moggies": {
    title: "Moggies of Mars",
    asin: "B0FPQ6J2QN",
  },
  "mercs": {
    title: "Mercs and Mayhem",
    asin: "B0FYDFSJQN",
  },
  "bourbon": {
    title: "Bourbon and Lead",
    asin: "B0G248LQP4",
  },
  "muscle": {
    title: "High Class Muscle",
    asin: "B0G61K34WV",
  },
  "valet": {
    title: "Uncanny Valet",
    asin: "B0G67PKCL1",
  },
  "insert-coin": {
    title: "Insert Coin",
    asin: "B0GDGG4588",
  },
  "plasma-pulp": {
    title: "Plasma Pulp",
    asin: "B0GHZVB2YX",
  },
  "pogue-too": {
    title: "Pogue Too",
    asin: "B0GN1F1ZCS",
  },
  "mad-science-2": {
    title: "Mad Science 2",
    asin: "B0GS6XW222",
  },
  "auntie-heroes": {
    title: "Auntie Heroes",
    asin: "B0GX2YPFR5",
  },
  "crashed-landings": {
    title: "Crashed Landings",
    asin: "B0GXQNKYGM",
  },
};

module.exports = books;
