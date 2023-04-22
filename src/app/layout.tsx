import Header from "@/components/Header";
import "@/style/globals.css";

export const metadata = {
  title: "Nextjs-13 study",
  description: "nextjs-13 practice",
  keywords: "nextjs, nextjs13, nextjs-13, typescript, nodejs, node",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen bg-gray-900 text-gray-200">
        <Header />
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
