import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/site/section-heading";

const faqs = [
  {
    question: "Do you only work with nonprofits?",
    answer:
      "No. Nonprofit accounting is a core focus, but the same monthly close discipline works well for service businesses, consultants, professional practices, and owner-led companies.",
  },
  {
    question: "Can you clean up prior months or prior years?",
    answer:
      "Yes. Cleanup work starts with a diagnostic review so scope, risk areas, and the order of operations are clear before changes are made.",
  },
  {
    question: "Which accounting systems do you support?",
    answer:
      "The site is intentionally software-neutral. The engagement can be adapted to QuickBooks Online, common payroll providers, bill pay tools, and document storage workflows.",
  },
  {
    question: "What should be ready before a consultation?",
    answer:
      "A recent balance sheet, profit and loss statement, chart of accounts, and a list of reporting deadlines are helpful. If those are not available, the first step is simply understanding what exists.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          eyebrow="FAQ"
          title="Practical answers before the first conversation."
          description="The best fit is an organization that values consistency, responsiveness, and financial records that can stand up to review."
        />
        <Accordion defaultValue={[faqs[0].question]} className="w-full">
          {faqs.map((item) => (
            <AccordionItem key={item.question} value={item.question}>
              <AccordionTrigger className="text-left text-base font-semibold">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-6 text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
