import React from "react";
import "@/styles/global.css";
import { TopNav } from "@/ui/TopNav";

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
            <body>{children}</body>
        </html>
    );
}
