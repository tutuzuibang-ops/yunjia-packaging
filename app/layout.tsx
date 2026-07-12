import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shenzhen Yunjia Packaging Products Co., Ltd.",
  description: "Custom packaging website built with Next.js and Tailwind CSS."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <body className="font-sans antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html: `try{const t=localStorage.getItem('theme');const d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d)}catch(e){}`
          }}
        />
        {children}
      </body>
    </html>
  );
}
