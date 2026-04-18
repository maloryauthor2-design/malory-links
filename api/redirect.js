const books = require("./books");

// ============================================================
// CONFIGURATION
// ============================================================
const ASSOCIATES_TAG = "maloryauthor-21";

// ============================================================
// REDIRECT HANDLER
// ============================================================
// Strategy: Always send to amazon.com with the ASIN.
// Amazon handles country detection itself — it shows a banner
// like "This item is available on Amazon.co.uk" and redirects
// the buyer to their local store automatically.
//
// For Audible: use the full stored URL since Audible doesn't
// do cross-region redirects the same way.
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

  // If format=audible and we have an Audible URL, send them there
  // Append Associates tag for Audible bounty earnings
  if (format === "audible" && book.audible) {
    const separator = book.audible.includes("?") ? "&" : "?";
    const audibleUrl = `${book.audible}${separator}tag=${ASSOCIATES_TAG}`;
    res.writeHead(302, { Location: audibleUrl });
    return res.end();
  }

  // Default: send to amazon.com — Amazon handles country redirect
  const amazonUrl = `https://www.amazon.com/dp/${book.asin}?tag=${ASSOCIATES_TAG}`;

  res.writeHead(302, { Location: amazonUrl });
  return res.end();
};
