import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "ОТИС - Видеонаблюдение для бизнеса",
  description:
    "Видеонаблюдение под ключ для бизнеса по всему Казахстану: проект, монтаж и сервисное обслуживание.",
  icons: {
    icon: "/icons/logo/RGB/Logo_RGB_v.png",
    shortcut: "/icons/logo/RGB/Logo_RGB_v.png",
    apple: "/icons/logo/RGB/Logo_RGB_v.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${robotoCondensed.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
