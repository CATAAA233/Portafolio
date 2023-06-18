import "./globals.css";
import "@/fonts/fonts.css";

export const metadata = {
  title: "Portafolio",
  description: "My name is Daniel, and this is my portafolio, Nice to meet you",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <body>{children}</body>
    </html>
  );
}
