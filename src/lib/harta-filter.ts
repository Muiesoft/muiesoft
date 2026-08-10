import type { Institution } from "@/domain/institution";

export function filterInstitutions(
  items: Institution[],
  {
    county,
    status,
    category,
    query,
  }: {
    county: string;
    status: string;
    category: string;
    query: string;
  },
): Institution[] {
  const q = query
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .trim();

  return items.filter((item) => {
    const countyOk = county === "toate" || item.county === county;
    const statusOk = status === "toate" || item.status === status;
    const categoryOk = category === "toate" || item.category === category;
    const name = item.name
      .toLowerCase()
      .normalize("NFD")
      .replace(/\p{M}/gu, "");
    const queryOk = !q || name.includes(q);
    return countyOk && statusOk && categoryOk && queryOk;
  });
}
