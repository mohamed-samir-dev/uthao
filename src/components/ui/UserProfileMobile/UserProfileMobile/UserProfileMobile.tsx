'use client'
import { useAuth } from '@/hooks/useAuth/useAuth'
import { useDropdown } from '@/hooks/useDropdown/useDropdown'
import { LoginButton } from '../LoginButton/LoginButton'
import { UserAvatar } from '../UserAvatar/UserAvatar'
import { DropdownMenu } from '../DropdownMenu/DropdownMenu'

/**
 * Mobile-optimized user profile component with compact dropdown menu
 * Shows login button for unauthenticated users, avatar with dropdown for authenticated users
 */
export function UserProfileMobile() {
  const { user: currentUser, signOut: handleSignOut } = useAuth()
  const { isOpen: showDropdown, toggle: toggleDropdown, close: closeDropdown } = useDropdown()

  if (!currentUser) {
    return <LoginButton />
  }

  return (
    <div className="relative">
      <UserAvatar user={currentUser} onClick={toggleDropdown} />
      {showDropdown && (
        <DropdownMenu 
          user={currentUser} 
          onSignOut={handleSignOut} 
          onClose={closeDropdown} 
        />
      )}
    </div>
  )
}