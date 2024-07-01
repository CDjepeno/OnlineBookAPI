export interface ErrorResponse {
  message: string;
}

export interface AddBookResponse {
  id?: string;
  name: string;
  description: string;
  author: string;
  releaseAt: Date;
  coverUrl: string;
}

export interface AddBookInput {
  name: string;
  description: string;
  author: string;
  releaseAt: Date;
  coverFile: FileList;
}

export type AddBookFormType = {
  name: string;
  description: string;
  author: string;
  releaseAt: Date;
  coverFile: FileList;
};
