'use client'
// Authentication and UI imports
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { LoginForm } from '@/components/forms'
import { SignUpForm } from '@/components/forms'

// Main login/signup page component
export default function LoginPage() {
  const router = useRouter()
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
        className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 shadow-2xl max-w-md w-full relative"
      >
        {/* Back button */}
        <button
          onClick={() => router.push('/')}
          className="absolute top-4 left-4 text-white/80 hover:text-white transition-colors flex items-center gap-1 text-sm"
        >
          <ArrowLeft size={16} />
          Back
        </button>
        {/* Error message display */}
        {error && <p className="text-red-300 text-sm mb-4 text-center">{error}</p>}
        
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
      </motion.div>
    </div>
  )
}