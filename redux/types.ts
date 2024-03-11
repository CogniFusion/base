export interface User {
    id: string;
    name: string;
    username: string;
    onboarded: Boolean;
};

export interface UserAuthenticated extends User {
    path: string;
}

