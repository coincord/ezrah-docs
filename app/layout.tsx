import { Footer, Layout, Navbar } from "nextra-theme-docs";
import Image from "next/image";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import type { Metadata } from "next";
import "./global.css";
// import "nextra-theme-docs/style.css";

export const metadata: Metadata = {
  description: "Reusabled Credentials for Verified IDs",
  metadataBase: new URL("https://docs.ezrah.co"),
  keywords: ["VC", "Verifiable Credential", "Decentralized ID"],
  generator: "Next.js",
  applicationName: "Ezrah",
  appleWebApp: {
    title: "Ezrah Portal",
  },
  title: {
    default:
      "Ezrah – Credential and Identity infrastructure for the digital age",
    template: "%s | Ezrah",
  },
  openGraph: {
    // https://github.com/vercel/next.js/discussions/50189#discussioncomment-10826632
    url: "./",
    siteName: "Ezrah",
    locale: "en_US",
    type: "website",
  },
  other: {
    "msapplication-TileColor": "#fff",
  },
  twitter: {
    site: "https://docs.ezrah.co",
  },
  alternates: {
    // https://github.com/vercel/next.js/discussions/50189#discussioncomment-10826632
    canonical: "./",
  },
};
const banner = <Banner storageKey="some-key">Nextra 4.0 is released 🎉</Banner>;
const navbar = (
  <Navbar
    logo={
      <>
        <Image
          src="/img/ezrah-logo-white.png"
          width={50}
          height={50}
          alt="Logo"
          className="px-2"
        />
        <b className="text-2xl">Ezrah Labs</b>
      </>
    }
    // ... Your additional navbar options
  />
);
const footer = (
  <Footer>MIT {new Date().getFullYear()} © Ezrah Technologies, Inc.</Footer>
);

export default async function RootLayout({ children }) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      // suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          // banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          footer={footer}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
