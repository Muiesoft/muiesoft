import type { PublicContract } from "@/domain/contract";

export interface MoneyRepository {
  getContracts(): Promise<PublicContract[]>;
  searchContracts(query: string): Promise<PublicContract[]>;
}
