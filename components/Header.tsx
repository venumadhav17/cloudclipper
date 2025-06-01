import { ArrowRightIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";

export function AnimatedShinyTextDemo() {
  return (
    <div className='z-10 flex items-center justify-center'>
      <div
        className={cn(
          "group rounded-full border-1 border-gray-700 bg-neutral-800 text-base text-white transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-neutral-700"
        )}
      >
        <AnimatedShinyText className='text-neutral-400 inline-flex items-center justify-center px-4 py-1 transition-all duration-300 ease-in-out'>
          <span>✨ Universal Video Downloader</span>
          <ArrowRightIcon className='ml-1 size-5 pt-1 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5' />
        </AnimatedShinyText>
      </div>
    </div>
  );
}
