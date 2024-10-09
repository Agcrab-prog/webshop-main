import { Request, Response } from 'express';

export function handlePaymentFormSubmission(body: any): { error?: string } {
    const { name, accountNumber, termsAccepted } = body;

    if (!name || !accountNumber || !termsAccepted) {
        return { error: 'All fields are required.' };
    }

    const isValidAccountNumber = /^(?:\d{8}(-\d{8})?|(\d{8})){1}$/.test(accountNumber);
    
    if (!isValidAccountNumber) {
        return { error: 'Invalid account number format. Must be either 2x8 or 3x8 digits separated by hyphens.' };
    }

    return {}; 
}