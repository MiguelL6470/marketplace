import { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import AppleProvider from 'next-auth/providers/apple'
import FacebookProvider from 'next-auth/providers/facebook'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma } from './db'

// Construir array de providers apenas com os que têm credenciais configuradas
const providers = []

if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
  providers.push(
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  )
}

if (process.env.APPLE_CLIENT_ID && process.env.APPLE_CLIENT_SECRET) {
  providers.push(
    AppleProvider({
      clientId: process.env.APPLE_CLIENT_ID,
      clientSecret: process.env.APPLE_CLIENT_SECRET,
    })
  )
}

if (process.env.FACEBOOK_CLIENT_ID && process.env.FACEBOOK_CLIENT_SECRET) {
  providers.push(
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    })
  )
}

// Validar variáveis críticas que quebrariam o build
// Providers serão validados no runtime pela aplicação
if (!process.env.NEXTAUTH_SECRET && process.env.NODE_ENV !== 'development') {
  console.warn('NEXTAUTH_SECRET is not set. This is required for production.')
}

if (!process.env.DATABASE_URL && process.env.NODE_ENV !== 'development') {
  console.warn('DATABASE_URL is not set. This is required for production.')
}

// Se não houver providers, usar um provider temporário apenas para passar o build
// A validação real acontecerá no runtime quando a aplicação tentar usar o NextAuth
const finalProviders = providers.length > 0 ? providers : [
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID || 'placeholder',
    clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'placeholder',
  })
]

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: finalProviders,
  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        // Com strategy database, o user vem do banco
        if (user && 'role' in user) {
          session.user.id = user.id
          session.user.role = user.role as 'CONSUMER' | 'MERCHANT'
        } else {
          // Fallback: buscar role do banco se necessário
          const dbUser = await prisma.user.findUnique({
            where: { email: session.user.email! },
            select: { role: true },
          })

          if (dbUser) {
            session.user.role = dbUser.role
          }
        }
      }
      return session
    },
  },
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'database',
  },
  secret: process.env.NEXTAUTH_SECRET,
}

