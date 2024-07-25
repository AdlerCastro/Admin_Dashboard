import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/organisms/SideBar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['100', "200", "300", "400", "500", "600", "700", "800", "900"]
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
        <SideBar />
        <main className="w-full h-full">
          {children}
        </main>
      </body>
    </html>
  );
}
