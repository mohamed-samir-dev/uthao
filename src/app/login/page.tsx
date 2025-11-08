'use client'
// Authentication and UI imports
import { signIn } from 'next-auth/react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { LoginForm } from '@/components/forms'
import { SignUpForm } from '@/components/forms'

// Main login/signup page component
export default function LoginPage() {
  // Toggle between login and signup forms
  const [isLogin, setIsLogin] = useState(true)
  // Handle form errors
  const [error, setError] = useState('')

  return (
    // Full-screen gradient background container
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-teal-700 flex items-center justify-center p-6">
      {/* Animated glassmorphism card container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 shadow-2xl max-w-md w-full"
      >
        {/* Conditional rendering of login/signup forms */}
        {isLogin ? (
          <LoginForm 
            onToggleMode={() => setIsLogin(false)} 
            onError={setError}
          />
        ) : (
          <SignUpForm 
            onToggleMode={() => setIsLogin(true)} 
            onError={setError}
          />
        )}
        
        {/* Error message display */}
        {error && <p className="text-red-300 text-sm mb-4">{error}</p>}

        {/* Divider with "or" text */}
        <div className="relative mb-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/20"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-transparent text-white/60">or</span>
          </div>
        </div>
        
        {/* Google OAuth sign-in button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => signIn('google', { callbackUrl: '/' })}
          className="w-full bg-white hover:bg-gray-100 text-gray-900 font-semibold py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-3"
        >
          {/* Google logo SVG */}
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Continue with Google
        </motion.button>
      </motion.div>
    </div>
  )
}