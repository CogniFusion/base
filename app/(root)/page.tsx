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
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { ReactNode, useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { authService } from "@/app/api/auth";
import { fetchUser } from "../api/user";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

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

    useEffect(() => {
        const handleMessage = (message: { data: any; }) => {
            // Process the message received from the Chrome extension
            console.log("Message received :", message.data);

            // You can generate text and image based on the message here
        };

        window.addEventListener('message', (event) => {
            if (event.source === window && event.data && event.data.from === 'ChromeExtension') {
                handleMessage(event.data);
            }
        });

        return () => {
            window.removeEventListener('message', handleMessage);
        };
    }, []);

    return (
        <main>
            <section className="main-container">
                <div className="w-full">
                    <section className="flex flex-row items-center justify-center m-12">
                        <h1 className="head-text">
                            Welcome <strong>{userName as ReactNode}</strong>
                        </h1>
                    </section>
                    <div className="flex items-center cursor-pointer justify-center" >
                        <img
                            src="/assets/cognifusion.png"
                            alt="install extension"
                            width={24}
                            height={24}
                        />
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="ghost" className="text-teal-400 ml-2 font-semibold">Install Chrome Extension</Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-screen-lg h-screen items-center flex flex-col justify-between p-10 ">
                                <DialogDescription className="text-center p-10">
                                    <div className="text-lg p-2">Join the community of enthusiasts and experience the power of our Chrome extension! </div>
                                    <div className="text-md p-2">Install it today and unlock amazing features that will enhance your browsing experience. </div>
                                    <div className="text-md p-2">Discover new ways to customize your tabs, manage your bookmarks, and stay organized. </div>
                                    <div className="text-lg p-2"> Join us and embrace the productivity benefits of our extension. Install now and start taking control of your browsing experience!</div>
                                </DialogDescription>
                                <DialogFooter >
                                    <DialogClose asChild>
                                        <Button type="button" variant="secondary">
                                            Close
                                        </Button>
                                    </DialogClose>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>

                    </div>
                </div>

            </section>
        </main >
    );
}