import { SignUpFormContainer } from "../components/SignUpFormContainer";
import { SignUpFormProps } from "@/types";

export function SignUpForm({ onToggleMode, onError }: SignUpFormProps) {
  return <SignUpFormContainer onToggleMode={onToggleMode} onError={onError} />;
}