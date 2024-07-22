export type Book = {
  _id: string;
  title: string;
  description: string;
  genre: string;
  author: Author;
  coverImage: string;
  file: string;
};

export type Author = {
  _id: string;
  name: string;
};
