'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LINKS, NAV_LINKS, SOCIALS } from "@/constants";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfilesOpen, setIsProfilesOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <nav className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/30 bg-[#030014]/60 backdrop-blur-md z-50 px-4 sm:px-6 md:px-10 border-b border-purple-900/20">
      {/* Navbar Container */}
      <div className="w-full h-full max-w-7xl flex items-center justify-between m-auto">
        {/* Logo + Name */}
        <Link
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-10 h-10 rounded-full overflow-hidden border border-purple-500/40 p-0.5 group-hover:border-cyan-400 transition-colors flex-shrink-0 flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={40}
              height={40}
              priority
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <span className="font-bold text-gray-200 group-hover:text-white transition-colors tracking-wide text-sm sm:text-base">
            Satya Dev
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center justify-center">
          <div className="flex items-center gap-6 lg:gap-8 border border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.5)] px-6 py-2 rounded-full text-gray-300 text-sm backdrop-blur-sm relative">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                onClick={(e) => handleNavClick(e, link.link)}
                className="cursor-pointer hover:text-cyan-300 transition-colors"
              >
                {link.title}
              </Link>
            ))}

            {/* Profiles Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsProfilesOpen(true)}
              onMouseLeave={() => setIsProfilesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setIsProfilesOpen(!isProfilesOpen)}
                className="cursor-pointer hover:text-cyan-300 transition-colors flex items-center gap-1 focus:outline-none"
              >
                Profiles
                <span className="text-[10px] opacity-70 transition-transform duration-200" style={{ transform: isProfilesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>▼</span>
              </button>

              <AnimatePresence>
                {isProfilesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full -left-6 mt-3 w-48 bg-[#07041c]/95 backdrop-blur-xl border border-purple-500/30 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] p-2 flex flex-col gap-1 z-50"
                  >
                    {SOCIALS.map(({ link, name, icon: Icon }) => (
                      <Link
                        key={name}
                        href={link}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium text-gray-300 hover:text-cyan-300 hover:bg-purple-900/30 transition-all group"
                      >
                        <div className="w-5 h-5 flex items-center justify-center text-gray-400 group-hover:text-cyan-300">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="flex-1">{name}</span>
                        <span className="text-[10px] text-gray-500 group-hover:text-cyan-400">↗</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href={LINKS.buyCoffee}
              target="_blank"
              rel="noreferrer noopener"
              className="cursor-pointer hover:text-purple-300 transition-colors whitespace-nowrap text-cyan-400"
            >
              ☕ Coffee
            </Link>
          </div>
        </div>

        {/* Social Icons (Desktop) */}
        <div className="hidden md:flex flex-row items-center gap-3">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
              aria-label={name}
              className="text-gray-400 hover:text-cyan-300 hover:scale-110 transition-all p-1.5 rounded-lg hover:bg-purple-900/20"
            >
              <Icon className="h-5 w-5" />
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          aria-label="Toggle navigation menu"
          className="md:hidden text-gray-200 hover:text-white p-2 text-2xl focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 top-[65px] bg-black/60 backdrop-blur-sm md:hidden z-40"
            />
            
            {/* Menu Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-[65px] left-0 w-full bg-[#030014]/95 backdrop-blur-xl border-b border-purple-900/40 p-6 flex flex-col items-center text-gray-200 md:hidden shadow-2xl z-50"
            >
              <div className="flex flex-col items-center gap-4 w-full">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.title}
                    href={link.link}
                    onClick={(e) => handleNavClick(e, link.link)}
                    className="w-full text-center py-2 text-base font-medium hover:text-cyan-300 border-b border-gray-800/50"
                  >
                    {link.title}
                  </Link>
                ))}
                <Link
                  href={LINKS.buyCoffee}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="w-full text-center py-2 text-base font-medium text-cyan-400 hover:text-cyan-300 border-b border-gray-800/50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  ☕ Buy me a coffee
                </Link>
              </div>

              {/* Mobile Profiles Section */}
              <div className="w-full mt-4 pt-4 border-t border-gray-800/60 flex flex-col items-center">
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3">
                  Profiles & Socials
                </span>
                <div className="grid grid-cols-2 gap-3 w-full">
                  {SOCIALS.map(({ link, name, icon: Icon }) => (
                    <Link
                      key={name}
                      href={link}
                      target="_blank"
                      rel="noreferrer noopener"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2.5 bg-purple-950/30 border border-purple-500/20 hover:border-cyan-400/50 rounded-xl text-xs text-gray-200 hover:text-cyan-300 transition-all justify-center"
                    >
                      <Icon className="w-4 h-4 text-cyan-400" />
                      <span>{name}</span>
                      <span className="text-[10px] text-gray-500">↗</span>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};
