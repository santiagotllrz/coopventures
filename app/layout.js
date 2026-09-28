import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "CoopVentures® — Aceleradora Cooperativa de Startups",
  description:
    "El capital semilla no debería costarte el control de tu empresa. CoopVentures acelera tu startup, protege tu equity y financia el futuro en red mediante un modelo cooperativo de revenue-sharing.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={inter.variable}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
