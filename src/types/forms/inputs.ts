export interface EmailInputProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export interface NameInputProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export interface PasswordInputProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
}

export interface FormToggleProps {
  activeTab?: "tracking" | "schedules";
  onTabChange?: (tab: "tracking" | "schedules") => void;
  onToggle?: () => void;
  text?: string;
}

export interface PaymentFormProps {
  activeTab: "tracking" | "schedules";
}

export interface ScheduleFormProps {
  formData: {
    from: string;
    to: string;
    date: string;
  };
  onInputChange: (field: string, value: string) => void;
  errors: {
    from?: string;
    to?: string;
    date?: string;
  };
}

export interface SearchButtonProps {
  activeTab: "tracking" | "schedules";
  onSearch: () => void;
}

export interface ResultsDisplayProps {
  activeTab: "tracking" | "schedules";
  formData: {
    from: string;
    to: string;
    date: string;
    trackingNumber: string;
  };
  onProceedToPayment: () => void;
}

export interface SearchFormCardProps {
  activeTab: "tracking" | "schedules";
  formData: {
    from: string;
    to: string;
    date: string;
    trackingNumber: string;
  };
  errors: { [key: string]: string };
  onTabChange: (tab: "tracking" | "schedules") => void;
  onInputChange: (field: string, value: string) => void;
  onSearch: () => void;
}

export interface TrackingFormProps {
  trackingNumber: string;
  onInputChange: (field: string, value: string) => void;
  error?: string;
}