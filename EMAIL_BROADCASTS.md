# Email Broadcasts — Black Theme Template

Drop-in HTML for Resend Broadcasts. Same look as waitlist/VIP confirmation emails. Swap text only.

---

## Env vars (set in Vercel, then redeploy)

- `RESEND_API_KEY` — from resend.com/api-keys
- `RESEND_FROM_EMAIL` — `Jayda <noreply@viralbesties.club>`
- `RESEND_AUDIENCE_ID` — `fda33119-5b29-4bc4-acb6-a8b08dbddedf`

Every waitlist + VIP signup auto-adds to that audience. Pickleball stays separate (different audience).

---

## How to send a broadcast

1. Resend → **Broadcasts** → **Create Broadcast**.
2. Editor → toggle to **HTML / code view** (top right).
3. Copy one template below. Paste in.
4. Replace the `{{...}}` placeholders with your copy.
5. Set:
   - **Subject** + **Preview text** (in Resend form, not HTML)
   - **From**: `Jayda <noreply@viralbesties.club>`
   - **To**: Viral Besties audience
6. Schedule date + time → done.

---

## Template 1 — Standard countdown email

Use for: Day-X countdowns, updates, reminders.

Replace:
- `{{TAGLINE}}` — e.g. `COUNTDOWN — DAY 7`, `7 DAYS OUT`, `TOMORROW`
- `{{HEADLINE_BEFORE}}`, `{{HEADLINE_ITALIC}}`, `{{HEADLINE_AFTER}}` — italic pink word in middle
- `{{BODY}}` — your paragraphs (use `<p>...</p>` blocks, see notes below)
- `{{SIGNOFF}}` — e.g. `See you soon,`, `More tomorrow,`, `Talk soon,`

```html
<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#0a0a0a;font-family:Helvetica,Arial,sans-serif;color:#ffffff;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;">
      <tr>
        <td align="center" style="padding:40px 20px;">
          <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;background:#0f0f0f;border:1px solid rgba(236,72,153,0.3);border-radius:16px;overflow:hidden;">
            <tr><td style="padding:32px 32px 8px;text-align:center;">
              <div style="font-family:Georgia,'Times New Roman',serif;font-size:48px;font-weight:bold;line-height:1;letter-spacing:-1px;">
                <span style="color:#ffffff;">J</span><span style="color:#ec4899;">J</span>
              </div>
            </td></tr>
            <tr><td style="padding:8px 32px;text-align:center;">
              <div style="font-size:11px;letter-spacing:0.25em;text-transform:uppercase;color:#f9a8d4;font-weight:600;">
                ✦ {{TAGLINE}} ✦
              </div>
            </td></tr>
            <tr><td style="padding:8px 32px 24px;text-align:center;">
              <h1 style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:32px;line-height:1.2;color:#ffffff;font-weight:bold;">
                {{HEADLINE_BEFORE}} <em style="color:#ec4899;">{{HEADLINE_ITALIC}}</em> {{HEADLINE_AFTER}}
              </h1>
            </td></tr>
            <tr><td style="padding:0 32px 24px;text-align:left;">
              {{BODY}}
              <div style="margin:24px 0;padding:20px;background:rgba(236,72,153,0.08);border:1px solid rgba(236,72,153,0.3);border-radius:12px;">
                <div style="font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#f9a8d4;font-weight:600;margin-bottom:6px;">
                  Mark your calendar
                </div>
                <div style="font-family:Georgia,'Times New Roman',serif;font-size:22px;color:#ffffff;line-height:1.3;">
                  May 15 · 10am EST
                </div>
              </div>
              <p style="margin:24px 0 0;color:#d4d4d4;font-size:16px;line-height:1.6;">
                {{SIGNOFF}}<br/>
                <span style="color:#ec4899;font-family:Georgia,'Times New Roman',serif;font-style:italic;font-size:20px;">Jayda</span>
              </p>
            </td></tr>
            <tr><td style="padding:24px 32px;border-top:1px solid rgba(255,255,255,0.06);text-align:center;">
              <p style="margin:0;color:#737373;font-size:11px;line-height:1.5;">
                VIRAL BESTIES CLUB · You're getting this because you're on the masterclass list.
              </p>
            </td></tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
```

---

## Template 2 — With a CTA button

Use for: replay drops, "join here", "watch now", VIP-only links.

Same as Template 1, but `{{BODY}}` is followed by a button. Replace `{{BUTTON_URL}}` and `{{BUTTON_TEXT}}`. Drop the calendar card if not relevant — or keep it.

```html
<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#0a0a0a;font-family:Helvetica,Arial,sans-serif;color:#ffffff;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;">
      <tr>
        <td align="center" style="padding:40px 20px;">
          <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;background:#0f0f0f;border:1px solid rgba(236,72,153,0.3);border-radius:16px;overflow:hidden;">
            <tr><td style="padding:32px 32px 8px;text-align:center;">
              <div style="font-family:Georgia,'Times New Roman',serif;font-size:48px;font-weight:bold;line-height:1;letter-spacing:-1px;">
                <span style="color:#ffffff;">J</span><span style="color:#ec4899;">J</span>
              </div>
            </td></tr>
            <tr><td style="padding:8px 32px;text-align:center;">
              <div style="font-size:11px;letter-spacing:0.25em;text-transform:uppercase;color:#f9a8d4;font-weight:600;">
                ✦ {{TAGLINE}} ✦
              </div>
            </td></tr>
            <tr><td style="padding:8px 32px 24px;text-align:center;">
              <h1 style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:32px;line-height:1.2;color:#ffffff;font-weight:bold;">
                {{HEADLINE_BEFORE}} <em style="color:#ec4899;">{{HEADLINE_ITALIC}}</em> {{HEADLINE_AFTER}}
              </h1>
            </td></tr>
            <tr><td style="padding:0 32px 24px;text-align:left;">
              {{BODY}}
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:24px 0;">
                <tr><td align="center">
                  <a href="{{BUTTON_URL}}" style="display:inline-block;padding:16px 32px;background:#ec4899;color:#ffffff;font-weight:600;font-size:16px;text-decoration:none;border-radius:12px;letter-spacing:0.02em;box-shadow:0 0 30px rgba(236,72,153,0.4);">
                    {{BUTTON_TEXT}}
                  </a>
                </td></tr>
              </table>
              <p style="margin:24px 0 0;color:#d4d4d4;font-size:16px;line-height:1.6;">
                {{SIGNOFF}}<br/>
                <span style="color:#ec4899;font-family:Georgia,'Times New Roman',serif;font-style:italic;font-size:20px;">Jayda</span>
              </p>
            </td></tr>
            <tr><td style="padding:24px 32px;border-top:1px solid rgba(255,255,255,0.06);text-align:center;">
              <p style="margin:0;color:#737373;font-size:11px;line-height:1.5;">
                VIRAL BESTIES CLUB · You're getting this because you're on the masterclass list.
              </p>
            </td></tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
```

---

## Template 3 — Bullet list block (VIP perks, "what's inside", etc.)

Same shell. `{{BODY}}` becomes a list card. Replace `{{LIST_HEADING}}` and each `{{ITEM_X_TITLE}}` / `{{ITEM_X_DESC}}`.

```html
<div style="margin:24px 0;padding:24px;background:rgba(236,72,153,0.08);border:1px solid rgba(236,72,153,0.3);border-radius:12px;">
  <div style="font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#f9a8d4;font-weight:600;margin-bottom:14px;">
    {{LIST_HEADING}}
  </div>
  <div style="margin-bottom:16px;">
    <div style="color:#ffffff;font-size:15px;font-weight:700;margin-bottom:4px;">• {{ITEM_1_TITLE}}</div>
    <div style="color:#a3a3a3;font-size:14px;line-height:1.5;padding-left:14px;">{{ITEM_1_DESC}}</div>
  </div>
  <div style="margin-bottom:16px;">
    <div style="color:#ffffff;font-size:15px;font-weight:700;margin-bottom:4px;">• {{ITEM_2_TITLE}}</div>
    <div style="color:#a3a3a3;font-size:14px;line-height:1.5;padding-left:14px;">{{ITEM_2_DESC}}</div>
  </div>
  <div>
    <div style="color:#ffffff;font-size:15px;font-weight:700;margin-bottom:4px;">• {{ITEM_3_TITLE}}</div>
    <div style="color:#a3a3a3;font-size:14px;line-height:1.5;padding-left:14px;">{{ITEM_3_DESC}}</div>
  </div>
</div>
```

Drop this block inside `{{BODY}}` of Template 1 or 2.

---

## Body paragraph cheat sheet

`{{BODY}}` is one or more `<p>` blocks. Use these styles:

**Normal paragraph (gray):**
```html
<p style="margin:0 0 16px;color:#d4d4d4;font-size:16px;line-height:1.6;">
  Your sentence here.
</p>
```

**Bold emphasis line (white):**
```html
<p style="margin:0 0 16px;color:#ffffff;font-size:16px;line-height:1.6;font-weight:600;">
  Punchline.
</p>
```

**Big emphasis line (white, larger):**
```html
<p style="margin:0 0 16px;color:#ffffff;font-size:18px;line-height:1.6;font-weight:700;">
  Show up.
</p>
```

**Pink emphasis line:**
```html
<p style="margin:24px 0 8px;color:#ec4899;font-size:18px;line-height:1.6;font-weight:700;">
  Don't be late!
</p>
```

**Inline white bold inside a paragraph:**
```html
<p style="margin:0 0 16px;color:#d4d4d4;font-size:16px;line-height:1.6;">
  Build a <strong style="color:#ffffff;">10K-follower brand</strong> in 30 days.
</p>
```

---

## Schedule (May 15 launch)

| Send date | Tagline | Audience |
|---|---|---|
| May 1 | `COUNTDOWN — 14 DAYS OUT` | Viral Besties |
| May 5 | `COUNTDOWN — 10 DAYS OUT` | Viral Besties |
| May 8 | `7 DAYS OUT` | Viral Besties |
| May 12 | `3 DAYS OUT` | Viral Besties |
| May 14 | `TOMORROW` | Viral Besties |
| May 15 (1 hr before) | `GOING LIVE — 1 HOUR` | Viral Besties |

VIP gets same schedule + optional VIP-only sends (replay drops, build-out announcement). If you want VIP isolated → make a second audience and tell me, I'll branch the helper.

---

## Workflow with me

Per send:
1. You write copy in plain text → paste to me.
2. I fill the template → return final HTML.
3. You paste into Resend → set Subject + To + schedule.
