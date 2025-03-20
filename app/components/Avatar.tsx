import Image from "next/image";

const Avatar = () => {
    return (
        <div>
            <Image width='20' height='10' alt="Avatar" src='/images/placeholder.png' className="rounded-full"/>
        </div>
    );
};

export default Avatar;