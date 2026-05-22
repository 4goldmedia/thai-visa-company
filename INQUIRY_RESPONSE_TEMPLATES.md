# Inquiry response templates

**Thai Visa Company — reusable client messages**

Trust-first, mobile-friendly templates for LINE, WhatsApp, and email. Use as starting points—personalize every send.

**Related:** [CRM_WORKFLOW_SYSTEM.md](./CRM_WORKFLOW_SYSTEM.md) (when to send, status updates) · [CONVERSION_INFRASTRUCTURE.md](./CONVERSION_INFRASTRUCTURE.md) (channel priority)

---

## 1. How to use this system

| Step | Action |
|------|--------|
| 1 | Pick the template that matches the **moment** (first reply, docs, etc.) |
| 2 | Replace `{placeholders}` with real details from Airtable / the thread |
| 3 | Keep **one main ask** per message |
| 4 | Send on the **same channel** the client used |
| 5 | Update CRM: Status, Follow-Up Date, short Notes |

**Length rule:** If it feels long on your phone, it is long for the client. Aim for **3–6 short lines** unless listing documents.

---

## 2. Voice & style

### Sounds like us

- Reassuring, organized, approachable  
- Professional but human — a capable person helping, not a ticket system  
- Plain English; short paragraphs; line breaks for mobile  

### Always

- Use their name when you have it  
- Mirror one detail they shared (“UK passport”, “moving in March”)  
- Be honest when rules vary by nationality  
- End with a clear next step or question  
- Respect “no obligation” — they can pause anytime  

### Never

- Robotic openings (“Dear Valued Customer”, “Your ticket #…”)  
- Aggressive sales (“Act now”, “Last chance”, package dumps)  
- Approval guarantees (“We will get your visa approved”)  
- Heavy legal jargon — explain in everyday terms  
- Walls of text or 5+ questions in one message  

### Sign-off (pick one)

- `— {YourName}, Thai Visa Company`  
- `Thanks, {YourName}` (LINE/WA, ongoing thread — often skip repeat sign-off)  

---

## 3. Placeholders

| Placeholder | Example |
|-------------|---------|
| `{Name}` | Alex |
| `{VisaType}` | retirement visa / DTV / Thailand Elite |
| `{Nationality}` | UK / United States |
| `{Location}` | Bangkok / currently in London |
| `{Timeline}` | March / before your flight on 12 June |
| `{YourName}` | Natt |
| `{DocList}` | passport bio page, bank statement, … |
| `{Date}` | Tuesday 10 June |
| `{Time}` | 14:00 ICT |
| `{Channel}` | LINE / WhatsApp |
| `{ReviewLink}` | Google review URL from env / business profile |

---

## 4. Template index

| # | Template | CRM moment | Typical status |
|---|----------|------------|----------------|
| 4.1 | [First inquiry response](#41-first-inquiry-response) | New lead | → Contacted |
| 4.2 | [Follow-up reminder](#42-follow-up-reminder) | No reply | Contacted |
| 4.3 | [Document request](#43-document-request) | Need files | → Waiting For Documents |
| 4.4 | [Consultation scheduling](#44-consultation-scheduling) | Call / video | Contacted |
| 4.5 | [Successful visa completion](#45-successful-visa-completion) | Case done | → Completed |
| 4.6 | [Review request](#46-review-request) | After win | Completed |
| 4.7 | [Delayed response](#47-delayed-response-handling) | SLA slip | Any |

---

## 4.1 First inquiry response

**When:** First substantive reply after form, LINE, or WhatsApp.  
**Structure:** Thanks → understand situation → next step or 1–2 questions → when you’ll follow up.

### A — Standard (visa type known)

```
Hi {Name}, thanks for reaching out to Thai Visa Company.

From your message, it sounds like you’re looking at a {VisaType} while {Location} — I’ve got the main picture.

For {Nationality} passports, the first things we usually check are {OneLineEligibilityHint}.

Next step: {SingleAsk — e.g. “Could you confirm your age and whether you’ll apply from your home country or from Thailand?”}

I’ll follow up once I have that — usually the same day on {Channel}.
— {YourName}
```

**Example (filled)**

```
Hi Alex, thanks for reaching out to Thai Visa Company.

From your message, it sounds like you’re looking at a retirement visa while you’re still in London — I’ve got the main picture.

For UK passports, we usually confirm age (50+) and which financial route fits you before listing documents.

Next step: could you confirm your age and whether you plan to apply from the UK or after you arrive in Thailand?

I’ll follow up once I have that — usually the same day here on LINE.
— Natt
```

### B — “Not sure yet” / exploring options

```
Hi {Name}, thanks for getting in touch.

Happy to help you compare options — no need to pick a visa today.

To point you in the right direction: are you mainly planning to {WorkRemotely / Retire / Work for a company / Study}, and what’s your rough timeline ({Timeline or “still flexible”})?

One or two sentences is enough. I’ll reply with the routes that usually fit {Nationality} applicants.
— {YourName}
```

### C — Urgent (expiry, travel soon, already in Thailand)

```
Hi {Name}, thanks for the message — I’ve read this as time-sensitive ({Timeline}).

I’ll prioritize this today. First, I need to confirm: {OneCriticalQuestion — e.g. “current visa type and expiry date”}.

If you can send that here on {Channel}, I’ll come back with the realistic options for {Nationality} passports — no guarantees on approval, but we can map clear next steps quickly.
— {YourName}
```

### D — Website form (acknowledge their submission)

```
Hi {Name}, thanks for your inquiry through our website.

I’ve read your note about {OneDetailFromMessage}. For a {VisaType}, that’s a good starting point.

{OneSentenceHelpfulContext}

Could you reply here on {Channel} with {SingleAsk}? Then I’ll outline timing and documents for your situation.
— {YourName}
```

### Visa-specific one-liners (`{OneLineEligibilityHint}`)

| Visa | Hint (adapt, don’t guarantee) |
|------|--------------------------------|
| **Retirement** | age 50+, and which financial option you qualify for |
| **DTV** | remote work proof and whether you meet current DTV criteria for your nationality |
| **Elite** | membership tier and whether you want agent-led processing |
| **Business** | employer/company setup and work permit path |
| **Education** | school acceptance and course length |

---

## 4.2 Follow-up reminder

**When:** No client reply; Follow-Up Date is today. One gentle nudge.

### A — General check-in

```
Hi {Name}, just checking in on your {VisaType} question.

Whenever you have a moment, {ShortRepeatOfAsk}.

No rush on our side — reply when it suits you and we’ll pick up from there.
— {YourName}
```

### B — After you sent information

```
Hi {Name}, wanted to see if the overview I sent made sense.

If anything was unclear, send a quick message here and I’ll clarify. If you’re still deciding, that’s fine too — happy to help when you’re ready.
— {YourName}
```

### C — Final nudge before closing file (day 12–14)

```
Hi {Name}, I haven’t heard back so I’ll pause active follow-up for now.

If your plans change, message us anytime on {Channel} — we can reopen from where we left off.

Wishing you a smooth trip/planning process.
— {YourName}
```

*After C: set Airtable **Lost Lead** `no-response` if appropriate ([CRM_WORKFLOW_SYSTEM.md](./CRM_WORKFLOW_SYSTEM.md)).*

---

## 4.3 Document request

**When:** Moving to **Waiting For Documents**. List only what you need now.

### A — Standard document list

```
Hi {Name}, good progress — next step is a few documents so we can confirm everything fits before you apply.

Please send when ready (photos/PDFs on {Channel} are fine):

• {Doc1}
• {Doc2}
• {Doc3}

If any item is difficult to get, tell me which one — we can often suggest alternatives.

Once I have these, I’ll review within about 2 business days and reply with the full checklist or next steps.
— {YourName}
```

### B — Short list (mobile-friendly)

```
Hi {Name}, could you send these when you can?

1) {Doc1}
2) {Doc2}

A clear photo on your phone is usually enough. Questions on any item — just ask here.
— {YourName}
```

### C — Partial documents received

```
Hi {Name}, thanks — I’ve received {ReceivedDoc}.

Still needed: {RemainingDocList}.

Send when ready; I’ll confirm as soon as the set is complete.
— {YourName}
```

**Common items (pick only what applies)**  
Passport bio page · Passport photo (spec) · Bank statement / proof of funds · Employment letter · Company documents · School letter · Proof of address · Timeline / travel dates

---

## 4.4 Consultation scheduling

**When:** A call or video chat helps more than chat. Optional — many clients prefer LINE only.

### A — Offer a short call

```
Hi {Name}, happy to keep everything here on {Channel} — but if you prefer, we can do a short call ({Duration: 15–20 min}) to walk through {VisaType} options for your situation.

I’m available {DateOptions — e.g. “Tue–Thu this week, afternoon ICT”}. Reply with a time that works for you, or suggest another slot.

If you’d rather stay in chat, just say so and we’ll continue here.
— {YourName}
```

### B — Confirm booked slot

```
Hi {Name}, confirmed: {Date} at {Time} (Thailand time), via {Platform}.

I’ll call/message you on {Channel} at that time. If you need to reschedule, tell me as soon as you can.

To make the most of the call, please have ready: {OnePrepItem — e.g. passport nationality, rough timeline}.
— {YourName}
```

### C — No-show / reschedule

```
Hi {Name}, I didn’t connect with you at {Time} — hope all is well.

Want to reschedule? Send a couple of times that work for you (ICT), or we can continue in writing here — whichever you prefer.
— {YourName}
```

---

## 4.5 Successful visa completion

**When:** Service delivered; Status → **Completed**. Celebrate calmly — no hype.

### A — Standard completion

```
Hi {Name}, good news — your {VisaType} process is complete on our side ({ShortOutcome — e.g. “application submitted” / “extension approved” / “documents filed”}).

{OneLineReminderIfNeeded — e.g. “Please keep copies of your approval and check the expiry date on the stamp.”}

If anything comes up before you travel or while you’re in Thailand, message us here on {Channel}.

Thank you for trusting us with this — all the best in Thailand.
— {YourName}
```

### B — Handoff / you’re done, embassy pending

```
Hi {Name}, we’ve completed everything we’re handling for your {VisaType}.

Next step is with {Embassy/Immigration} — typical timing is {RoughTimeline}. I’ll note anything to watch for in your case: {OneWatchItem}.

Ping us on {Channel} if your status changes or you need clarity on the next stage.
— {YourName}
```

---

## 4.6 Review request

**When:** After **Completed**, client satisfied, relationship positive. One ask only.

### A — Soft review request

```
Hi {Name}, glad we could help with your {VisaType}.

If you have a minute, an honest Google review helps other people find clear visa support like you did: {ReviewLink}

Only if you’re happy to — no pressure either way. And you can still reach us here anytime for future questions.
— {YourName}
```

### B — Shorter (LINE)

```
Hi {Name} — if our support was helpful, a quick Google review would mean a lot: {ReviewLink}

Thanks again, and safe travels.
```

**Do not:** offer incentives for reviews, write the review for them, or push twice if they decline.

---

## 4.7 Delayed response handling

**When:** You missed same-day / P1 target; weekend backlog; internal check needed.

### A — Same-day delay (still replying today)

```
Hi {Name}, thanks for your patience — I’m replying a bit later than usual today.

I’ve reviewed your message about {OneDetail}. {DirectAnswerOrNextStep}

I’ll {FollowUpPromise — e.g. “send the document list tomorrow morning ICT”}.
— {YourName}
```

### B — Needs internal check (1–2 days)

```
Hi {Name}, thanks for waiting.

Your question about {Topic} needs a careful check for {Nationality} cases — I’m confirming with our team and will get back to you by {Date} (ICT).

I won’t leave this hanging. If anything urgent changes on your side before then, tell me here on {Channel}.
— {YourName}
```

### C — Weekend / holiday queue

```
Hi {Name}, thanks for your message.

Our office hours are Mon–Fri (ICT). I’ve seen your note about {VisaType} and will reply properly on {NextBusinessDay}.

If your situation is urgent (visa expiring, travel within a few days), reply “urgent” and we’ll prioritize.
— {YourName}
```

### D — Technical issue (form received late)

```
Hi {Name}, apologies for the delay — we had a brief technical issue but your inquiry is in our system now.

Here’s our reply: {PasteStandardFirstReplyContent}

Thanks for bearing with us.
— {YourName}
```

---

## 5. Quick combinations (common sequences)

| Flow | Templates |
|------|-----------|
| Form → qualify → docs | **4.1D** → **4.3A** |
| LINE → urgent → docs | **4.1C** → **4.3B** |
| Docs sent → complete → review | **4.3C** → **4.5A** → **4.6A** (days later) |
| No reply → close | **4.2A** → **4.2C** |

---

## 6. Internal checklist (before send)

- [ ] Name and one personal detail correct  
- [ ] Only one main ask  
- [ ] No approval guarantee  
- [ ] Channel matches thread  
- [ ] CRM updated (Status / Follow-Up Date / Notes)  
- [ ] Reads well on a phone screen (preview sent to yourself)  

---

## 7. High-trust communication verification

| Requirement | How templates support it |
|-------------|---------------------------|
| **Trust-first** | No pressure close; honest uncertainty; optional review |
| **Fast operations** | Short copy; copy-paste placeholders; CRM index |
| **Scalable** | Variants by moment, not by endless custom prose |
| **Professional + human** | Named sign-off; conversational LINE style |
| **Reassuring** | “No rush”, “when you’re ready”, clear next steps |
| **Organized** | Numbered docs; one ask; explicit timelines |
| **Approachable / modern** | Plain English; mobile line breaks |
| **Avoid robotic / sales / jargon** | Style rules §2; no corporate boilerplate |
| **Concise** | Length rule §1; short variants throughout |
| **Aligns with site promise** | Same business day; no obligation ([contact copy](./lib/contact/page-content.ts)) |

---

## 8. Maintenance

- When visa rules change, update **§4.1 visa one-liners** only — not every template  
- Add new variants when the team repeats the same manual message 3+ times  
- Keep `{ReviewLink}` in sync with `NEXT_PUBLIC_GOOGLE_REVIEWS_URL` ([ENVIRONMENT_VARIABLES.md](./ENVIRONMENT_VARIABLES.md))

---

*Last updated: May 2026 — Thai Visa Company operations.*
