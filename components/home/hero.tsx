import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";

const HERO_IMAGE_PATH = "/assets/images/hero.jpg";

interface HeroProps {
  heroTitle?: string | null;
  heroSubtitle?: string | null;
}

export function Hero({ heroTitle, heroSubtitle }: HeroProps = {}) {
  const hasHeroImage = fs.existsSync(
    path.join(process.cwd(), "public", HERO_IMAGE_PATH)
  );

  return (
    <section className="relative flex min-h-[calc(100vh-6rem)] items-center justify-center overflow-hidden">
      {hasHeroImage ? (
        <Image
          src={HERO_IMAGE_PATH}
          alt="Rassemblement de la communauté Jeunesse Saint Charbel Nice"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      ) : (
        <div
          className="absolute inset-0 bg-primary"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 10%, hsl(var(--color-primary-light)) 0%, hsl(var(--color-primary)) 40%, hsl(var(--color-primary-dark)) 75%, hsl(var(--color-text-primary)) 130%)",
          }}
        />
      )}
      <div className="absolute inset-0 bg-primary-dark/50" />
      <div
        className="absolute inset-0 bg-repeat opacity-[0.06] bg-[length:6rem_6rem] bg-[url('/assets/logos/flamme-croix-blanc-fond-transparent.svg')]"
        aria-hidden
      />

      <div className="container relative z-10 flex flex-col items-center gap-6 py-16 text-center sm:py-20">
        <div className="relative h-36 w-36 animate-in fade-in zoom-in-95 duration-1000 sm:h-44 sm:w-44">
          <Image
            src="/assets/logos/logo-jsc-blanc-fond-transparent.svg"
            alt="Jeunesse Saint Charbel Nice"
            fill
            priority
            className="object-contain"
          />
        </div>

        <h1 className="max-w-3xl animate-in fade-in slide-in-from-bottom-6 font-heading text-4xl font-semibold text-white duration-700 delay-150 sm:text-5xl lg:text-6xl">
          {heroTitle ||
            "Jeunes Maronites de Nice, unis dans la foi de Saint Charbel"}
        </h1>
        <p className="max-w-xl animate-in fade-in slide-in-from-bottom-6 text-base text-white/90 duration-700 delay-300 sm:text-lg">
          {heroSubtitle ||
            "Rassembler les jeunes et les accompagner vers une relation vivante avec Jésus-Christ, à travers une communauté fraternelle, dynamique et structurée."}
        </p>
        <div className="mt-4 flex w-full animate-in fade-in slide-in-from-bottom-6 flex-col gap-4 duration-700 delay-500 sm:w-auto sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-white/90"
          >
            <Link href="/agenda">Prochaine messe</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-primary"
          >
            <Link href="/rejoindre">Nous rejoindre</Link>
          </Button>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-8 z-10 hidden justify-center sm:flex">
        <ChevronDown className="h-6 w-6 animate-bounce text-white/60" />
      </div>
    </section>
  );
}
