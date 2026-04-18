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
    audible: "B0DM6Z8VLS",
  },
  "dark-tower": {
    title: "Journey to the Dark Tower",
    asin: "B0DY59XD7L",
    audible: "B0DQD8K6G4",
  },
  "dark-blade": {
    title: "Quest for the Dark Blade",
    asin: "B0DWP9Y7S4",
    audible: "B0DVNGD7Z6",
  },

  // ── THE SOAR CHRONICLES ──────────────────────
  "murder-temple": {
    title: "Murder in the Temple",
    asin: "B0F8W9B8YL",
    audible: "B0DJZ2CF73",
  },
  "death-curator": {
    title: "Death of a Curator",
    asin: "B0F8X6PH6R",
  },
  "cuckoos-call": {
    title: "The Cuckoo's Last Call",
    asin: "B0G99MVCBN",
    audible: "B0DX5ZLBQG",
  },

  // ── PSYKER MARINE ────────────────────────────
  "psyker-1": {
    title: "Psyker Marine: Book 1",
    asin: "B0DKK52KFZ",
  },
  "psyker-2": {
    title: "Psyker Marine: Book 2",
    asin: "B0DP9WJ3RD",
  },
  "psyker-3": {
    title: "Psyker Marine: Book 3",
    asin: "B0DQWLB55D",
  },
  "psyker-4": {
    title: "Psyker Marine: Book 4",
    asin: "B0DSG2K9S6",
  },
  "psyker-5": {
    title: "Psyker Marine: Book 5",
    asin: "B0DTGF8T9Y",
  },
  "psyker-6": {
    title: "Psyker Marine: Book 6",
    asin: "B0DVG9Y4P3",
  },
  "psyker-omnibus": {
    title: "Psyker Marine: Complete Omnibus",
    asin: "B0DXK9L4V7",
    audible: "B0DHKYH4NS",
  },

  // ── ARCANE GALAXY ────────────────────────────
  "chaos-protocols": {
    title: "Arcane Galaxy: Chaos Protocols",
    asin: "B0DWPCZ3V7",
    audible: "B0DLF9WQKX",
  },
  "swashbuckler": {
    title: "Arcane Galaxy: Swashbuckler",
    asin: "B0G2QRSFY8",
  },

  // ── PUNISH THE SYSTEM ────────────────────────
  "punish-system": {
    title: "Punish the System",
    asin: "B0DWQ2X3H9",
    audible: "B0CK5K57F2",
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
    asin: "B0DWPF9S4K",
  },
  "insert-coin": {
    title: "Insert Coin",
    asin: "B0GDGG4588",
  },
  "plasma-pulp": {
    title: "Plasma Pulp",
    asin: "B0DWPC8K6L",
  },
  "pogue-too": {
    title: "Pogue Too",
    asin: "B0GN1F1ZCS",
  },
  "mad-science-2": {
    title: "Mad Science 2",
    asin: "B0GS6XW222",
  },
};

module.exports = books;
