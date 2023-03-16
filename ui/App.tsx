"use client";
import { ReactNode, use, useEffect } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { createTheme } from "@nextui-org/react";
import { useThemeStore } from "@/store";

const darkTheme = createTheme({
    type: "dark",
});
const lightTheme = createTheme({
    type: "light",
});

export const App = ({ children }: { children: ReactNode }) => {
    const { theme, getThemeLocalStorage } = useThemeStore((state) => state);
    useEffect(() => {
        getThemeLocalStorage();
    }, []);
    return (
        <NextUIProvider theme={theme ? darkTheme : lightTheme}>
            {children}
        </NextUIProvider>
    );
};
