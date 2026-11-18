import assert from "node:assert/strict";
import { describe, it } from "node:test";
import type { Listing } from "./listing.ts";
import { searchListings } from "./searchListings.ts";

const listings: Listing[] = [
  {
    id: "1",
    kind: "perfil",
    title: "Eletricista residencial",
    category: "Assistência técnica",
    city: "Campina Grande",
    state: "PB",
  },
  {
    id: "2",
    kind: "pedido",
    title: "Pintura de sala",
    category: "Reformas e reparos",
    city: "Campina Grande",
    state: "PB",
  },
  {
    id: "3",
    kind: "perfil",
    title: "Aula de inglês",
    category: "Aulas e consultoria",
    city: "João Pessoa",
    state: "PB",
  },
];

describe("searchListings", () => {
  it("filtra por cidade sem diferenciar acento", () => {
    const found = searchListings(listings, { city: "campina grande" });
    assert.deepEqual(
      found.map((item) => item.id),
      ["1", "2"],
    );
  });

  it("combina categoria e tipo de anúncio", () => {
    const found = searchListings(listings, {
      category: "Aulas e consultoria",
      kind: "perfil",
      state: "pb",
    });
    assert.deepEqual(
      found.map((item) => item.id),
      ["3"],
    );
  });

  it("busca no título", () => {
    const found = searchListings(listings, { text: "eletricista" });
    assert.equal(found.length, 1);
    assert.equal(found[0]?.id, "1");
  });
});
