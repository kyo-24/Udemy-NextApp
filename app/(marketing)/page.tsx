import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function MarketingPage() {
  return (
    <>
      <section className="pt-6 md:pt-10 lg:pt-32 pb-8 md:pb-16">
        <div className="container text-center flex flex-col items-center gap-4 max-w-[64rem]">
          <Link
            href="/"
            className="bg-muted px-4 py-1.5 rounded-2xl font-medium text-sm"
          >
            xをフォローする
          </Link>
          <h1 className="font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Post Writer
          </h1>
          <p className="sm:text-xl leading-normal max-w-[42rem] text-muted-foreground">
            このアプリケーションはNext.js AppRouterで作られたものです。
          </p>
          <div className="space-x-4">
            <Link
              href={"/login"}
              className={cn(buttonVariants({ size: "lg" }))}
            >
              はじめる
            </Link>
            <Link
              href={"/"}
              className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
              target="_blank"
            >
              GitHub
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
