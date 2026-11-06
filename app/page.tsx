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
    title: "Your admin, on WhatsApp",
    body: "Log jobs, book them in, and see what's on this week and who owes you, just by sending a message.",
    status: "Early access",
  },
  {
    title: "Quotes and invoices",
    body: "Quotes and invoices from a quick message, priced from your own rates. You check every one before it goes.",
    status: "Early access",
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
      "No. Missed-call texts happen on their own, and Jack works through WhatsApp, which you already have. There's also a private web page with your jobs, customers and money.",
  },
  {
    question: "Does Jack set my prices?",
    answer:
      "No. Jack uses the prices you send him, or the prices and rates you've saved. If a price isn't clear, he asks instead of guessing, and you check every quote before it goes out.",
  },
  {
    question: "Can I get my data out?",
    answer:
      "Yes, any time. Send EXPORT and Jack sends you everything as a spreadsheet: jobs, quotes, invoices and payments, ready for your accountant.",
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

// Made-up examples, written the way Jack really replies.
const examples = [
  {
    title: "Booking a job",
    you: "Book Mrs Jones, boiler service, Tuesday 9am",
    jack: "Booked: Mrs Jones, boiler service, Tue 10 Nov, 9am.",
  },
  {
    title: "Quotes",
    you: "Quote Mrs Patel bathroom, 3 days, 650 materials",
    jack: "Draft quote saved: bathroom for Mrs Patel, £1,497.50. Here's the PDF to check.",
  },
  {
    title: "Who owes you",
    you: "Who owes me?",
    jack: "Invoice 2: Mrs Jones, £1,250.50, 6 days overdue. Invoice 3: Mr Smith, £85.00. Total: £1,335.50.",
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

const pro = [
  "Everything in Starter",
  "Jobs, bookings and your week ahead on WhatsApp",
  "Quotes and invoices as PDFs, priced from your rates",
  "Who owes you, at a glance",
  "Your own page with jobs, customers and money",
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
            Early access for UK tradespeople
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
                    : "rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-semibold text-brand"
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
          <span className="rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-semibold text-brand">
            Early access
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight">
            Just message Jack
          </h2>
          <p className="mt-3 max-w-2xl leading-7 text-muted">
            Say what you need on WhatsApp, the way you&apos;d say it to a mate.
            Jack works from your own prices, and you check everything before
            it reaches a customer.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {examples.map((item) => (
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
              <span className="rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-semibold text-brand">
                Early access
              </span>
              <h3 className="mt-4 text-lg font-bold">Pro</h3>
              <p className="mt-2 text-4xl font-extrabold tracking-tight">
                &pound;99
                <span className="text-lg font-medium text-muted"> a month</span>
              </p>
              <p className="mt-2 text-muted">First month free. Stop any time.</p>
              <ul className="mt-6 space-y-2 leading-7">
                {pro.map((item) => (
                  <li key={item}>&#10003; {item}</li>
                ))}
              </ul>
              <a
                href="mailto:hello@askjack.uk?subject=Early%20access%20to%20Ask%20Jack%20Pro"
                className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-brand px-6 font-semibold text-white transition-colors hover:bg-brand-light"
              >
                Get early access
              </a>
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
