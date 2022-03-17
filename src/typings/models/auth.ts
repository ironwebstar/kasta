export interface ICreatePaymentRequest {
  to: string;
  amount: number;
}

export interface ICreatePaymentResponse {
  id: string;
}

export interface IGetPaymentRequest {
  id: string;
}

export interface IGetPaymentResponse extends ICreatePaymentRequest {
  progress: number;
}
