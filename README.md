# Subida com Vanessa — Landing Page Premium

Landing page cinematográfica, futurista e focada em conversão, construída em **Next.js 14 + TypeScript + Tailwind CSS + Framer Motion + Radix UI (shadcn-style)**.

---

## ⚠️ Sobre rodar no seu PC

O Next.js precisa de **pelo menos 4 GB de RAM livre** para compilar localmente. Seu PC atual tem só 4 GB no total e pode travar tentando rodar `npm run dev` ou `npm run build`.

**Recomendação:** pule o teste local e publique direto na Vercel (próxima seção). Lá o build roda em servidor com bastante memória, e você consegue ver a landing pronta na URL `*.vercel.app` em poucos minutos.

---

## Se quiser tentar rodar localmente

Pré-requisito: **Node.js 18+** instalado ([baixar aqui](https://nodejs.org)).

Feche todos os programas pesados (navegador, etc.) antes para liberar RAM, depois no PowerShell:

```powershell
npm install
$env:NODE_OPTIONS="--max-old-space-size=3072"
npm run dev
```

E abra [http://localhost:3000](http://localhost:3000).

---

## Estrutura

```
app/
  layout.tsx        → metadata, SEO, fontes, Open Graph
  page.tsx          → composição da página (todas as sections)
  globals.css       → variáveis, base premium, utilitários (glass, glow, etc.)
components/
  Logo.tsx          → águia futurista em SVG inline
  Navbar.tsx        → header fixo translúcido
  WhatsAppButton.tsx → botão flutuante verde com pulse
  Particles.tsx     → partículas roxas/douradas no hero
  Countdown.tsx     → contagem regressiva de 15 dias
  VanessaPortrait.tsx → enquadramento premium da sua foto (mostra só o tronco)
  ui/accordion.tsx  → componente FAQ (Radix + Tailwind)
  sections/
    Hero.tsx
    Benefits.tsx
    BeforeAfter.tsx
    Process.tsx
    Promotion.tsx
    About.tsx
    FAQ.tsx
    FinalCTA.tsx
    Footer.tsx
lib/
  utils.ts          → helper `cn`, número do WhatsApp e link wa.me
public/
  vanessa.jpg       → sua foto
```

---

## Como publicar online (Vercel — grátis e em 5 minutos)

A Vercel é a empresa que criou o Next.js. É a forma mais rápida e segura de publicar.

### 1) Subir o código para o GitHub

1. Crie uma conta gratuita em [github.com](https://github.com) (se ainda não tem).
2. No GitHub, clique em **New repository** → nome sugerido: `subida-com-vanessa` → marque **Private** se quiser → **Create**.
3. No PowerShell, dentro da pasta do projeto, rode:

```powershell
git init
git add .
git commit -m "primeira versão da landing"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/subida-com-vanessa.git
git push -u origin main
```

> Troque `SEU_USUARIO` pelo seu nome do GitHub.

### 2) Conectar na Vercel

1. Acesse [vercel.com](https://vercel.com) → **Sign Up with GitHub**.
2. Clique em **Add New → Project**.
3. Escolha o repositório `subida-com-vanessa` → **Import**.
4. Não mude nada nas configurações → **Deploy**.
5. Aguarde uns 2-3 minutos. Sua landing já estará online em algo como `subida-com-vanessa.vercel.app`.

### 3) Conectar seu domínio próprio (opcional)

Quando você comprar um domínio (Registro.br, GoDaddy, Hostinger, etc.):

1. Na Vercel → entre no projeto → aba **Domains** → digite seu domínio → **Add**.
2. A Vercel mostra os registros DNS que você precisa adicionar no painel do seu domínio.
3. Em até 1 hora, seu domínio aponta para sua landing.

---

## Personalização rápida

| O que mudar | Onde |
|---|---|
| Número do WhatsApp | `lib/utils.ts` (constantes `WHATSAPP_NUMBER` e `WHATSAPP_DISPLAY`) |
| Preço da promoção | `components/sections/Promotion.tsx` |
| Duração da contagem regressiva | `components/Countdown.tsx` (constante `FIFTEEN_DAYS_MS`) |
| Texto da Hero | `components/sections/Hero.tsx` |
| Perguntas do FAQ | `components/sections/FAQ.tsx` |
| Foto da Vanessa | substituir `public/vanessa.jpg` |
| Enquadramento da foto | `components/VanessaPortrait.tsx` (propriedade `object-[center_88%]`) |

---

## Direção visual

- Paleta: **preto profundo + roxo premium + dourado elegante** (cyber luxury)
- Tipografia: **Space Grotesk** (display) + **Inter** (texto)
- Animações: Framer Motion + Tailwind animate
- Glassmorphism, glow, partículas e gradientes cinematográficos aplicados em toda a página
