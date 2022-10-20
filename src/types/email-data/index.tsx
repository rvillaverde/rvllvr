export interface EmailData {
  from: string;
  replyTo: string;
  subject: string;
  template: string;
  to: string;
  variables: {
    [key: string]: any;
  };
}
