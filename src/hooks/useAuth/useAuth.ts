'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { getUser, logoutUser } from '@/lib/auth'
import { User } from '@/types/index'

/**
 * Authentication hook that manages local storage users
 * Provides authentication state and sign-out functionality
 */
export const useAuth = () => {
  const [localUser, setLocalUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  // Load user from localStorage on mount
  useEffect(() => {
    setLocalUser(getUser())
    setIsLoading(false)
  }, [])

  // Handle sign out for local users
  const handleSignOut = () => {
    logoutUser()
    setLocalUser(null)
    router.push('/')
  }

  return {
    user: localUser,
    isAuthenticated: !!localUser,
    signOut: handleSignOut,
    isLoading
  }
}