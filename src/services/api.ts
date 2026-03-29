import axios from 'axios';

export const getTransactions = async () => {

  await new Promise(resolve => setTimeout(resolve, 800));
  
  return [
    { id: 1, title: 'Depósito PIX', amount: 500, type: 'income', date: '2026-03-28' },
    { id: 2, title: 'Pagamento Internet', amount: 120, type: 'outcome', date: '2026-03-27' },
    { id: 3, title: 'Supermercado', amount: 350, type: 'outcome', date: '2026-03-26' },
  ];
};