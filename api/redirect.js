const books = require("./books");

// ============================================================
// MALORY — GEO-AWARE AMAZON REDIRECT
// ============================================================
// Rewritten 2026-09-18.
//
// The old version sent every visitor to amazon.com, on the stated
// assumption that "Amazon handles country detection itself". It does
// not. A Kindle listing is regional: a reader outside the US lands on
// "This title is not currently available for purchase" with an offer to
// change their country, which is where the sale dies.
//
// It also stamped a hardcoded UK Associates tag (maloryauthor-21) onto
// every .com link. A -21 tag is only valid on amazon.co.uk, so those
// clicks earned nothing at all.
//
// Now the visitor’s country picks the store, and each store carries its
// own Associates tag from an env var. A store with no tag configured
// gets a clean, untagged link on purpose — an untagged link still sells
// the book, a wrongly-tagged one earns nothing and muddies reporting.
//
// Set in Vercel: TAG_US, TAG_UK. Add TAG_DE, TAG_FR and friends as those
// tracking IDs are created. Leave TAG_DEFAULT unset unless a tag is
// genuinely valid in every store — it is the fallback for all of them.
//
// Env var changes need a redeploy before they take effect.
// ============================================================

const STORES = {
  US: ["www.amazon.com",    "TAG_US"],
  GB: ["www.amazon.co.uk",  "TAG_UK"],
  UK: ["www.amazon.co.uk",  "TAG_UK"],
  IE: ["www.amazon.co.uk",  "TAG_UK"],
  CA: ["www.amazon.ca",     "TAG_CA"],
  AU: ["www.amazon.com.au", "TAG_AU"],
  DE: ["www.amazon.de",     "TAG_DE"],
  AT: ["www.amazon.de",     "TAG_DE"],
  CH: ["www.amazon.de",     "TAG_DE"],
  FR: ["www.amazon.fr",     "TAG_FR"],
  BE: ["www.amazon.com.be", "TAG_BE"],
  ES: ["www.amazon.es",     "TAG_ES"],
  IT: ["www.amazon.it",     "TAG_IT"],
  NL: ["www.amazon.nl",     "TAG_NL"],
  PL: ["www.amazon.pl",     "TAG_PL"],
  SE: ["www.amazon.se",     "TAG_SE"],
  JP: ["www.amazon.co.jp",  "TAG_JP"],
  IN: ["www.amazon.in",     "TAG_IN"],
  BR: ["www.amazon.com.br", "TAG_BR"],
  MX: ["www.amazon.com.mx", "TAG_MX"],
  SG: ["www.amazon.sg",     "TAG_SG"],
  AE: ["www.amazon.ae",     "TAG_AE"],
  SA: ["www.amazon.sa",     "TAG_SA"],
  EG: ["www.amazon.eg",     "TAG_EG"],
  TR: ["www.amazon.com.tr", "TAG_TR"],
};

function tagFor(envName) {
  return process.env[envName] || process.env.TAG_DEFAULT || "";
}

function withTag(url, tag) {
  if (!tag) return url;
  return url + (url.includes("?") ? "&" : "?") + "tag=" + tag;
}

module.exports = function handler(req, res) {
  const { slug, format } = req.query;
  const book = books[slug];

  if (!book) {
    res.writeHead(302, { Location: "https://maloryauthor.com/books.html" });
    return res.end();
  }

  // Audible is a US storefront, so it takes the US tag — not the UK one
  // the old code used.
  if (format === "audible" && book.audible) {
    res.writeHead(302, { Location: withTag(book.audible, tagFor("TAG_US")) });
    return res.end();
  }

  // Direct-URL entries (BookFunnel and the like) are never tagged.
  if (book.url) {
    res.writeHead(302, { Location: book.url });
    return res.end();
  }

  const country = (req.headers["x-vercel-ip-country"] || "US").toUpperCase();
  const [host, tagEnv] = STORES[country] || STORES.US;
  res.writeHead(302, {
    Location: withTag(`https://${host}/dp/${book.asin}`, tagFor(tagEnv)),
  });
  return res.end();
};
