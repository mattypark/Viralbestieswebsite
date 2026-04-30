import { NextResponse } from "next/server";

// ---------------------------------------------------------------
// Required env vars (set in Vercel → Settings → Environment Variables):
//
//   RESEND_API_KEY            from resend.com/api-keys
//   RESEND_FROM_EMAIL         e.g. "Jayda <jayda@viralbesties.com>"
//                             (domain must be verified in Resend)
//   GOOGLE_SHEET_WEBHOOK_URL  Apps Script web app deployment URL
//
// Optional / future CRM:
//   KIT_API_KEY
//   KIT_FORM_ID
// ---------------------------------------------------------------

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  instagram?: string;
  goal?: string;
  content?: string;
  whatsapp_opt_in?: boolean;
};

export async function POST(req: Request) {
  let data: Payload;
  try {
    data = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const email = (data.email ?? "").trim();
  if (!email) {
    return NextResponse.json({ error: "Email required" }, { status: 400 });
  }

  const tasks: Promise<unknown>[] = [];

  // 1) Append to Google Sheet via Apps Script web app.
  const sheetUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  if (sheetUrl) {
    tasks.push(
      fetch(sheetUrl, {
        method: "POST",
        body: new URLSearchParams({
          name: data.name ?? "",
          email,
          phone: data.phone ?? "",
          instagram: data.instagram ?? "",
          goal: data.goal ?? "",
          content: data.content ?? "",
          whatsapp_opt_in: data.whatsapp_opt_in ? "yes" : "no",
        }),
      }).catch((err) => {
        console.error("sheet write failed", err);
      }),
    );
  }

  // 2) Send confirmation email via Resend HTTP API.
  const resendKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  if (resendKey && fromEmail) {
    tasks.push(
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromEmail,
          to: email,
          subject: "Your seat is saved — see you May 15",
          html: confirmationHtml(data.name),
        }),
      }).catch((err) => {
        console.error("email send failed", err);
      }),
    );
  }

  // 3) (placeholder) CRM subscription that drives the email warm-up
  //    sequence (Day 2 → Day 14 leading to the live event).
  //    Day 1 is the Resend send above; days 2-14 should fire from
  //    Kit / HubSpot / GHL automation triggered when this user is
  //    added to the audience.
  //
  //    Example with Kit (formerly ConvertKit):
  //      const kitKey = process.env.KIT_API_KEY;
  //      const kitFormId = process.env.KIT_FORM_ID;
  //      if (kitKey && kitFormId) {
  //        tasks.push(
  //          fetch(`https://api.convertkit.com/v3/forms/${kitFormId}/subscribe`, {
  //            method: "POST",
  //            headers: { "Content-Type": "application/json" },
  //            body: JSON.stringify({
  //              api_key: kitKey,
  //              email,
  //              first_name: data.name,
  //              fields: {
  //                phone: data.phone,
  //                instagram: data.instagram,
  //                goal: data.goal,
  //                content: data.content,
  //                whatsapp_opt_in: data.whatsapp_opt_in ? "yes" : "no",
  //              },
  //            }),
  //          }).catch((err) => console.error("kit subscribe failed", err)),
  //        );
  //      }

  await Promise.allSettled(tasks);

  return NextResponse.json({ ok: true });
}

// ---------------------------------------------------------------
// Confirmation email — Day 1 of the warm-up sequence.
// TODO: tune copy in Jayda's voice when ready.
// ---------------------------------------------------------------
function confirmationHtml(name?: string): string {
  const firstName = (name ?? "").trim().split(" ")[0] || "beautiful";
  return `<!doctype html>
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
                ✦ Free Masterclass ✦
              </div>
            </td></tr>
            <tr><td style="padding:8px 32px 24px;text-align:center;">
              <h1 style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:28px;line-height:1.2;color:#ffffff;font-weight:bold;">
                Your seat is <em style="color:#ec4899;">saved</em>.
              </h1>
            </td></tr>
            <tr><td style="padding:0 32px 24px;text-align:left;">
              <p style="margin:0 0 16px;color:#d4d4d4;font-size:16px;line-height:1.6;">
                Hey ${escapeHtml(firstName)},
              </p>
              <p style="margin:0 0 16px;color:#d4d4d4;font-size:16px;line-height:1.6;">
                You just saved your spot for the live masterclass where I'll show you exactly how to get your first <strong style="color:#ffffff;">10K followers in 30 days</strong>.
              </p>
              <div style="margin:24px 0;padding:20px;background:rgba(236,72,153,0.08);border:1px solid rgba(236,72,153,0.3);border-radius:12px;">
                <div style="font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#f9a8d4;font-weight:600;margin-bottom:6px;">
                  Mark your calendar
                </div>
                <div style="font-family:Georgia,'Times New Roman',serif;font-size:22px;color:#ffffff;line-height:1.3;">
                  May 15 – 17 · 10am EST
                </div>
              </div>
              <p style="margin:0 0 16px;color:#d4d4d4;font-size:16px;line-height:1.6;">
                Over the next two weeks I'm going to be in your inbox almost every day, getting you primed and ready to actually take action when we go live. Watch for them.
              </p>
              <p style="margin:0 0 16px;color:#d4d4d4;font-size:16px;line-height:1.6;">
                In the meantime — follow me on Instagram and turn on notifications so you don't miss anything.
              </p>
              <p style="margin:24px 0 0;color:#d4d4d4;font-size:16px;line-height:1.6;">
                See you soon,<br/>
                <span style="color:#ec4899;font-family:Georgia,'Times New Roman',serif;font-style:italic;">Jayda</span>
              </p>
            </td></tr>
            <tr><td style="padding:24px 32px;border-top:1px solid rgba(255,255,255,0.06);text-align:center;">
              <p style="margin:0;color:#737373;font-size:11px;line-height:1.5;">
                VIRAL BESTIES CLUB · You're receiving this because you signed up for the free masterclass.
              </p>
            </td></tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) => {
    const map: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return map[c] ?? c;
  });
}
