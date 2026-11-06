import Image from "next/image";
import Link from "next/link";

import Calculator from "./ui/calculator";
import Phone from "./ui/phone";
import WhatsAppPhone from "./ui/whatsapp-phone";

const features = [
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
  {
    title: "Missed-call text-back",
    body: "Can't answer? Your customer gets a text from your business within seconds, and you get told who rang.",
    status: "Live",
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
    question: "Does Jack set my prices?",
    answer:
      "No. Jack uses the prices you send him, or the prices and rates you've saved. If a price isn't clear, he asks instead of guessing, and you check every quote before it goes out.",
  },
  {
    question: "Do I need to download an app?",
    answer:
      "No. Missed-call texts happen on their own, and Jack works through WhatsApp, which you already have. There's also a private web page with your jobs, customers and money.",
  },
  {
    question: "Can I get my data out?",
    answer:
      "Yes, any time. Send EXPORT and Jack sends you everything as a spreadsheet: jobs, quotes, invoices and payments, ready for your accountant.",
  },
  {
    question: "Do I have to change my phone number?",
    answer:
      "No. Customers ring your usual number. Calls you don't answer divert to a number we set up for you, and you can turn that off whenever you like.",
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

const ticks = ["Works in WhatsApp", "Priced from your own rates", "Stop any time"];

// Simple line icons for the feature boxes, in the order of the features list.
const icons = [
  "M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z",
  "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z",
  "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z",
];

const signUp = "mailto:hello@askjack.uk?subject=Early%20access%20to%20Ask%20Jack";

function Icon({ path }: { path: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true" className="h-6 w-6">
      <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
  );
}

function Tick() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5 flex-none text-brand">
      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
    </svg>
  );
}

function Badge({ status }: { status: string }) {
  const live = status === "Live";
  return (
    <span
      className={
        live
          ? "w-fit rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-800"
          : "w-fit rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-semibold text-brand"
      }
    >
      {status}
    </span>
  );
}

// A made-up WhatsApp chat, drawn in WhatsApp's colours so it's clear where Jack lives.
function Chat({ title, you, jack }: { title: string; you: string; jack: string }) {
  return (
    <figure className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5">
      <figcaption className="flex items-center gap-3 bg-[#075e54] px-4 py-3 text-white">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-sm font-bold">J</span>
        <span>
          <span className="block text-sm font-semibold">Jack</span>
          <span className="block text-xs text-white/70">{title}</span>
        </span>
      </figcaption>
      <div className="space-y-3 bg-[#efeae2] px-4 py-5 text-sm leading-6">
        <p className="ml-10 rounded-xl rounded-tr-sm bg-[#d9fdd3] px-3 py-2 shadow-sm">{you}</p>
        <p className="mr-10 rounded-xl rounded-tl-sm bg-white px-3 py-2 shadow-sm">{jack}</p>
      </div>
    </figure>
  );
}

function Button({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a
      href={href}
      className={`inline-flex h-12 items-center justify-center whitespace-nowrap rounded-full bg-brand px-6 font-semibold text-white shadow-sm shadow-orange-600/30 transition hover:bg-brand-light ${className}`}
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <header className="sticky top-0 z-10 border-b border-slate-200/70 bg-white/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-5xl items-center gap-3 px-6 py-4">
          <Image src="/icon.svg" alt="" width={36} height={36} priority />
          <span className="whitespace-nowrap text-xl font-extrabold tracking-tight">Ask Jack</span>
          <nav className="ml-auto hidden items-center gap-6 text-sm font-medium text-muted sm:flex">
            <a href="#how" className="hover:text-ink">How it works</a>
            <a href="#pricing" className="hover:text-ink">Pricing</a>
            <a href="#questions" className="hover:text-ink">Questions</a>
          </nav>
          <Button href={signUp} className="ml-auto h-10 px-4 text-sm sm:ml-6">
            Get early access
          </Button>
        </div>
      </header>

      <main className="flex flex-1 flex-col">
        <section className="bg-gradient-to-b from-orange-50 to-white">
          <div className="mx-auto grid w-full max-w-5xl items-center gap-12 px-6 py-16 sm:py-24 lg:grid-cols-2">
            <div>
              <span className="inline-block rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-brand">
                Early access for UK tradespeople
              </span>
              <h1 className="mt-6 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-6xl">
                Your admin, done on <span className="text-brand">WhatsApp.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
                Jack is an AI assistant for plumbers, electricians and builders.
                Message him like you&apos;d message a mate, and he logs your jobs,
                books them in, writes your quotes and invoices, and tells you who
                owes you. Your evenings are your own again.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href={signUp}>Get early access</Button>
                <span className="text-muted">
                  or email{" "}
                  <a href="mailto:hello@askjack.uk" className="font-medium text-ink underline">
                    hello@askjack.uk
                  </a>
                </span>
              </div>
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
                {ticks.map((tick) => (
                  <li key={tick} className="flex items-center gap-1.5">
                    <Tick /> {tick}
                  </li>
                ))}
              </ul>
            </div>
            <WhatsAppPhone />
          </div>
        </section>

        <section id="how" className="scroll-mt-20 bg-slate-50">
          <div className="mx-auto w-full max-w-5xl px-6 py-20">
            <h2 className="text-3xl font-extrabold tracking-tight">Just message Jack</h2>
            <p className="mt-3 max-w-2xl leading-7 text-muted">
              Say what you need on WhatsApp, the way you&apos;d say it to a mate.
              Jack works from your own prices, and you check everything before
              it reaches a customer.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {examples.map((item) => (
                <Chat key={item.title} {...item} />
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="mx-auto w-full max-w-5xl px-6 py-20">
            <h2 className="text-3xl font-extrabold tracking-tight">What Jack does</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-brand">
                      <Icon path={icons[index]} />
                    </span>
                    <Badge status={feature.status} />
                  </div>
                  <h3 className="mt-4 text-lg font-bold">{feature.title}</h3>
                  <p className="mt-2 leading-7 text-muted">{feature.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto grid w-full max-w-5xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
            <div>
              <Badge status="Live" />
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight">
                Plus: never lose a job to a missed call
              </h2>
              <p className="mt-3 leading-7 text-muted">
                When you&apos;re up a ladder or under a sink, Jack texts your
                customer back in seconds, so they don&apos;t ring someone else.
              </p>
              <ol className="mt-8 space-y-5">
                {steps.map((step, index) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-brand font-bold text-white">
                      {index + 1}
                    </span>
                    <span>
                      <span className="block font-bold">{step.title}</span>
                      <span className="mt-1 block leading-7 text-muted">{step.body}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
            <Phone />
          </div>
        </section>

        <section>
          <div className="mx-auto w-full max-w-5xl px-6 py-20">
            <h2 className="text-3xl font-extrabold tracking-tight">What are missed calls costing you?</h2>
            <Calculator />
          </div>
        </section>

        {testimonials.length > 0 && (
          <section className="bg-slate-50">
            <div className="mx-auto w-full max-w-5xl px-6 py-20">
              <h2 className="text-3xl font-extrabold tracking-tight">What trades say</h2>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {testimonials.map((testimonial) => (
                  <figure key={testimonial.name} className="rounded-2xl border border-slate-200 bg-white p-6">
                    <blockquote className="leading-7">&ldquo;{testimonial.quote}&rdquo;</blockquote>
                    <figcaption className="mt-4 text-sm text-muted">
                      {testimonial.name}, {testimonial.trade}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        <section id="pricing" className="scroll-mt-20 bg-slate-50">
          <div className="mx-auto w-full max-w-5xl px-6 py-20">
            <h2 className="text-3xl font-extrabold tracking-tight">Simple pricing</h2>
            <p className="mt-3 text-muted">No contract. Your first month is free on either plan.</p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="flex flex-col rounded-2xl border-2 border-brand bg-white p-8 shadow-xl shadow-orange-600/10">
                <Badge status="Early access" />
                <h3 className="mt-4 text-lg font-bold">Pro</h3>
                <p className="mt-2 text-4xl font-extrabold tracking-tight">
                  &pound;99<span className="text-lg font-medium text-muted"> a month</span>
                </p>
                <p className="mt-2 text-muted">First month free. Stop any time.</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {pro.map((item) => (
                    <li key={item} className="flex gap-2"><Tick /> {item}</li>
                  ))}
                </ul>
                <Button href="mailto:hello@askjack.uk?subject=Early%20access%20to%20Ask%20Jack%20Pro" className="mt-8">
                  Get early access
                </Button>
              </div>
              <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-8">
                <Badge status="Live" />
                <h3 className="mt-4 text-lg font-bold">Starter</h3>
                <p className="mt-2 text-4xl font-extrabold tracking-tight">
                  &pound;49<span className="text-lg font-medium text-muted"> a month</span>
                </p>
                <p className="mt-2 text-muted">First month free. Stop any time.</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {included.map((item) => (
                    <li key={item} className="flex gap-2"><Tick /> {item}</li>
                  ))}
                </ul>
                <a
                  href={signUp}
                  className="mt-8 inline-flex h-12 items-center justify-center rounded-full border border-slate-300 px-6 font-semibold transition hover:border-brand hover:text-brand"
                >
                  Get early access
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="questions" className="scroll-mt-20">
          <div className="mx-auto w-full max-w-3xl px-6 py-20">
            <h2 className="text-3xl font-extrabold tracking-tight">Questions</h2>
            <div className="mt-8 space-y-3">
              {questions.map((item) => (
                <details key={item.question} className="group rounded-xl border border-slate-200 px-5 py-4 open:bg-slate-50">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                    {item.question}
                    <span className="text-xl text-brand transition group-open:rotate-45" aria-hidden="true">+</span>
                  </summary>
                  <p className="mt-3 leading-7 text-muted">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-ink">
          <div className="mx-auto flex w-full max-w-5xl flex-col items-start gap-6 px-6 py-16 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-white">Get your evenings back.</h2>
              <p className="mt-2 text-slate-300">Try Jack free for your first month. No app, no contract.</p>
            </div>
            <Button href={signUp}>Get early access</Button>
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
