import Navbar from "@/app/Navbar";
import BackToHomePage from "../components/backToHomePage";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="lightModeBackground lightModeText">
        <Navbar></Navbar>
        {/* @ts-ignore */}
        <BackToHomePage></BackToHomePage>
        {children}
      </body>
    </html>
  );
}
