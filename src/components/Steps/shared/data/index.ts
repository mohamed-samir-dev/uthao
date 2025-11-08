import { Step } from '@/types';

export const SHIPPING_STEPS: Step[] = [
  {
    id: 1,
    title: "Book Shipment",
    description: "Easily place your order with a smooth, secure process designed for speed and convenience",
    image: "./10.webp",
    alt: "Book Shipment"
  },
  {
    id: 2,
    title: "Pack, Label & Collect Cargo",
    description: "Ensure goods are securely packed and clearly labeled for safe handling and smooth transportation",
    image: "/11.webp",
    alt: "Pack, Label & Collect Cargo"
  },
  {
    id: 3,
    title: "Export & Loading",
    description: "Goods are cleared through export customs and securely loaded onto the vessel for shipment",
    image: "/12.webp",
    alt: "Export & Loading"
  },
  {
    id: 4,
    title: "Sea Transit & Arrival",
    description: "Cargo securely transported by sea and arrives at the designated destination for onward processing",
    image: "/2.webp",
    alt: "Sea Transit & Arrival"
  },
  {
    id: 5,
    title: "Import & Delivery",
    description: "Cargo is cleared through import customs, unloaded, and safely delivered to the final destination",
    image: "/13.webp",
    alt: "Import & Delivery"
  }
];