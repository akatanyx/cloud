import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-white fixed w-screen border-2 py-4 px-6 flex justify-between items-center">
      <div>
        <Link href="/">
          <Image
            src="/logo.svg"
            width={150}
            height={500}
            alt="Picture of the author"
          />
        </Link>
      </div>
      <div className="flex items-center">
        <Link href="/">
          <div className="px-3 cursor-pointer">Home</div>
        </Link>
        <Link href="/pricing">
          <div className="px-3 cursor-pointer">Pricing</div>
        </Link>
        <div className="px-3 cursor-pointer flex">
          <div className="pr-2">Support</div>
          <Image
            src="/arrow-down.svg"
            width={15}
            height={15}
            alt="Picture of the author"
          />
        </div>
        <Link href="/login">
          <button className="border p-2 px-4 rounded-xl ml-3 border-cyan-500 text-cyan-500">
            Login
          </button>
        </Link>
        <Link href="/register">
          <button className="p-2 px-4 rounded-xl ml-3 text-white bg-cyan-500">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
}
