import React from "react";
import "@/styles/global.css";

export const metadata = {
    title: "Library Login",
};

export default function LoginLayout({
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
