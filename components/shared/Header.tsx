import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import NavItems from "./NavItems"

const Header = () => {
    return (
        <header className="w-full border-b bg-black text-white">
            <div className="wrapper flex items-center justify-between">
                <Link href="/" className="w-36">
                    <Image
                        src="/assets/cognifusion.png" width={25} height={25}
                        alt="Cognifusion"
                    />
                </Link>

                <SignedIn>
                    <nav className="md:flex-between hidden w-full max-w-xs">
                        <NavItems />
                    </nav>
                </SignedIn>

                <div className="flex w-32 justify-end gap-3">
                    <SignedIn>
                        <UserButton afterSignOutUrl="/" />
                    </SignedIn>
                    <SignedOut>
                        <Button asChild className="rounded-full" size="lg">
                            <Link href="/sign-in">
                                Login
                            </Link>
                        </Button>
                    </SignedOut>
                </div>
            </div>
        </header>
    )
}

export default Header