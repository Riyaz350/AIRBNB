'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
const Logo = () => {
    const router = useRouter()
    return (
        <div>
            <Image width='100' height='100' alt='logo' className="cursor-pointer hidden md:block" src='/images/logo.png'/>
        </div>
    );
};

export default Logo;