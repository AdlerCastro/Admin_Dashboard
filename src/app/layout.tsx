import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { getServerSession } from "next-auth";

import ReactQueryProvier from "@/utils/ReactQueryProvider";
import SessionProvider from "@/utils/SessionProvider";

import "./globals.css";
import { ThemeProvider } from "@/utils/ThemeProvider";

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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <ReactQueryProvier>
            <SessionProvider session={session}>
              <main>
                {children}
              </main>
            </SessionProvider>
          </ReactQueryProvier>
        </ThemeProvider>  
      </body>
    </html>
  );
}
