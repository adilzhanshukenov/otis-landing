import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import Script from "next/script";
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
      <body className="min-h-full flex flex-col">
        <Script id="meta-pixel-base" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '27436748602630625');
fbq('track', 'PageView');`}
        </Script>

        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=27436748602630625&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}
