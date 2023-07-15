export class ErrorMessages{
  private static readonly USER_ALREADY_EXISTS = "User already exists. Please choose a different email.";
  private static readonly WEAK_PASSWORD = "The password provided is weak. Please choose a stronger password with a combination of uppercase and lowercase letters, numbers, and special characters.";
  private static readonly EMAIL_MUST_BE_EMAIL = "Email must contain the '@' symbol.";
  private static readonly UNAUTHORIZED = "Invalid or missing authentication token";
  private static readonly SERVER_ERROR = 500;
}