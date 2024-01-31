import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function fetchUser(userId: string) {
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