"use client";
import { SignUp } from "@clerk/nextjs";
import { useDispatch } from "react-redux";
import { resetState } from "@/redux/features/state-slice";
import { useEffect } from "react";

export default function Page() {
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(resetState());
        }
    }, [])
    return <SignUp />;
}