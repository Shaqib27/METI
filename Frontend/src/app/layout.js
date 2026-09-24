import "./globals.css";

export const metadata = {
  title: "METI",
  description: "Modus Enterprise Talent Intelligence",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}