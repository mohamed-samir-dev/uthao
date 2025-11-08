import type { EmailInputProps } from '@/types';

export function EmailInput({ value, onChange, error }: EmailInputProps) {
  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-white/60 focus:ring-2 focus:ring-white/40 outline-none transition-all ${
          error ? "border-red-400" : "border-white/20"
        }`}
      />
      {error && <p className="text-red-300 text-xs mt-1">{error}</p>}
    </div>
  );
}