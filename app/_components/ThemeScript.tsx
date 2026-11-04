"use client";

// Runs while the HTML is parsed, before first paint, so the page never flashes
// the wrong theme. Uses the saved choice if there is one, otherwise the OS setting.
const themeScript = `(function(){var t;try{t=localStorage.getItem("theme")}catch(e){}if(t!=="light"&&t!=="dark")t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.setAttribute("data-theme",t)})()`;

// In the server's HTML this is a real script, so the browser runs it. When React
// renders it in the browser, scripts wouldn't run anyway and React warns about
// them, so it's marked as plain text. This must be a client component, because a
// server component would never reach the browser branch.
export default function ThemeScript() {
  return (
    <script
      type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: themeScript }}
    />
  );
}
