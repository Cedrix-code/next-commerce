import clsx from "clsx";
import LogoIcon from "./icons/logo";

export default function LogoSquare({ size }: { size?: 'sm' | undefined}) {
    return (
        <div className={clsx("group hover:scale-80 hover:border-2 transition-transform duration-300 flex flex-none items-center justify-center border border-neutral-300 bg-white dark:border-neutral-700 dark:bg-black", {
            "h-[44px] w-[44px] rounded-xl": !size,
            "h-[32px] w-[32px] rounded-lg": size === 'sm',
        })}>
            <LogoIcon className={clsx("group-hover:scale-180 group-hover:text-orange-500 transition-all duration-300", {
            "h-[32px] w-[32px]": !size,
            "h-[16px] w-[16px]": size === 'sm',
            })}/>
        </div>
    );
}