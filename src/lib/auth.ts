/**
 * Autenticação usando NextAuth
 */
import { getServerSession } from 'next-auth'
import { authOptions } from './auth-config'
import { prisma } from './db'

/**
 * Helper para obter o usuário autenticado no servidor
 */
export async function getServerAuth() {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.email) {
      return null
    }

    // Buscar usuário no banco de dados
    const user = await prisma.user.findUnique({
      where: { 
        email: session.user.email 
      },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
      },
    })

    if (!user) {
      return null
    }

    return {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
    }
  } catch (error) {
    console.error('Error getting server auth:', error)
    return null
  }
}


