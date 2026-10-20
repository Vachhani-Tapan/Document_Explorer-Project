import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        {/* Navbar at the top */}
        <Navbar />

        {/* Sidebar and Page Content */}
        <div className="flex min-h-screen">
          <Sidebar />

          <main className="flex-1 min-w-0">
            {children}
          </main>
        </div>

      </body>
    </html>
  );
}