export enum BookQueriesKeysEnum {
  GetBooks = 'getbooks',
  Login = 'login',
  addBook = 'addBook',
  Book = 'book'
}

export enum UserQueriesKeysEnum {
  Login = 'login',
}

// Method HTTP
export enum MethodHttpEnum {
  GET = 'get',
  PUT = 'put',
  POST = 'post',
  DELETE = 'delete',
  PATCH = 'patch',
}

// Router
export enum RouterEnum {
  LOGIN = '/login',
  REGISTER = '/register',
  ADD_BOOK = '/add-book',
  BOOK = '/book/:id',
  HOME = '/',
}