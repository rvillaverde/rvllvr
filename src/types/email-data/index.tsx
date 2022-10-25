export interface EmailData {
  body: string;
  from: string;
  replyTo: string;
  subject: string;
  template: string;
  to: string;
  variables: {
    [key: string]: any;
  };
}
