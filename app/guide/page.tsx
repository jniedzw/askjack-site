import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to use Ask Jack | Ask Jack",
  description: "A simple guide to Ask Jack: missed calls, jobs, quotes, invoices and your own page.",
};

type Row = [string, string];

const sections: { heading: string; intro?: string; rows: Row[]; plan?: string }[] = [
  {
    heading: "1. Missed calls",
    intro: "This happens on its own once we've set up your phone.",
    rows: [
      ["You miss a call", "Your phone sends it to the number we set up for you."],
      ["Jack texts them back", "Your caller gets a text from your business within seconds."],
      ["You get told", "An alert on WhatsApp (or by text) says who rang, and any reply they send comes to you."],
      ["Family and friends", "Numbers on your list never get the text. You still hear that they rang."],
      ["Switch it off", "Dial ##002# and press call. Your phone goes straight back to normal."],
    ],
  },
  {
    heading: "2. Talk to Jack on WhatsApp",
    plan: "Pro",
    intro: "Say \"hi\" to Jack. You'll get your day at a glance and three buttons: Jobs, Money and More. Or just write what you want in your own words.",
    rows: [
      ["Log a job", "Who it's for, where, their number and the work, however you like to write it."],
      ["Book a job", "The job and when, like \"Mrs Jones, boiler service, Tuesday 9am\"."],
      ["What's on", "Your jobs for the next 7 days. You also get a week ahead every Sunday evening."],
      ["Move or cancel", "MOVE J4 Thursday 2pm, or CANCEL J4. You can use the customer's name instead of J4."],
      ["Job done", "Tell Jack a job's finished, and he'll offer to invoice it."],
      ["Undo", "Send UNDO and Jack puts back the last thing he did."],
    ],
  },
  {
    heading: "3. Quotes and invoices",
    plan: "Pro",
    intro: "Send the job and the price by typing, a voice note, or a photo of your notes with a caption.",
    rows: [
      ["New quote", "Jack sends back a draft PDF for you to check. Tap Change to fix anything in your own words."],
      ["Make final", "Gives you the clean version, ready to go."],
      ["Send to customer", "Jack texts them a link where they can see and accept it. You're told when they do."],
      ["Make invoice", "Turns the quote into an invoice with your bank details."],
      ["Your prices", "Save them once, like \"PRICE boiler service 85\", and Jack uses them in quotes."],
    ],
  },
  {
    heading: "4. Money",
    plan: "Pro",
    rows: [
      ["Who owes me", "Unpaid invoices, oldest first, with how overdue each one is."],
      ["Send reminders", "Tap it under Who owes me, and Jack texts overdue customers a polite reminder."],
      ["Mark as paid", "Tell Jack which invoice has been paid."],
      ["Reviews", "If a customer ticked the box when they accepted, Jack asks them for a review the day after the job."],
    ],
  },
  {
    heading: "5. Your own page",
    plan: "Pro",
    intro: "Tap My page in Jack's More menu for a private link. It works once, so don't forward it.",
    rows: [
      ["Today", "Your jobs, with Call and Directions buttons, and who owes you."],
      ["Jobs", "Every job. Change the details or the booking, mark it done, or cancel it."],
      ["Customers", "Everyone you've worked for, with their history and your notes, like a gate code."],
      ["Money", "What's owed, what's paid this month, and every invoice as a PDF."],
    ],
  },
];

const goodToKnow = [
  "Jack never makes up a price. Prices come from you or your saved list, and you check every quote before it goes.",
  "Send EXPORT any time for all your jobs, quotes and invoices as a spreadsheet, ready for your accountant.",
  "Jack only texts your customers about their own job. No marketing, ever.",
  "Stuck? Send HELP to Jack, or email hello@askjack.uk.",
];

export default function Guide() {
  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-6 py-12">
      <Link href="/" className="text-sm font-medium text-brand">
        ← Back to Ask Jack
      </Link>
      <h1 className="mt-6 text-3xl font-extrabold tracking-tight">How to use Ask Jack</h1>
      <p className="mt-2 leading-7 text-muted">
        Everything in one place. No app to learn: it all happens on your phone and in WhatsApp.
      </p>

      {sections.map((section) => (
        <section key={section.heading} className="mt-10">
          <h2 className="flex items-center gap-3 text-xl font-bold">
            {section.heading}
            {section.plan && (
              <span className="rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-semibold text-brand">
                {section.plan}
              </span>
            )}
          </h2>
          {section.intro && <p className="mt-2 leading-7 text-muted">{section.intro}</p>}
          <dl className="mt-4 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
            {section.rows.map(([title, text]) => (
              <div key={title} className="grid gap-1 px-5 py-3 sm:grid-cols-[10rem_1fr] sm:gap-4">
                <dt className="font-semibold">{title}</dt>
                <dd className="leading-7 text-muted">{text}</dd>
              </div>
            ))}
          </dl>
        </section>
      ))}

      <section className="mt-10">
        <h2 className="text-xl font-bold">Good to know</h2>
        <ul className="mt-4 space-y-2">
          {goodToKnow.map((item) => (
            <li key={item} className="flex gap-2 leading-7 text-muted">
              <span className="text-brand" aria-hidden="true">•</span>
              {item}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
