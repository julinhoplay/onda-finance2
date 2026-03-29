Link: https://onda-finance2.vercel.app

Como rodar o projeto:

Git Clone: https://github.com/julinhoplay/onda-finance2.git

Instale as dependências: npm install

Inicie o servidor de desenvolvimento: npm run dev

Execute a suíte de testes: npm test


Teste Unitário:
Foi implementado um teste unitário para a store de autenticação/finanças. O teste valida se o saldo inicial está correto e se o valor é debitado corretamente após uma transferência bem-sucedida.
<img width="798" height="127" alt="image" src="https://github.com/user-attachments/assets/ea830d1c-a48f-42e7-bb7a-3aaebbc48f42" />


Segurança:
• Engenharia reversa
Ofuscação de Código: No processo de build (Vite), o código JavaScript é minificado e ofuscado, dificultando a leitura da lógica de negócio por terceiros.
Variáveis de Ambiente (.env): Chaves de API e URLs sensíveis não são expostas diretamente no código-fonte, sendo gerenciadas por variáveis de ambiente injetadas apenas durante o deploy.
Remoção de Logs: Configuração do compilador para remover console.log e comentários em ambiente de produção, evitando o vazamento de informações sobre o fluxo da aplicação.

• Prevenção de Vazamento de Dados:

Validação Estrita com Zod: Implementada para garantir que apenas dados no formato correto cheguem à camada de processamento, prevenindo ataques de injection ou inputs maliciosos no formulário.
Sanitização de Estado: O uso do Zustand permite o controle granular de quais dados estão na memória. Em um cenário real, dados sensíveis seriam criptografados antes de serem armazenados no localStorage.
HTTPS/TLS: Garantia de que todos os dados trafegados entre o cliente (Vercel) e qualquer API futura sejam criptografados via protocolo HTTPS.
Prevenção de XSS: O React, por padrão, já realiza o escape de conteúdos, e o uso de tipagem estrita com TypeScript reduz drasticamente a chance de execução de scripts não autorizados.

Decisões técnicas adotadas:

Zod + React Hook Form: Utilize essa combinação para garantir que a validação dos dados de transferência (como o erro TS2345 que tratamos) ocorra de forma síncrona com o TypeScript, garantindo que o 
usuário não envie valores inválidos.

Vitest: Optei pelo Vitest por ser a ferramenta nativa do ecossistema Vite, permitindo testes extremamente rápidos e integração total com as configurações globais do projeto.

Componentização: O código foi estruturado em componentes atômicos (Button, Input, Card) para facilitar a manutenção e a reutilização no futuro.

Melhorias futuras:

Extrato Detalhado: Implementar uma lista histórica de todas as transferências realizadas.

Persistência de Dados: Adicionar localStorage ou integração com Firebase/Supabase para que os dados não sumam ao atualizar a página.

Dark Mode: Adicionar suporte a temas utilizando as classes nativas do Tailwind CSS.

Notificações (Toasts): Feedback visual mais amigável ao finalizar uma transferência ou ocorrer um erro.
