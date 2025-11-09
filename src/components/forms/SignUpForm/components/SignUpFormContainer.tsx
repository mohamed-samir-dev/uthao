"use client";
import { useState, lazy } from "react";
import { saveUser } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { SignUpFormProps, SignUpFormData, SignUpFormErrors } from "@/types";
import { validateName, validateEmail, validateSignUpPassword, validateConfirmPassword } from "../../validation";

// Lazy loaded component
const SignUpFormContent = lazy(() => import("./SignUpFormContent").then(module => ({ default: module.SignUpFormContent })));

export function SignUpFormContainer({ onToggleMode, onError }: SignUpFormProps) {
  const [formData, setFormData] = useState<SignUpFormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<SignUpFormErrors>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    onError("");
    setIsLoading(true);

    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    const passwordError = validateSignUpPassword(formData.password);
    const confirmPasswordError = validateConfirmPassword(formData.confirmPassword, formData.password);

    setErrors({
      name: nameError,
      email: emailError,
      password: passwordError,
      confirmPassword: confirmPasswordError,
    });

    if (nameError || emailError || passwordError || confirmPasswordError) {
      setIsLoading(false);
      return;
    }

    try {
      saveUser({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      router.push("/");
    } catch {
      onError("Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SignUpFormContent
      formData={formData}
      errors={errors}
      isLoading={isLoading}
      onFormDataChange={setFormData}
      onSubmit={handleSubmit}
      onToggleMode={onToggleMode}
    />
  );
}