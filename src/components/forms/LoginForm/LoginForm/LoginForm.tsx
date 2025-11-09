"use client";
import { useState } from "react";
import { loginUser } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { EmailInput } from "../../EmailInput";
import { PasswordInput } from "../../PasswordInput";
import { SubmitButton } from "../../SubmitButton";
import { FormToggle } from "../../FormToggle";
import { validateEmail, validatePassword } from "../../validation";
import type { LoginFormProps } from '@/types';

export function LoginForm({ onToggleMode, onError }: LoginFormProps) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    onError("");
    setIsLoading(true);

    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);

    setErrors({ email: emailError, password: passwordError });

    if (emailError || passwordError) {
      setIsLoading(false);
      return;
    }

    try {
      const user = loginUser(formData.email, formData.password);
      if (user) {
        router.push("/");
      } else {
        onError("Invalid email or password");
      }
    } catch {
      onError("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-white text-center mb-8">
        Welcome Back
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <EmailInput
          value={formData.email}
          onChange={(email) => setFormData({ ...formData, email })}
          error={errors.email}
        />
        
        <PasswordInput
          value={formData.password}
          onChange={(password) => setFormData({ ...formData, password })}
          error={errors.password}
        />
        
        <SubmitButton isLoading={isLoading} loadingText="Signing In...">
          Sign In
        </SubmitButton>
      </form>

      <FormToggle
        onToggle={onToggleMode}
        text="Don't have an account? Sign up"
      />
    </>
  );
}