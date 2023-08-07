import { Menu, Transition } from "@headlessui/react";
import { UserAvater } from "./UserAvatar";
import { Fragment } from "react";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { classNames } from "@/util";

export const UserMenu = () => {
  const { signOut } = useAuth();
  return (
    <Menu as="div" className="relative -ml-px block">
      <Menu.Button>
        <UserAvater />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 -mr-1 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/my-account"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  My Account
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <span
                  onClick={() => signOut()}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Logout
                </span>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
