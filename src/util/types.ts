export interface GoogleTokens {
  access_token: string;
  refresh_token: string;
  scope: string;
  token_type: string;
  id_token: string;
  expiry_date: number;
}

export interface TokenType {
  access_token: string;
  refresh_token?: string;
  expires_in?: number;
}
