import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle: string;
  decorativeImage: string;
  decorativeAlt: string;
}

export function PageHero({
  title,
  subtitle,
  decorativeImage,
  decorativeAlt,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground">
      <div className="absolute -right-10 top-1/2 h-64 w-64 -translate-y-1/2 opacity-10 sm:h-80 sm:w-80">
        <Image
          src={decorativeImage}
          alt={decorativeAlt}
          fill
          className="object-contain"
        />
      </div>
      <div className="container relative">
        <h1 className="font-heading text-4xl font-semibold text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-xl text-white/90">{subtitle}</p>
      </div>
    </section>
  );
}
