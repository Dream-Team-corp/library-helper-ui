import { create } from "zustand";

export const useThemeStore = create<{
    theme: Boolean;
    toggleTheme: () => void;
    getThemeLocalStorage: () => void;
}>((set) => ({
    theme: true,
    toggleTheme: () =>
        set((state) => {
            window.localStorage.setItem("themeMode", String(state.theme));
            return { theme: !state.theme };
        }),
    getThemeLocalStorage: () =>
        set((state) => {
            const isDark = window.localStorage.getItem("themeMode");
            return { theme: isDark === "false" ? true : false };
        }),
}));

export const useUserStore = create<{
    userName: string;
    userPassword: string;
    userNameChange: (userNameValue: string) => void;
    userPasswordChange: (userPasswordValue: string) => void;
}>((set) => ({
    userName: "",
    userPassword: "",
    userNameChange: (userNameValue) =>
        set((state) => ({ userName: userNameValue })),
    userPasswordChange: (userPasswordValue) =>
        set((state) => ({ userPassword: userPasswordValue })),
}));
