import Link from "next/link";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Register() {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex flex-col items-center h-full justify-center">
        <div className="flex items-center flex-col w-1/6">
          <div className="mb-6 font-semibold text-2xl">Register</div>
          <form className="flex flex-col gap-y-3 mt-1 w-full">
            <div>
              <input
                className="border border-cyan-500 rounded-lg w-full font-poppins p-2 px-4 focus:outline-none"
                placeholder="Email"
                type="email"
                id="email"
              />
            </div>

            <div>
              <input
                className="border border-cyan-500 rounded-lg w-full font-poppins p-2 px-4 focus:outline-none"
                placeholder="Password"
                type="password"
              />
            </div>
            <div>
              <input
                className="border border-cyan-500 rounded-lg w-full font-poppins p-2 px-4 focus:outline-none"
                placeholder="Confirm Password"
                type="password"
              />
            </div>
            <div>
              <input
                className="border border-cyan-500 rounded-lg w-full font-poppins p-2 px-4 focus:outline-none"
                placeholder="Full Name"
              />
            </div>

            <div className="flex flex-col gap-y-2 text-center px-1 w-72 justify-between">
              <div className="flex">
                <input type="checkbox" className="mr-2 rounded-lg" />
                <p className="cursor-default font-poppins text-xs">
                  I agree to the terms and service*
                </p>
              </div>
              <div className="flex">
                <input type="checkbox" className="mr-2 rounded-lg" />
                <p className="cursor-default font-poppins text-xs">
                  Send me newsletter (optional)
                </p>
              </div>
            </div>

            {/* Button Login */}
            <Link
              href="/dashboard"
              className="text-white font-semibold font-poppins mb-4 flex justify-center items-center p-2 bg-cyan-500 rounded-lg shadow-lg mt-2"
            >
              <button type="submit" value="Login">
                Register
              </button>
            </Link>
          </form>

          {/* tidak punya akun */}
          <div className="flex flex-row justify-center font-poppins ">
            <h2 className="text-sm">
              Already have an account?{" "}
              <Link href="/login">
                <button>
                  <h1 className="font-bold text-sm">LOGIN NOW</h1>
                </button>
              </Link>
            </h2>
          </div>
        </div>
        <div className="w-1/6 border-b border-gray-300 mb-4 mt-4"></div>
        <Link
          href="/dashboard"
          className="w-full w-1/6 text-cyan-500 font-semibold font-poppins mb-4 flex justify-evenly p-2 bg-white border-cyan-500 border rounded-lg mt-2"
        >
          <button type="submit" value="Login" className="flex items-center">
            <Image
              src="/google.svg"
              width={25}
              height={25}
              alt="Picture of the author"
            />
          </button>
          <div className="w-full flex justify-center">Register with Google</div>
        </Link>
      </div>
    </div>
  );
}
