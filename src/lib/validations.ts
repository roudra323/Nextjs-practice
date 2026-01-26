import { z } from "zod";

// Common validation patterns
const hexStringPattern = /^0x[a-fA-F0-9]+$/;

// Validator Application Form Schema
export const validatorFormSchema = z.object({
    validatorName: z
        .string()
        .min(1, "Validator name is required")
        .min(3, "Validator name must be at least 3 characters"),
    country: z.string().min(1, "Please select a country"),
});

export type ValidatorFormData = z.infer<typeof validatorFormSchema>;

// Node Configuration Form Schema
export const nodeConfigSchema = z.object({
    publicKey: z
        .string()
        .min(1, "Public key is required")
        .regex(hexStringPattern, "Must be a valid hex string starting with 0x"),
    withdrawalRoot: z
        .string()
        .min(1, "Withdrawal root is required")
        .regex(hexStringPattern, "Must be a valid hex string starting with 0x"),
    signature: z
        .string()
        .min(1, "Signature is required")
        .regex(hexStringPattern, "Must be a valid hex string starting with 0x"),
    depositRoot: z
        .string()
        .min(1, "Deposit root is required")
        .regex(hexStringPattern, "Must be a valid hex string starting with 0x"),
});

export type NodeConfigFormData = z.infer<typeof nodeConfigSchema>;
