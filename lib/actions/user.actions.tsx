"use server"

import User from "../models/user.model"
import { connectToDB } from "../mongoose"

/**
 * Fetches a user from the database by their ID.
 *
 * @param {String} userId - The ID of the user to fetch.
 * @return {Promise<User>} A promise that resolves to the fetched user.
 */
export async function fetchUser(userId: String): Promise<typeof User> {
    try {
        connectToDB() // Establish database connection
        const user = await User.findOne({ id: userId }); // Find user by ID
        if (!user) {
            throw new Error(`User not found`);
        }
        return user;
    } catch (error: any) {
        throw new Error(`Failed to fetch user: ${error}`)
    }
}