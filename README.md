[Português](README.md) · [Español](README.es.md)


# Gaby — Automação de aplicativos com IA

![Gaby App — assistente de automação com inteligência artificial](gaby-app-banner.jpg)


**Idioma:** Português (Brasil)  
**Status:** Protótipo experimental. A integração real com o modelo de IA e a execução em dispositivos reais ainda precisam ser concluídas.


Gaby é um protótipo de assistente que recebe instruções em linguagem natural e representa ações sobre interfaces de aplicativos. A proposta é aproximar modelos de IA da automação de interfaces digitais.


## Visão do projeto


O fluxo pretendido é:


1. A pessoa descreve uma tarefa em linguagem natural.
2. A aplicação reúne uma descrição dos elementos disponíveis na tela simulada.
3. Um modelo de IA interpreta a solicitação e propõe uma ação estruturada.
4. A aplicação valida a ação.
5. A interface demonstra a ação e pode navegar para outra tela simulada.


> **Estado atual:** o serviço `services/geminiService.ts` ainda não realiza uma chamada efetiva à API Gemini. Atualmente, verifica a disponibilidade de uma chave e retorna uma mensagem demonstrativa. As ações são simuladas na interface; este repositório não comprova automação de aplicativos Android reais.


## Tecnologias identificadas


- React 19
- TypeScript
- Vite
- SDK Google GenAI listado nas dependências
- Componentes React para a interface de demonstração


## Arquitetura observada


- `App.tsx`: coordena estado da interface, histórico da conversa e ações simuladas.
- `types.ts`: define comandos, ações, mensagens e elementos de tela.
- `constants.tsx`: dados usados para representar aplicativos e telas.
- `components/`: componentes visuais.
- `services/geminiService.ts`: ponto de integração planejado com o Gemini.


## Executar localmente


**Pré-requisito:** Node.js e npm.


```bash
git clone https://github.com/WalyRobert/gaby-app.git
cd gaby-app
npm install
npm run dev
```


Abra o endereço local informado pelo Vite.


## Próximas etapas


- [ ] Implementar chamada real ao Gemini em ambiente protegido.
- [ ] Definir esquema JSON para ações e validar respostas do modelo.
