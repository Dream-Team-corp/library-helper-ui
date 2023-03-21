"use client";
import { ReactNode, useEffect } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { createTheme } from "@nextui-org/react";
import { useThemeStore } from "@/store";

export const darkTheme = createTheme({
    type: "dark",
});
export const lightTheme = createTheme({
    type: "light",
});

export const App = ({ children }: { children: ReactNode }) => {
    const { theme, getThemeLocalStorage } = useThemeStore((state) => state);
    useEffect(() => {
        getThemeLocalStorage();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <NextUIProvider theme={theme ? darkTheme : lightTheme}>
            {children}
        </NextUIProvider>
    );
};
