export const CATEGORIES = [
  "Assistência técnica",
  "Reformas e reparos",
  "Serviços domésticos",
  "Design e tecnologia",
  "Aulas e consultoria",
  "Eventos",
] as const;

export type Category = (typeof CATEGORIES)[number];

export type ListingKind = "pedido" | "perfil";

export type Listing = {
  id: string;
  kind: ListingKind;
  title: string;
  category: Category;
  city: string;
  state: string;
};

export type ListingQuery = {
  text?: string;
  category?: Category;
  city?: string;
  state?: string;
  kind?: ListingKind;
};
