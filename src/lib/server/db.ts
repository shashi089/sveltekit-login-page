import fs from 'fs';
import path from 'path';

const DB_PATH = path.resolve('src/lib/server/users.json');

export interface User {
    id: string;
    fullname: string;
    email: string;
    password: string; // In a real app, this should be hashed!
}

function readUsers(): User[] {
    if (!fs.existsSync(DB_PATH)) {
        return [];
    }
    const data = fs.readFileSync(DB_PATH, 'utf-8');
    return JSON.parse(data);
}

function writeUsers(users: User[]) {
    fs.writeFileSync(DB_PATH, JSON.stringify(users, null, 2));
}

export const db = {
    getUserByUsername: (username: string) => {
        // We'll use email as username for login in this simple example, or add a username field.
        // The existing login form has "Username" field, but register has "Email".
        // Let's assume Username = Email for simplicity or check both.
        // Actually, the register form has "Full Name" and "Email", but Login asks for "Username".
        // Let's treat "Username" in login as "Email" or "Full Name".
        // Standard practice: Login with Email. I'll adjust Login UI to say "Email" or allow both.
        // For now, let's search by email.
        const users = readUsers();
        return users.find(u => u.email === username || u.fullname === username);
    },
    getUserByEmail: (email: string) => {
        const users = readUsers();
        return users.find(u => u.email === email);
    },
    createUser: (user: Omit<User, 'id'>) => {
        const users = readUsers();
        const newUser = { ...user, id: crypto.randomUUID() };
        users.push(newUser);
        writeUsers(users);
        return newUser;
    }
};
