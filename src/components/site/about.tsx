export function About() {
  return (
    <section id="about" className="bg-background py-8">
      <div className="container-page grid gap-6 lg:grid-cols-[220px_1fr] lg:gap-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            About John Roou
          </p>
        </div>

        <div className="max-w-4xl space-y-4 border-b border-border pb-7 text-base leading-7 text-muted-foreground">
          <p>
            My background is a little different from the typical accounting
            consultant, and that is part of what I bring to the work.
          </p>
          <p>
            I am a West Point graduate, Army veteran, former operations manager,
            consultant, FBI intelligence analyst, and university professor.
            Across those roles, I have spent my career building systems,
            organizing information, solving practical problems, and helping
            leaders make better decisions.
          </p>
          <p>
            Today, I use that experience to help nonprofits get their accounting
            organized and dependable. My work focuses on clean books, practical
            procedures, accurate reporting, and steady communication with
            leadership. I understand that nonprofit leaders need more than
            transactions entered correctly. They need financial information they
            can trust for grants, audits, board meetings, donor reporting, and
            day-to-day management.
          </p>
          <p>
            I have worked with nonprofit organizations handling full-cycle
            bookkeeping, QuickBooks records, reconciliations, accounts payable
            and receivable, donor accounting, financial reporting, and audit
            preparation. My goal is to help organizations build accounting
            systems that are clear, consistent, and useful without making the
            process more complicated than it needs to be.
          </p>
        </div>
      </div>
    </section>
  );
}
