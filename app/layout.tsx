import { Footer, Navbar } from "@/components";
import "./globals.css";

export const metadata = {
  title: "Straw Bag",
  description: "Find the best bag of your choice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
