"use client";
import { NameInput } from "../../NameInput/NameInput/NameInput";
import { EmailInput } from "../../EmailInput";
import { PasswordInput } from "../../PasswordInput";
import { SubmitButton } from "../../SubmitButton";
import { FormToggle } from "../../FormToggle";
import { SignUpFormContentProps } from "@/types";

export function SignUpFormContent({
  formData,
  errors,
  isLoading,
  onFormDataChange,
  onSubmit,
  onToggleMode,
}: SignUpFormContentProps) {
  return (
    <>
      <h1 className="text-3xl font-bold text-white text-center mb-8">
        Create Account
      </h1>

      <form onSubmit={onSubmit} className="space-y-4 mb-6">
        <NameInput
          value={formData.name}
          onChange={(name) => onFormDataChange({ ...formData, name })}
          error={errors.name}
        />

        <EmailInput
          value={formData.email}
          onChange={(email) => onFormDataChange({ ...formData, email })}
          error={errors.email}
        />

        <PasswordInput
          value={formData.password}
          onChange={(password) => onFormDataChange({ ...formData, password })}
          error={errors.password}
        />

        <PasswordInput
          value={formData.confirmPassword}
          onChange={(confirmPassword) => onFormDataChange({ ...formData, confirmPassword })}
          error={errors.confirmPassword}
          placeholder="Confirm Password"
        />

        <SubmitButton isLoading={isLoading} loadingText="Creating Account...">
          Sign Up
        </SubmitButton>
      </form>

      <FormToggle
        onToggle={onToggleMode}
        text="Already have an account? Sign in"
      />
    </>
  );
}