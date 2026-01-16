"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const navLinks = [{
    href: "/",
    text: "Home"
  }, {
    href: "/items",
    text: "Items"
  },
//    {
//     href: "#services",
//     text: "Services"
//   }, {
//     href: "#blog",
//     text: "Blog"
//   }, {
//     href: "#contact",
//     text: "Contact"
//   }
];
  return <header className={`fixed top-0 left-0 w-full transition-all duration-300 bg-primary/80 backdrop-blur-md z-50`}>
      <div className="container mx-auto max-w-11/12">
        <div className="flex h-14 sm:h-16 lg:h-20 items-center justify-between">
          {}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <Image src={"/MiniMart.png"} alt='Logo' width={80} height={20}></Image>
            </Link>
          </div>

          {}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
            {navLinks.map(link => <Link key={link.text} href={link.href} className="text-sm lg:text-base font-medium text-black hover:font-bold hover:text-gray-900 transition-colors relative group">
                {link.text}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
              </Link>)}
          </nav>

          {}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
            <Link href="/login" className="flex items-center space-x-1.5 lg:space-x-2 px-3 lg:px-4 py-1.5 lg:py-2 text-xs lg:text-sm text-black font-bold border rounded-md hover:bg-white hover:border-none transition-all hover:shadow-md">
              <span>Login</span>
            </Link>
            <Link href={"/register"} className="px-4 lg:px-6 py-1.5 lg:py-2 text-xs lg:text-sm font-medium bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-all shadow-sm hover:shadow-lg transform hover:scale-105">
              Register
            </Link>
          </div>

          {}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-md transition-colors" aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
          </button>
        </div>

        {}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-1">
              {navLinks.map(link => <Link key={link.text} href={link.href} onClick={() => setIsMenuOpen(false)} className="px-3 py-2.5 text-sm sm:text-base font-medium text-gray-600 rounded-md hover:bg-gray-100 transition-colors">
                  {link.text}
                </Link>)}
              <div className="pt-4 mt-2 border-t border-gray-200 flex flex-col space-y-2">
                <Link href="/login" className="flex items-center justify-center space-x-2 px-3 py-2.5 text-sm font-medium border border-gray-300 rounded-md hover:bg-gray-100 transition-colors">
                  <span>Login</span>
                </Link>
                <Link href={"/register"} className="px-3 py-2.5 text-sm font-medium bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors">
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>;
};
export default Navbar;