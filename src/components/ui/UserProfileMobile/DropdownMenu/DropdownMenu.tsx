'use client'
import { motion } from 'framer-motion'

import {DropdownMenuProps}from '@/types'

export function DropdownMenu({ user, onSignOut, onClose }: DropdownMenuProps) {
  return (
    <>
      <div className="fixed inset-0 z-40" onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, y: -10, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -10, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-md rounded-lg shadow-2xl border border-white/10 p-1 w-40 z-50"
      >
        <div className="px-3 py-2 border-b border-white/10">
          <p className="text-xs font-medium text-white truncate">{user.name}</p>
          <p className="text-xs text-white/70 truncate">{user.email}</p>
        </div>
        <motion.button
          onClick={onSignOut}
          whileHover={{ backgroundColor: 'rgba(239, 68, 68, 0.1)' }}
          className="w-full text-left px-3 py-2 text-red-400 hover:text-red-300 rounded-lg transition-colors font-medium text-xs flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Sign Out
        </motion.button>
      </motion.div>
    </>
  )
}