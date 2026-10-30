import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy policy | Ask Jack",
  description: "How Ask Jack uses and protects personal information.",
};

const sections = [
  {
    heading: "Who we are",
    body: [
      "Ask Jack is run by James Niedzwiecki, a sole trader based in Liverpool, UK. You can contact us at hello@askjack.uk.",
      "Ask Jack provides missed-call text-back and admin tools for tradespeople. If you ring a tradesperson who uses Ask Jack, that tradesperson decides how your details are used for their business, and we handle them on their behalf. For tradespeople who use our service, and people who contact us directly, we decide how the information is used.",
    ],
  },
  {
    heading: "What we collect",
    body: [
      "If you call or text a tradesperson who uses Ask Jack: your phone number, the time of your call, whether we texted you back, and any text messages you send.",
      "If you are a tradesperson using Ask Jack: your name, business name, mobile number and the wording of your messages.",
      "If you email us: your email address and what you send us.",
    ],
  },
  {
    heading: "Why we use it",
    body: [
      "To text you back about your enquiry, tell the tradesperson you called, and pass on your replies. Our lawful basis is legitimate interests: making sure enquiries aren't missed.",
      "To provide our service to tradespeople, under our contract with them, and to reply to emails.",
      "We only text you about your own enquiry or job. We don't send marketing texts, and we never sell your information.",
    ],
  },
  {
    heading: "Who we share it with",
    body: [
      "The tradesperson you contacted.",
      "Twilio, who carry our calls and text messages. Twilio may process data outside the UK, using legal safeguards.",
      "Render, who host our service on servers in the EU.",
    ],
  },
  {
    heading: "How long we keep it",
    body: [
      "We keep call and message records for up to 12 months, then delete them. Deleted records may remain in our providers' backups for up to 30 more days. If you reply STOP, we keep your number on a do-not-text list so that we can respect your choice.",
    ],
  },
  {
    heading: "Your rights",
    body: [
      "Reply STOP to any text and we won't text you again.",
      "You can ask to see, correct or delete your information, or object to how we use it, by emailing hello@askjack.uk.",
      "If you're unhappy, please tell us first. You can also complain to the Information Commissioner's Office at ico.org.uk.",
    ],
  },
];

export default function Privacy() {
  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-6 py-12">
      <Link href="/" className="text-sm font-medium text-brand">
        ← Back to Ask Jack
      </Link>
      <h1 className="mt-6 text-3xl font-extrabold tracking-tight">Privacy policy</h1>
      <p className="mt-2 text-sm text-muted">Last updated: 30 October 2026</p>
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
    </main>
  );
}
