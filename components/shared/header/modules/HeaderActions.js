import Link from "next/link"
import { HeartIcon, ChartSquareBarIcon, ShoppingCartIcon, UserIcon } from "@heroicons/react/outline"

export default function HeaderActions({ className }) {
  return (
    <div className="ml-4 md:ml-0 flex items-center space-x-1 md:space-x-4">
      <div className="hidden md:flex">
        <Link href="/wishlist">
          <a className="inline-block relative w-10 h-12 transition-all duration-300 ease-in">
            <HeartIcon className="h-8 text-main-blue" />
            <span className="absolute bottom-1 right-2.5 flex justify-center items-center w-6 h-6 rounded-full bg-black  text-xs text-white">
              0
            </span>
          </a>
        </Link>
      </div>

      <div className="hidden md:flex">
        <Link href="/compare">
          <a className="inline-block relative w-10 h-12 transition-all duration-300 ease-in">
            <ChartSquareBarIcon className="h-8 text-main-blue" />
            <span className="absolute bottom-1 right-2.5 flex justify-center items-center w-6 h-6 rounded-full bg-black  text-xs text-white">
              99
            </span>
          </a>
        </Link>
      </div>

      <div className="flex">
        <Link href="/cart">
          <a className="inline-block relative w-10 h-12 transition-all duration-300 ease-in">
            <ShoppingCartIcon className="h-8 text-main-blue" />
            <span className="absolute bottom-1 right-2.5 flex justify-center items-center w-6 h-6 rounded-full bg-black  text-xs text-white">
              0
            </span>
          </a>
        </Link>
      </div>
      <div className="block md:flex">
        {className ? (
          <Link href="/login">
            <a>
              <UserIcon className="h-9 text-main-blue" />
            </a>
          </Link>
        ) : (
          <UserIcon className="h-9 text-main-blue" />
        )}

        <div className="hidden md:flex flex-col ml-1">
          <Link href="/login">
            <a className=" text-sm font-medium text-main-text hover:text-black transition-all duration-300">
              Login
            </a>
          </Link>
          <Link href="/register">
            <a className=" text-sm font-medium text-main-text hover:text-black transition-all duration-300">
              Register
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
