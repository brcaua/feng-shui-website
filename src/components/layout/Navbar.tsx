"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, User, Settings } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();

  // Usar sempre URLs absolutas para evitar erros de hidratação
  const menuItems = [
    { label: "Início", href: "/" },
    { label: "Serviços", href: "/#services" },
    { label: "Sobre", href: "/#about" },
    { label: "Depoimentos", href: "/#testimonials" },
    { label: "Contato", href: "/#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-primary-600">
                Mestre Akira
                <span className="block text-xs text-gray-600 font-normal">
                  Feng Shui & Astrologia Chinesa
                </span>
              </h1>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {isAuthenticated && (
                <div className="flex items-center space-x-2">
                  <div className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    <User size={16} className="mr-1" />
                    Admin
                  </div>
                  <Link
                    href="/admin/dashboard"
                    className="text-gray-600 hover:text-blue-600 p-2 rounded-full hover:bg-gray-100"
                    title="Painel Admin"
                  >
                    <Settings size={20} />
                  </Link>
                  <button
                    onClick={logout}
                    className="text-gray-600 hover:text-red-600 text-sm"
                  >
                    Sair
                  </button>
                </div>
              )}
              {!isAuthenticated && (
                <a
                  href="https://wa.me/5541991160348?text=Olá,%20Professor%20Luiz%20Carlos%20Akira!%20Gostaria%20de%20saber%20mais%20sobre%20as%20consultorias."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                >
                  WhatsApp
                </a>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-200 space-y-3">
              {isAuthenticated && (
                <div className="space-y-2">
                  <div className="flex items-center bg-blue-100 text-blue-800 px-3 py-2 rounded-full text-sm">
                    <User size={16} className="mr-2" />
                    Logado como Admin
                  </div>
                  <Link
                    href="/admin/dashboard"
                    className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Settings size={20} className="mr-2" />
                    Painel Admin
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setIsMenuOpen(false);
                    }}
                    className="w-full text-left text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-base font-medium"
                  >
                    Sair
                  </button>
                </div>
              )}
              {!isAuthenticated && (
                <a
                  href="https://wa.me/5541991160348?text=Olá,%20Professor%20Luiz%20Carlos%20Akira!%20Gostaria%20de%20saber%20mais%20sobre%20as%20consultorias."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white block px-3 py-2 rounded-lg text-base font-medium transition-colors duration-200 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  WhatsApp
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
