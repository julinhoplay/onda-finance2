import { create } from 'zustand';
import { persist } from 'zustand/middleware';
export const useAuthStore = create()(persist((set) => ({
    user: null,
    balance: 1000,
    login: (email) => set({ user: email }),
    logout: () => set({ user: null, balance: 1000 }),
    updateBalance: (amount) => set((state) => ({ balance: state.balance - amount })),
}), { name: 'onda-finance-auth' }));
