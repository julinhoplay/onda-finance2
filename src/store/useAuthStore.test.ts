import { describe, it, expect, beforeEach } from 'vitest';
import { useAuthStore } from './useAuthStore'; 

describe('useAuthStore', () => {
  beforeEach(() => {
    
    useAuthStore.getState().logout();
  });

  it('deve iniciar com o saldo de 1000', () => {
    const state = useAuthStore.getState();
    expect(state.balance).toBe(1000);
  });

  it('deve atualizar o saldo corretamente após uma transferência', () => {
    const { updateBalance } = useAuthStore.getState();
    
    updateBalance(200); 
    
    const state = useAuthStore.getState();
    expect(state.balance).toBe(800);
  });

  it('deve realizar login e salvar o usuário', () => {
    const { login } = useAuthStore.getState();
    
    login('julio@teste.com');
    
    const state = useAuthStore.getState();
    expect(state.user).toBe('julio@teste.com');
  });
});