import { lazy } from "react";
import { SignUpFormProps } from "@/types";

// Lazy loaded component
const SignUpFormContainer = lazy(() => import("../components/SignUpFormContainer").then(module => ({ default: module.SignUpFormContainer })));

export function SignUpForm({ onToggleMode, onError }: SignUpFormProps) {
  return <SignUpFormContainer onToggleMode={onToggleMode} onError={onError} />;
}