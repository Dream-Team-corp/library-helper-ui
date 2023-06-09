import React from "react";
import "@/styles/global.css";

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
