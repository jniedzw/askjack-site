import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "Missed-call text-back",
    body: "Can't answer? Your customer gets a text from your business within seconds, and you get told who rang.",
    status: "Live",
  },
  {
    title: "Your admin, by text or WhatsApp",
    body: "Log jobs, book customers in and see who owes you, just by sending a message.",
    status: "Coming soon",
  },
  {
    title: "Quotes, invoices and chasers",
    body: "Quotes from a photo and a voice note, invoices from the quote, and polite reminders when payments are late.",
    status: "Coming soon",
  },
];

// Real customers only, with their permission. This section stays hidden while empty.
const testimonials: { quote: string; name: string; trade: string }[] = [];

const included = [
  "Your own business phone number",
  "A text back to customers you miss",
  "A text to you for every missed call",
  "Customers' replies sent to your mobile",
  "A family and friends list that never gets the text",
];

const coming = [
  "Everything in Starter",
  "Your admin by text or WhatsApp",
  "Quotes from a photo and a voice note",
  "Invoices and polite payment reminders",
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <header className="mx-auto flex w-full max-w-5xl items-center gap-3 px-6 py-6">
        <Image src="/icon.svg" alt="" width={40} height={40} priority />
        <span className="text-xl font-extrabold tracking-tight">Ask Jack</span>
      </header>

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-6">
        <section className="py-16 sm:py-24">
          <span className="inline-block rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-brand">
            Coming soon to UK tradespeople
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-6xl">
            Never lose a job to a missed call.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            Ask Jack is AI admin for plumbers, electricians and builders. When
            you&apos;re up a ladder or under a sink, Jack texts your customer
            back, tells you who rang, and takes care of the paperwork so your
            evenings are your own.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="mailto:hello@askjack.uk?subject=Early%20access%20to%20Ask%20Jack"
              className="inline-flex h-12 items-center justify-center rounded-full bg-brand px-6 font-semibold text-white transition-colors hover:bg-brand-light"
            >
              Get early access
            </a>
            <span className="text-muted">
              or email{" "}
              <a href="mailto:hello@askjack.uk" className="font-medium text-ink underline">
                hello@askjack.uk
              </a>
            </span>
          </div>
        </section>

        <section className="grid gap-6 pb-20 sm:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-2xl border border-slate-200 p-6">
              <span
                className={
                  feature.status === "Live"
                    ? "rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-800"
                    : "rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-600"
                }
              >
                {feature.status}
              </span>
              <h2 className="mt-4 text-lg font-bold">{feature.title}</h2>
              <p className="mt-2 leading-7 text-muted">{feature.body}</p>
            </div>
          ))}
        </section>

        {testimonials.length > 0 && (
          <section className="pb-20">
            <h2 className="text-3xl font-extrabold tracking-tight">
              What trades say
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {testimonials.map((testimonial) => (
                <figure
                  key={testimonial.name}
                  className="rounded-2xl border border-slate-200 p-6"
                >
                  <blockquote className="leading-7">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-4 text-sm text-muted">
                    {testimonial.name}, {testimonial.trade}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        <section className="pb-20">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Simple pricing
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-6">
              <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-800">
                Live
              </span>
              <h3 className="mt-4 text-lg font-bold">Starter</h3>
              <p className="mt-2 text-4xl font-extrabold tracking-tight">
                &pound;49
                <span className="text-lg font-medium text-muted"> a month</span>
              </p>
              <p className="mt-2 text-muted">First month free. Stop any time.</p>
              <ul className="mt-6 space-y-2 leading-7">
                {included.map((item) => (
                  <li key={item}>&#10003; {item}</li>
                ))}
              </ul>
              <a
                href="mailto:hello@askjack.uk?subject=Early%20access%20to%20Ask%20Jack"
                className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-brand px-6 font-semibold text-white transition-colors hover:bg-brand-light"
              >
                Get early access
              </a>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6">
              <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-600">
                Coming soon
              </span>
              <h3 className="mt-4 text-lg font-bold">Pro</h3>
              <p className="mt-2 text-4xl font-extrabold tracking-tight">
                &pound;99
                <span className="text-lg font-medium text-muted"> a month</span>
              </p>
              <p className="mt-2 text-muted">Not available yet.</p>
              <ul className="mt-6 space-y-2 leading-7">
                {coming.map((item) => (
                  <li key={item}>&#10003; {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-2 px-6 py-6 text-sm text-muted sm:flex-row sm:justify-between">
          <span>&copy; 2026 Ask Jack · Liverpool, UK</span>
          <span className="flex gap-4">
            <Link href="/privacy" className="hover:text-ink">
              Privacy
            </Link>
            <a href="mailto:hello@askjack.uk" className="hover:text-ink">
              hello@askjack.uk
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}
