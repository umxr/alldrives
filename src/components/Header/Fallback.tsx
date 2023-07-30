import Link from "next/link";

import { Bars3Icon } from "@heroicons/react/24/outline";
import { Logo } from "../Logo";
import { NAVIGATION } from "./constants";

export const HeaderFallback = () => {
  return (
    <header className="bg-gray-900">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">All Drives</span>
            <Logo width="48" height="48" className="fill-white" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {NAVIGATION.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-white"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:gap-x-12 lg:justify-end items-center">
          <p className="text-sm font-semibold leading-6 text-white cursor-pointer">
            Sign in
          </p>
        </div>
      </nav>
    </header>
  );
};
