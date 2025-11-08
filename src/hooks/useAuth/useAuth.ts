'use client'

import { useSession, signOut } from 'next-auth/react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { getUser, logoutUser } from '@/lib/auth'
import { User } from '@/types/index'

/**
 * Authentication hook that manages both NextAuth sessions and local storage users
 * Provides unified authentication state and sign-out functionality
 */
export const useAuth = () => {
  const { data: session } = useSession()
  const [localUser, setLocalUser] = useState<User | null>(null)
  const router = useRouter()

  // Sync session user to localStorage and update local user state
  useEffect(() => {
    if (session?.user) {
      localStorage.setItem('user', JSON.stringify(session.user))
    }
    setLocalUser(getUser())
  }, [session])

  // Prioritize session user over local storage user
  const currentUser = session?.user || localUser

  // Handle sign out for both session and local users
  const handleSignOut = () => {
    if (session) {
      signOut()
    } else {
      logoutUser()
      setLocalUser(null)
      router.push('/')
    }
  }

  return {
    user: currentUser,
    isAuthenticated: !!currentUser,
    signOut: handleSignOut,
    isLoading: !session && !localUser
  }
}