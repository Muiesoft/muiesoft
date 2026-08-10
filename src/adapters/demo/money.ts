import { registryContracts } from "@/data/registry/contracts";
import type { PublicContract } from "@/domain/contract";
import type { MoneyRepository } from "@/repositories/money";

function normalize(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "");
}

export class DemoMoneyRepository implements MoneyRepository {
  async getContracts(): Promise<PublicContract[]> {
    return registryContracts;
  }

  async searchContracts(query: string): Promise<PublicContract[]> {
    const q = normalize(query.trim());
    if (!q) return registryContracts;
    return registryContracts.filter((contract) => {
      const haystack = normalize(
        [
          contract.title,
          contract.system,
          contract.institution,
          contract.supplier,
        ].join(" "),
      );
      return haystack.includes(q);
    });
  }
}

export const moneyRepository = new DemoMoneyRepository();
