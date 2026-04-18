const books = require("./books");

// ============================================================
// CONFIGURATION
// ============================================================
// Your Amazon Associates tag — earnings from every click
const ASSOCIATES_TAG = "maloryauthor-21";

// Amazon domains by country code
// Vercel provides the country via the x-vercel-ip-country header
const AMAZON_DOMAINS = {
  US: "www.amazon.com",
  GB: "www.amazon.co.uk",
  CA: "www.amazon.ca",
  AU: "www.amazon.com.au",
  DE: "www.amazon.de",
  FR: "www.amazon.fr",
  ES: "www.amazon.es",
  IT: "www.amazon.it",
  NL: "www.amazon.nl",
  JP: "www.amazon.co.jp",
  IN: "www.amazon.in",
  BR: "www.amazon.com.br",
  MX: "www.amazon.com.mx",
  SG: "www.amazon.sg",
  SE: "www.amazon.se",
  PL: "www.amazon.pl",
  BE: "www.amazon.com.be",
  IE: "www.amazon.co.uk",       // Ireland → UK store
  NZ: "www.amazon.com.au",      // New Zealand → AU store
  AT: "www.amazon.de",          // Austria → DE store
  CH: "www.amazon.de",          // Switzerland → DE store
};

const DEFAULT_DOMAIN = "www.amazon.com";

// Audible domains by country
const AUDIBLE_DOMAINS = {
  US: "www.audible.com",
  GB: "www.audible.co.uk",
  CA: "www.audible.ca",
  AU: "www.audible.com.au",
  DE: "www.audible.de",
  FR: "www.audible.fr",
  IT: "www.audible.it",
  IN: "www.audible.in",
  JP: "www.audible.co.jp",
  ES: "www.audible.es",
};

// ============================================================
// REDIRECT HANDLER
// ============================================================

module.exports = function handler(req, res) {
  const { slug, format } = req.query;

  // Look up the book
  const book = books[slug];

  if (!book) {
    // Unknown slug — redirect to author page
    res.writeHead(302, { Location: "https://maloryauthor.com/books.html" });
    return res.end();
  }

  // Get visitor's country from Vercel's geo header
  const country = (req.headers["x-vercel-ip-country"] || "US").toUpperCase();

  // If format=audible and we have an Audible link, send them there
  if (format === "audible" && book.audible) {
    const audibleDomain = AUDIBLE_DOMAINS[country] || AUDIBLE_DOMAINS["US"];
    const audibleUrl = `https://${audibleDomain}/pd/${book.audible}?tag=${ASSOCIATES_TAG}`;
    res.writeHead(302, { Location: audibleUrl });
    return res.end();
  }

  // Default: send to the right Amazon Kindle store
  const domain = AMAZON_DOMAINS[country] || DEFAULT_DOMAIN;
  const amazonUrl = `https://${domain}/dp/${book.asin}?tag=${ASSOCIATES_TAG}`;

  res.writeHead(302, { Location: amazonUrl });
  return res.end();
};
