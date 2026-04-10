import { Suspense } from "react";
import Header from "../components/Header";
import BreakingNews from "../components/BreakingNews";
import Navbar from "../components/Navbar";



export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen">
      <Header />
    
      <Suspense fallback={null}>
        <BreakingNews />
      </Suspense>
   
      <Suspense fallback={null}>
        <Navbar />
      </Suspense>
      <main className="max-w-7xl mx-auto px-4 py-6">{children}</main>
    </div>
  );
}
