# Chat em Tempo Real com Socket.IO - Aplicação Full-Stack

Esta é uma aplicação full-stack simples de um chat em tempo real utilizando Socket.IO. O servidor foi desenvolvido com Node.js e Express, enquanto o cliente foi construído com React.

## Configuração do Ambiente

Antes de executar a aplicação, certifique-se de ter o Node.js instalado em sua máquina. Você pode baixar a versão mais recente do Node.js em https://nodejs.org.

## Instalação

Siga as etapas abaixo para configurar o projeto em sua máquina:

1. Clone este repositório para o seu diretório local::

```
git clone https://github.com/francissverissimo/simple-chat-app.git
```

2. Navegue até o diretório do servidor:

```
cd server
```

3. Instale as dependências do servidor:

```
npm install
```

4. Navegue até o diretório do cliente:

```
cd ../cliente
```

5. Instale as dependências do cliente:

```
npm install
```

## Executando a Aplicação

Agora que todas as dependências foram instaladas, você pode iniciar o servidor e o cliente para executar a aplicação.

1. No diretório do servidor, execute o seguinte comando para iniciar o servidor:

```
npm run start
```

O servidor será iniciado e estará escutando na porta 3001.

2. No diretório do cliente, execute o seguinte comando para iniciar o cliente:

```
npm run dev
```

O cliente será aberto em seu navegador padrão.

3. Agora você pode interagir com o chat em tempo real. Você pode abrir várias instâncias do cliente em diferentes guias ou navegadores para simular vários usuários. A aplicação funciona conectandos os usuários a mesma sala. O login é feito de forma dinâmica, com um usuário e um número para uma sala em específico.

Aqui está uma visão geral dos arquivos principais da aplicação:

### Server (Servidor)

- `index.js`: Arquivo principal do servidor que configura o Express e o Socket.IO. Gerencia a lógica de comunicação em tempo real entre os clientes conectados.

### Cliente (Front-end)

- `App.js`: Componente principal do cliente React. Controla o fluxo de renderização e permite ao usuário ingressar em uma sala de chat.
- `Chat.js`: Componente que representa a interface do chat em si. Exibe as mensagens enviadas e recebidas, permitindo ao usuário enviar novas mensagens.