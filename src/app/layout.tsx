import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { getServerSession } from "next-auth";

import SideBar from "@/components/organisms/SideBar";
import ReactQueryProvier from "@/utils/ReactQueryProvider";
import SessionProvider from "@/utils/SessionProvider";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['100', "200", "300", "400", "500", "600", "700", "800", "900"]
});
// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Management Dashboard",
  description: "A management dashboard for companies.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await getServerSession();

  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <ReactQueryProvier>
          <SessionProvider session={session}>
            <main>
              {children}
            </main>
          </SessionProvider>
        </ReactQueryProvier>
      </body>
    </html>
  );
}
