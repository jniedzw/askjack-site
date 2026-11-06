import { ImageResponse } from "next/og";

// The source of app/opengraph-image.png, the picture shown when someone shares
// askjack.uk on WhatsApp, Facebook or LinkedIn. It lives outside app/ so it isn't built
// as a page: a static site would serve it without ".png", and some apps then ignore it.
// To change the picture: copy this into app/, run npm run build, copy out/opengraph-image
// to app/opengraph-image.png, and move this file back here.
export const dynamic = "force-static";
export const alt = "Ask Jack: your admin, done on WhatsApp";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "70px 80px",
          background: "linear-gradient(180deg, #fff7ed 0%, #ffffff 100%)",
          color: "#0f172a",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", width: 600 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: 16,
                background: "#ea580c",
                color: "white",
                fontSize: 38,
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              J
            </div>
            <div style={{ fontSize: 40, fontWeight: 800 }}>Ask Jack</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", marginTop: 44, fontSize: 64, fontWeight: 800, lineHeight: 1.1, letterSpacing: -1.5 }}>
            <span>Your admin,</span>
            <span>done on</span>
            <span style={{ color: "#ea580c" }}>WhatsApp.</span>
          </div>
          <div style={{ marginTop: 28, fontSize: 28, color: "#64748b", lineHeight: 1.4 }}>
            Jobs, bookings, quotes, invoices and who owes you, for UK tradespeople.
          </div>
        </div>

        <div
          style={{
            width: 380,
            display: "flex",
            flexDirection: "column",
            borderRadius: 36,
            border: "10px solid #0f172a",
            overflow: "hidden",
            background: "#efeae2",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14, background: "#075e54", color: "white", padding: "22px 20px" }}>
            <div style={{ width: 42, height: 42, borderRadius: 21, background: "#ea580c", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 22 }}>
              J
            </div>
            <div style={{ fontSize: 24, fontWeight: 700 }}>Jack</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, padding: "24px 18px 30px", fontSize: 21, lineHeight: 1.35 }}>
            <div style={{ alignSelf: "flex-end", width: 270, background: "#d9fdd3", borderRadius: 14, padding: "12px 16px" }}>
              Quote Mrs Patel bathroom, 3 days, 650 materials
            </div>
            <div style={{ width: 290, background: "white", borderRadius: 14, padding: "12px 16px", display: "flex", flexDirection: "column" }}>
              <span>Draft quote saved:</span>
              <span>bathroom for Mrs Patel,</span>
              <span style={{ fontWeight: 700 }}>£1,497.50</span>
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
