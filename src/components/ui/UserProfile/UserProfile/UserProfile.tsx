"use client";
import { motion } from "framer-motion";
import { useAuth } from "@/hooks/useAuth/useAuth";
import { useDropdown } from "@/hooks/useDropdown/useDropdown";
import { LoginButton } from '../LoginButton/LoginButton';
import { UserAvatar } from '../UserAvatar/UserAvatar';
import { UserDropdown } from '../UserDropdown/UserDropdown';

/**
 * User profile component with authentication states and dropdown menu
 * Shows login CTA for unauthenticated users, profile info and sign out for authenticated users
 */
export function UserProfile() {
  const { user: currentUser, signOut: handleSignOut } = useAuth();
  const { isOpen: showDropdown, toggle: toggleDropdown, close: closeDropdown } = useDropdown();

  if (!currentUser) {
    return <LoginButton />;
  }

  return (
    <div className="relative">
      {showDropdown && (
        <div
          className="fixed inset-0 z-40"
          onClick={closeDropdown}
        />
      )}
      
      <motion.button
        onClick={toggleDropdown}
        whileHover={{ scale: 1.02 }}
        className="flex items-center gap-3 w-full bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md rounded-xl px-4 py-3 border border-white/20 text-white shadow-lg"
      >
        <UserAvatar user={currentUser} onClick={toggleDropdown} />
        
        <div className="flex-1 text-left">
          <p className="text-sm font-medium">{currentUser.name}</p>
          <p className="text-xs text-white/70 truncate">{currentUser.email}</p>
        </div>
      </motion.button>

      {showDropdown && (
        <UserDropdown onSignOut={handleSignOut} />
      )}
    </div>
  );
}
