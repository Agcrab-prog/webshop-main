import { Controller, Get, Post, Body, Res, Query } from '@nestjs/common';
import { Response } from 'express';
import { handlePaymentFormSubmission } from './PaymentForm';

@Controller()
export class AppController {
    @Get('/payment')
    getPaymentForm(@Res() res: Response): void {
        res.render('payment', { errorMessage: null });
    }

    @Post('/payment')
    async postPaymentForm(@Body() body: any, @Res() res: Response): Promise<void> {
        const result = await handlePaymentFormSubmission(body);

        if (result.error) {
            return res.render('payment', { errorMessage: result.error });
        }

        res.redirect(`/success?name=${encodeURIComponent(body.name)}&accountNumber=${encodeURIComponent(body.accountNumber)}`);
    }

    @Get('/success')
    getSuccess(@Query('name') name: string, @Query('accountNumber') accountNumber: string, @Res() res: Response): void {
        res.render('success', { name, accountNumber });
    }
}
