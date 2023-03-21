import React from "react";
import "@/styles/global.css";
import { TopNav } from "@/ui/TopNav";
import { App } from "@/ui/App";

export const metadata = {
    title: "Library helper",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <App>
                    <header>
                        <TopNav />
                    </header>
                    <main>{children}</main>
                </App>
            </body>
        </html>
    );
}
