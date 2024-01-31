import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * Asynchronously fetches a user using the provided userId.
 *
 * @param {string} userId - The unique identifier of the user to fetch.
 * @return {Promise<User>} The user object that is fetched.
 */
export async function fetchUser(userId: string): Promise<User> {
    try {
        const user = await prisma.user.findFirst({
            where: {
                id: userId,
            },
        });
        return user;
    } catch (error: any) {
        throw new Error(`Failed to fetch user: ${error}`);
    }
}