import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useQuery } from '@tanstack/react-query';
import { getTransactions } from '@/services/api';
import { useAuthStore } from '@/store/useAuthStore';
import { Button } from '@/components/ui/button';
import { TransferForm } from "./TransferForm";
export function Dashboard() {
    const { user, balance, logout } = useAuthStore();
    const { data: transactions, isLoading } = useQuery({
        queryKey: ['transactions'],
        queryFn: getTransactions 
    });
    return (_jsxs("div", { className: "p-6 max-w-4xl mx-auto space-y-6", children: [_jsxs("header", { className: "flex justify-between items-center", children: [_jsxs("h1", { className: "text-2xl font-bold", children: ["Ol\u00E1, ", user] }), _jsx(Button, { variant: "outline", onClick: logout, children: "Sair" })] }), _jsxs("div", { className: "p-6 bg-slate-900 text-white rounded-xl shadow-lg", children: [_jsx("p", { className: "text-slate-400 text-sm", children: "Saldo Dispon\u00EDvel" }), _jsxs("h2", { className: "text-4xl font-bold", children: ["R$ ", balance.toFixed(2)] })] }), _jsx("section", { children: _jsx(TransferForm, {}) }), _jsxs("section", { className: "space-y-4", children: [_jsx("h3", { className: "text-lg font-semibold text-slate-700", children: "\u00DAltimas Transa\u00E7\u00F5es" }), isLoading ? (_jsx("p", { children: "Carregando transa\u00E7\u00F5es..." })) : (_jsx("div", { className: "bg-white rounded-lg border border-slate-200 divide-y", children: transactions?.map((t) => (_jsxs("div", { className: "p-4 flex justify-between items-center", children: [_jsxs("div", { children: [_jsx("p", { className: "font-medium", children: t.title }), _jsx("p", { className: "text-xs text-slate-500", children: t.date })] }), _jsxs("span", { className: t.type === 'income' ? 'text-green-600' : 'text-red-600', children: [t.type === 'income' ? '+' : '-', " R$ ", t.amount.toFixed(2)] })] }, t.id))) }))] })] }));
}
