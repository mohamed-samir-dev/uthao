'use client'
import { useState } from "react";
import { MenuToggle } from "../MenuToggle";
import { MenuBackdrop } from "../MenuBackdrop";
import { MenuPanel } from "../MenuPanel";

/**
 * Mobile navigation menu with slide-in animation and backdrop
 * Features hamburger/close icon transition and staggered menu item animations
 */
export function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => setIsMenuOpen(!isMenuOpen);
  const handleClose = () => setIsMenuOpen(false);

  return (
    <>
      <MenuToggle isMenuOpen={isMenuOpen} onClick={handleToggle} />
      <MenuBackdrop isMenuOpen={isMenuOpen} onClose={handleClose} />
      <MenuPanel isMenuOpen={isMenuOpen} onClose={handleClose} />
    </>
  );
}