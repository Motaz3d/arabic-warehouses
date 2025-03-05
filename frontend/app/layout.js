import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// بيانات الصفحة الديناميكية
export const metadata = {
  title: {
    en: "Arabic Warehouses",
    ar: "مستودعات أوروبا العربية",
  },
  description: {
    en: "Easily manage Arab stores warehouses",
    ar: "إدارة مستودعات المحلات العربية بسهولة",
  },
};

export default function RootLayout({ children }) {
  // تحديد لغة الصفحة افتراضيًا
  const language = "ar"; // يمكن تغييره لاحقًا ديناميكيًا

  return (
    <html lang={language} dir={language === "ar" ? "rtl" : "ltr"}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <div className="container mt-4">{children}</div>
      </body>
    </html>
  );
}