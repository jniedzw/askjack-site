"use client";

import { useState } from "react";

// A cautious guess: about 1 in 5 missed calls would have turned into a job.
const JOBS_PER_CALL = 0.2;
const WEEKS_PER_YEAR = 52;
// The Pro plan's monthly price, for "pays for itself".
const PRO_PRICE = 99;

function toNumber(value: string) {
  const number = Number(value);
  return Number.isFinite(number) && number > 0 ? number : 0;
}

export default function Calculator() {
  const [calls, setCalls] = useState("5");
  const [jobValue, setJobValue] = useState("150");

  const jobs = toNumber(calls) * WEEKS_PER_YEAR * JOBS_PER_CALL;
  const yearly = Math.round(jobs * toNumber(jobValue));
  // How many saved jobs a month cover the Pro plan, rounded up.
  const value = toNumber(jobValue);
  const jobsToCover = value > 0 ? Math.ceil(PRO_PRICE / value) : 0;

  return (
    <div className="mt-8 grid gap-6 rounded-2xl border border-slate-200 p-6 sm:grid-cols-2">
      <div className="space-y-4">
        <label className="block">
          <span className="font-medium">Missed calls a week</span>
          <input
            type="number"
            min="0"
            inputMode="numeric"
            value={calls}
            onChange={(event) => setCalls(event.target.value)}
            className="mt-2 block h-12 w-full rounded-xl border border-slate-300 px-4"
          />
        </label>
        <label className="block">
          <span className="font-medium">Average job value (&pound;)</span>
          <input
            type="number"
            min="0"
            inputMode="numeric"
            value={jobValue}
            onChange={(event) => setJobValue(event.target.value)}
            className="mt-2 block h-12 w-full rounded-xl border border-slate-300 px-4"
          />
        </label>
      </div>
      <div aria-live="polite" className="rounded-xl bg-orange-50 p-6">
        <p className="text-muted">Work you could be missing each year</p>
        <p className="mt-2 text-4xl font-extrabold tracking-tight">
          &pound;{yearly.toLocaleString("en-GB")}
        </p>
        <p className="mt-3 text-sm leading-6 text-muted">
          An estimate, not a promise. It assumes 1 in 5 missed calls would have
          become a job. Your results will vary.
        </p>
        {jobsToCover > 0 && (
          <p className="mt-4 border-t border-orange-200 pt-4 font-semibold">
            {jobsToCover === 1
              ? `Save just one £${value.toLocaleString("en-GB")} job a month, and Pro (£${PRO_PRICE}) pays for itself.`
              : `Save ${jobsToCover} jobs like that a month, and Pro (£${PRO_PRICE}) pays for itself.`}
          </p>
        )}
      </div>
    </div>
  );
}
