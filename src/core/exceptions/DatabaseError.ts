class DatabaseRequestException extends Error {
  constructor(
    public message: string, 
    public httpCode = 500
    ) {
    super(message);
    this.status = httpCode;
  }
}