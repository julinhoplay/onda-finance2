import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { transferSchema } from "./transfer-schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuthStore } from '../../store/useAuthStore';
export function TransferForm() {
    const { balance, updateBalance } = useAuthStore();
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
       
        resolver: zodResolver(transferSchema(balance)),
        defaultValues: {
            recipient: '',
            amount: 0
        }
    });
    
    const onSubmit = (data) => {
        updateBalance(data.amount);
        alert(`Transferência de R$ ${data.amount} realizada!`);
        reset();
    };
    return (_jsxs("div", { className: "p-6 bg-white rounded-lg border border-slate-200 shadow-sm", children: [_jsx("h3", { className: "text-lg font-bold mb-4", children: "Nova Transfer\u00EAncia" }), _jsxs("form", { onSubmit: handleSubmit(onSubmit), className: "space-y-4", children: [_jsxs("div", { children: [_jsx(Input, { ...register("recipient"), placeholder: "Nome do favorecido" }), errors.recipient && _jsx("p", { className: "text-red-500 text-xs mt-1", children: errors.recipient.message })] }), _jsxs("div", { children: [_jsx(Input, { ...register("amount"), type: "number", step: "0.01", placeholder: "Valor R$" }), errors.amount && _jsx("p", { className: "text-red-500 text-xs mt-1", children: errors.amount.message })] }), _jsx(Button, { type: "submit", className: "w-full", children: "Confirmar Transfer\u00EAncia" })] })] }));
}
