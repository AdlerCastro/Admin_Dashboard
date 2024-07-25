import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: "800"
});
// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Management Dashboard",
  description: "A management dashboard for companies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className="">
          {children}
        </main>
      </body>
    </html>
  );
}
