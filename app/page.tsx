import Image from "next/image";

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
      </main>

      <footer className="border-t border-slate-200">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-2 px-6 py-6 text-sm text-muted sm:flex-row sm:justify-between">
          <span>&copy; 2026 Ask Jack · Liverpool, UK</span>
          <a href="mailto:hello@askjack.uk" className="hover:text-ink">
            hello@askjack.uk
          </a>
        </div>
      </footer>
    </div>
  );
}
