export interface HydraCollection<T> {
  member: T[];
  totalItems: number;
}

export interface RelatedUser {
  "@id": string;
  name: string;
}
