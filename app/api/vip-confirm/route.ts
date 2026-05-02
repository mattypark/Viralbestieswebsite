import { NextResponse } from "next/server";

// ---------------------------------------------------------------
// VIP confirmation email — sent after successful Fanbasis checkout.
//
// Wire this to Fanbasis as a webhook on the "purchase.completed"
// event. Expected payload: { email: string, name?: string }.
// If Fanbasis sends a different shape, adapt the mapping below.
//
// Required env vars (already shared with /api/waitlist):
//   RESEND_API_KEY
//   RESEND_FROM_EMAIL
// ---------------------------------------------------------------

type Payload = {
  email?: string;
  name?: string;
  // Fanbasis-style alternates — accept whichever keys it sends.
  customer_email?: string;
  customer_name?: string;
};

export async function POST(req: Request) {
  let data: Payload;
  try {
    data = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const email = (data.email ?? data.customer_email ?? "").trim();
  if (!email) {
    return NextResponse.json({ error: "Email required" }, { status: 400 });
  }

  const resendKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  if (!resendKey || !fromEmail) {
    console.error("Resend env vars missing");
    return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: email,
      subject: "You're in (and you did it the smart way)",
      html: vipConfirmationHtml(),
    }),
  }).catch((err) => {
    console.error("vip email send failed", err);
    return null;
  });

  if (!res || !res.ok) {
    return NextResponse.json({ error: "Email send failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

function vipConfirmationHtml(): string {
  return `<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#0a0a0a;font-family:Helvetica,Arial,sans-serif;color:#ffffff;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;">
      <tr>
        <td align="center" style="padding:40px 20px;">
          <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;background:#0f0f0f;border:1px solid rgba(236,72,153,0.4);border-radius:16px;overflow:hidden;">
            <tr><td style="padding:32px 32px 8px;text-align:center;">
              <div style="font-family:Georgia,'Times New Roman',serif;font-size:48px;font-weight:bold;line-height:1;letter-spacing:-1px;">
                <span style="color:#ffffff;">J</span><span style="color:#ec4899;">J</span>
              </div>
            </td></tr>
            <tr><td style="padding:8px 32px;text-align:center;">
              <div style="font-size:11px;letter-spacing:0.25em;text-transform:uppercase;color:#f9a8d4;font-weight:600;">
                ✦ VIP Access Confirmed ✦
              </div>
            </td></tr>
            <tr><td style="padding:8px 32px 24px;text-align:center;">
              <h1 style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:30px;line-height:1.2;color:#ffffff;font-weight:bold;">
                You're <em style="color:#ec4899;">in</em> <span style="color:#d4d4d4;font-size:22px;font-style:italic;">(and you did it the smart way)</span>
              </h1>
            </td></tr>
            <tr><td style="padding:0 32px 24px;text-align:left;">
              <p style="margin:0 0 16px;color:#d4d4d4;font-size:16px;line-height:1.6;">
                You're officially registered for the training.
              </p>
              <p style="margin:0 0 16px;color:#ffffff;font-size:16px;line-height:1.6;font-weight:600;">
                And you upgraded to VIP.
              </p>
              <p style="margin:0 0 16px;color:#d4d4d4;font-size:16px;line-height:1.6;">
                That matters.
              </p>
              <p style="margin:0 0 16px;color:#d4d4d4;font-size:16px;line-height:1.6;">
                Because most people will sign up, show up, and try to remember everything in one sitting…
              </p>
              <p style="margin:0 0 16px;color:#d4d4d4;font-size:16px;line-height:1.6;">
                …and then lose it by the next day.
              </p>
              <p style="margin:0 0 24px;color:#ffffff;font-size:16px;line-height:1.6;font-weight:600;">
                You're not doing that.
              </p>

              <div style="margin:24px 0;padding:24px;background:rgba(236,72,153,0.08);border:1px solid rgba(236,72,153,0.3);border-radius:12px;">
                <div style="font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#f9a8d4;font-weight:600;margin-bottom:14px;">
                  Here's what you now have access to
                </div>

                <div style="margin-bottom:16px;">
                  <div style="color:#ffffff;font-size:15px;font-weight:700;margin-bottom:4px;">• Full replay access</div>
                  <div style="color:#a3a3a3;font-size:14px;line-height:1.5;padding-left:14px;">
                    So you can go back, rewatch, and actually apply what you learn instead of relying on memory
                  </div>
                </div>

                <div style="margin-bottom:16px;">
                  <div style="color:#ffffff;font-size:15px;font-weight:700;margin-bottom:4px;">• Priority Q&amp;A</div>
                  <div style="color:#a3a3a3;font-size:14px;line-height:1.5;padding-left:14px;">
                    Your questions get seen and answered first so you leave with clarity, not confusion
                  </div>
                </div>

                <div style="margin-bottom:16px;">
                  <div style="color:#ffffff;font-size:15px;font-weight:700;margin-bottom:4px;">• Entry into the live brand buildout</div>
                  <div style="color:#a3a3a3;font-size:14px;line-height:1.5;padding-left:14px;">
                    One VIP attendee will be selected to have their content, positioning, and offer mapped out live
                  </div>
                </div>

                <div>
                  <div style="color:#ffffff;font-size:15px;font-weight:700;margin-bottom:4px;">• First access to what's next</div>
                  <div style="color:#a3a3a3;font-size:14px;line-height:1.5;padding-left:14px;">
                    You'll be the first to see and access the next step before it opens publicly
                  </div>
                </div>
              </div>

              <p style="margin:24px 0 8px;color:#d4d4d4;font-size:16px;line-height:1.6;">
                Here's what I need from you now:
              </p>
              <p style="margin:0 0 16px;color:#ffffff;font-size:18px;line-height:1.6;font-weight:700;">
                Show up live.
              </p>
              <p style="margin:0 0 16px;color:#d4d4d4;font-size:16px;line-height:1.6;">
                Block the time, remove distractions, and come ready to pay attention.
              </p>
              <p style="margin:0 0 8px;color:#d4d4d4;font-size:16px;line-height:1.6;">
                Because this isn't about collecting information.
              </p>
              <p style="margin:0 0 24px;color:#ffffff;font-size:16px;line-height:1.6;font-weight:600;">
                It's about finally understanding what to do, and then actually doing it.
              </p>

              <div style="margin:24px 0;padding:20px;background:rgba(236,72,153,0.08);border:1px solid rgba(236,72,153,0.3);border-radius:12px;">
                <div style="font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#f9a8d4;font-weight:600;margin-bottom:6px;">
                  Mark your calendar
                </div>
                <div style="font-family:Georgia,'Times New Roman',serif;font-size:22px;color:#ffffff;line-height:1.3;">
                  May 15 · 10am EST
                </div>
              </div>

              <p style="margin:24px 0 8px;color:#ec4899;font-size:18px;line-height:1.6;font-weight:700;">
                Don't be late!
              </p>
              <p style="margin:0;color:#d4d4d4;font-size:16px;line-height:1.6;">
                I'll see you there,<br/>
                <span style="color:#ec4899;font-family:Georgia,'Times New Roman',serif;font-style:italic;font-size:20px;">Jayda</span>
              </p>
            </td></tr>
            <tr><td style="padding:24px 32px;border-top:1px solid rgba(255,255,255,0.06);text-align:center;">
              <p style="margin:0;color:#737373;font-size:11px;line-height:1.5;">
                VIRAL BESTIES CLUB · You're receiving this because you upgraded to VIP for the masterclass.
              </p>
            </td></tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
