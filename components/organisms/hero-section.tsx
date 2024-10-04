// import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/atoms/button";

export function HeroSection() {
  return (
    <>
      <div className="relative flex flex-col w-full py-5 mx-auto md:flex-row md:items-center md:justify-between">
        <div className="flex flex-row items-center justify-between text-sm lg:justify-start">
          <Link href="/" className="flex items-center gap-2">
            {/* <Image src={Logo} className="size-10" alt="Logo" /> */}

            <h4 className="text-3xl font-bold">Logo</h4>
          </Link>
          <div className="md:hidden">{/* <ThemeToggle /> */}</div>
        </div>

        <nav className="hidden md:flex md:justify-end md:space-x-4">
          {/* <ThemeToggle /> */}
          <Button variant="secondary">Sign in</Button>

          <Button>Sign up</Button>
        </nav>
      </div>

      <section className="relative flex items-center justify-center">
        <div className="relative items-center w-full py-12 lg:py-20">
          <div className="text-center">
            <span className="text-sm text-primary font-medium tracking-tight bg-primary/10 px-4 py-2 rounded-full">
              Ultimate Blogging SaaS for Startups
            </span>

            <h1 className="mt-8 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-none">
              Setup your Blog{" "}
              <span className="block text-primary">in Minutes!</span>
            </h1>

            <p className="max-w-xl mx-auto mt-4 text-base font-light lg:text-lg text-muted-foreground tracking-tighter">
              Setting up your blog is hard and time consuming. We make it easy
              for you to create a blog in minutes
            </p>
            <div className="flex items-center gap-x-5 w-full justify-center mt-5 ">
              <Button variant="secondary">Sign in</Button>

              <Button>Try for free</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
