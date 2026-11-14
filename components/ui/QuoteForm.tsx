"use client";

import { useState, type FormEvent } from "react";
import type { Dictionary } from "@/content/dictionaries";
import { site } from "@/content/data/site";

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

type Status = "idle" | "sending" | "success" | "error";

/**
 * Quote request form. With a Web3Forms key it posts to their endpoint (the site has no backend).
 * Without a key it opens the visitor's email app with the request filled in; it never claims
 * a request was sent when it was not.
 */
export function QuoteForm({ dict, topics }: { dict: Dictionary["contact"]["form"]; topics: string[] }) {
  const [status, setStatus] = useState<Status>("idle");
  const viaEmail = ACCESS_KEY === "";

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    if (viaEmail) {
      const body = [
        `${dict.name}: ${data.name}`,
        `${dict.company}: ${data.company}`,
        `${dict.phone}: ${data.phone}`,
        `${dict.email}: ${data.email}`,
        `${dict.topic}: ${data.topic}`,
        "",
        data.message,
      ].join("\n");
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`${dict.mailSubject} - ${data.company || data.name}`)}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ access_key: ACCESS_KEY, subject: `${dict.mailSubject} - ${data.company || data.name}`, from_name: "camninh.com", ...data }),
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.message);
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const label = "mb-1.5 block font-semibold";
  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      <div>
        <label htmlFor="q-name" className={label}>{dict.name} <span className="font-normal text-steel">({dict.required})</span></label>
        <input id="q-name" name="name" required autoComplete="name" className="field" />
      </div>
      <div>
        <label htmlFor="q-company" className={label}>{dict.company}</label>
        <input id="q-company" name="company" autoComplete="organization" className="field" />
      </div>
      <div>
        <label htmlFor="q-phone" className={label}>{dict.phone} <span className="font-normal text-steel">({dict.required})</span></label>
        <input id="q-phone" name="phone" type="tel" required autoComplete="tel" className="field" />
      </div>
      <div>
        <label htmlFor="q-email" className={label}>{dict.email}</label>
        <input id="q-email" name="email" type="email" autoComplete="email" className="field" />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="q-topic" className={label}>{dict.topic}</label>
        <select id="q-topic" name="topic" className="field" defaultValue={topics[0]}>
          {topics.map((topic) => <option key={topic}>{topic}</option>)}
          <option>{dict.topicOther}</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="q-message" className={label}>{dict.message} <span className="font-normal text-steel">({dict.required})</span></label>
        <textarea id="q-message" name="message" required rows={5} className="field" />
      </div>
      {/* Honeypot: real visitors never see or fill this. */}
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="sm:col-span-2">
        <button type="submit" className="btn btn-primary w-full sm:w-auto" disabled={status === "sending"}>
          {status === "sending" ? dict.sending : viaEmail ? dict.submitMail : dict.submit}
        </button>
        {viaEmail ? <p className="mt-3 text-sm text-steel">{dict.mailNote} {site.email}.</p> : null}
        <p role="status" className="mt-3 font-semibold">
          {status === "success" ? dict.success : null}
          {status === "error" ? <span className="text-red-700">{dict.error}</span> : null}
        </p>
      </div>
    </form>
  );
}
