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
                src="/headshot.jpg"
                alt="John Roou"
                width={520}
                height={598}
                priority
                unoptimized
                className="h-full w-full object-cover"
              />
            </div>

            <div className="mt-4 text-center lg:text-left">
              <p className="text-xl font-semibold tracking-tight text-foreground">
                John Roou
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Independent Bookkeeper
              </p>
            </div>
          </div>
        </aside>

        <div className="subtle-fade max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            {siteConfig.name}
          </p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground">
            I help nonprofit leaders and small business owners keep clean books,
            understand their numbers, and stay prepared for reporting, grants,
            audits, and board conversations.
          </p>

          <div className="mt-5 border-b border-border pb-4">
            <p className="max-w-4xl text-base leading-7 text-muted-foreground">
              JohnnyRoou Bookkeeping is an independent bookkeeping and nonprofit
              accounting practice focused on accurate records, useful reporting,
              and steady communication for organizations that need practical
              help keeping accounting organized.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
