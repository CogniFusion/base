"use server";
import prisma from "@/lib/db";
import { UserAuthenticated } from "@/redux/types";
import { revalidatePath } from "next/cache";

export const fetchUser = async (userId: string) => {
    try {
        const user = await prisma.user.findFirst({
            where: {
                id: userId,
            },
        });
        return user;
    } catch (error: any) {
        throw new Error(`Failed to fetch user: ${error.message}`);
    }
};

export const updateUser = async (user: UserAuthenticated) => {
    try {
        const { id, name, username, path } = user;
        await prisma.user.upsert({
            where: {
                id,
            },
            update: {
                name,
                username: username.toLowerCase(),
                onboarded: true,
            },
            create: {
                id,
                name,
                username: username.toLowerCase(),
                onboarded: true,
            },
        });

        if (path === "/profile/edit") {
            revalidatePath(path);
        }
    } catch (error: any) {
        throw new Error(`Failed to create/update user: ${error.message}`);
    }
};