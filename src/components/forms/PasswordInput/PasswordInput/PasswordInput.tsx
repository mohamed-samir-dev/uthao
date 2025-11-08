import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import type { PasswordInputProps } from '@/types';

export function PasswordInput({ value, onChange, error, placeholder = "Password" }: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full px-4 py-3 pr-12 bg-white/10 border rounded-xl text-white placeholder-white/60 focus:ring-2 focus:ring-white/40 outline-none transition-all ${
            error ? "border-red-400" : "border-white/20"
          }`}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-colors"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>
      {error && <p className="text-red-300 text-xs mt-1">{error}</p>}
    </div>
  );
}