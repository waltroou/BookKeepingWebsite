import Image from "next/image";

import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="bg-background">
      <div className="container-page grid gap-7 py-6 lg:grid-cols-[200px_1fr] lg:gap-10 lg:py-7">
        <aside className="subtle-fade lg:sticky lg:top-28 lg:self-start">
          <div className="max-w-56">
            <div className="aspect-[4/4.6] w-full overflow-hidden rounded-sm bg-secondary">
              <Image
                src="/headshot-current.jpg"
                alt="John Roou"
                width={520}
                height={598}
                priority
                unoptimized
                className="h-full w-full object-cover object-top"
              />
            </div>

            <div className="mt-4 text-center lg:text-left">
              <p className="text-xl font-semibold tracking-tight text-foreground">
                John Roou
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Accounting & Advisory
              </p>
            </div>
          </div>
        </aside>

        <div className="subtle-fade max-w-4xl">
          <p className="text-base font-semibold uppercase tracking-[0.2em] text-primary">
            {siteConfig.name}
          </p>
          <h1 className="mt-3 max-w-4xl text-balance text-4xl font-semibold leading-tight tracking-tight text-foreground">
            Accounting help for nonprofits that need clean books, better
            procedures, and reliable reporting.
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground">
            Johnny Roou Accounting & Advisory helps nonprofit leaders get their
            books organized, establish practical accounting procedures, and
            prepare for grants, audits, board meetings, and day-to-day financial
            decisions.
          </p>

          
        </div>
      </div>
    </section>
  );
}
