"use client";
import { useAuth } from "@/hooks/useAuth/useAuth";
import { useDropdown } from "@/hooks/useDropdown/useDropdown";
import { LoginButton } from "../LoginButton/LoginButton";
import { UserAvatar } from "../UserAvatar/UserAvatar";
import { DropdownMenu } from "../DropdownMenu/DropdownMenu";
/**
 * Desktop-optimized user profile component with right-aligned dropdown menu
 * Shows login button for unauthenticated users, avatar with dropdown for authenticated users
 */
export function UserProfileDesktop() {
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
      <UserAvatar user={currentUser} onClick={toggleDropdown} />
      {showDropdown && (
        <DropdownMenu user={currentUser} onSignOut={handleSignOut} onClose={closeDropdown} />
      )}
    </div>
  );
}