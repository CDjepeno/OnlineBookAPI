export class InvalidPhoneNumberException extends Error {
  statusCode = 400;
}

export class badrequestexception extends Error {
  statusCode = 400;
}
export class EmailExistsException extends Error {
  constructor(message: string) {
    super(message);
  }
}

export class NotFoundError extends Error {
  statusCode: number;

  constructor(message: string) {
    super(message);
    this.name = 'NotFoundError';
    this.statusCode = 404;
  }
}
