export interface IBook {
    _id: number;
    title: string;
    author: string;
    publishYear: string;
    createdAt: Date;
    updatedAt: Date;
  }

  export interface IBookCreateUpdate {
    title: string;
    author: string;
    publishYear: string;
  }