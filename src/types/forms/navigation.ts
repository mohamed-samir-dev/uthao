// Search form data for tracking and schedules
export interface SearchFormData {
  from: string;
  to: string;
  date: string;
  type: "tracking" | "schedules";
}

export interface MobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export interface MenuItemProps {
  href: string;
  label: string;
  index: number;
  onClick: () => void;
}

export interface MenuBackdropProps {
  isMenuOpen: boolean;
  onClose: () => void;
}

export interface MenuPanelProps {
  isMenuOpen: boolean;
  onClose: () => void;
}

export interface MenuToggleProps {
  isMenuOpen: boolean;
  onClick: () => void;
}