import React from "react";
import "@/styles/global.css";
import { App } from "@/ui/App";

export const metadata = {
    title: "Library Login",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <App>{children}</App>
            </body>
        </html>
    );
}
