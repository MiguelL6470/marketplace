# Marketplace MVP (Neon + Supabase Storage)

## Requisitos
- Node 18+
- Conta no Neon (Postgres)
- Projeto no Supabase (somente Storage)

## Variáveis de ambiente

### Local (arquivo `.env`)
Crie um arquivo `.env` com as chaves:

**Obrigatórias:**
- `NEXTAUTH_URL=http://localhost:3000`
- `NEXTAUTH_SECRET=uma_chave_segura` (gere uma chave segura: `openssl rand -base64 32`)
- `DATABASE_URL=postgresql://user:password@host/dbname?sslmode=require`
- `SUPABASE_URL=https://seu-projeto.supabase.co`
- `SUPABASE_ANON_KEY=sua_chave_anon`
- `SUPABASE_SERVICE_ROLE=sua_chave_service_role`
- `NEXT_PUBLIC_BASE_URL=http://localhost:3000`

**Opcional OAuth:**
- `GOOGLE_CLIENT_ID=...`
- `GOOGLE_CLIENT_SECRET=...`
- `APPLE_CLIENT_ID=...`
- `APPLE_CLIENT_SECRET=...`
- `FACEBOOK_CLIENT_ID=...`
- `FACEBOOK_CLIENT_SECRET=...`

### Deploy na Vercel

Configure as variáveis de ambiente no painel da Vercel (Settings → Environment Variables):

**Obrigatórias:**
- `NEXTAUTH_URL` - URL da sua aplicação na Vercel (ex: `https://marketplace.vercel.app`)
- `NEXTAUTH_SECRET` - Gere uma chave segura: `openssl rand -base64 32`
- `DATABASE_URL` - String de conexão do Neon PostgreSQL
- `SUPABASE_URL` - URL do seu projeto Supabase
- `SUPABASE_ANON_KEY` - Chave anônima do Supabase
- `SUPABASE_SERVICE_ROLE` - Chave de service role do Supabase
- `NEXT_PUBLIC_BASE_URL` - URL pública da aplicação (ex: `https://marketplace.vercel.app`)

**Para client-side (opcional, mas recomendado):**
- `NEXT_PUBLIC_SUPABASE_URL` - Mesmo valor de `SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Mesmo valor de `SUPABASE_ANON_KEY`

**Opcional OAuth:**
Configure apenas os providers que você deseja usar.

## Instalação
```bash
npm install
npm run prisma:generate
npm run prisma:migrate -- --name init
# Aplique o SQL de FTS no Neon (via console) com o conteúdo de prisma/fts.sql
npm run db:seed
npm run dev
```

## Notas
- Uploads: `POST /api/uploads/signed-url` retorna URL assinada (Supabase Storage).
- Autorização: rotas de lojista exigem sessão (NextAuth).
- Busca: FTS com `plainto_tsquery` e índice GIN (veja `prisma/fts.sql`).
