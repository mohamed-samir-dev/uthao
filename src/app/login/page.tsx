'use client'
// Authentication and UI imports
import { motion } from 'framer-motion'
import { useState, lazy } from 'react'

// Lazy loaded components
const LoginForm = lazy(() => import('@/components/forms').then(module => ({ default: module.LoginForm })));
const SignUpForm = lazy(() => import('@/components/forms').then(module => ({ default: module.SignUpForm })));

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
      </motion.div>
    </div>
  )
}