export interface ContactRequest {
  fullName: string;
  email: string;
  phone?: string;
  serviceId?: string;
  message: string;
  consent: boolean;
}

export interface ContactSubmissionResult {
  success: boolean;
  message: string;
}
