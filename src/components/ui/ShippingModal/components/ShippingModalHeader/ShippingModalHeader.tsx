"use client";
import { StepHeader } from "../../../StepHeader";
import {ShippingModalHeaderProps} from "../../types";


export const ShippingModalHeader = ({ step, onClose, t }: ShippingModalHeaderProps) => {
  return <StepHeader step={step} onClose={onClose} t={t} />;
};