'use client';
import { Menu } from "@/lib/shopify/types";
import { Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import Search from "./search";

export default function MobileMenu({menu}: {menu: Menu[]}) {
    const [isOpen, setIsOpen] = useState(false);
    const openMobileMenu = () => setIsOpen(true);
    const closeMobileMenu = () => setIsOpen(false);
    return (
        <>
            <button onClick={openMobileMenu} aria-label="Open mobile menu" className="flex h-11 w-11 items-center rounded:md border border-neutral-200 text-black   transition-colors md:hidden dark:border-neutral-700 dark:text-white">
                <Bars3Icon className="h-4" />
            </button>
            <Transition show={isOpen}>
                <Dialog onClose={closeMobileMenu} className="relative z-50">
                    <TransitionChild>
                        <div className={clsx([
                            'fixed inset-0 bg-black/30',
                            'data-[closed]:opacity-0 data-[closed]:backdrop-blur-none',
                            'data-[transtition]:backdrop-blur-[.5px] data-[transition]:opacity-100',
                            'data-[enter]:duration-300 data-[enter]:transition-all data-[enter]:ease-in-out',
                            'data-[leave]:duration-200 data-[leave]:transition-all data-[leave]:ease-in-out'
                        ])} aria-hidden="true" />
                    </TransitionChild>
                    <TransitionChild>
                        <DialogPanel className={clsx([
                            'fixed bottom-0 left-0 right-0 top-0 flex h-full w-full flex-col bg-white pb-6 dark:bg-black',
                            'data-[closed]:translate-x-[-100%]',
                            'data-[transtition]:translate-x-0',
                            'data-[enter]:duration-300 data-[enter]:transition-all data-[enter]:ease-in-out',
                            'data-[leave]:duration-200 data-[leave]:transition-all data-[leave]:ease-in-out'
                        ])}>
                            <div className="p-4">
                                <button className="mb-4 flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white" onClick={closeMobileMenu} aria-label="Close mobile menu">
                                    <XMarkIcon className="h-6"/>
                                </button>
                                <div className="mb-4 w-full">
                                    <Search />
                                </div>
                                {menu.length > 0 ? (
                                    <ul className="flex w-full flex-col">
                                        {menu.map((item: Menu) => (
                                            <li className="py-2 text-xl text-black transition-colors hover:text-neutral-500 dark:text-white" key={item.title}>
                                                <Link
                                                    href={item.path}
                                                    prefetch={true}
                                                    onClick={closeMobileMenu}
                                                >
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                ): null}
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </Dialog>
            </Transition>
        </>
    )
}