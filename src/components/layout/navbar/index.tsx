import { getMenu } from "@/lib/shopify";
import { Menu } from "@/lib/shopify/types";
import Link from "next/link";
import Search from "./search";
import MobileMenu from "./mobile-menu";
import LogoSquare from "@/components/logo-square";

export async function Navbar() {
  const menu = await getMenu("next-js-frontend-menu");
  return <nav className="flex items-center justify-between p-4 lg:px-6">
    <div className="block flex-none md:hidden">
      <MobileMenu menu={menu}/>
    </div>
    <div className="flex w-full items-center">
      <div className="flex w-full items-center md:w-1/3">
        <Link href={'/'} prefetch={true} className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6">
          <LogoSquare />
          {/* <div className="ml-2 hidden flex-none text-sm font-medium uppercase sm:hidden md:hidden lg:block">
            {process.env.SITE_NAME}
          </div> */}
        </Link>

        {menu.length > 0 ? (
          <ul className="hidden gap-6 text-sm md:flex md:items-center">
            {menu.map((item: Menu) => (
              <li key={item.title}>
                <Link href={item.path} prefetch={true} className="text-gray-700 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      <div className="hidden justify-center md:flex md:w-1/3">
        <Search />
      </div>
      <div className="flex justify-end md:w-1/3">
        {/* <CartModal /> */}
      </div>
    </div>
  </nav>;
}
