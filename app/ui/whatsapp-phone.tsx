// An illustration of a quote on WhatsApp, with a made-up customer and job.
export default function WhatsAppPhone() {
  return (
    <div
      role="img"
      aria-label="A WhatsApp chat where a tradesperson asks Jack for a quote and gets a PDF back"
      className="mx-auto w-full max-w-xs overflow-hidden rounded-[2.5rem] border-8 border-ink bg-[#efeae2] shadow-2xl"
    >
      <div className="flex items-center gap-3 bg-[#075e54] px-4 pt-6 pb-3 text-white">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand font-bold">J</span>
        <span>
          <span className="block text-sm font-semibold">Jack</span>
          <span className="block text-xs text-white/70">online</span>
        </span>
      </div>
      <div className="space-y-3 px-3 py-4 text-sm leading-6">
        <p className="ml-10 rounded-xl rounded-tr-sm bg-[#d9fdd3] px-3 py-2 shadow-sm">
          Quote Mrs Patel bathroom, 3 days, 650 materials
        </p>
        <div className="mr-8 rounded-xl rounded-tl-sm bg-white p-2 shadow-sm">
          <div className="flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-2">
            <span className="rounded bg-red-600 px-1.5 py-0.5 text-[10px] font-bold text-white">PDF</span>
            <span className="truncate text-xs font-medium">Quote for Mrs Patel.pdf</span>
          </div>
          <p className="px-1 pt-2">
            Draft quote saved: bathroom for Mrs Patel, <strong>£1,497.50</strong>. Check it, then make it final.
          </p>
        </div>
        <div className="mr-8 grid grid-cols-2 gap-1.5 text-center text-xs font-semibold text-[#027eb5]">
          <span className="rounded-lg bg-white py-2 shadow-sm">Make final</span>
          <span className="rounded-lg bg-white py-2 shadow-sm">Change</span>
        </div>
      </div>
      <p className="bg-white px-4 py-3 text-center text-xs text-muted">
        Priced from your own rates. You check it before it goes.
      </p>
    </div>
  );
}
