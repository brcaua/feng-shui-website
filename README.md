# Metafísica Oriental Brasil - Site Oficial

Site oficial da Metafísica Oriental Brasil, especializada em Feng Shui Tradicional e Astrologia Chinesa com o Professor Luiz Carlos Akira.

## 🚀 Tecnologias Utilizadas

- **Next.js 15** - Framework React com otimizações de SEO
- **TailwindCSS v4** - Framework de CSS para estilização
- **TypeScript** - Tipagem estática
- **Lucide React** - Ícones modernos

## ✨ Funcionalidades

### 📱 Responsivo

- Design adaptável para desktop, tablet e mobile
- Navegação otimizada para todos os dispositivos

### 🔍 SEO Otimizado

- Meta tags completas
- Schema markup (dados estruturados)
- Sitemap automático
- Robots.txt dinâmico
- Open Graph e Twitter Cards

### 💬 Conversão

- Botão fixo do WhatsApp
- **Popup de exit intent** com oferta especial
- CTAs estratégicos em todas as seções
- Prova social com testemunhas
- Senso de urgência e escassez

### 📄 Seções

1. **Hero** - Apresentação com proposta de valor
2. **Serviços** - Consultorias e cursos disponíveis
3. **Sobre** - Apresentação do Professor Luiz Carlos Akira
4. **Testemunhas** - 5 depoimentos de clientes
5. **Footer** - Informações de contato

## ⚙️ Configuração do Popup

O popup de conversão está configurado para aparecer:

- ✅ Após **5 segundos** (configuração de teste)
- ✅ Quando o usuário move o mouse para fora da página
- ✅ Quando tenta fechar a aba/navegar para outro site
- ✅ Quando a janela perde o foco

### 🔧 Para Produção

Para alterar o tempo do popup para 1 minuto em produção:

1. Abra o arquivo: `src/components/ui/ExitIntentPopup.tsx`
2. Na linha 13, altere:
   ```typescript
   }, 5000) // 5 segundos para teste
   ```
   Para:
   ```typescript
   }, 60000) // 1 minuto para produção
   ```

## 🛠️ Instalação e Execução

```bash
# Instalar dependências
npm install

# Executar em modo de desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar versão de produção
npm start
```

## 📞 Contato

- **Telefone:** +55 (41) 99116-0348
- **Email:** metafisicaorientalbra@gmail.com
- **Instagram:** [@metafisicaorientalbrasil](https://www.instagram.com/metafisicaorientalbrasil/)

## 🌐 Deploy

Para deploy em produção, recomendamos:

1. **Vercel** (recomendado) - Deploy automático com Next.js
2. **Netlify** - Alternativa gratuita
3. **AWS Amplify** - Para projetos maiores

### Deploy na Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 📈 Analytics e Tracking

Para adicionar Google Analytics:

1. Crie uma conta no Google Analytics
2. Adicione o ID de tracking no arquivo `src/app/layout.tsx`
3. Configure os eventos de conversão nos botões de CTA

---

Desenvolvido com 💚 para transformar vidas através do Feng Shui e Astrologia Chinesa.
