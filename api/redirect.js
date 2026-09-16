const books = require("./books");

// ============================================================
// CONFIGURATION
// ============================================================
// Amazon Associates tracking IDs are marketplace-specific. A "-21"
// tag is a European ID and only pays on the European stores; "-20"
// is the US programme. Sending every visitor to amazon.com with the
// "-21" tag, as this file used to, meant no store ever matched the
// tag and no click was attributed.
//
// Add a tag here (or as a Vercel environment variable) once the
// matching Associates programme is approved. A store with no tag
// still gets the sale, it just earns no commission, which is what
// was already happening everywhere.
const TAGS = {
  eu: "maloryauthor-21",                    // UK, DE, FR, IT, ES, NL, SE, PL
  us: process.env.AMAZON_TAG_US || "",      // set to the "-20" ID when approved
  ca: process.env.AMAZON_TAG_CA || "",
  au: process.env.AMAZON_TAG_AU || "",
};

// Country -> which store to send them to. Audible trades in fewer
// countries than Amazon, so a country with no Audible store falls
// back to audible.com rather than dumping the buyer on a homepage.
const STORES = {
  GB: { amazon: "www.amazon.co.uk",    audible: "www.audible.co.uk",    tag: TAGS.eu },
  DE: { amazon: "www.amazon.de",       audible: "www.audible.de",       tag: TAGS.eu },
  AT: { amazon: "www.amazon.de",       audible: "www.audible.de",       tag: TAGS.eu },
  CH: { amazon: "www.amazon.de",       audible: "www.audible.de",       tag: TAGS.eu },
  FR: { amazon: "www.amazon.fr",       audible: "www.audible.fr",       tag: TAGS.eu },
  BE: { amazon: "www.amazon.com.be",   audible: "www.audible.fr",       tag: TAGS.eu },
  IT: { amazon: "www.amazon.it",       audible: "www.audible.it",       tag: TAGS.eu },
  ES: { amazon: "www.amazon.es",       audible: "www.audible.es",       tag: TAGS.eu },
  NL: { amazon: "www.amazon.nl",       audible: null,                   tag: TAGS.eu },
  SE: { amazon: "www.amazon.se",       audible: null,                   tag: TAGS.eu },
  PL: { amazon: "www.amazon.pl",       audible: null,                   tag: TAGS.eu },
  IE: { amazon: "www.amazon.co.uk",    audible: "www.audible.co.uk",    tag: TAGS.eu },
  US: { amazon: "www.amazon.com",      audible: "www.audible.com",      tag: TAGS.us },
  CA: { amazon: "www.amazon.ca",       audible: "www.audible.ca",       tag: TAGS.ca },
  AU: { amazon: "www.amazon.com.au",   audible: "www.audible.com.au",   tag: TAGS.au },
  NZ: { amazon: "www.amazon.com.au",   audible: "www.audible.com.au",   tag: TAGS.au },
  IN: { amazon: "www.amazon.in",       audible: "www.audible.in",       tag: "" },
  JP: { amazon: "www.amazon.co.jp",    audible: "www.audible.co.jp",    tag: "" },
  BR: { amazon: "www.amazon.com.br",   audible: "www.audible.com.br",   tag: "" },
  MX: { amazon: "www.amazon.com.mx",   audible: null,                   tag: "" },
};

const DEFAULT_STORE = STORES.US;

function storeFor(req) {
  // Vercel sets this on every request; it is the only geo signal here.
  const country = (req.headers["x-vercel-ip-country"] || "").toUpperCase();
  return STORES[country] || DEFAULT_STORE;
}

function withTag(url, tag) {
  if (!tag) return url;
  return url + (url.includes("?") ? "&" : "?") + "tag=" + tag;
}

// The stored Audible links are full amazon.com product URLs. Only the
// trailing ASIN is portable between Audible stores, and /pd/<ASIN>
// resolves on every one of them, so pull the ASIN out and rebuild.
function audibleAsin(url) {
  const m = String(url).match(/\/([A-Z0-9]{10})(?:[/?#]|$)/);
  return m ? m[1] : null;
}

module.exports = function handler(req, res) {
  const { slug, format } = req.query;
  const book = books[slug];

  if (!book) {
    res.writeHead(302, { Location: "https://maloryauthor.com/books.html" });
    return res.end();
  }

  const store = storeFor(req);

  if (format === "audible" && book.audible) {
    const asin = audibleAsin(book.audible);
    // A country with no Audible store falls back to .com, and the tag has
    // to fall back with it: a European tag on audible.com pays nothing.
    const fallback = !store.audible;
    const host = fallback ? DEFAULT_STORE.audible : store.audible;
    const tag = fallback ? DEFAULT_STORE.tag : store.tag;
    // If the ASIN cannot be read, fall back to the stored URL rather
    // than guessing, so a bad parse degrades to the old behaviour.
    const url = asin ? `https://${host}/pd/${asin}` : book.audible;
    res.writeHead(302, { Location: withTag(url, tag) });
    return res.end();
  }

  // Direct-URL entries (BookFunnel, the author page, socials) are not
  // store-specific and are sent through untouched.
  if (book.url) {
    res.writeHead(302, { Location: book.url });
    return res.end();
  }

  const amazonUrl = `https://${store.amazon}/dp/${book.asin}`;
  res.writeHead(302, { Location: withTag(amazonUrl, store.tag) });
  return res.end();
};
