import transport from '../configs/nodemailer'
import dotenv from 'dotenv'

dotenv.config()

export const RegisterSucessEmail = (email: string, name: string) => {
    transport.sendMail({
        from: process.env.NODEJS_GMAIL_APP_USER,
        to: email,
        subject: 'Register Success',
        html: `<h1>Email Confirmation</h1>
            <h2>Hello ${name}</h2>
            <p>Thank you for register.</p>
            </div>`,
    })
}
