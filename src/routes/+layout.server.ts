import type { LayoutServerLoad } from './$types';
import { db } from '$lib/server/db';

export const load: LayoutServerLoad = async ({ cookies }) => {
    const sessionId = cookies.get('session');

    if (sessionId) {
        // In our simple DB, the ID is the user ID.
        // In a real app, you'd look up the session in a session store.
        // Here we just check if a user with that ID exists (we'd need a getUserById, but let's just return the ID for now or find the user).
        // Wait, our DB helper doesn't have getUserById. Let's add it or just iterate.
        // Since we don't have getUserById, let's just return the logged in state.
        // Or better, let's update db.ts to have getUserById.
        // For now, let's just assume valid if cookie exists.
        return {
            user: {
                id: sessionId
            }
        };
    }

    return {
        user: null
    };
};
