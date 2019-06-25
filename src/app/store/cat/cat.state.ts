export interface Cat {
  objectId?: number;
  name: string;
  age: number;
  genre: string;
  photo_url: string;
  alive: boolean;
}

export const initialState: Cat = {} as Cat;
