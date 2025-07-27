import { create } from "zustand";

interface IUser {
    image?: string;
    email: string;
}

interface IUserStore {
    data: IUser | null;
    loggedIn: boolean;
    setUserData: (data: IUser) => void;
}

export const useUserStore = create<IUserStore>((set) => {
    return {
        loggedIn: false,
        data: null,
        setUserData: (data: IUser) => set({ data, loggedIn: true }),
    };
});
