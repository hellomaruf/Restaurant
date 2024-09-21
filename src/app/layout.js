import { Poppins, Sanchez } from "next/font/google";
import "./globals.css";
import Nav from "./Shared/Nav";
import Footer from "./Shared/Footer";

export const metadata = {
  title: "Restaurant",
  description: "Generated by create next app",
};

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});
const sanchez = Sanchez({
  weight: [ "400"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={poppins.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
