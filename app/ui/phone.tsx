// An illustration of the service, with a made-up business and caller.
export default function Phone() {
  return (
    <div
      role="img"
      aria-label="A phone showing a missed call, a text back to the customer, and their reply"
      className="mx-auto w-full max-w-xs rounded-[2.5rem] border-8 border-ink bg-white p-4 shadow-2xl"
    >
      <div className="mx-auto mb-5 h-1.5 w-16 rounded-full bg-slate-200" />
      <div className="rounded-2xl bg-red-50 px-4 py-3 text-sm">
        <p className="font-semibold text-red-700">Missed call</p>
        <p className="text-red-700">Mrs Jones, 10:42</p>
      </div>
      <div className="mt-5 space-y-3 text-sm leading-6">
        <p className="mr-8 rounded-2xl rounded-bl-sm bg-slate-100 px-4 py-2.5">
          Hi, it&apos;s Dave&apos;s Plumbing. Sorry we missed your call. Reply
          with what you need and we&apos;ll get back to you.
        </p>
        <p className="ml-8 rounded-2xl rounded-br-sm bg-brand px-4 py-2.5 text-white">
          Hi, my boiler&apos;s stopped working. Are you free this week?
        </p>
      </div>
      <p className="mt-5 text-center text-xs text-muted">
        Text sent in seconds. The job stays yours.
      </p>
    </div>
  );
}
