class DatabaseRequestException extends AppError {
  constructor(
    public message: string, 
    public httpCode = 422
    ) {
    super(message, "Database error");
  }
}