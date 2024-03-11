"use client";

import { useDispatch, useSelector } from "react-redux";
import {
    setUserId,
    selectUserId,
    selectIsOnboarded,
    setUserName,
    setOnboarded,
    selectUserName,
} from "@/redux/features/state-slice";
import Image from "next/image";

import { ReactNode, useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { authService } from "@/app/api/auth";
import { fetchUser } from "../api/user";
import { SignOutButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";


export default function Home() {
    const router = useRouter();
    const [letSignIn, setLetSignIn] = useState(false);
    const userId = useSelector(selectUserId);
    const userName = useSelector(selectUserName);
    const onboarded = useSelector(selectIsOnboarded);
    const dispatch = useDispatch();

    const handleAuth = async () => {
        try {
            const authId = await authService();
            if (authId) {
                const authUser = await fetchUser(authId);
                if (authUser) {
                    dispatch(setUserId(authUser.id));
                    dispatch(setUserName(authUser.username));
                    dispatch(setOnboarded(authUser.onboarded));
                } else {
                    dispatch(setUserId(authId));
                }
            } else setLetSignIn(true);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (letSignIn) {
            setLetSignIn(false);
            redirect("/sign-in");
        }
    }, [letSignIn]);

    useEffect(() => {
        if (userId && onboarded === false) redirect("/onboarding");
    }, [onboarded, userId])

    useEffect(() => {
        if (!userId) handleAuth();
    }, [userId])

    return (
        <>
            <section className="main-container">
                <div className="w-full">
                    <section className="flex flex-row justify-between m-12">
                        <h1 className="head-text">
                            Welcome <strong>{userName as ReactNode}</strong>
                        </h1>

                        <SignOutButton signOutCallback={() => router.push("/sign-in")}>
                            <div className="flex items-center cursor-pointer">
                                <Image
                                    src="/assets/logout.svg"
                                    alt="logout"
                                    width={24}
                                    height={24}
                                />
                                <p className="text-teal-400 ml-2 font-semibold">Sign Out</p>
                            </div>
                        </SignOutButton>

                    </section>
                </div>
            </section>
        </>
    );
}