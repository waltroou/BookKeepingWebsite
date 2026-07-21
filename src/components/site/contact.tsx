"use client";

import { FormEvent, useState } from "react";
import { Mail } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type FormState = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    if (siteConfig.formEndpoint.includes("REPLACE_WITH_FORMSPREE_ID")) {
      setFormState("error");
      setStatusMessage(
        "The contact form needs its Formspree endpoint configured before it can send.",
      );
      return;
    }

    setFormState("submitting");
    setStatusMessage("");

    try {
      const response = await fetch(siteConfig.formEndpoint, {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      setFormState("success");
      setStatusMessage("Thanks. Your message has been sent.");
    } catch {
      setFormState("error");
      setStatusMessage(
        "Something went wrong. Please email johnroou68@gmail.com directly.",
      );
    }
  }

  return (
    <section id="contact" className="bg-background py-6">
      <div className="container-page grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            Contact
          </p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
            Share what you need help with and I&apos;ll follow up about fit,
            timing, and next steps.
          </p>

          <div className="mt-5 space-y-2.5 text-sm">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-3 text-foreground hover:text-primary"
            >
              <Mail className="size-4" aria-hidden="true" />
              {siteConfig.email}
            </a>
          </div>
        </div>

        <form
          className="rounded-lg border border-border bg-white p-4 shadow-sm"
          onSubmit={handleSubmit}
        >
          <input
            type="hidden"
            name="_subject"
            value="New inquiry from Johnny Roou Accounting & Advisory"
          />
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="space-y-2 text-sm font-medium text-foreground">
              Name
              <input
                className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/20"
                name="name"
                autoComplete="name"
                required
              />
            </label>
            <label className="space-y-2 text-sm font-medium text-foreground">
              Email
              <input
                className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/20"
                name="email"
                type="email"
                autoComplete="email"
                required
              />
            </label>
          </div>

          <label className="mt-3 block space-y-2 text-sm font-medium text-foreground">
            Organization
            <input
              className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/20"
              name="organization"
              autoComplete="organization"
            />
          </label>

          <label className="mt-3 block space-y-2 text-sm font-medium text-foreground">
            What do you need help with?
            <textarea
              className="min-h-16 w-full rounded-md border border-input bg-background px-3 py-3 text-sm outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/20"
              name="message"
              required
            />
          </label>

          {statusMessage ? (
            <p
              className={cn(
                "mt-4 text-sm font-medium",
                formState === "success" ? "text-primary" : "text-destructive",
              )}
              role="status"
              aria-live="polite"
            >
              {statusMessage}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={formState === "submitting"}
            className={cn(
              buttonVariants({ size: "lg" }),
              "mt-4 h-10 rounded-lg disabled:pointer-events-none disabled:opacity-60",
            )}
          >
            {formState === "submitting" ? "sending..." : "send"}
          </button>
        </form>
      </div>
    </section>
  );
}
