import type { Listing, ListingQuery } from "./listing.ts";

function normalize(value: string): string {
  return value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLocaleLowerCase("pt-BR")
    .trim();
}

function matchesText(listing: Listing, text: string): boolean {
  const haystack = normalize(`${listing.title} ${listing.category} ${listing.city}`);
  return haystack.includes(normalize(text));
}

export function searchListings(listings: readonly Listing[], query: ListingQuery): Listing[] {
  return listings.filter((listing) => {
    if (query.kind && listing.kind !== query.kind) return false;
    if (query.category && listing.category !== query.category) return false;
    if (query.state && normalize(listing.state) !== normalize(query.state)) return false;
    if (query.city && normalize(listing.city) !== normalize(query.city)) return false;
    if (query.text && !matchesText(listing, query.text)) return false;
    return true;
  });
}
