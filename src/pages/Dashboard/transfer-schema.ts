import { z } from "zod";

export const transferSchema = (balance: number) => z.object({
  recipient: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
  amount: z.coerce
    .number()
    .min(0.01, "O valor mínimo é R$ 0,01")
    .max(balance, "Saldo insuficiente"),
});


export interface TransferFormData {
  recipient: string;
  amount: number;
}