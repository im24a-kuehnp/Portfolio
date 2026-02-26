import "./globals.css";

export const metadata = {
  title: "Portfolio",
  description: "Personal portfolio home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="app-body">
        {children}
      </body>
    </html>
  );
}
