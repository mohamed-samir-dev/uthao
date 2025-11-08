// Props for partner logo component
export interface PartnerLogoProps {
  src: string;
  index: number;
}

export interface PartnerCarouselProps {
  partners: string[]; // Array of partner logo image sources
  isMobile: boolean; // Mobile detection for animation speed adjustment
}