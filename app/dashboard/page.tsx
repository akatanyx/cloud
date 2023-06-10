import NavbarOn from "@/components/navbaron";
import Card from "@/components/card";

export default function Pricing() {
  return (
    <div className="w-full flex flex-col">
      <NavbarOn />
      <div className="px-4 py-4">
        <div className="py-4">test</div>
      </div>
      <div className="bg-white py-4 px-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a className="rounded-xl py-2 px-8 bg-cyan-100 text-cyan-700">
              Active
            </a>
            <a className="rounded-xl ml-4 py-2 px-8 text-gray-600 hover:text-cyan-700 hover:bg-cyan-100">
              Inactive
            </a>
          </div>
          <button className="mt-4 inline-flex items-start justify-start px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-xl text-sm font-medium leading-none text-white">
            New Deployment
          </button>
        </div>
        <div className="mt-7">
          <div className="w-full gap-y-4 flex flex-col">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}
