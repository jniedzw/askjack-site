import Image from "next/image";
import Link from "next/link";

import Calculator from "./ui/calculator";
import Phone from "./ui/phone";

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

const steps = [
  {
    title: "You miss a call",
    body: "You're on a job and can't answer. Your phone sends the call to the number we set up for you.",
  },
  {
    title: "We text them back",
    body: "Within seconds, your customer gets a text from your business, so they don't ring someone else.",
  },
  {
    title: "You get an alert",
    body: "You're told who rang and any reply they send, so you can pick it up when you're free.",
  },
];

const questions = [
  {
    question: "Do I have to change my phone number?",
    answer:
      "No. Customers ring your usual number. Calls you don't answer divert to a number we set up for you, and you can turn that off whenever you like.",
  },
  {
    question: "Do I need to download an app?",
    answer:
      "No. Everything happens by text, and alerts can come to you on WhatsApp if you prefer.",
  },
  {
    question: "Will it text my family and friends?",
    answer:
      "No. Give us a list of numbers and they'll never get the text. You'll still hear that they rang.",
  },
  {
    question: "Does it work for WhatsApp calls?",
    answer:
      "No. It only works for normal phone calls, as WhatsApp calls don't divert.",
  },
  {
    question: "Does diverting calls cost me anything?",
    answer:
      "It depends on your network and tariff, so it's worth checking. We'll help you set it up.",
  },
  {
    question: "Is it a real person texting my customers?",
    answer:
      "No, it's an automatic text in your business name, using wording you agree with us. When a customer replies, it comes straight to you.",
  },
  {
    question: "Will it work with my phone?",
    answer:
      "It should work with most UK mobiles. We'll set up the divert with you and make a test call together. iPhones need one setting changed, and we'll do that too.",
  },
  {
    question: "What if I go on holiday?",
    answer:
      "Tell us and we'll pause the service or change the wording while you're away.",
  },
  {
    question: "What if something goes wrong?",
    answer:
      "If an alert can't reach you on WhatsApp, it's sent by text instead. It's still worth keeping your own notes while you try it.",
  },
  {
    question: "What if a customer doesn't want the texts?",
    answer:
      "They can reply STOP at any time. We only text people about their own enquiry, and never send marketing.",
  },
];

const planned = [
  {
    title: "Your admin, by message",
    you: "Booked Mrs Jones, boiler service, Tuesday 9am, £90",
    jack: "Done. It's in your diary, and I'll remind her on Monday.",
  },
  {
    title: "Quotes",
    you: "Sends a photo of the job and a voice note",
    jack: "Here's your quote for £420. Want to check it before it goes?",
  },
  {
    title: "Invoices and chasers",
    you: "Who owes me?",
    jack: "Two invoices are unpaid, £640 in total. Shall I send a polite reminder?",
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
        <section className="grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-2">
          <div>
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
          </div>
          <Phone />
        </section>

        <section className="pb-20">
          <h2 className="text-3xl font-extrabold tracking-tight">
            How it works
          </h2>
          <ol className="mt-8 grid gap-6 sm:grid-cols-3">
            {steps.map((step, index) => (
              <li key={step.title}>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand font-bold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 leading-7 text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
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

        <section className="pb-20">
          <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-600">
            Coming soon
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight">
            What Jack will do next
          </h2>
          <p className="mt-3 max-w-2xl leading-7 text-muted">
            These aren&apos;t live yet. Here&apos;s how we plan them to work,
            and you&apos;d check everything before it reaches a customer.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {planned.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 p-6"
              >
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="mt-4 text-sm font-semibold text-muted">You</p>
                <p className="mt-1 ml-4 rounded-2xl rounded-br-sm bg-orange-50 px-4 py-2.5 text-sm leading-6">
                  {item.you}
                </p>
                <p className="mt-4 text-sm font-semibold text-muted">Jack</p>
                <p className="mt-1 mr-4 rounded-2xl rounded-bl-sm bg-slate-100 px-4 py-2.5 text-sm leading-6">
                  {item.jack}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="pb-20">
          <h2 className="text-3xl font-extrabold tracking-tight">
            What are missed calls costing you?
          </h2>
          <Calculator />
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

        <section className="pb-20">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Questions
          </h2>
          <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
            {questions.map((item) => (
              <details key={item.question} className="py-4">
                <summary className="cursor-pointer font-semibold">
                  {item.question}
                </summary>
                <p className="mt-2 leading-7 text-muted">{item.answer}</p>
              </details>
            ))}
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
