import { useQuery } from '@tanstack/react-query';
import { getTransactions } from '@/services/api';
import { useAuthStore } from '@/store/useAuthStore';
import { Button } from '@/components/ui/button';
import { TransferForm } from "./TransferForm";

export function Dashboard() {
  const { user, balance, logout } = useAuthStore();
  
const { data: transactions, isLoading } = useQuery({
  queryKey: ['transactions'],
  queryFn: getTransactions // 
});

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Olá, {user}</h1>
        <Button variant="outline" onClick={logout}>Sair</Button>
      </header>

     
      <div className="p-6 bg-slate-900 text-white rounded-xl shadow-lg">
        <p className="text-slate-400 text-sm">Saldo Disponível</p>
        <h2 className="text-4xl font-bold">R$ {balance.toFixed(2)}</h2>
      </div>
<section>
        <TransferForm />
      </section>
     
      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-700">Últimas Transações</h3>
        {isLoading ? (
          <p>Carregando transações...</p>
        ) : (
          <div className="bg-white rounded-lg border border-slate-200 divide-y">
            {transactions?.map((t) => (
              <div key={t.id} className="p-4 flex justify-between items-center">
                <div>
                  <p className="font-medium">{t.title}</p>
                  <p className="text-xs text-slate-500">{t.date}</p>
                </div>
                <span className={t.type === 'income' ? 'text-green-600' : 'text-red-600'}>
                  {t.type === 'income' ? '+' : '-'} R$ {t.amount.toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

