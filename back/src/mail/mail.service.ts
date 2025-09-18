import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
    private transporter = nodemailer.createTransport({
        service: 'gmail',

        tls: {
            rejectUnauthorized: false // <-- This allows self-signed certs
        }
        ,
        auth: {
            user: 'melcraftinteriors@gmail.com',
            pass: process.env.MailPassword,
        },
    });

    async sendVerificationEmail(to: string, token: string) {
        const verificationLink = `192.168.56.1:3000/users/verify_email/${token}`;
        await this.transporter.sendMail({
            from: '"MelCraft" melcraftinteriors@gmail.com',
            to,
            subject: 'Email Verification',
            html: `<p>Click <a href="${verificationLink}">here</a> to verify your email.</p>`,
        });
    }
}
