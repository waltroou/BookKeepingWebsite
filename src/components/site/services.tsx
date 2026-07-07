const services = [
  "QuickBooks Online",
  "Bookkeeping",
  "Financial reporting",
  "Grant & fund accounting",
  "Audit preparation",
  "Accounting process improvement",
];

const experience = [
  "Nonprofit accounting support",
  "Board and grant reporting",
  "QuickBooks Online and spreadsheet workflows",
  "Reliable monthly communication",
];

const outcomes = [
  "Cleaner books",
  "More useful reports",
  "Better audit readiness",
];

export function Services() {
  return (
    <section id="services" className="border-t border-border bg-secondary/35 py-7">
      <div className="container-page grid gap-6 lg:grid-cols-[220px_1fr] lg:gap-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Services and qualifications
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-3">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              Services
            </h2>
            <ul className="mt-3 space-y-1.5 text-sm leading-6 text-muted-foreground">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              Experience
            </h2>
            <ul className="mt-3 space-y-1.5 text-sm leading-6 text-muted-foreground">
              {experience.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              Why clients call
            </h2>
            <ul className="mt-3 space-y-1.5 text-sm leading-6 text-muted-foreground">
              {outcomes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
