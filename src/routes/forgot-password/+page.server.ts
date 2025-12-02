import { fail } from '@sveltejs/kit';
import { z } from 'zod';
import { db } from '$lib/server/db';
import type { Actions } from './$types';

const forgotPasswordSchema = z.object({
    email: z.string().email('Invalid email address')
});

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const data = Object.fromEntries(formData);

        const result = forgotPasswordSchema.safeParse(data);

        if (!result.success) {
            const errors = result.error.flatten().fieldErrors;
            return fail(400, {
                data,
                errors: {
                    email: errors.email?.[0],
                    general: ''
                }
            });
        }

        const { email } = result.data;

        // Check if user exists
        const user = db.getUserByEmail(email);

        if (!user) {
            // For security reasons, we shouldn't reveal if the email exists or not.
            // But for this demo, we can just return success or a specific message if needed.
            // Let's return success to prevent user enumeration.
            // Or maybe for this "Practice" app, it's better to be explicit?
            // Let's stick to best practices: Return success even if user not found.
        }

        // Mock sending email
        console.log(`[Mock Email Service] Sending password reset link to ${email}`);

        return {
            success: true,
            message: 'If an account exists with this email, you will receive a password reset link shortly.'
        };
    }
} satisfies Actions;
