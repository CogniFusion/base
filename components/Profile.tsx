"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";


import { UserValidation } from "@/lib/validations/user";
import { updateUser } from "@/app/api/user";
import { useDispatch, useSelector } from "react-redux";
import { selectUserId, selectUserName, setOnboarded, setUserId, setUserName } from "@/redux/features/state-slice";

const Profile = () => {
    const pathname = usePathname();
    const router = useRouter();
    const dispatch = useDispatch();
    let userId = ""
    userId = useSelector(selectUserId);
    const form = useForm({
        defaultValues: {
            name: "",
            username: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof UserValidation>) => {
        const currentUser = {
            id: userId,
            name: values.name,
            username: values.username,
            path: pathname,
            onboarded: true,
        };
        dispatch(setUserId(currentUser.id));
        dispatch(setUserName(currentUser.username));
        dispatch(setOnboarded(true));
        await updateUser(currentUser);

        if (pathname === "/profile/edit") {
            router.back();
        } else {
            router.push("/");
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your public display name.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
};

export default Profile;

function zodResolver(UserValidation: z.ZodObject<{ id: z.ZodString; name: z.ZodString; username: z.ZodString; }, "strip", z.ZodTypeAny, { username: string; id: string; name: string; }, { username: string; id: string; name: string; }>): import("react-hook-form").Resolver<{ name: string; username: string; }, any> | undefined {
    throw new Error("Function not implemented.");
}
