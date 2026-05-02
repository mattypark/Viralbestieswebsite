// ---------------------------------------------------------------
// Adds a contact to the default Resend audience so they can be
// included in scheduled Broadcasts (countdown emails on May 13/14/15).
//
// Looks up the first audience on the account at runtime — no
// audience ID needed in env vars. Cached in-memory so repeat calls
// don't re-fetch the audience list.
//
// Required env var: RESEND_API_KEY
// ---------------------------------------------------------------

let cachedAudienceId: string | null = null;

async function resolveAudienceId(apiKey: string): Promise<string | null> {
  if (cachedAudienceId) return cachedAudienceId;

  const res = await fetch("https://api.resend.com/audiences", {
    headers: { Authorization: `Bearer ${apiKey}` },
  }).catch(() => null);

  if (!res || !res.ok) return null;

  const json = (await res.json().catch(() => null)) as
    | { data?: Array<{ id: string }> }
    | null;
  const id = json?.data?.[0]?.id ?? null;
  if (id) cachedAudienceId = id;
  return id;
}

export async function addToResendAudience(
  email: string,
  name?: string,
): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return;

  const audienceId = await resolveAudienceId(apiKey);
  if (!audienceId) {
    console.error("resend audience lookup failed — no audience found");
    return;
  }

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
