# URLs de Redirecionamento OAuth

Configure estas URLs nos provedores OAuth:

## Google OAuth
**Console:** https://console.cloud.google.com/apis/credentials

**URLs de redirecionamento autorizadas:**
- Desenvolvimento: `http://localhost:3000/api/auth/callback/google`
- Produção: `https://seu-dominio.com/api/auth/callback/google`

## Apple Sign In
**Portal:** https://developer.apple.com/account/resources/identifiers/list

**URLs de redirecionamento autorizadas:**
- Desenvolvimento: `http://localhost:3000/api/auth/callback/apple`
- Produção: `https://seu-dominio.com/api/auth/callback/apple`

## Facebook Login
**Developers:** https://developers.facebook.com/apps/

**URLs de redirecionamento OAuth válidas:**
- Desenvolvimento: `http://localhost:3000/api/auth/callback/facebook`
- Produção: `https://seu-dominio.com/api/auth/callback/facebook`

## Variáveis de Ambiente Necessárias

Adicione ao seu arquivo `.env`:

```env
# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=gerar_string_segura_aqui

# Google OAuth
GOOGLE_CLIENT_ID=seu_google_client_id
GOOGLE_CLIENT_SECRET=seu_google_client_secret

# Apple Sign In
APPLE_CLIENT_ID=seu_apple_id
APPLE_CLIENT_SECRET=seu_apple_secret

# Facebook Login
FACEBOOK_CLIENT_ID=seu_facebook_app_id
FACEBOOK_CLIENT_SECRET=seu_facebook_app_secret
```

## Gerar NEXTAUTH_SECRET

Execute no terminal:
```bash
openssl rand -base64 32
```

Copie a saída e adicione ao `.env` como `NEXTAUTH_SECRET`.







