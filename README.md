Link: https://onda-finance2.vercel.app

Como rodar o projeto:

Git Clone: https://github.com/julinhoplay/onda-finance2.git

Instale as dependências: npm install

Inicie o servidor de desenvolvimento: npm run dev

Execute a suíte de testes: npm test


Teste Unitário:
Foi implementado um teste unitário para a store de autenticação/finanças. O teste valida se o saldo inicial está correto e se o valor é debitado corretamente após uma transferência bem-sucedida.
<img width="798" height="127" alt="image" src="https://github.com/user-attachments/assets/ea830d1c-a48f-42e7-bb7a-3aaebbc48f42" />


🛡️ Pensando em Segurança
Mais do que apenas código, tratei a segurança como parte fundamental da arquitetura do Onda Finance:

Proteção contra Engenharia Reversa: Durante o build com o Vite, o código é minificado e ofuscado. Isso significa que a lógica do negócio não fica exposta de forma clara, protegendo a propriedade intelectual da aplicação.

Blindagem de Dados: * Utilizei o Zod para garantir que apenas dados válidos cheguem à nossa "carteira". Isso bloqueia tentativas de inputs maliciosos logo na entrada.
. Com o Zustand, mantenho um controle rígido do estado na memória. Em uma evolução real, esses dados seriam criptografados antes de qualquer persistência.

Tráfego Seguro: O projeto já roda sob HTTPS/TLS na Vercel, garantindo que a comunicação entre o usuário e o site seja sempre criptografada. Além disso, a tipagem estrita do TypeScript atua como uma barreira extra contra ataques comuns como o XSS.

🧠 Por que essas escolhas? (Decisões Técnicas)
Escolhi cada ferramenta com um propósito claro: performance e segurança.

Zod + React Hook Form: Usei essa dupla para criar formulários que não apenas funcionam, mas que "conversam" com o TypeScript. Isso evita que o usuário envie valores inválidos (como números negativos) e nos dá um feedback em tempo real com total segurança de tipos.

Vitest: Como o projeto usa Vite, o Vitest foi a escolha natural. Ele é incrivelmente rápido e me permitiu validar a lógica de saldo e transferências de forma isolada, garantindo que o coração da aplicação esteja sempre saudável.

Componentização Inteligente: Segmentei a interface em componentes como Button, Input e Card. Isso não só deixa o código mais limpo, como facilita muito a manutenção e o crescimento do projeto no futuro.

🚀 O que vem por aí? (Melhorias Futuras)
Extrato Detalhado: Quero dar ao usuário a visão completa de suas movimentações com uma lista histórica de transferências.

Persistência Real: O próximo passo é integrar um localStorage ou um backend (como Supabase) para que o saldo e as transações continuem lá mesmo após o F5.

Experiência do Usuário (UX): Adicionar um Dark Mode nativo com Tailwind e notificações (Toasts) para que o usuário receba um feedback visual imediato ao realizar uma operação.
