import { ICliente } from "./cliente.interface";
import { IMedico } from "./medico.interface";

export interface IConsulta {
    id: string;
    cliente: ICliente;
    medico: IMedico;
    total: number;
}