"use server";

import { auth } from "@clerk/nextjs/server";

export const authService = async () => {
    const { userId } = await auth();
    return userId;
};