import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { transferSchema, TransferFormData } from "./transfer-schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuthStore } from '../../store/useAuthStore';

export function TransferForm() {
  const { balance, updateBalance } = useAuthStore();
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<TransferFormData>({
    // @ts-ignore - 
    resolver: zodResolver(transferSchema(balance)),
    defaultValues: {
      recipient: '',
      amount: 0
    }
  });

  
const onSubmit = (data: TransferFormData) => {
  updateBalance(data.amount);
  alert(`Transferência de R$ ${data.amount} realizada!`);
  reset(); 
};

  return (
    <div className="p-6 bg-white rounded-lg border border-slate-200 shadow-sm">
      <h3 className="text-lg font-bold mb-4">Nova Transferência</h3>
      <form onSubmit={handleSubmit(onSubmit as any)} className="space-y-4">
        <div>
          <Input {...register("recipient")} placeholder="Nome do favorecido" />
          {errors.recipient && <p className="text-red-500 text-xs mt-1">{errors.recipient.message}</p>}
        </div>
        
        <div>
          <Input {...register("amount")} type="number" step="0.01" placeholder="Valor R$" />
          {errors.amount && <p className="text-red-500 text-xs mt-1">{errors.amount.message}</p>}
        </div>

        <Button type="submit" className="w-full">Confirmar Transferência</Button>
      </form>
    </div>
  );
}