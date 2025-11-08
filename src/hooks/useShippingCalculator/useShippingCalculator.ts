// Hook for calculating shipping costs based on route, container type, weight, and priority
export const useShippingCalculator = () => {
  const calculatePrice = (formData: {
    origin: string;
    destination: string;
    cargoType: string;
    weight: string;
    priority: string;
  }) => {
    // Base rates for different shipping routes (USD)
    const routes: { [key: string]: number } = {
      "Shanghai, China-New York, USA": 1200,
      "Shanghai, China-Hamburg, Germany": 1100,
      "Shanghai, China-Dubai, UAE": 800,
      "Shanghai, China-Tokyo, Japan": 600,
      "Singapore-New York, USA": 1300,
      "Singapore-Hamburg, Germany": 1000,
      "Singapore-Dubai, UAE": 500,
      "Singapore-Tokyo, Japan": 700,
      "Rotterdam, Netherlands-New York, USA": 900,
      "Rotterdam, Netherlands-Hamburg, Germany": 400,
      "Rotterdam, Netherlands-Dubai, UAE": 1200,
      "Rotterdam, Netherlands-Tokyo, Japan": 1400,
      "Los Angeles, USA-New York, USA": 800,
      "Los Angeles, USA-Hamburg, Germany": 1100,
      "Los Angeles, USA-Dubai, UAE": 1300,
      "Los Angeles, USA-Tokyo, Japan": 900
    };
    
    const routeKey = `${formData.origin}-${formData.destination}`;
    const baseRate = routes[routeKey] || 1000; // Default rate if route not found
    
    // Container type pricing multipliers
    const containerMultiplier: { [key: string]: number } = {
      "20ft Standard": 1,
      "40ft Standard": 1.8,
      "40ft High Cube": 2,
      "20ft Refrigerated": 1.5,
      "40ft Refrigerated": 2.5
    };
    
    // Shipping priority pricing multipliers
    const priorityMultiplier: { [key: string]: number } = {
      "Standard (15-20 days)": 1,
      "Express (10-12 days)": 1.3,
      "Priority (7-9 days)": 1.6
    };
    
    // Weight-based pricing (every 10 tons adds to multiplier)
    const weight = parseFloat(formData.weight) || 1;
    const weightMultiplier = Math.max(1, weight / 10);
    
    // Calculate main freight cost
    const oceanFreight = Math.round(baseRate * (containerMultiplier[formData.cargoType] || 1) * (priorityMultiplier[formData.priority] || 1) * weightMultiplier);
    
    // Additional charges
    const fuelSurcharge = Math.round(oceanFreight * 0.15); // 15% fuel surcharge
    const documentation = 75; // Fixed documentation fee
    const portHandling = Math.round(oceanFreight * 0.08); // 8% port handling
    const insurance = Math.round(oceanFreight * 0.05); // 5% insurance
    
    return {
      oceanFreight,
      fuelSurcharge,
      documentation,
      portHandling,
      insurance,
      total: oceanFreight + fuelSurcharge + documentation + portHandling + insurance
    };
  };

  return { calculatePrice };
};