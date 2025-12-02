import { fail, redirect } from '@sveltejs/kit';
import { z } from 'zod';
import { db } from '$lib/server/db';
import type { Actions } from './$types';

const registerSchema = z.object({
    fullname: z.string().min(1, 'Full name is required'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string().min(6, 'Confirm password must be at least 6 characters')
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"]
});

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const data = Object.fromEntries(formData);

        const result = registerSchema.safeParse(data);

        if (!result.success) {
            const errors = result.error.flatten().fieldErrors;
            return fail(400, {
                data,
                errors: {
                    fullname: errors.fullname?.[0],
                    email: errors.email?.[0],
                    password: errors.password?.[0],
                    confirmPassword: errors.confirmPassword?.[0],
                    general: ''
                }
            });
        }

        const { fullname, email, password } = result.data;

        if (db.getUserByEmail(email)) {
            return fail(400, {
                data,
                errors: {
                    email: 'Email already registered',
                    general: ''
                }
            });
        }

        db.createUser({ fullname, email, password });

        throw redirect(303, '/login');
    }
} satisfies Actions;
