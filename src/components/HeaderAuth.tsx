'use client'

import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { UserCircle, LogOut } from 'lucide-react'
import { useState } from 'react'

export function HeaderAuth() {
  const { data: session, status } = useSession()
  const [showDropdown, setShowDropdown] = useState(false)

  if (status === 'loading') {
    return (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-white/10 rounded-full animate-pulse" />
      </div>
    )
  }

  if (status === 'authenticated' && session?.user) {
    return (
      <div className="relative">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="flex items-center gap-2 hover:bg-opacity-20 hover:bg-white rounded-lg transition-colors"
        >
          <div className="flex items-center gap-2 px-3 py-2">
            <UserCircle className="w-6 h-6" />
            <span className="text-xs text-gray-300">{session.user.name || 'Usuário'}</span>
          </div>
        </button>

        {showDropdown && (
          <>
            <div
              className="fixed inset-0 z-10"
              onClick={() => setShowDropdown(false)}
            />
            <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-20">
              <Link
                href="/account"
                className="block px-4 py-3 text-gray-900 hover:bg-gray-50 rounded-t-lg transition-colors"
                onClick={() => setShowDropdown(false)}
              >
                <div className="flex items-center gap-2">
                  <UserCircle className="w-4 h-4" />
                  <span className="text-sm font-medium">Minha Conta</span>
                </div>
              </Link>
              <button
                onClick={() => {
                  signOut({ callbackUrl: '/' })
                  setShowDropdown(false)
                }}
                className="w-full px-4 py-3 text-left text-gray-900 hover:bg-gray-50 rounded-b-lg transition-colors flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                <span className="text-sm font-medium">Sair</span>
              </button>
            </div>
          </>
        )}
      </div>
    )
  }

  return (
    <Link
      href="/login"
      className="flex items-center gap-1 px-3 py-2 hover:bg-opacity-20 hover:bg-white rounded-lg transition-colors"
    >
      <span className="text-sm font-semibold whitespace-nowrap">Entrar</span>
    </Link>
  )
}
