import { ICliente } from './cliente.interface';

export interface ICompra {
  id: string;
  cliente: ICliente;
  produto: string;
  total: number;
}
