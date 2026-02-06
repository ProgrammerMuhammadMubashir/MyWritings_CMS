"use client"

const ThemeAndFontAdmin = async () => {
  
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

  const res = await fetch(`${BASE_URL}/api/settingManager`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ msg: "Send data" }),
  })

  const data = await res.json()
  const root = document.documentElement.style

  /* =====================================================
     ELEGANT
  ===================================================== */
  if (data.theme === "Elegant") {

    root.setProperty("--bg", "#1c1b19")
    root.setProperty("--bg-dark", "#171614")
    root.setProperty("--text", "#e0ddd8")

    root.setProperty("--primary", "#f5c77a")
    root.setProperty("--primary-variant", "#eab86a")
    root.setProperty("--primary-2", "#f8ddb0")
    root.setProperty("--primary-3", "#fff1d6")

    root.setProperty("--primary-15", "rgba(245,199,122,0.15)")
    root.setProperty("--primary-20", "rgba(245,199,122,0.2)")
    root.setProperty("--primary-30", "rgba(245,199,122,0.3)")
    root.setProperty("--primary-40", "rgba(245,199,122,0.4)")
    root.setProperty("--primary-50", "rgba(245,199,122,0.5)")
    root.setProperty("--primary-60", "rgba(245,199,122,0.6)")

    root.setProperty("--secondary", "#e7a6a1")
    root.setProperty("--secondary-15", "rgba(231,166,161,0.15)")
    root.setProperty("--secondary-18", "rgba(231,166,161,0.18)")
    root.setProperty("--secondary-35", "rgba(231,166,161,0.35)")

    root.setProperty("--surface", "#141311")
    root.setProperty("--surface-2", "#1a1916")
    root.setProperty("--surface-variant", "#221f1a")
    root.setProperty("--panel-bg", "#100f0d")

    root.setProperty("--input-border", "#2a2824")
    root.setProperty("--border-strong", "#3a372f")

    root.setProperty("--box-outline", "rgba(255,255,255,0.035)")
    root.setProperty("--box-outline-2", "rgba(255,255,255,0.07)")
    root.setProperty("--box-outline-3", "rgba(255,255,255,0.14)")
    root.setProperty("--box-outline-strong", "rgba(255,255,255,0.05)")

    root.setProperty("--box-shadow", "rgba(0,0,0,0.55)")
    root.setProperty("--box-shadow-strong", "rgba(0,0,0,0.65)")

    root.setProperty("--muted", "#a8a39b")
    root.setProperty("--muted-2", "#b6b1a9")
    root.setProperty("--muted-3", "#f1efe9")
    root.setProperty("--muted-alt", "#c2bdb4")

    root.setProperty("--text-on-primary", "#2a1e0c")
    root.setProperty("--text-on-primary-light", "#fffaf0")

    root.setProperty("--success", "#7ad9a3")
    root.setProperty("--success-15", "rgba(122,217,163,0.15)")
    root.setProperty("--danger", "#e57373")
    root.setProperty("--danger-15", "rgba(229,115,115,0.15)")

    root.setProperty("--overlay-05", "rgba(255,255,255,0.035)")
  }

  /* =====================================================
     MODERN
  ===================================================== */
  else if (data.theme === "Modern") {

    root.setProperty("--bg", "#0b1220")
    root.setProperty("--bg-dark", "#0a0f1c")
    root.setProperty("--text", "#e2e8f0")

    root.setProperty("--primary", "#38bdf8")
    root.setProperty("--primary-variant", "#0ea5e9")
    root.setProperty("--primary-2", "#7dd3fc")
    root.setProperty("--primary-3", "#bae6fd")

    root.setProperty("--primary-15", "rgba(56,189,248,0.15)")
    root.setProperty("--primary-20", "rgba(56,189,248,0.2)")
    root.setProperty("--primary-30", "rgba(56,189,248,0.3)")
    root.setProperty("--primary-40", "rgba(56,189,248,0.4)")
    root.setProperty("--primary-50", "rgba(56,189,248,0.5)")
    root.setProperty("--primary-60", "rgba(56,189,248,0.6)")

    root.setProperty("--secondary", "#22d3ee")
    root.setProperty("--secondary-15", "rgba(34,211,238,0.15)")
    root.setProperty("--secondary-18", "rgba(34,211,238,0.18)")
    root.setProperty("--secondary-35", "rgba(34,211,238,0.35)")

    root.setProperty("--surface", "#0f172a")
    root.setProperty("--surface-2", "#111827")
    root.setProperty("--surface-variant", "#020617")
    root.setProperty("--panel-bg", "#020617")

    root.setProperty("--input-border", "#1e293b")
    root.setProperty("--border-strong", "#334155")

    root.setProperty("--box-outline", "rgba(255,255,255,0.06)")
    root.setProperty("--box-outline-2", "rgba(255,255,255,0.12)")
    root.setProperty("--box-outline-3", "rgba(255,255,255,0.24)")
    root.setProperty("--box-outline-strong", "rgba(255,255,255,0.08)")

    root.setProperty("--box-shadow", "rgba(2,6,23,0.6)")
    root.setProperty("--box-shadow-strong", "rgba(2,6,23,0.75)")

    root.setProperty("--muted", "#94a3b8")
    root.setProperty("--muted-2", "#64748b")
    root.setProperty("--muted-3", "#e5e7eb")
    root.setProperty("--muted-alt", "#cbd5f5")

    root.setProperty("--text-on-primary", "#020617")
    root.setProperty("--text-on-primary-light", "#f8fafc")

    root.setProperty("--success", "#22c55e")
    root.setProperty("--success-15", "rgba(34,197,94,0.15)")
    root.setProperty("--danger", "#f43f5e")
    root.setProperty("--danger-15", "rgba(244,63,94,0.15)")

    root.setProperty("--overlay-05", "rgba(255,255,255,0.05)")
  }
  else if (data.theme === "Default") {

  root.setProperty("--bg", "rgb(34,34,34)")
  root.setProperty("--bg-dark", "#222222")
  root.setProperty("--text", "rgb(204,204,204)")

  root.setProperty("--primary", "#00bfff")
  root.setProperty("--primary-variant", "#009fff")
  root.setProperty("--primary-2", "#00d4ff")
  root.setProperty("--primary-3", "#00e0ff")

  root.setProperty("--primary-15", "rgba(0,191,255,0.15)")
  root.setProperty("--primary-20", "rgba(0,191,255,0.2)")
  root.setProperty("--primary-30", "rgba(0,191,255,0.3)")
  root.setProperty("--primary-40", "rgba(0,191,255,0.4)")
  root.setProperty("--primary-50", "rgba(0,191,255,0.5)")
  root.setProperty("--primary-60", "rgba(0,191,255,0.6)")

  root.setProperty("--secondary", "#38bdf8")
  root.setProperty("--secondary-15", "rgba(56,189,248,0.15)")
  root.setProperty("--secondary-18", "rgba(56,189,248,0.18)")
  root.setProperty("--secondary-35", "rgba(56,189,248,0.35)")

  root.setProperty("--surface", "#0b0b0b")
  root.setProperty("--surface-2", "#111")
  root.setProperty("--surface-variant", "#0f172a")
  root.setProperty("--panel-bg", "#020617")

  root.setProperty("--input-border", "#222")
  root.setProperty("--border-strong", "#333")

  root.setProperty("--box-outline", "rgba(255,255,255,0.05)")
  root.setProperty("--box-outline-2", "rgba(255,255,255,0.1)")
  root.setProperty("--box-outline-3", "rgba(255,255,255,0.2)")
  root.setProperty("--box-outline-strong", "rgba(255,255,255,0.06)")

  root.setProperty("--box-shadow", "rgba(0,0,0,0.45)")
  root.setProperty("--box-shadow-strong", "rgba(0,0,0,0.55)")

  root.setProperty("--muted", "#aaa")
  root.setProperty("--muted-2", "#94a3b8")
  root.setProperty("--muted-3", "#e5e7eb")
  root.setProperty("--muted-alt", "#9ca3af")

  root.setProperty("--text-on-primary", "#111")
  root.setProperty("--text-on-primary-light", "#f8f8f8")

  root.setProperty("--success", "#4ade80")
  root.setProperty("--success-15", "rgba(34,197,94,0.15)")
  root.setProperty("--danger", "#ef4444")
  root.setProperty("--danger-15", "rgba(239,68,68,0.15)")

  root.setProperty("--overlay-05", "rgba(255,255,255,0.05)")
}
let Theme=data.theme
return Theme
}

export default ThemeAndFontAdmin
