// src/PaymentForm.ts
import { Request } from 'express';

export async function handlePaymentFormSubmission(body: any): Promise<{ error?: string }> {
    const { name, accountNumber, termsAccepted } = body;

    // Ellenőrzés és válasz küldése
    if (!name || !accountNumber || !termsAccepted) {
        return { error: 'All fields are required.' };
    }

    // Bankszámlaszám validálás
    const isValidAccountNumber = /^\d{8}(-\d{8})?$/.test(accountNumber);
    
    if (!isValidAccountNumber) {
        return { error: 'Invalid account number format.' };
    }

    // Sikeres beküldés
    return {};
}
