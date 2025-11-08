// Translation function interface
export interface TranslationFunction {
  title: string;
  subtitle: string;
  step1: {
    title: string;
    subtitle: string;
    originPort: string;
    destinationPort: string;
    containerType: string;
    weight: string;
    shippingDate: string;
  };
  step2: {
    title: string;
    subtitle: string;
    companyName: string;
    contactPerson: string;
    emailAddress: string;
    phoneNumber: string;
    priorityLevel: string;
  };
  step3: {
    title: string;
    subtitle: string;
    routeDetails: string;
    costBreakdown: string;
    from: string;
    to: string;
    container: string;
    weight: string;
    priority: string;
    oceanFreight: string;
    fuelSurcharge: string;
    documentation: string;
    portHandling: string;
    insurance: string;
    totalCost: string;
    realTimeTracking: string;
    trackingDesc: string;
    documentationTitle: string;
    documentationDesc: string;
    insuranceTitle: string;
    insuranceDesc: string;
  };
  step4: {
    title: string;
    subtitle: string;
    bookingReference: string;
    downloadReceipt: string;
    trackShipment: string;
  };
  navigation: {
    previous: string;
    cancel: string;
    continue: string;
    close: string;
    step: string;
  };
  validation: {
    fillRequired: string;
  };
}

// Complete shipping modal component props
export const translations = {
  en: {
    title: "Ocean Logistics Portal",
    subtitle: "Professional Shipping Solutions",
    step1: {
      title: "Shipping Information",
      subtitle: "Enter your cargo and route details",
      originPort: "Origin Port",
      destinationPort: "Destination Port",
      containerType: "Container Type",
      weight: "Weight (tons)",
      shippingDate: "Shipping Date",
    },
    step2: {
      title: "Company Information",
      subtitle: "Provide your business contact details",
      companyName: "Company Name",
      contactPerson: "Contact Person",
      emailAddress: "Email Address",
      phoneNumber: "Phone Number",
      priorityLevel: "Priority Level",
    },
    step3: {
      title: "Shipping Quote & Services",
      subtitle: "Review your quote and included services",
      routeDetails: "Route Details",
      costBreakdown: "Cost Breakdown",
      from: "From:",
      to: "To:",
      container: "Container:",
      weight: "Weight:",
      priority: "Priority:",
      oceanFreight: "Ocean Freight:",
      fuelSurcharge: "Fuel Surcharge:",
      documentation: "Documentation:",
      portHandling: "Port Handling:",
      insurance: "Insurance:",
      totalCost: "Total Cost:",
      realTimeTracking: "Real-time Tracking",
      trackingDesc: "24/7 cargo monitoring",
      documentationTitle: "Documentation",
      documentationDesc: "Complete paperwork handling",
      insuranceTitle: "Insurance",
      insuranceDesc: "Full cargo protection",
    },
    step4: {
      title: "Booking Confirmed!",
      subtitle:
        "Your shipment has been successfully booked. You will receive a confirmation email shortly.",
      bookingReference: "Booking Reference",
      downloadReceipt: "Download Receipt",
      trackShipment: "Track Shipment",
    },
    navigation: {
      previous: "Previous",
      cancel: "Cancel",
      continue: "Continue",
      close: "Close",
      step: "Step",
    },
    validation: {
      fillRequired: "Please fill in all required fields before continuing.",
    },
  },
};