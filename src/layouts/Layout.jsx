import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      
      <Header />

      <main className="flex-1 container mx-auto px-6 py-12">
        <Outlet />
      </main>

      <Footer />

    </div>
  );
}