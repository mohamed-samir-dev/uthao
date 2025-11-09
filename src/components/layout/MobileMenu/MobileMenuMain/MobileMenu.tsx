'use client'
import { useState, lazy } from "react";

// Lazy loaded components
const MenuToggle = lazy(() => import("../MenuToggle").then(module => ({ default: module.MenuToggle })));
const MenuBackdrop = lazy(() => import("../MenuBackdrop").then(module => ({ default: module.MenuBackdrop })));
const MenuPanel = lazy(() => import("../MenuPanel").then(module => ({ default: module.MenuPanel })));

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