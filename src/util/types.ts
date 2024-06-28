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

export interface User {
  id: string;
  emailId: string;
  emailRef: EmailRef[];
}

export interface EmailRef {
  id: string;
  emailId: string;
  mailId: string;
  userId?: string;
  user?: User;
}

export interface Email {
  id: string;
  emailId: string;
  mailId: string;
  threadId: string;
  labelIds: string[];
  snippet: string;
  internalDate: Date;
  userId: string;
  payload: Payload[];
}

export interface Payload {
  id: string;
  emailId: string;
  partId?: string;
  headers: Header[];
  body: Body;
  parts: Parts[];
  email: Email;
}

export interface Header {
  id: string;
  payloadId: string;
  name: string;
  value: string;
  payload: Payload;
  parts?: Parts;
}

export interface Body {
  id: string;
  payloadId: string;
  size: number;
  data?: string;
  parts?: Parts;
  payload: Payload[];
}

export interface Parts {
  id: string;
  partId: string;
  headers: Header[];
  body: Body[];
  payload?: Payload;
  payloadId?: string;
}

export interface EmailData {
  id: string;
  threadId: string;
  labelIds: string[];
  snippet: string;
  payload: {
    partId: string;
    mimeType: string;
    filename: string;
    headers: { name: string; value: string }[];
    body?: { size: number };
    parts?: {
      partId: string;
      filename: string;
      mimeType: string;
      headers: { name: string; value: string }[];
      body: { size: number; data: string };
    }[];
  };
  sizeEstimate: number;
  historyId: string;
  internalDate: string;
}

export interface EmailDetails {
  subject: string;
  from: string;
  to: string;
  date: string;
  body?: string;
  bodyHtml?: string;
  snippet: string;
}
