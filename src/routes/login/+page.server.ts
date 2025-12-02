import { fail, redirect } from '@sveltejs/kit';
import { z } from 'zod';
import { db } from '$lib/server/db';
import type { Actions } from './$types';

const loginSchema = z.object({
    username: z.string().min(1, 'Username is required'), // We'll treat this as email for now based on DB logic
    password: z.string().min(1, 'Password is required')
});

export const actions = {
    default: async ({ request, cookies }) => {
        const formData = await request.formData();
        const data = Object.fromEntries(formData);

        const result = loginSchema.safeParse(data);

        if (!result.success) {
            const errors = result.error.flatten().fieldErrors;
            return fail(400, {
                data,
                errors: {
                    username: errors.username?.[0],
                    password: errors.password?.[0],
                    general: ''
                }
            });
        }

        const { username, password } = result.data;

        // Check against DB
        const user = db.getUserByUsername(username); // This checks email or fullname

        if (!user || user.password !== password) {
            return fail(400, {
                data,
                errors: {
                    general: 'Invalid username or password'
                }
            });
        }

        // Set session cookie
        cookies.set('session', user.id, {
            path: '/',
            httpOnly: true,
            sameSite: 'strict',
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 7 // 1 week
        });

        throw redirect(303, '/');
    }
} satisfies Actions;
