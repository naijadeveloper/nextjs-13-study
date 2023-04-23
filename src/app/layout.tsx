import Header from "@/components/Header";
import { Poppins } from "next/font/google";
import "@/style/globals.css";

export const metadata = {
  title: "Nextjs-13 study",
  description: "nextjs-13 practice",
  keywords: "nextjs, nextjs13, nextjs-13, typescript, nodejs, node",
};

const pops = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-main",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${pops.variable}`}>
      <body className={`h-screen bg-gray-900 text-gray-200 font-main`}>
        <Header />
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
