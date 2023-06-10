import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";

export default function Pricing() {
  return (
    <div className="h-screen w-screen">
      <Navbar />
      <div className="flex flex-col items-center h-full justify-center">
        <div className="flex flex-col justify-evenly items-center w-1/3 ">
          <div className="text-5xl font-bold mb-6 xl:flex items-center text-center">
            Choose your<div className="text-orange-500 xl:mx-3">plan</div>
          </div>
          <div className="text-center mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </div>
        </div>
        <div className="flex justify-center h-1/2 w-full gap-x-5">
          <div className="border-2 rounded-2xl border-cyan-500 h-full w-1/5 gap-y-3 flex flex-col items-center justify-center">
            <div className="text-2xl">Cute</div>
            <div className="text-2xl flex items-end">
              Rp<div className="text-4xl font-bold">7.500</div>/hr
            </div>
            <div className="w-4/5 h-2/5 px-4 gap-y-2 my-3 flex flex-col text-xl">
              <div className="flex justify-between">
                Sample Text{" "}
                <Image
                  src="/checkmark.svg"
                  width={25}
                  height={25}
                  alt="Picture of the author"
                />
              </div>
              <div className="flex justify-between">
                Sample Text{" "}
                <Image
                  src="/checkmark.svg"
                  width={25}
                  height={25}
                  alt="Picture of the author"
                />
              </div>
              <div className="flex justify-between">
                Sample Text{" "}
                <Image
                  src="/checkmark.svg"
                  width={25}
                  height={25}
                  alt="Picture of the author"
                />
              </div>
            </div>
            <div className="w-5/6 border border-cyan-500 mb-4 mt-4"></div>
            <Link href="/register">
              <button className="text-xl p-2 px-8 rounded-xl ml-3 text-white bg-cyan-500">
                Select Plan
              </button>
            </Link>
          </div>
          <div className="border-2 rounded-2xl border-cyan-500 bg-cyan-500 text-white h-full w-1/5 gap-y-3 flex flex-col items-center justify-center">
            <div className="text-2xl">Standard</div>
            <div className="text-2xl flex items-end">
              Rp<div className="text-4xl font-bold">30.000</div>/hr
            </div>
            <div className="w-4/5 h-2/5 px-4 gap-y-2 my-3 flex flex-col text-xl">
              <div className="flex justify-between">
                Sample Text{" "}
                <Image
                  src="/checkmark-white.svg"
                  width={25}
                  height={25}
                  alt="Picture of the author"
                />
              </div>
              <div className="flex justify-between">
                Sample Text{" "}
                <Image
                  src="/checkmark-white.svg"
                  width={25}
                  height={25}
                  alt="Picture of the author"
                />
              </div>
              <div className="flex justify-between">
                Sample Text{" "}
                <Image
                  src="/checkmark-white.svg"
                  width={25}
                  height={25}
                  alt="Picture of the author"
                />
              </div>
              <div className="flex justify-between">
                Sample Text{" "}
                <Image
                  src="/checkmark-white.svg"
                  width={25}
                  height={25}
                  alt="Picture of the author"
                />
              </div>
            </div>
            <div className="w-5/6 border border-white mb-4 mt-4"></div>
            <Link href="/register">
              <button className="text-xl p-2 px-8 rounded-xl ml-3 text-cyan-500 bg-white">
                Select Plan
              </button>
            </Link>
          </div>
          <div className="border-2 rounded-2xl border-cyan-500 h-full w-1/5 gap-y-3 flex flex-col items-center justify-center">
            <div className="text-2xl">Prime</div>
            <div className="text-2xl flex items-end">
              Rp<div className="text-4xl font-bold">70.000</div>/hr
            </div>
            <div className="w-4/5 h-2/5 px-4 gap-y-2 my-3 flex flex-col text-xl">
              <div className="flex justify-between">
                Sample Text{" "}
                <Image
                  src="/checkmark.svg"
                  width={25}
                  height={25}
                  alt="Picture of the author"
                />
              </div>
              <div className="flex justify-between">
                Sample Text{" "}
                <Image
                  src="/checkmark.svg"
                  width={25}
                  height={25}
                  alt="Picture of the author"
                />
              </div>
              <div className="flex justify-between">
                Sample Text{" "}
                <Image
                  src="/checkmark.svg"
                  width={25}
                  height={25}
                  alt="Picture of the author"
                />
              </div>
              <div className="flex justify-between">
                Sample Text{" "}
                <Image
                  src="/checkmark.svg"
                  width={25}
                  height={25}
                  alt="Picture of the author"
                />
              </div>
              <div className="flex justify-between">
                Sample Text{" "}
                <Image
                  src="/checkmark.svg"
                  width={25}
                  height={25}
                  alt="Picture of the author"
                />
              </div>
            </div>
            <div className="w-5/6 border border-cyan-500 mb-4 mt-4"></div>
            <Link href="/register">
              <button className="text-xl p-2 px-8 rounded-xl ml-3 text-white bg-cyan-500">
                Select Plan
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
