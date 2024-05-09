// pokemons server response model

export interface ServerResponse<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}
