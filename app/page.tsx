import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <Navbar />
      <div className="flex items-center h-full justify-evenly">
        <div className="w-1/3">
          <Image
            src="/hero.svg"
            width={1000}
            height={1000}
            alt="Picture of the author"
          />
        </div>
        <div className="w-1/3 bg-red">
          <div className="text-7xl font-bold">
            Cloud Deploying, <div className="text-orange-500">Refined.</div>
          </div>
          <div className="py-5 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </div>
          <div>
            <Link href="/login">
              <button className="px-7 py-4 rounded-xl mr-3 text-xl bg-cyan-500 text-white">
                Get Started
              </button>
            </Link>
            <Link href="/pricing">
              <button className="px-7 py-4 rounded-xl text-xl border border-cyan-500 text-cyan-500">
                Pricing
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
