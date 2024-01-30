import { fetchUser } from "@/lib/actions/user.actions"

// Defines a user object with a hardcoded id property. Just for demo purposes
const user = {
    id: "1"
}

interface UserData {
    id: string;
    name: string;
    username: string;
    onboarded: boolean;
}

/**
 * Asynchronously retrieves user data based on the provided id.
 *
 * @param {string} id - The id of the user to retrieve data for.
 * @return {Promise<UserData>} A promise that resolves to the user data.
 */
const getUserData = async (id: string): Promise<UserData> => {
    const userRawData: any = await fetchUser(id);
    return {
        id,
        name: userRawData ? userRawData.name : "User not found",
        username: userRawData ? userRawData.username : "User not found",
        onboarded: userRawData ? userRawData.onboarded : false
    };
};

/**
 * Asynchronous function for rendering the Home component.
 *
 * @return {Promise<JSX.Element>} The main component for the Home page.
 */
export default async function Home(): Promise<JSX.Element> {
    try {
        const userData = await getUserData(user.id);

        return (
            <main>
                <div>Title: {userData.name}</div>
                <div>Username: {userData.username}</div>
            </main>
        );
    } catch (error) {
        throw new Error(`Failed to fetch user: ${error}`);
    }
}