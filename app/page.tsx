import BottomNav from "@/components/layout/BottomNav";
import { Search, Bell, Sprout, PawPrint, Brain, BookOpen } from "lucide-react";

export default function HomePage() {
  return (
    <main className="pb-20"> {/* pb-20 leaves room for the bottom nav */}
      
      {/* Header */}
      <header className="bg-primary text-white p-4 flex justify-between items-center sticky top-0 z-40">
        <h1 className="text-xl font-bold">FarmTech 🌱</h1>
        <div className="flex gap-4">
          <Bell size={24} />
          <Search size={24} />
        </div>
      </header>

      {/* Welcome Banner */}
      <section className="bg-cream p-6 m-4 rounded-card shadow-md">
        <h2 className="text-2xl font-bold text-primary">Welcome, Farmer! 🚜</h2>
        <p className="text-gray-600 mt-2">Powered by AI. Grow smarter, earn more.</p>
      </section>

      {/* Quick Actions */}
      <section className="px-4 mt-6">
        <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-4 gap-4">
          <QuickAction icon={<Sprout size={28} />} label="Crops" color="bg-green-100 text-green-700" />
          <QuickAction icon={<PawPrint size={28} />} label="Animals" color="bg-orange-100 text-orange-700" />
          <QuickAction icon={<Brain size={28} />} label="AI Help" color="bg-purple-100 text-purple-700" />
          <QuickAction icon={<BookOpen size={28} />} label="Ebooks" color="bg-blue-100 text-blue-700" />
        </div>
      </section>

      {/* Bottom Navigation */}
      <BottomNav />
    </main>
  );
}

// A small reusable component for the buttons
function QuickAction({ icon, label, color }: any) {
  return (
    <button className={`flex flex-col items-center justify-center p-4 rounded-card ${color} shadow-sm active:scale-95 transition-transform`}>
      {icon}
      <span className="text-xs font-semibold mt-2">{label}</span>
    </button>
  );
}
