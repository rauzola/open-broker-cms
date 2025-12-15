# OpenBroker CMS - Gestão Imobiliária Inteligente

> "O sistema operacional do corretor moderno."

**Nome do Produto:** OpenBroker  
**Repositório:** `open-broker-cms`

## Sobre o Projeto

O **OpenBroker** é um sistema web escalável desenvolvido para administração de imobiliárias e publicação de anúncios de alto padrão e mercado popular. Com foco na integridade dos dados e na produtividade da equipe, ele atua como um verdadeiro SaaS para o mercado imobiliário.

### Features Principais

*   **Dashboard Administrativo:** Visualização de métricas em tempo real para tomada de decisão.
*   **Gestão de Imóveis:** CRUD completo com suporte a galerias de imagens avançadas e especificações detalhadas.
*   **Sistema de Logs de Auditoria:** Rastreabilidade completa de todas as alterações (ex: mudança de preço ou status), garantindo transparência.
*   **Controle de Acesso (RBAC):** Gestão de usuários com diferentes níveis de permissão (Super Admin, Gerente, Corretor).
*   **Front-end Dual-Theme:** Interface pública de alta performance com temas distintos para "Popular" (focado em conversão e acessibilidade) e "Luxury" (focado em experiência imersiva e design premium).
*   **Integração com WhatsApp:** Geração automática de leads diretamente para os corretores responsáveis.

## Key Challenges (Principais Desafios)

> "O maior desafio deste projeto foi implementar o sistema de Audit Logs, garantindo que cada mudança de estado (ex: alteração de preço) fosse salva com o 'snapshot' dos dados anteriores e posteriores, permitindo transparência total entre a equipe de corretores. Isso exigiu uma arquitetura de dados pensada não apenas para exibir o estado atual, mas para contar a história completa de cada ativo imobiliário."

## Tecnologias Utilizadas

*   **Framework:** [Next.js 15+](https://nextjs.org/) (App Router, Server Actions)
*   **Linguagem:** TypeScript
*   **Estilização:** Tailwind CSS & Shadcn/UI
*   **Validação:** Zod & React Hook Form
*   **Ícones:** Lucide React

## Como Rodar Localmente

1.  Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/open-broker-cms.git
    ```
2.  Instale as dependências:
    ```bash
    npm install
    ```
3.  Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```
4.  Acesse `http://localhost:3000`.

---
*Desenvolvido com foco em engenharia de software e experiência do usuário.*
