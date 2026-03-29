import { create } from 'zustand';
import { persist } from 'zustand/middleware';


interface AuthState {
  user: string | null;
  balance: number;
  login: (email: string) => void;
  logout: () => void;
  updateBalance: (amount: number) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      balance: 1000,
      login: (email) => set({ user: email }),
      logout: () => set({ user: null, balance: 1000 }),
      updateBalance: (amount) => 
        set((state) => ({ balance: state.balance - amount })),
    }),
    { name: 'onda-finance-auth' }
  )
);