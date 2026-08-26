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
  "punish-system-2": {
    title: "Punish the System: Book 2",
    asin: "B0GTS1GRZX",
    audible: "https://www.audible.com/pd/Punish-the-System-Book-2-Audiobook/B0H4HK7GC6",
  },

  // ── CHAOS & CHILLS (was Boy's Own Adventures) ─
  // Felix Jones Adventures
  "mr-glimm": {
    title: "The Weird Map in Mr Glimm's Skull",
    asin: "B0G7MMN47C",
  },
  "clockwork-terror": {
    title: "The Clockwork Terror of Blackglass Island",
    asin: "B0H853VNRW",
  },
  // Standalone
  "terror-from-the-deep": {
    title: "Terror from the Deep",
    asin: "1969819081",
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
    asin: "B0FLFZQPMB",
  },
  "moggies": {
    title: "Moggies of Mars",
    asin: "B0FPQ6J2QN",
  },
  "mercs": {
    title: "Mercs and Mayhem",
    asin: "B0FY9GP7DD",
  },
  "bourbon": {
    title: "Bourbon and Lead",
    asin: "B0G1YMZBGJ",
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
    asin: "B0D6772W4X",
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
  "muse-within-us": {
    title: "The Muse Within Us",
    asin: "B0H3WVBPSL",
  },
  "pet-monsters": {
    title: "Pet Monsters",
    asin: "B0H784WGP1",
  },
  "wyrd-warfare": {
    title: "Forgotten Fronts: Wyrd Warfare",
    asin: "B0H9594NNH",
  },

  // ── OTHER PUBLISHERS ─────────────────────────
  // Anthologies from outside the Raconteur Press line.
  "masque-maelstrom": {
    title: "Masque & Maelstrom Volume 2",
    asin: "B0GMCMK25H",
  },
  "p-con": {
    title: "P-Con: The Vortex of Chaos",
    asin: "B0HCGJF6WB",
  },
  "wyrd-wyvern-west": {
    title: "Wyrd Wyvern West",
    asin: "B0HGMC574T",
  },
  "snafu-level-up": {
    title: "SNAFU: Level Up",
    asin: "B0GQV1MNFB",
  },
  "bizarro": {
    title: "Bizarro Circus of Madness",
    asin: "B0FY1TF3RC",
  },
};

// ── ALIASES ──────────────────────────────────────
// Long-form slugs that appeared in old shares and page
// metadata. Keep these pointing at the canonical entries
// so legacy links resolve to the store, not the fallback.
// ── READER MAGNET ────────────────────────────────
books["crude"] = {
  title: "Crude (free novella via BookFunnel)",
  url: "https://dl.bookfunnel.com/8pmwps4xxw",
};

// ── NEWSLETTER ───────────────────────────────────
// Bare subscribe ask (no gated download) — used in back matter
// where a book just wants to invite a newsletter signup rather
// than push another magnet. Points at the Substack subscribe
// page, which is the documented front door for the MailerLite
// list on account 2489284 (Substack signups seed it).
books["newsletter"] = {
  title: "Join Malory's newsletter",
  url: "https://maloryauthor.substack.com/subscribe",
};

// ── SOCIAL / FOLLOW ──────────────────────────────
// Same "never link raw" rule as buy links — used on back-matter
// "follow me" pages so a handle change only ever needs updating
// here, not in every already-published book.
books["facebook"] = {
  title: "Malory on Facebook",
  url: "https://www.facebook.com/share/1DfRcJtKhQ/",
};
books["instagram"] = {
  title: "Malory on Instagram",
  url: "https://www.instagram.com/maloryauthor",
};
books["x"] = {
  title: "Malory on X",
  url: "https://x.com/maloryauthor",
};
books["twitter"] = books["x"];
books["tiktok"] = {
  title: "Malory on TikTok",
  url: "https://www.tiktok.com/@maloryauthor",
};
books["amazon"] = {
  title: "Malory's Amazon author page",
  url: "https://www.amazon.com/stores/Malory/author/B0DWPC9JYZ",
};

// ── READ-NEXT CHAIN (for Kindle back matter) ─────
// links.maloryauthor.com/next-<slug> = "you finished <slug>,
// here's the next thing to read". Series ends and cross-sells
// fall through to the free novella.
books["next-dark-ages"]      = books["dark-tower"];
books["next-dark-tower"]     = books["dark-blade"];
books["next-dark-blade"]     = books["crude"];
books["next-murder-temple"]  = books["death-curator"];
books["next-death-curator"]  = books["cuckoos-call"];
books["next-cuckoos-call"]   = books["crude"];
books["next-psyker-1"]       = books["psyker-2"];
books["next-psyker-2"]       = books["psyker-3"];
books["next-psyker-3"]       = books["psyker-4"];
books["next-psyker-4"]       = books["psyker-5"];
books["next-psyker-5"]       = books["psyker-6"];
books["next-psyker-6"]       = books["chaos-protocols"];
books["next-chaos-protocols"] = books["swashbuckler"];
books["next-swashbuckler"]   = books["crude"];
books["next-punish-system"]  = books["punish-system-2"];
books["next-punish-system-2"] = books["crude"];
books["next-mr-glimm"]       = books["clockwork-terror"];
books["next-clockwork-terror"] = books["terror-from-the-deep"];
books["next-terror-from-the-deep"] = books["crude"];

books["punish-the-system"] = books["punish-system"];
books["welcome-to-the-dark-ages"] = books["dark-ages"];
books["murder-in-the-temple"] = books["murder-temple"];
books["blackglass"] = books["clockwork-terror"];
books["blackglass-island"] = books["clockwork-terror"];
books["forgotten-fronts"] = books["wyrd-warfare"];
books["masque"] = books["masque-maelstrom"];
books["snafu"] = books["snafu-level-up"];
books["wyvern-west"] = books["wyrd-wyvern-west"];

module.exports = books;
