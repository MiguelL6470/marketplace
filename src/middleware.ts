import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export default withAuth(
  function middleware(request: NextRequest) {
    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        // Rotas públicas não requerem autenticação
        const isPublicRoute = 
          req.nextUrl.pathname === '/' ||
          req.nextUrl.pathname.startsWith('/login') ||
          req.nextUrl.pathname.startsWith('/register') ||
          req.nextUrl.pathname.startsWith('/search') ||
          req.nextUrl.pathname.startsWith('/products') ||
          req.nextUrl.pathname.startsWith('/categories') ||
          req.nextUrl.pathname.startsWith('/deals') ||
          req.nextUrl.pathname.startsWith('/cart') ||
          req.nextUrl.pathname.startsWith('/checkout') ||
          req.nextUrl.pathname.startsWith('/api')

        if (isPublicRoute) {
          return true
        }

        // Outras rotas requerem autenticação
        return !!token
      },
    },
    pages: {
      signIn: '/login',
    },
  }
)

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}


