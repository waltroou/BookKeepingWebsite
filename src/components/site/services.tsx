const services = [
  "Bookkeeping",
  "Financial reporting",
  "Grant & fund accounting",
  "Audit preparation",
  "Process improvement",
];

const software = [
  { label: "QuickBooks Online", mark: "QB" },
  { label: "Excel", mark: "XL" },
  { label: "Google Sheets", mark: "GS" },
  { label: "Document workflows", mark: "DW" },
];

const industries = [
  "Nonprofit organizations",
  "Grant-funded programs",
  "Professional services",
  "Small businesses",
];

const certifications = [
  "QuickBooks Online training",
  "Nonprofit accounting coursework",
  "Additional certifications listed as earned",
];

export function Services() {
  return (
    <section id="services" className="border-y border-border bg-secondary/35 py-7">
      <div className="container-page grid gap-6 lg:grid-cols-[220px_1fr] lg:gap-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Services and qualifications
          </p>
        </div>

        <div className="grid overflow-hidden rounded-lg border border-border bg-white md:grid-cols-2 xl:grid-cols-4">
          <div className="border-b border-border p-5 md:border-b-0 md:border-r">
            <h2 className="text-base font-semibold tracking-tight text-foreground">
              Services
            </h2>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-muted-foreground">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          <div className="border-b border-border p-5 md:border-b-0 xl:border-r">
            <h2 className="text-base font-semibold tracking-tight text-foreground">
              Software expertise
            </h2>
            <div className="mt-3 space-y-2.5">
              {software.map((item) => (
                <div key={item.label} className="flex items-center gap-2.5">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-md border border-border bg-secondary text-[10px] font-bold text-primary">
                    {item.mark}
                  </span>
                  <span className="text-sm leading-6 text-muted-foreground">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-b border-border p-5 md:border-b-0 md:border-r">
            <h2 className="text-base font-semibold tracking-tight text-foreground">
              Industries served
            </h2>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-muted-foreground">
              {industries.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="p-5">
            <h2 className="text-base font-semibold tracking-tight text-foreground">
              Certifications
            </h2>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-muted-foreground">
              {certifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
