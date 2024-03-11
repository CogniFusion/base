"use client";
import React from "react";
import { useSelector } from "react-redux";
import { redirect } from "next/navigation";
import { selectUserId } from "@/redux/features/state-slice";
import Profile from "@/components/Profile";
const Page = () => {
    const userId = useSelector(selectUserId);
    debugger
    if (!userId) {
        redirect("/sign-in");
    }
    return (
        <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20">
            <h1 className="head-text">On boarding</h1>
            <Profile />
        </main>
    );
}
export default Page;