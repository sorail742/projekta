import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "PROJEKTA | Innovation • Technology • Projects";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FFFFFF",
          padding: "60px 80px",
          position: "relative",
        }}
      >
        {/* Liseré géométrique d'arrière-plan */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "8px",
            background: "linear-gradient(90deg, #4FA764 0%, #3D74AC 100%)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid rgba(24, 24, 24, 0.08)",
            borderRadius: "32px",
            padding: "50px 70px",
            backgroundColor: "#F7F8FA",
            width: "100%",
            height: "100%",
          }}
        >
          {/* Logo Symbol + Brand */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
              marginBottom: "32px",
            }}
          >
            {/* Emblème SVG */}
            <svg
              width="80"
              height="80"
              viewBox="0 0 160 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="55"
                y="40"
                width="46"
                height="46"
                rx="7"
                transform="rotate(45 55 40)"
                stroke="#4FA764"
                strokeWidth="7"
              />
              <path
                d="M 85,38 C 118,48 135,75 130,110 C 126,138 102,152 75,148"
                stroke="#3D74AC"
                strokeWidth="7"
                strokeLinecap="round"
              />
            </svg>

            <span
              style={{
                fontSize: "64px",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                color: "#181818",
              }}
            >
              PROJEKTA
            </span>
          </div>

          {/* Baseline */}
          <div
            style={{
              fontSize: "16px",
              fontWeight: 600,
              letterSpacing: "0.26em",
              color: "#4FA764",
              textTransform: "uppercase",
              marginBottom: "24px",
            }}
          >
            INNOVATION · TECHNOLOGY · PROJECTS
          </div>

          {/* Slogan */}
          <div
            style={{
              fontSize: "28px",
              fontWeight: 300,
              color: "#444444",
              textAlign: "center",
              maxWidth: "800px",
            }}
          >
            Donnons vie à vos idées grâce au numérique.
          </div>

          {/* Expertises en bas */}
          <div
            style={{
              display: "flex",
              gap: "24px",
              marginTop: "40px",
              paddingTop: "24px",
              borderTop: "1px solid rgba(24, 24, 24, 0.08)",
              fontSize: "14px",
              color: "#777777",
            }}
          >
            <span>Dév Web & Mobile</span>
            <span>•</span>
            <span>Identité Visuelle</span>
            <span>•</span>
            <span>Communication Digitale</span>
            <span>•</span>
            <span>Formations</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
