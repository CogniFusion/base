import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    return (
        <footer className="border-t bg-black text-white">
            <div className="flex-center wrapperflex gap-4 p-5 text-center flex-row">
                <Link href='/'>
                    <Image
                        src="/assets/cognifusion.png"
                        alt="logo"
                        width={25}
                        height={25}
                    />
                </Link>

                <p>2024 Cognifusion. All Rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer