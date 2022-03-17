import http from './http';
import {
  ICreatePaymentRequest,
  ICreatePaymentResponse,
  IGetPaymentRequest,
  IGetPaymentResponse,
} from '@typings/models';
import { payment as paymentURL } from './urls';

export const createPayment = (
  req: ICreatePaymentRequest
): Promise<ICreatePaymentResponse> => {
  return http.post<ICreatePaymentRequest, ICreatePaymentResponse>(
    paymentURL.create,
    req
  );
};

export const getPayment = (
  req: IGetPaymentRequest
): Promise<IGetPaymentResponse> => {
  return http.get(`${paymentURL.get}/${req.id}`, req);
};
