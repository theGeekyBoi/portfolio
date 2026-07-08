import { ImageResponse } from "next/og";
import { site } from "@/content/site";

// The social "preview image" shown when the site is shared (iMessage, Slack,
// LinkedIn, X, etc.). Generated on-brand from content/site.ts, so it updates
// automatically when the name/tagline change — no static file to maintain.

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Every glyph rendered below — used to request a subset of each web font.
const GLYPHS = `${site.name}${site.tagline}${site.blurb}${site.monogram}~ $ whoami·—▌`;

/**
 * Fetch a Google font as a TrueType buffer for Satori. Google serves TTF to
 * unrecognized user agents (like the default fetch UA), which is what Satori
 * needs. Returns null on any failure so the image still renders with fallbacks
 * and the build never breaks.
 */
async function loadFont(family: string, weight: number) {
  try {
    const url = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(
      family
    )}:wght@${weight}&text=${encodeURIComponent(GLYPHS)}`;
    const css = await (await fetch(url)).text();
    const src = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/);
    if (!src) return null;
    const res = await fetch(src[1]);
    if (!res.ok) return null;
    return await res.arrayBuffer();
  } catch {
    return null;
  }
}

export default async function OpengraphImage() {
  const [grotesk, mono] = await Promise.all([
    loadFont("Space Grotesk", 700),
    loadFont("IBM Plex Mono", 500),
  ]);

  const fonts: { name: string; data: ArrayBuffer; weight: 700 | 500; style: "normal" }[] =
    [];
  if (grotesk) fonts.push({ name: "Grotesk", data: grotesk, weight: 700, style: "normal" });
  if (mono) fonts.push({ name: "Mono", data: mono, weight: 500, style: "normal" });

  const display = grotesk ? "Grotesk" : "sans-serif";
  const terminal = mono ? "Mono" : "monospace";

  const accent = "#34d399";
  const line = "rgba(255,255,255,0.12)";

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          padding: 48,
          backgroundColor: "#09090b",
          backgroundImage:
            "radial-gradient(1100px circle at 82% 12%, rgba(52,211,153,0.16), transparent 55%)",
          color: "#f4f4f5",
        }}
      >
        {/* Terminal-style framed panel */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flex: 1,
            border: `1px solid ${line}`,
            borderRadius: 10,
            padding: 64,
          }}
        >
          {/* Prompt */}
          <div
            style={{
              display: "flex",
              fontFamily: terminal,
              fontSize: 28,
              color: accent,
              letterSpacing: 1,
            }}
          >
            ~ $ whoami▌
          </div>

          {/* Name + tagline */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontFamily: display,
                fontWeight: 700,
                fontSize: 120,
                letterSpacing: -3,
                lineHeight: 1,
              }}
            >
              {site.name}
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 28,
                fontFamily: terminal,
                fontSize: 30,
                color: accent,
                letterSpacing: 2,
              }}
            >
              {site.tagline}
            </div>
          </div>

          {/* Footer: blurb + monogram badge */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                maxWidth: 760,
                fontFamily: terminal,
                fontSize: 24,
                color: "#a1a1aa",
                lineHeight: 1.4,
              }}
            >
              {site.blurb}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 68,
                height: 68,
                borderRadius: 8,
                border: `1px solid ${line}`,
                fontFamily: terminal,
                fontSize: 26,
                color: accent,
              }}
            >
              {site.monogram}
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size, fonts: fonts.length ? fonts : undefined }
  );
}
