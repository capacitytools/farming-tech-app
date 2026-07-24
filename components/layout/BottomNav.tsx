"use client";
import { Home, Sprout, PawPrint, BookOpen, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", icon: Home, path: "/" },
  { name: "Crops", icon: Sprout, path: "/crops" },
  { name: "Animals", icon: PawPrint, path: "/animals" },
  { name: "Ebooks", icon: BookOpen, path: "/ebooks" },
  { name: "Profile", icon: User, path: "/profile" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 shadow-lg z-50">
      <div className="flex justify-around items-center h-16 max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          const Icon = item.icon;
          return (
            <Link key={item.name} href={item.path} className="flex flex-col items-center gap-1">
              <Icon 
                size={24} 
                className={isActive ? "text-primary" : "text-gray-400"} 
              />
              <span className={`text-xs ${isActive ? "text-primary font-semibold" : "text-gray-400"}`}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
