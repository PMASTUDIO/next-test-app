import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import AuthProvider from "./auth/Provider";

// const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-theme="cupcake" lang="en">
      <body className={roboto.className}>
        <AuthProvider>
          <Navbar />
          <main className="p-5">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
