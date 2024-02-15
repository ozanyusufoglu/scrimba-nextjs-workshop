import { Karla } from "next/font/google";
import Header from "./components/header/header";
import Footer from "./components/footer/Footer";
import "./globals.css";

const karla = Karla({ subsets: ["latin"] });
export const metadata = {
  title: "Nextjs workshop for Scrimba",
  description: "Author: Ozan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={karla.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
