import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms | Ask Jack",
  description: "The service terms for Ask Jack: plans, paying, stopping and liability.",
};

// The same wording as Part 1 of the customer agreement. Change both together.
const sections = [
  {
    heading: "Who these terms are between",
    body: [
      "Ask Jack is run by James Niedzwiecki, a sole trader based in Liverpool, UK (\"Ask Jack\", \"we\"). These terms are between us and the business using Ask Jack (\"you\"). When you start, you'll also sign them, together with our data processing agreement.",
    ],
  },
  {
    heading: "1. What you get",
    body: [
      "Starter, £49 a month: your own business phone number, a text back to callers you miss, an alert to you for each missed call, your customers' replies forwarded to you, and a family and friends list that never gets the text.",
      "Pro, £99 a month: everything in Starter, plus Jack, your admin assistant on WhatsApp: logging and booking jobs, quotes and invoices from your messages, who owes you, a weekly update, and your own web page with your jobs, customers and money. Jack can also text your customers their quotes and polite payment reminders when you ask, and, only if they agree, one review request after a job.",
    ],
  },
  {
    heading: "2. Your free month",
    body: [
      "Your first month is free. We'll check in each week, and before it ends we'll ask if you want to carry on. You won't be charged unless you agree.",
    ],
  },
  {
    heading: "3. Paying",
    body: [
      "After the free month, you pay for each month in advance, by card through Stripe, using the link we send you. If a payment is more than 14 days late, we can pause the service until it's paid, after telling you first.",
    ],
  },
  {
    heading: "4. Changes",
    body: [
      "We'll give you at least 30 days' notice in writing before changing the price or taking away a feature you use. If you don't agree, you can stop before the change. If we've agreed a special price with you, it stays the same unless we give you that notice.",
    ],
  },
  {
    heading: "5. Stopping",
    body: [
      "You can stop at any time, for any reason, by telling us. The service runs to the end of the month you've paid for, and there are no refunds for part months. Before it ends, we'll send you all your data as a spreadsheet and tell you how to cancel the call forwarding. Cancelling it also turns off your network voicemail, which your network can turn back on.",
      "We can end the service with 30 days' notice, or straight away if Ask Jack is used to break the law.",
    ],
  },
  {
    heading: "6. Your phone",
    body: [
      "You stay in control of your own number. Calls ring as normal first. Only calls you don't answer are forwarded: missed, declined, or when your phone is off or has no signal.",
    ],
  },
  {
    heading: "7. Using Ask Jack properly",
    body: [
      "Jack only texts your customers about their own enquiry or job. Don't use it for marketing or texts people haven't asked for.",
      "You're responsible for what you ask Jack to send, and for following the law, including UK GDPR and the rules on marketing texts.",
      "Your customers can reply STOP at any time, and Jack won't text them again.",
    ],
  },
  {
    heading: "8. Liability",
    body: [
      "You check before it goes. You're responsible for checking every quote, invoice, booking, reminder and price before you send or rely on it, and for keeping your own records of your jobs, customers and money.",
      "No guarantee it's always working. Ask Jack depends on phone networks, Twilio, WhatsApp, AI services and hosting that we don't control. Calls, texts and messages can fail, be late or go missing, and Jack can misread a message.",
      "Losses we're not responsible for. We're not liable for lost profit, income, jobs, customers, contracts or goodwill, for cancelled, missed, moved or double-booked jobs, for wrong quotes, invoices or reminders, or for any indirect or knock-on loss, however it's caused.",
      "At most, a refund. If something goes wrong, the most we'll do is refund what you paid for the month it happened in. That's our total liability to you for anything to do with Ask Jack, however long you've been with us: it never covers earlier months. During the free month, you haven't paid anything, so there's nothing to refund.",
      "What can't be limited. Nothing here limits liability for death or personal injury caused by negligence, for fraud, or for anything else the law doesn't allow to be limited.",
      "Events outside our control. We're not responsible for problems caused by things we can't reasonably control, such as an outage at Twilio, WhatsApp, an AI service or our host, a phone network failure, a power cut or a cyber attack.",
      "Tell us within 6 months. Any claim must be made in writing within 6 months of the problem first happening, or it can't be made.",
      "Your customers' claims. If one of your customers, or anyone else, makes a complaint or claim against us because of something you asked Jack to send, or information you gave us, you'll cover our reasonable costs, unless it was our fault.",
      "If one part fails. If a court decides any part of these terms can't be enforced, the rest still applies.",
    ],
  },
  {
    heading: "9. The law",
    body: [
      "These terms are governed by the law of England and Wales.",
      "These terms and our data processing agreement are the whole agreement between us. Anything said before, by email, message or in person, doesn't change them unless we both agree it in writing.",
      "Questions? Email hello@askjack.uk. How we handle personal information is in our privacy policy.",
    ],
  },
];

export default function Terms() {
  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-6 py-12">
      <Link href="/" className="text-sm font-medium text-brand">
        ← Back to Ask Jack
      </Link>
      <h1 className="mt-6 text-3xl font-extrabold tracking-tight">Terms</h1>
      <p className="mt-2 text-sm text-muted">Last updated: 28 November 2026</p>
      {sections.map((section) => (
        <section key={section.heading} className="mt-8">
          <h2 className="text-lg font-bold">{section.heading}</h2>
          {section.body.map((paragraph) => (
            <p key={paragraph} className="mt-2 leading-7 text-muted">
              {paragraph}
            </p>
          ))}
        </section>
      ))}
      <p className="mt-10 text-sm text-muted">
        See also our <Link href="/privacy" className="font-medium text-brand">privacy policy</Link>.
      </p>
    </main>
  );
}
