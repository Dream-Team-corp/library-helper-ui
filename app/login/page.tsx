"use client";
import { Button, Card, Input, Link, Loading, Text } from "@nextui-org/react";
import sytles from "@/styles/styles.module.css";
import { IoLockClosed, IoLockOpen } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import { useUserStore } from "@/store";
import { App } from "@/ui/App";

export default function Login() {
    const [isLoading, setIsLoading] = useState(false);
    const { userName, userPassword, userNameChange, userPasswordChange } =
        useUserStore((state) => state);
    return (
        <App>
            <Link href="/">Home</Link>
            <div className={sytles.card}>
                <Card
                    variant="bordered"
                    css={{
                        width: "300px",
                        padding: 20,
                        display: "flex",
                        flexDirection: "column",
                        gap: "32px",
                    }}
                >
                    <Text
                        h1
                        size={50}
                        css={{
                            textGradient: "45deg, $blue600 -20%, $pink600 50%",
                        }}
                    >
                        Login
                    </Text>
                    <Input
                        clearable
                        bordered
                        labelPlaceholder="User Name"
                        contentRight={<FaUserCircle />}
                        value={userName}
                        onChange={(e) => userNameChange(e.target.value)}
                    />
                    <Input.Password
                        clearable
                        bordered
                        labelPlaceholder="Password"
                        visibleIcon={<IoLockOpen />}
                        hiddenIcon={<IoLockClosed />}
                        value={userPassword}
                        onChange={(e) => userPasswordChange(e.target.value)}
                    />
                    <Button onClick={() => setIsLoading(!isLoading)} bordered>
                        {isLoading ? <Loading type="spinner" /> : "Login"}
                    </Button>
                </Card>
            </div>
        </App>
    );
}
