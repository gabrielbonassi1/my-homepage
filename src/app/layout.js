import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Header from "../components/Header"
import Footer from "../components/Footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Gabriel Lujan Bonassi | Desenvolvedor",
  description: "Portfólio de desenvolvedor FullStack",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-background text-text font-display min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
