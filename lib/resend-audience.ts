// ---------------------------------------------------------------
// Adds a contact to the Resend audience so they can be included
// in scheduled Broadcasts (countdown emails leading to May 15).
//
// Required env vars:
//   RESEND_API_KEY
//   RESEND_AUDIENCE_ID
// ---------------------------------------------------------------

export async function addToResendAudience(
  email: string,
  name?: string,
): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;
  if (!apiKey || !audienceId) return;

  const [firstName, ...rest] = (name ?? "").trim().split(/\s+/);
  const lastName = rest.join(" ");

  const res = await fetch(
    `https://api.resend.com/audiences/${audienceId}/contacts`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        first_name: firstName || undefined,
        last_name: lastName || undefined,
        unsubscribed: false,
      }),
    },
  ).catch((err) => {
    console.error("resend audience add failed", err);
    return null;
  });

  if (res && !res.ok && res.status !== 409) {
    // 409 = contact already exists, which is fine.
    const body = await res.text().catch(() => "");
    console.error("resend audience add non-ok", res.status, body);
  }
}
